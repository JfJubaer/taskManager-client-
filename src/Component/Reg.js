import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Reg = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [err, setError] = useState('');


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;

        createUser(email, pass)
            .then(result => {
                form.reset();
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                console.error(err);
            })
    }
    return (
        <div >
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        name='email'
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        name='pass'
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">

                    <a
                        href="/login"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        Already Registered? Please Login.
                    </a>

                </div>

                <Button type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Reg;