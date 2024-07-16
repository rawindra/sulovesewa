import DangerButton from '@/Components/DangerButton';
import LinkAsButton from '@/Components/LinkAsButton';
import Pagination from '@/Components/ui/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ auth, sliders, app }) {
    const { delete: destroy, processing } = useForm()

    function submit(e, slider) {
        e.preventDefault()
        confirm('Are you sure?') && destroy(`/admin/sliders/${slider.id}`)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Sliders" />
            <LinkAsButton className='bg-green-500' href={route('admin.sliders.create')} >Create</LinkAsButton>

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders.data.map(slider => (
                            <tr key={slider.id}>
                                <td>
                                    <img src={app.storage_url + '/' + slider.image} alt={slider.name} className='size-16' />
                                </td>
                                <td className='flex items-center gap-2'>
                                    <LinkAsButton href={route('admin.sliders.changeStatus', slider.id)} method='post' className="bg-yellow-500 btn-xs">
                                        {slider.status ? 'Published' : 'UnPublished'}
                                    </LinkAsButton>
                                    <form onSubmit={(event) => submit(event, slider)}>
                                        <DangerButton className="btn-xs" disabled={processing}>Delete</DangerButton>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={sliders.links} />
            </div>

        </AuthenticatedLayout>
    )
}