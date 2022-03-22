import phone from "./../assets/images/header/header_top/phone.svg";
import location from "./../assets/images/header/header_top/location.svg";
import clock from "./../assets/images/header/header_top/clock.svg";

import facebook from "./../assets/images/social_network_icon/facebook.svg";
import twitter from "./../assets/images/social_network_icon/twitter.svg";
import instagram from "./../assets/images/social_network_icon/instagram.svg";
import pinterest from "./../assets/images/social_network_icon/pinterest.svg";

import shippingImg from "./../assets/images/advantages_section/shipping.svg";
import returnImg from "./../assets/images/advantages_section/return.svg";
import supportImg from "./../assets/images/advantages_section/support.svg";

import suit_with_trousers from "./../assets/images/clothes_section/suit_with_trousers.jpg";
import light_t_shirt from "./../assets/images/clothes_section/light_t-shirt.jpg";
import white_jumper from "./../assets/images/clothes_section/white_jumper.jpg";
import white_suit from "./../assets/images/clothes_section/white_suit.jpg";
import gray_jumper from "./../assets/images/clothes_section/gray_jumper.jpg";
import trousers_black from "./../assets/images/clothes_section/trousers_black.jpg";
import track_pants from "./../assets/images/clothes_section/track_pants.jpg";
import oversized_t_shirt from "./../assets/images/clothes_section/oversized_t-shirt.jpg";

import hoodie from "./../assets/images/clothes_section/hoodie.jpg";
import pants from "./../assets/images/clothes_section/pants.jpg";
import cardigan from "./../assets/images/clothes_section/cardigan.jpg";
import gray_hat from "./../assets/images/clothes_section/gray_hat.jpg";
import sweatshirt from "./../assets/images/clothes_section/sweatshirt.jpg";
import denim_shirt from "./../assets/images/clothes_section/denim_shirt.jpg";
import white_joggers from "./../assets/images/clothes_section/white_joggers.jpg";
import gray_trousers from "./../assets/images/clothes_section/gray_trousers.jpg";

import way from "./../assets/images/blog_section/way.jpg";
import wedding from "./../assets/images/blog_section/wedding.jpg";
import favorites from "./../assets/images/blog_section/favorites.jpg";

import locationImg from "./../assets/images/footer/footer_nav/location.svg";
import phoneImg from "./../assets/images/footer/footer_nav/phone.svg";
import clockImg from "./../assets/images/footer/footer_nav/clock.svg";
import mailImg from "./../assets/images/footer/footer_nav/mail.svg";

import stripe from "./../assets/images/footer/payment_icons/stripe.svg";
import aes from "./../assets/images/footer/payment_icons/aes.svg";
import paypal from "./../assets/images/footer/payment_icons/paypal.svg";
import mastercard from "./../assets/images/footer/payment_icons/mastercard.svg";
import discover from "./../assets/images/footer/payment_icons/discover.svg";
import american_express from "./../assets/images/footer/payment_icons/american-express.svg";

