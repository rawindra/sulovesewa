import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        image: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/admin/sliders', data)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Slider" />
            <form onSubmit={submit} className='flex flex-col gap-2 max-w-md'>
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