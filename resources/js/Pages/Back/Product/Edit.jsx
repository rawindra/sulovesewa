import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { Input, InputNumber, Select } from 'antd';

export default function Edit({ auth, brands, categories, product }) {
    const { data, setData, processing, errors } = useForm({
        name: product.name,
        description: product.description,
        image: '',
        price: product.price,
        stock: product.stock,
        category_id: product.category_id,
        brand_id: product.brand_id,
    })

    const { TextArea } = Input

    function submit(e) {
        e.preventDefault()

        router.post(route('admin.products.update', product.id), {
            _method: 'put',
            ...data
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Brand" />
            <form onSubmit={submit} className='flex flex-col gap-2 max-w-md'>
                <label>Select Brand</label>
                <Select
                    placeholder="Select a brand"
                    optionFilterProp="label"
                    value={data.brand_id}
                    onChange={(value) => setData("brand_id", value)}
                >
                    <Select.Option value="">None</Select.Option>
                    {brands && brands.map((brand) => (
                        <Select.Option key={brand.id} value={brand.id} label={brand.name}>
                            {brand.name}
                        </Select.Option>
                    ))}
                </Select>
                <label>Select Category</label>
                <Select
                    placeholder="Select a category"
                    optionFilterProp="label"
                    value={data.category_id}
                    onChange={(value) => setData("category_id", value)}
                >
                    <Select.Option value="">None</Select.Option>
                    {categories && categories.map((category) => (
                        <Select.Option key={category.id} value={category.id} label={category.name}>
                            {category.name}
                        </Select.Option>
                    ))}
                </Select>

                <label>Name</label>
                <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}

                <label>Description</label>
                <TextArea rows={4} value={data.description} onChange={e => setData('description', e.target.value)} />
                {errors.description && <span className='text-red-500'>{errors.description}</span>}

                <label>Price</label>
                <InputNumber min={1} value={data.price} onChange={value => setData('price', value)} />
                {errors.price && <span className='text-red-500'>{errors.price}</span>}

                <label>Stock</label>
                <InputNumber min={1} value={data.stock} onChange={value => setData('stock', value)} />
                {errors.stock && <span className='text-red-500'>{errors.stock}</span>}

                <label>Pick a Image</label>
                <input
                    type="file"
                    onChange={e => { setData('image', e.target.files[0]) }}
                />
                {errors.image && <span className='text-red-500'>{errors.image}</span>}

                <div className='mt-2'>
                    <PrimaryButton disabled={processing}>Create</PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}