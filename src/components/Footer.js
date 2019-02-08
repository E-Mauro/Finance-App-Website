import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
        <div className="container">
              <div className="copyright"><span className="brand">Super Cartera virtual</span> &copy; <span id="copyright-year"></span> | <a href="#nowhere">Privacy Policy</a> <div>Website designed by <a href="#nowhere">Locomotors Corp</a></div>
              </div>
        </div>
    );
  }
}

export default Footer;
