import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyTaskRow = ({ t }) => {
    const { task, _id, details } = t;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = () => {
        console.log('U')

        toast.success("update section is not completed")
    }
    const handleComplete = () => {
        const tsk = {
            task,
            details,
            email: user.email
        }
        fetch(`http://localhost:5000/completed`,
            {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(tsk),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('COmpleted data added')
                handleDelete(_id);
            }
            )
    }
    function handleDelete(id) {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                navigate('/my');
                toast.success('Successfully completed');
            });
    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {task}
            </Table.Cell>
            <Table.Cell>
                <Link to={`/details/${_id}`}>
                    <Button >
                        Details
                    </Button></Link>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={handleUpdate}>
                    Update
                </Button>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={handleComplete}>
                    Complete
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyTaskRow;