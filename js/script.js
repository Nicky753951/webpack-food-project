     import modal from './modules/modal';
     import tabs from './modules/tabs';
     import calc from './modules/calc';
     import cards from './modules/cards';
     import forms from './modules/forms';
     import slider from './modules/slider';
     import timer from './modules/timer';
     import openModal from './modules/modal';
     import 'jquery';

window.addEventListener('DOMContentLoaded', function() {

      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
      tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
      calc();
      cards();
      timer('.timer', '2021-09-01');
      forms('.form',modalTimerId);
      modal('[data-modal]', '.modal', modalTimerId);
      slider({
            container: '.offer__slider',
            nextArrow: '.offer__slider-next',
            prevArrow: '.offer__slider-prev',
            slide: '.offer__slide',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
      });
});