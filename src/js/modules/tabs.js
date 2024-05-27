function tabs(headerSelector, tabsSelector, contentsSelector, activeClass) {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabsSelector),
          contents = document.querySelectorAll(contentsSelector);


    function hideContents() {

        contents.forEach(item => {
            item.style.display = 'none';
        })
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showContent(i = 0) {
        contents[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }
    
    hideContents();
    showContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains(tabsSelector.slice(1)) || target.parentNode.classList.contains(tabsSelector.slice(1)) ) {
            tabs.forEach((item, i) => {
                if (item === target || target.parentNode == item) {
                hideContents();
                showContent(i);
                }
            })
        };
    
    
    
    })




}

export default tabs;