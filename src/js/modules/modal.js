
const modals = () => {

    function bindmodal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
                // console.log('ok')
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            })
        })
        
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
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
    // showModalByTime('.popup', 60000);

}

export default modals;