let data = {
  header: {
    info: [
      {
        id: 1,
        image: phone,
        alt: "phone",
        text: "+375 29 100 20 30",
        link: "tel:+375291002030",
      },
      {
        id: 2,
        image: location,
        alt: "location",
        text: "Belarus, Gomel, Lange 17",
        link: "#",
      },
      {
        id: 3,
        image: clock,
        alt: "clock",
        text: "All week 24/7",
        link: "#",
      },
    ],
    socialLinks: [
      {
        id: 1,
        name: "facebook",
        image: facebook,
        link: "#",
      },
      {
        id: 2,
        name: "twitter",
        image: twitter,
        link: "#",
      },
      {
        id: 3,
        name: "instagram",
        image: instagram,
        link: "#",
      },
      {
        id: 4,
        name: "pinterest",
        image: pinterest,
        link: "#",
      },
    ],
    menu: [
      {
        id: "1",
        name: "About Us",
        path: "about-us",
      },
      {
        id: "2",
        name: "Women",
        path: "women",
      },
      {
        id: "3",
        name: "Men",
        path: "men",
      },
      {
        id: "4",
        name: "Beauty",
        path: "beauty",
      },
      {
        id: "5",
        name: "Accessories",
        path: "accessories",
      },
      {
        id: "6",
        name: "Blog",
        path: "blog",
      },
      {
        id: "7",
        name: "Contact",
        path: "contact",
      },
    ],
  },
  mainPage: {
    advantages: [
      {
        id: "1",
        image: shippingImg,
        title: "FREE SHIPPING",
        text: "On all UA order or order above $100",
      },
      {
        id: "2",
        image: returnImg,
        title: "30 DAYS RETURN",
        text: "Simply return it within 30 days for an exchange",
      },
      {
        id: "3",
        image: supportImg,
        title: "SUPPORT 24/7",
        text: "Contact us 24 hours a day, 7 days a week",
      },
    ],
    blog: [
      {
        id: 1,
        image: way,
        title: "The Easiest Way to Break",
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
      },
      {
        id: 2,
        image: wedding,
        title: "Wedding Season",
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
      },
      {
        id: 3,
        image: favorites,
        title: "Recent Favorites On Repeat",
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
      },
    ],
  },
  footer: {
    socialLinks: [
      {
        id: 1,
        name: "facebook",
        image: facebook,
        link: "#",
      },
      {
        id: 2,
        name: "twitter",
        image: twitter,
        link: "#",
      },
      {
        id: 3,
        name: "instagram",
        image: instagram,
        link: "#",
      },
      {
        id: 4,
        name: "pinterest",
        image: pinterest,
        link: "#",
      },
    ],
    navigation: [
      {
        category: "Categories",
        id: 1,
        path: "men",
        title: "Men",
        image: null,
      },
      {
        category: "Categories",
        id: 2,
        path: "women",
        title: "Women",
        image: null,
      },
      {
        category: "Categories",
        id: 3,
        path: "accessories",
        title: "Accessories",
        image: null,
      },
      {
        category: "Categories",
        id: 4,
        path: "beauty",
        title: "Beauty",
        image: null,
      },
      {
        category: "Information",
        id: 5,
        path: "about_us",
        title: "About Us",
        image: null,
      },
      {
        category: "Information",
        id: 6,
        path: "contact_us",
        title: "Contact Us",
        image: null,
      },
      {
        category: "Information",
        id: 7,
        path: "blog",
        title: "Blog",
        image: null,
      },
      {
        category: "Information",
        id: 8,
        path: "faqs",
        title: "FAQs",
        image: null,
      },
      {
        category: "Useful links",
        id: 9,
        path: "#",
        title: "Terms & Conditions",
        image: null,
      },
      {
        category: "Useful links",
        id: 10,
        path: "#",
        title: "Returns & Exchanges",
        image: null,
      },
      {
        category: "Useful links",
        id: 11,
        path: "#",
        title: "Shipping & Delivery",
        image: null,
      },
      {
        category: "Useful links",
        id: 12,
        path: "#",
        title: "Privacy Policy",
        image: null,
      },
      {
        category: "Contact us",
        id: 13,
        path: "#",
        title: "Belarus, Gomel, Lange 17",
        image: locationImg,
      },
      {
        category: "Contact us",
        id: 14,
        path: "tel:+375291002030",
        title: "+375 29 100 20 30",
        image: phoneImg,
      },
      {
        category: "Contact us",
        id: 15,
        path: "#",
        title: "All week 24/7",
        image: clockImg,
      },
      {
        category: "Contact us",
        id: 16,
        path: "#",
        title: "info@clevertec.ru",
        image: mailImg,
      },
    ],
    payments: [
      {
        name: "stripe",
        image: stripe,
      },
      {
        name: "aes",
        image: aes,
      },
      {
        name: "paypal",
        image: paypal,
      },
      {
        name: "mastercard",
        image: mastercard,
      },
      {
        name: "discover",
        image: discover,
      },
      {
        name: "american express",
        image: american_express,
      },
    ],
  },

};

export default data;
