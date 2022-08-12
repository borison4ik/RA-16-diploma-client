import React from 'react';
import { Menu } from '../../components/Menu';
import { DATA } from '../../DATA';

export const Footer: React.FC = () => {
  const { copyright, contacts } = DATA;
  const { footerMenu, footerPay, footerSocial } = DATA.footer;

  return (
    <footer className='container bg-light footer'>
      <div className='row'>
        <div className='col'>
          <section>
            <h5>Информация</h5>
            <Menu menuItems={footerMenu} classNames={'nav flex-column'} />
          </section>
        </div>
        <div className='col'>
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className='footer-pay'>
              {footerPay.items &&
                footerPay.items.map((item, i) => (
                  <div
                    key={i}
                    className={`footer-pay-systems footer-pay-systems-${item}`}
                  />
                ))}
            </div>
          </section>
          <section>
            <div className='footer-copyright'>{copyright.text}</div>
          </section>
        </div>
        <div className='col text-right'>
          <section className='footer-contacts'>
            <h5>Контакты:</h5>
            <a className='footer-contacts-phone' href='tel:+7-495-790-35-03'>
              {contacts.phones}
            </a>
            <span className='footer-contacts-working-hours'>
              {contacts.worckTime}
            </span>
            <a
              className='footer-contacts-email'
              href={`mailto:${contacts.email}`}>
              {contacts.email}
            </a>
            <div className='footer-social-links'>
              {footerSocial.items &&
                footerSocial.items.map((item, i) => (
                  <div
                    key={i}
                    className={`footer-social-link footer-social-link-${item}`}></div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};
