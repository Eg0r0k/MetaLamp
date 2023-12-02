import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import '../../node_modules/swiper/swiper-bundle.css';




const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });
