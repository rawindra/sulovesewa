import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Input, Select } from 'antd';

export default function Edit({ auth, category, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        parent_id: category.parent_id
    })

    function submit(e) {
        e.preventDefault()
        put(route('admin.categories.update', category.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Edit Category" />
            <form onSubmit={submit} className='flex flex-col gap-2 max-w-md'>
                <label>Name</label>
                <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}

                <label>Parent Category</label>
                <Select
                    placeholder="Select a parent category"
                    optionFilterProp="label"
                    value={data.parent_id}
                    onChange={(value) => setData("parent_id", value)}
                >
                    <Select.Option value="">None</Select.Option>
                    {categories && categories.map((category) => (
                        <Select.Option key={category.id} value={category.id} label={category.name}>
                            {category.name}
                        </Select.Option>
                    ))}
                </Select>
                <div>
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}