import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import CompletedRow from './CompletedRow';

const Completed = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`https://task-seven-flame.vercel.app/completed/${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user.email])

    return (
        <div>
            <div className='p-10 text-center' fluid={true}>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Task name
                        </Table.HeadCell>


                    </Table.Head>
                    <Table.Body className="divide-y">
                        {tasks.map((t, i) => <CompletedRow t={t} key={i}></CompletedRow>)}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Completed;