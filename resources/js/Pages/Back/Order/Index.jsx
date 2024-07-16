import DangerButton from '@/Components/DangerButton';
import LinkAsButton from '@/Components/LinkAsButton';
import Pagination from '@/Components/ui/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ auth, orders }) {
    const { delete: destroy, processing } = useForm()

    function submit(e, order) {
        e.preventDefault()
        confirm('Are you sure?') && destroy(`/admin/orders/${order.id}`)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Orders" />

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Customer Contact Number</th>
                            <th>Customer Address</th>
                            <th>Order Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.data.map(order => (
                            <tr key={order.id}>
                                <td>{order.order_date}</td>
                                <td>{order.customer_name}</td>
                                <td>{order.customer_contact_number}</td>
                                <td>{order.customer_address}</td>
                                <td>{order.order_status}</td>
                                <td className='flex items-center gap-2'>
                                    <LinkAsButton method='post' href={route('admin.orders.changeStatus', order.id)} className="bg-yellow-500 btn-xs">Change Status</LinkAsButton>
                                    <LinkAsButton href={route('admin.orders.show', order.id)} className="bg-green-500 btn-xs">Details</LinkAsButton>
                                    <form onSubmit={(event) => submit(event, order)}>
                                        <DangerButton className="btn-xs btn-danger" disabled={processing}>Delete</DangerButton>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={orders.links} />
            </div>

        </AuthenticatedLayout>
    )
}