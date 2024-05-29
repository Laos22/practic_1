function checkNumImput(selector) {

    const inputsPhone = document.querySelectorAll(selector);

    inputsPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '')
        })
    })

}

export default checkNumImput;