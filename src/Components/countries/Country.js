import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCountry from '../siingleCountry.js/SingleCountry';
import './Country.css'

const Country = () => {
    const countries = useLoaderData()
 console.log(countries[0].population)
    return (
        <div className='mt-5 text-xl'>
            <h1> Total Data: {countries.length}</h1>

            <div className='col container'>
                {
                    countries.map(single => <SingleCountry single={single} key={single.cca3
                    }></SingleCountry>)
                }
            </div>

        </div>
    );
};

export default Country;