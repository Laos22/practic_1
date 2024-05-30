function images() {
    const sectionImg = document.querySelector('.works'),
          imgModal = document.createElement('div'),
          bigImg = document.createElement('img');

    imgModal.classList.add('popup');
    imgModal.style.justifyContent = 'center';
    imgModal.style.alignContent = 'center';
    imgModal.style.display = 'none';
    imgModal.appendChild(bigImg);
    sectionImg.appendChild(imgModal);
    
    sectionImg.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }
        
        if (target && target.matches('div.popup')) {
            imgModal.style.display = 'none';
        }
        
    })



}

export default images;