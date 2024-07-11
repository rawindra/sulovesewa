import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Input } from 'antd';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/admin/brands')
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Brand" />
            <form onSubmit={submit} className='flex flex-col gap-2 max-w-md'>
                <label>Name</label>
                <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}
                <div>
                    <PrimaryButton disabled={processing}>Create</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}