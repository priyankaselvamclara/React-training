import { mount, shallow } from "enzyme";
import { ListAppointments } from "../js-components/list-appointmnents";
import React, { useState as useStateMock } from 'react';
const appointmentList = [{
    age: "32",
    contactModeEmail: true,
    contactModePhone: false,
    email: "www@gmail.com",
    gender: "Male",
    name: "122",
    phoneNumber: "97257592"
  }]

  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('<ListAppointments />', () => {
    let wrapper;

    const setState = jest.fn();

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
      
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it("renders without crashing", () => {
        shallow(<ListAppointments />);
      });
      it('increment counter correctlry', () => {
        let wrapper = shallow(<ListAppointments/>);
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
    
        useStateSpy.mockImplementation((init) => [init, setState]);
         //const button = wrapper.find("Button")
         //button.simulate('click');
         //expect(setState).toBe(jest.fn());
    })
  });

  
  