import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img
            src='https://w7.pngwing.com/pngs/17/75/png-transparent-timer-computer-icons-clock-countdown-minute-clock-service-logo-time.png'
            height='80'
            alt=''
            loading='lazy'
          />
          Counter App
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  </>
  )
}

export default Header