import { shallow } from "enzyme";
import { ExistingPatient } from "../js-components/existing-patient";


it("renders without crashing", () => {
    shallow(<ExistingPatient />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<ExistingPatient />);
    const welcome = <h1>Login Page</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });