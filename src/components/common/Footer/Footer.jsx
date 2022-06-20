import React from 'react';
import './style.css';

const Footer = () => (
	<div className="footer">
		<p className="footer__logo">Фармацевтика</p>
		<div className="footer__wrapper">
			<a className="footer__tel" href="tel:+375 33 66 33 638">
				+375 33 66 33 638
			</a>
			<a href="mailto:abc@example.com" className="footer__email">
				afanasiy1950@mail.ru
			</a>
			<p className="footer__copyright">Ул Курчатова,4 г.Гродно,Беларусь</p>
		</div>
	</div>
);

export default Footer;
