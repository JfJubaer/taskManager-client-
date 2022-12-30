import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CompletedRow = ({ t }) => {
    const { _id, task, details } = t;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/completed/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                navigate('/complete');
                toast.success('Successfully Deleted');

            });
    }
    const handleInComplete = () => {
        const tsk = {
            task,
            details,
            email: user.email

        }
        fetch(`http://localhost:5000/tasks`,
            {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(tsk),
            })
            .then((res) => res.json())
            .then((data) => {
                handleDlt(_id);
            }
            )
    }
    const handleDlt = (id) => {
        fetch(`http://localhost:5000/completed/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                navigate('/complete');
                toast.success('Successfully Added to tasks');

            });
    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {task}
            </Table.Cell>
            <Table.Cell>
                <Button onClick={() => handleDelete(_id)}>
                    Delete
                </Button>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={handleInComplete}>
                    Not Completed
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default CompletedRow;