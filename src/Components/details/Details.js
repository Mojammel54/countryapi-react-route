import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData()
    console.log(detail)

    return (
        <div>
            <img src={detail[0].flags.png} alt="" />
        </div>
    );
};

export default Details;