import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Input, Select } from 'antd';

export default function Create({ auth, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        parent_id: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/admin/categories')
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Category" />
            <form onSubmit={submit} className='flex flex-col gap-2 max-w-md'>
                <label>Name</label>
                <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}

                <label>Parent Category</label>
                <Select
                    // showSearch
                    placeholder="Select a parent category"
                    optionFilterProp="label"
                    value={data.parent_id}
                    onChange={(value) => setData("parent_id", value)}
                    className='focus-none'
                >
                    <Select.Option value="">None</Select.Option>
                    {categories && categories.map((category) => (
                        <Select.Option key={category.id} value={category.id} label={category.name}>
                            {category.name}
                        </Select.Option>
                    ))}
                </Select>
                <div>
                    <PrimaryButton disabled={processing}>Create</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}