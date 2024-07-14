import DangerButton from '@/Components/DangerButton';
import LinkAsButton from '@/Components/LinkAsButton';
import Pagination from '@/Components/ui/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ auth, app, products }) {
    const { delete: destroy, processing } = useForm()

    function submit(e, product) {
        e.preventDefault()
        confirm('Are you sure?') && destroy(`/admin/products/${product.id}`)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Products" />
            <LinkAsButton className='bg-green-500' href={route('admin.products.create')} >Create</LinkAsButton>

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>
                                    <img src={app.storage_url + '/' + product.image} alt={product.name} className='size-16' />
                                </td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td className='flex items-center gap-2'>
                                    <LinkAsButton href={route('admin.products.edit', product.id)} className="bg-yellow-500 btn-xs">Edit</LinkAsButton>
                                    <form onSubmit={(event) => submit(event, product)}>
                                        <DangerButton className="btn-xs" disabled={processing}>Delete</DangerButton>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={products.links} />
            </div>

        </AuthenticatedLayout>
    )
}