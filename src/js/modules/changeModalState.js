import checkNumImput from "./checkNumImput";

function changeModalState(state) {
    const windows = document.querySelectorAll('.balcon_icons_img'),
          inputWidth = document.querySelectorAll('#width'),
          inputHeight = document.querySelectorAll('#height'),
          profile = document.querySelectorAll('#view_type'),
          type = document.querySelectorAll('.checkbox');
          
    state.windowForm = 1;
    state.profile = profile[0].value;

    function bindInputToState(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i + 1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i === 0 ? 'Cold': 'Warm';
                            elem.forEach((box, j) => box.checked = false);
                            elem[i].checked = true;

                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                // console.log(state);
            })
        })
    }
    checkNumImput('#width');
    checkNumImput('#height');

    bindInputToState('click', windows, 'windowForm');
    bindInputToState('input', inputWidth, 'Width');
    bindInputToState('input', inputHeight, 'Height');
    bindInputToState('change', profile, 'profile');
    bindInputToState('change', type, 'type');

    
}

export default changeModalState;