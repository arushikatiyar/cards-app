import ReactDOM from 'react-dom';
import { StyledCardContainer, StyledTextInput, StyledCardForm } from './Card';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

 
it('contains a StyledCardContainer', () => {
    const section = document.createElement('main');
    expect(ReactDOM.render(<StyledCardContainer />, section)).toBeDefined();
  });

it('contains a StyledTextInput', () => {
    const section = document.createElement('div');
    expect(ReactDOM.render(<StyledTextInput />, section)).toBeDefined();
});

it('contains a StyledCardForm', () => {
    const section = document.createElement('div');
    expect(ReactDOM.render(<StyledCardForm />, section)).toBeDefined();
});


