import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css'

const Chart = () => {
    const population = useLoaderData()
    console.log(population[0].population)
    return (
        <div className='chart'>
            <LineChart width={700} height={400} data={population}>

                <Line type="monotone" dataKey="population" stroke="green" strokeWidth={5} />
                <XAxis ></XAxis>
                <YAxis width={80}></YAxis>
                <Tooltip />


            </LineChart>
        </div>
    );
};

export default Chart;