import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {


    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs('.glazing','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    images();
    timer('06-27-2024 23:40');
    forms(modalState);
})