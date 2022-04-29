import React, {useEffect, useState} from "react";
import { Button, Table } from "react-bootstrap";
//import { useDispatch } from "react-redux";
//import { bindActionCreators } from 'redux'
//import { actionCreators } from "../state/index"
import {  useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { fetchPosts,deleteRecord } from '../../app/reducer';
//import {deleteData} from '../../app/actionCreater'
//import { fetchPosts, deleteRecord } from "../../state/action-creator";
//import { useAppointmentsQuery } from "../../services/appointment-service";
export default function Appointments(props) {
  //const {data, error, isLoading, isSuccess, isError} = useAppointmentsQuery();
  const state = useSelector((state) => state);
  console.log('fetchData', state.data);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(()=>{
    if(state.data.length === 0) {
      console.log("am inside condition");
      dispatch(fetchPosts());
    }
  },[])
  const editRecord = (selectedAppointments)=> {
    navigate('/editAppointments', {
      state: selectedAppointments
  })
  }
  return (
    <div>
      <h1>List of Appointments</h1>
      <Table striped bordered hover>
            <thead>
                <tr>
                  <th>User Id</th>
                  <th>Appointment Title</th>
                  <th>Appointment Description</th>
                </tr>
            </thead>
            <tbody>
                {
                   state.data.map((appointment, i) => {
                        return (
                            <tr key={i}>
                                <td>{appointment.id}</td>
                                <td>{appointment.title}</td>
                                <td>{appointment.body}</td>
                                <td>
                                    <div className="d-flex">
                                        <Button variant="primary"
                                            className="d-flex ms-auto me-3" size="sm" onClick={()=>editRecord(appointment)}>Edit</Button>
                                        <Button variant="danger"
                                            className="d-flex ms-auto me-3" size="sm" onClick={()=>dispatch(deleteRecord(state.data,appointment.id))}>Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>

    </div>
)
}

