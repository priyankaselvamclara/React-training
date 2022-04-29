import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import {Row, Col} from 'react-bootstrap';
import '../css-components/patient-details.css';
import { useLocation, useNavigate } from "react-router-dom";
//import { editRecord } from "../../state/action-creator";
import { connect, useDispatch, useSelector } from "react-redux";
import { editRecord } from '../../app/reducer';

export default function EditAppointments(props) {
    const { state } = useLocation();
    const stateObj = useSelector((data) => data);
    const [appointmentDet, setAppointmentDet] = useState(state);
   
    //const [appointmentDet, setAppointmentDet] = useState(state);
    const [validated, setValidated] = useState(false); 
    const editTitle = (e)=>{
        //setAppointmentDet({title:val});
        setAppointmentDet(prev => ({ ...prev, [e.target.name]: e.target.value }))
        //state.title = val;
    }
    const editDesc = (e)=>{
      setAppointmentDet(prev => ({ ...prev, [e.target.name]: e.target.value }))
        //state.body = val;
    }
    const handleChange = (e)=>{
      setAppointmentDet(prev => ({ ...prev, [e.target.name]: e.target.value }))
      console.log("appointmentDet !!!!!!!!!!!!!!!",appointmentDet);
        //state.body = val;
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === true) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        //setAppointmentDet(state);
        /*let data = {
          title: state.title,
          body: state.body,
          id: state.id
        };*./
        //data=state;
        console.log('state',data);
        //const [appointment, setAppointment] = useState(state);
        //setAppointmentDet(appointmentDet, data);
        /*(appointmentDet => ({
          ...appointmentDet,
          ...data
        }));*/
        console.log("appointmentDet !!!!!!!!!!!!!!!",appointmentDet);
        dispatch(editRecord(stateObj.data,appointmentDet));
        setTimeout(() => {
            navigate('/appointments');
        }, 500)
        };
     
    return (
      <div className='editAppointments container'>
        <h3 className='mt-4 mb-4'>Edit Appointments</h3>
        <Form validated={validated} onSubmit={handleFormSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="12" className="form-block">
                <Form.Label  className='col-md-2'>Appointment Title</Form.Label>
                <input  className='col-md-4 mb-3' 
                    required value={appointmentDet.title} onChange={editTitle}
                    type="text" name="title" />
                    
            </Form.Group>
            <Form.Group as={Col} md="12">
                <Form.Label className='col-md-2'>Appointment Description</Form.Label>
                <Form.Control className='col-md-4 mb-3' 
                    required value={appointmentDet.body} onChange={editDesc}
                    type="text" name="description" />
            </Form.Group>
        </Row>
        <Button type="submit">Submit</Button>
    </Form>
    </div>
    );
  }
  

  
  