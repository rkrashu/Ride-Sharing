import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import './transportDetails.css';

const TransportDetails = () => {

    const [location, setLocation] = useState({
        from: '',
        to: '',
        date: ''
    })
    const handleBlur = (event) => {
        if (event.target.name === 'from') {
            location.from = event.target.value;
        }
        if (event.target.name === 'to') {
            location.to = event.target.value;
        }
        if (event.target.name === 'date') {
            location.date = event.target.value;
        }
    };

    const [click, setClick] = useState(false);
    const searchHandler = (event) => {
        setClick(!click);
        event.preventDefault();
    };

    const { title } = useParams();
    const [transport, setTransportInfo] = useState({});

    useEffect(() => {
        const info = FakeData.filter(
            (type) => title === type.title
        );
        setTransportInfo(info[0]);
    }, [title]);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        {!click ? (
                            <div className="searchBox p-4 rounded mt-4">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Pick From</Form.Label>
                                        <Form.Control onBlur={handleBlur} name="from" type="text" placeholder="From" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Pick To</Form.Label>
                                        <Form.Control onBlur={handleBlur} name="to" type="text" placeholder="To" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control onBlur={handleBlur} type="date" name="date" />
                                    </Form.Group>

                                    <Button onClick={searchHandler} variant="dark btn-block">Search</Button>
                                </Form>
                            </div>
                        ) : (

                            <div className="searchBox p-2 mt-4">

                                <div className="p-2">
                                    <h4>{location.from}</h4>
                                    <FontAwesomeIcon className="text-success" icon={faLevelDownAlt} />
                                    <FontAwesomeIcon className="text-success" icon={faLevelDownAlt} />
                                    <h4>{location.to}</h4>
                                </div>

                                <img className="ml-5" style={{ width: '60%' }} src={transport.picture} alt="" />

                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Transport</th>
                                            <th>Price</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{transport.name}</td>
                                            <td>${transport.fare}</td>
                                            <td>{location.date}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </Col>

                    <Col lg={8} md={8} sm={12}>
                        <iframe className="gMap searchBox mt-4" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d938403.    7815214958!2d89.87546350578052!3d23.256192112137704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x37553407fbece487%3A0x5d069b9599d4414a!2sBarishal!3m2!1d22.7010021!2d90.3534511!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sdhaka!3m2!1d23.810332!2d90.4125181!5e0!3m2!1sen!2sbd!4v1616245456943!5m2!1sen!2sbd">
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TransportDetails;
