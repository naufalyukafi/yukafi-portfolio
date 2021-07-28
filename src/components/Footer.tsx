import React from 'react';
import {
  FacebookFilled, MailFilled, LinkedinFilled, InstagramFilled, TwitterCircleFilled,
} from '@ant-design/icons';

const Footer = () => (
  <footer className="page-footer">
    <div className="foooter__item">
      <div className="footer__item-info">Want to know more? Lets have a chat</div>
      <div className="footer__item-contact">
        <ul>
          <li><a href="mailto:naufalyukafi10@gmail.com" target="_blank" rel="noopener noreferrer"> <MailFilled /> </a></li>
          <li><a href="https://www.linkedin.com/in/naufal-yukafi-ridlo/" target="_blank" rel="noopener noreferrer"> <LinkedinFilled /> </a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100009058912794" target="_blank" rel="noopener noreferrer"> <FacebookFilled /> </a></li>
          <li><a href="https://www.instagram.com/yukafi.dev/" target="_blank" rel="noopener noreferrer"> <InstagramFilled /> </a></li>
          <li><a href="https://twitter.com/Yukafi4" target="_blank" rel="noopener noreferrer"> <TwitterCircleFilled /> </a></li>
        </ul>
      </div>
    </div>
    <div className="footer__copyright">
      <div>Copyright © 2021 - Yukafi.dev</div>
    </div>
  </footer>

);

export default Footer;
