
import Hamburger  from './Hamburger';
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

  it('contains input', () => {
      
    const wrapper = shallow(<Hamburger open={false} setOpen={function (v: boolean): void {
    } } />);
    const header =
        <div />
       ;
    expect(wrapper.contains(header)).toEqual(true);
  });