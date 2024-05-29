import checkNumImput from "./checkNumImput";

function forms(state) {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
          

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    checkNumImput('input[name="user_phone"]');

    async function postData(url, data) {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();

    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let messageStatus = document.createElement('div');
            messageStatus.classList.add('status');
            item.appendChild(messageStatus);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc')) for (let key in state) formData.append(key, state[key]);

            postData('assets/server.php', formData)
                .then(res => {
                    messageStatus.textContent = message.success;
                }).catch(() => {
                    messageStatus.textContent = message.failure;
                }).finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        messageStatus.remove();
                    }, 5000);
                })

        })
    })

}

export default forms;
