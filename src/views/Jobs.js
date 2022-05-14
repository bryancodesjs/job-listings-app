import React from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function goToJob(){
    console.log('You clicked this job');
}
var jobs = [
    {
        company: 'Microsoft',
        position: 'Front End Developer',
        type: 'Remote',
        location: 'Washington',
        date: '05-02-22'
    },
    {
        company: 'Apple',
        position: 'UI Developer',
        type: 'Remote',
        location: "San Francisco",
        date: '05-13-22'
    },

]
class Jobs extends React.Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md={8} sm={12} className='offset-md-2'>
                        <Container>
                            <h3>Jobs</h3>
                            {
                                jobs.map(job => (
                                    <Card className='border job-card mb-3' onClick={goToJob}>
                                        <Card.Body>
                                            <Row>
                                                <Col md={9}>
                                                    <Card.Text className='mb-2'>{job.company}</Card.Text>    
                                                    <Card.Title>{job.position}</Card.Title>
                                                    <Card.Text>{job.type} / {job.location}</Card.Text>
                                                </Col>
                                                <Col className='date-col'>
                                                    <Card.Text>{job.date}</Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Jobs;