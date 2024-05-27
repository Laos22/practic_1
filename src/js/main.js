import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
    timer('05-27-2024 23:40');
})