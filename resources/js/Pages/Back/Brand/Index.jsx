import DangerButton from '@/Components/DangerButton';
import LinkAsButton from '@/Components/LinkAsButton';
import Pagination from '@/Components/ui/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ auth, brands }) {
    const { delete: destroy, processing } = useForm()

    function submit(e, brand) {
        e.preventDefault()
        confirm('Are you sure?') && destroy(`/admin/brands/${brand.id}`)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Brands" />
            <LinkAsButton className='bg-green-500' href={route('admin.brands.create')} >Create</LinkAsButton>

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.data.map(brand => (
                            <tr key={brand.id}>
                                <td>{brand.name}</td>
                                <td className='flex items-center gap-2'>
                                    <LinkAsButton href={route('admin.brands.edit', brand.id)} className="bg-yellow-500 btn-xs">Edit</LinkAsButton>
                                    <form onSubmit={(event) => submit(event, brand)}>
                                        <DangerButton className="btn-xs" disabled={processing}>Delete</DangerButton>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={brands.links} />
            </div>

        </AuthenticatedLayout>
    )
}