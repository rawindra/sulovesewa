import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Show({ auth, orderItems }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Show Order" />

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orderItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.product.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    )
}