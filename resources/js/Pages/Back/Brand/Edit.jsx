import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Input } from 'antd';

export default function Edit({ auth, brand }) {
    const { data, setData, put, processing, errors } = useForm({
        name: brand.name,
    })

    function submit(e) {
        e.preventDefault()
        put(route('admin.brands.update', brand.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Edit Brand" />
            <form onSubmit={submit} className='flex flex-col gap-2 max-w-md'>
                <label>Name</label>
                <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}
                <div>
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}