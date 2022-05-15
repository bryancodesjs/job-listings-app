import React from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import JobService from '../services/job';

export default class New extends React.Component{
    constructor(props){
        super(props);
        //default state of this component
        this.state = {
            title: "",
            company: "",
            type: ""
        }
    }
    render(){
        return(
            <>
            <div className="p-5">
                <h3>Reach the largest remote community on the web</h3>
            </div>
            <div className='container-fluid bg-light'>
                <div className='row p-3'>
                    <div className='col-md-8 offset-md-2'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5>First, tell us about the position</h5>
                                <br></br>
                                <form>
                                    <div className='form-group mb-3'>
                                        <Form.Label>Job Title</Form.Label>
                                        <Form.Control type="text" placeholder="Placeholder text" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control type="text" placeholder="Placeholder text" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <Form.Label>Job Type</Form.Label>
                                        <Form.Control type="text" placeholder="Placeholder text" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}