import bannerImg from './assets/img/banner.jpg';
import logoImg from './assets/img/header-logo.png';

export const DATA = {
  headerMenu: [
    {
      title: 'Главная',
      url: '/',
    },
    {
      title: 'Каталог',
      url: '/catalog',
    },
    {
      title: 'О магазине',
      url: '/about',
    },
    {
      title: 'Контакты',
      url: '/contacts',
    },
  ],
  footer: {
    footerMenu: [
      {
        title: 'О магазине',
        url: '/about',
      },
      {
        title: 'Каталог',
        url: '/catalog',
      },
      {
        title: 'Контакты',
        url: '/contacts',
      },
    ],
    footerPay: {
      items: ['paypal', 'master-card', 'visa', 'yandex', 'webmoney', 'qiwi'],
    },
    footerSocial: {
      items: ['twitter', 'vk'],
    },
  },

  images: {
    logo: {
      url: logoImg,
      alt: 'Bosa Noga',
    },
    banner: {
      url: bannerImg,
      alt: 'К весне готовы!',
    },
  },
  copyright: {
    text: '2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены. <br /> Доставка по всей России!',
  },
  contacts: {
    address:
      'Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д.17, бизнес-центр W Plaza.',
    phones: '+7 495 79 03 5 03',
    email: 'office@bosanoga.ru',
    worckTime: 'Ежедневно: с 09-00 до 21-00',
  },
};
