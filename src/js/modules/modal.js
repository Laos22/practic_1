
const modals = () => {

    function bindmodal(triggerSelector, modalSelector, closeSelector, clickFreeToClose = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
                document.querySelectorAll('[data-modal]').forEach(item => {
                    item.style.display = 'none';
                })
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            })
        })
        
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && clickFreeToClose) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })

    }
    
    function showModalByTime (modalSelector, time) {
        const modal = document.querySelector(modalSelector),
              timerModal = setTimeout(() =>  {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                }, time);

    }

    
    bindmodal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindmodal('.phone_link', '.popup', '.popup .popup_close');
    bindmodal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindmodal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindmodal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);

}

export default modals;