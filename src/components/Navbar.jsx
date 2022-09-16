import React from 'react';
import { Nav, Div } from '../styles/Navbar'

const Navbar = () => {

    const correo =  document.getElementById('mail')


  return (

    <div>
              <Nav>

                <button>SignIn</button>
                <button>SignUp</button>
                <button>Logout</button>



              </Nav>


              <Div>
                <form >

                  <input id="mail" placeholder="email" type="text" />
                  <input id="contr" placeholder="contraseña" type="text" />
                </form>
              </Div>
    </div>
  );
};

export default Navbar;