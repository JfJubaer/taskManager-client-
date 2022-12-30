import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyTaskRow from './MyTaskRow';

const MyTask = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user.email])
    return (
        <div className='p-10 text-center' fluid={true}>
            <Table>
                <Table.Head>
                    <Table.HeadCell>Task name
                    </Table.HeadCell>


                </Table.Head>
                <Table.Body className="divide-y">
                    {tasks.map((t, i) => <MyTaskRow t={t} key={i}></MyTaskRow>)}
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyTask;