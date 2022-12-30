import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddTask = () => {

    const { user } = useContext(AuthContext);

    const handleAdd = (event) => {
        event.preventDefault();
        const task = event.target.task.value;
        const details = event.target.details.value;
        const mytask = {
            task,
            details,
            email: user.email
        }
        console.log(mytask);
        fetch(`https://task-seven-flame.vercel.app/tasks`,
            {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(mytask),
            })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Successfully Added')
            }
            )
        event.target.reset();
    }

    return (

        <form onSubmit={handleAdd} className="flex flex-col gap-4 p-10">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="text"
                        value="Your task"
                    />
                </div>
                <TextInput
                    name='task'
                    id="task"
                    type="text"
                    placeholder="task"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="large"
                        value="Details"
                    />
                </div>
                <TextInput
                    name='details'
                    id="large"
                    type="text"
                    sizing="lg"
                />
            </div>

            <Button type="submit">
                Submit
            </Button>
        </form>

    );
};

export default AddTask;