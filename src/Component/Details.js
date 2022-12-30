import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const dat = useLoaderData();
    const { task, details } = dat[0];
    console.log(dat);
    return (
        <div>
            <Card href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Task name : {task}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Details : <br />
                    {details}
                </p>
            </Card>
        </div>
    );
};

export default Details;