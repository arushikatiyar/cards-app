import styled from "styled-components";
import { colors } from "../../global";

export const MenuContainer = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${colors.lightbrown};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open } : {open:any} ) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  padding: 1.5rem 2rem;
  font-size: 2rem;
  color: ${colors.pearl};
  text-decoration: underline;

  :hover {
    color: ${colors.yellowmellow};
  }
`;
