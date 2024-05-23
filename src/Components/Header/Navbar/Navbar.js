import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import logo from "./Medicare.png";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="light"
        className="bg-light"
        style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <CContainer fluid>
          <CNavbarBrand href="#">
            <img src={logo} alt="" />
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse  justify-end" visible={visible}>
            <CNavbarNav></CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}

export default Navbar;
