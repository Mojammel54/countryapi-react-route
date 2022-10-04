

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';


import './Single.css'

function SingleCountry({ single }) {
   
    const navigate = useNavigate()
   

    function btn() {

        navigate(`/details${single.cca3}`)


    }
    function btnChart() {

        navigate(`/chart${single.cca3}`)


    }

    const { name, flags } = single
    return (
       
        <CardGroup>
            
            <Card className='crd bg-black text-white'>
                <Card.Img className='img-fluid w-75 ms-5 mt-2' variant="top" src={flags.png} />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button  onClick={btn} type="button" className="btn btn-warning">See details</button>
                    <button onClick={btnChart} type="button" className="btn btn-danger ms-2">Chart</button>
                </Card.Footer>
                <Card.Footer>
                </Card.Footer>

            </Card>

        </CardGroup>
    );
}

export default SingleCountry;