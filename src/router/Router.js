import { createBrowserRouter } from "react-router-dom";
import Chart from "../Components/Chart/Chart";
import Country from "../Components/countries/Country";
import Details from "../Components/details/Details";

import Main from "../Components/main/Main";

import Wellcome from "../Components/Wellcome/Wellcome";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>
        , children: [

            {
                path: '/home',
                element: <Wellcome></Wellcome>


            },

            {
                path: '/country',

                loader: async () => {
                   
                    return fetch('https://restcountries.com/v3.1/all')

                },
                element: <Country></Country>
            },

            {
                path: '/details:cca3',
                loader: async ({ params }) => {


                    return fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}`)


                },
                element: <Details></Details>

            },
            {
                path: '/chart:cca3',
                loader: async ({ params }) => {


                    return fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}`)


                },
                element: <Chart></Chart>

            },





        ]
    },

    {
        path: '*',
        element: <h1>not found</h1>
    }









])