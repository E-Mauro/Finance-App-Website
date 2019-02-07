// ==============================
//               footer
// ==============================

import React, { Component } from 'react';

class Footer extends React.Component {
 constructor(props) {
      super(props);
  }
  render() {
    return(
        <div class="container">
              <div class="copyright"><span class="brand">Super Cartera virtual</span> &copy; <span id="copyright-year"></span> | <a>Privacy Policy</a> <div>Website designed by <a>Locomotors Corp</a></div>
              </div>
        </div>
    );
  }
}

export default Footer;
