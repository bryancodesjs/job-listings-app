import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

class Banner extends React.Component {
    render(){
        return(
            <Container fluid className='border'>
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto pt-5 pb-5 d-flex flex-column align-items-center">
                            <div className="text-center">
                            <h1>We work remotely</h1>
                            <p>We Work Remotely is the largest remote work community in the world. With over 3M visitors, WWR is the number one destination to find and list incredible remote jobs.</p>
                            </div>
                            <Button variant="primary">Post a Job</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}
export default Banner;