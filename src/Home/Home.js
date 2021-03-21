import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './home.css'
import FakeData from '../FakeData/FakeData.json'
import Transport from '../Transport/Transport';
import { useHistory } from 'react-router';
import { Container, Row } from 'react-bootstrap';
const Home = () => {
    const [transports, setTransports] = useState([])
    const history = useHistory()
    const handleClick = (name) => {
        const url = `/transport/${name}`
        history.push(url)
    }
    useEffect(() => {
    const data = FakeData
    setTransports(data)
    })
    return (
        <Container className="d-flex mt-5 home">
                <Row>
                {
               transports?.map (transport => <Transport handleClick={handleClick} transport={transport}></Transport>)
                }
                </Row>
            </Container>
    );
};

export default Home; 