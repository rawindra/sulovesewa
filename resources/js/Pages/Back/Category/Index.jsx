import DangerButton from '@/Components/DangerButton';
import LinkAsButton from '@/Components/LinkAsButton';
import Pagination from '@/Components/ui/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ auth, categories }) {
    const { delete: destroy, processing } = useForm()

    function submit(e, category) {
        e.preventDefault()
        confirm('Are you sure?') && destroy(`/admin/categories/${category.id}`)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Categories" />
            <LinkAsButton className='bg-green-500' href={route('admin.categories.create')} >Create</LinkAsButton>

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td className='flex items-center gap-2'>
                                    <LinkAsButton href={route('admin.categories.edit', category.id)} className="bg-yellow-500 btn-xs">Edit</LinkAsButton>
                                    <form onSubmit={(event) => submit(event, category)}>
                                        <DangerButton className="btn-xs" disabled={processing}>Delete</DangerButton>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={categories.links} />
            </div>

        </AuthenticatedLayout>
    )
}