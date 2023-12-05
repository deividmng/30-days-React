import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
