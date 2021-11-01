
import { HamburgerContainer } from "./Hamburger.styled";

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
  <HamburgerContainer open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div />
    <div />
    <div />
  </HamburgerContainer>
);

export default Hamburger;
