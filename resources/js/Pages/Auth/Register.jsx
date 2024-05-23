import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        parent_name: '',
        parent_email: '',
        parent_password: '',
        parent_password_confirmation: '',
        child_name: '',
        child_age: '',
    });

    useEffect(() => {
        return () => {
            reset('parent_password', 'parent_password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <form onSubmit={submit}>
            <div className="flex flex-col md:flex-row gap-5 py-8 ">
            
                <div className="px-2 border shadow w-full py-3 md:w-1/2">
                
                        <h1 className="text-center text-2xl">Parent's Info</h1>
                        <div>
                            <InputLabel htmlFor="parent_name" value="Name" />
                            <TextInput
                                id="parent_name"
                                name="parent_name"
                                value={data.parent_name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('parent_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.parent_name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="parent_email" value="Email" />
                            <TextInput
                                id="parent_email"
                                type="email"
                                name="email"
                                value={data.parent_email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('parent_email', e.target.value)}
                                required
                            />
                            <InputError message={errors.parent_email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="parent_password" value="Password" />
                            <TextInput
                                id="parent_password"
                                type="password"
                                name="password"
                                value={data.parent_password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('parent_password', e.target.value)}
                                required
                            />
                            <InputError message={errors.parent_password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="parent_password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="parent_password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.parent_password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('parent_password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.parent_password_confirmation} className="mt-2" />
                        </div>
                    
                </div>

                <div className="px-2 border shadow w-full md:w-1/2">
                    
                        <h1 className="text-center text-2xl">Child's Info</h1>
                        <div>
                            <InputLabel htmlFor="child_name" value="Name" />
                            <TextInput
                                id="child_name"
                                name="child_name"
                                value={data.child_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('child_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.child_name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="child_age" value="Age" />
                            <TextInput
                                id="child_age"
                                name="child_age"
                                value={data.child_age}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('child_age', e.target.value)}
                                required
                            />
                            <InputError message={errors.child_age} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>  
                </div>
            
            </div>
            </form>
        </GuestLayout>
    );
}
