import { shallow } from "enzyme";
import App from "../../App";



it("renders without crashing", () => {
    shallow(<App />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Appointment App</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });