import React, { useState, useRef } from "react";

import Hamburger from "../Hamburger/Hamburger";
import { MenuContainer, MenuLink } from "./Menu.styled";

import { useOnClickOutside } from "../../hooks";
import { Card } from '../../Card';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => { 
      setOpen(false);
      setFormOpen(false); }
  const [openForm, setFormOpen] = useState<boolean>(false);

  useOnClickOutside(node, () => setOpen(false));

  const openFormPage = () =>{
    close();
    setFormOpen(true);
  }

  return (
    <div ref={node}>
      <MenuContainer open={open}>
        <MenuLink onClick={() => openFormPage()}>Card Entry</MenuLink>
        <MenuLink onClick={() => close()}>Home Page</MenuLink>
      </MenuContainer>
      <Hamburger open={open} setOpen={setOpen} />
      {openForm && <Card />}
    </div>
  );
};

export default Menu;
