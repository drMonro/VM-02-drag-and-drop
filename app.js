const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragover = (evt) => {
    evt.preventDefault();
};

const dragenter = (evt) => {
    evt.target.classList.add('hovered');
};

const dragleave = (evt) => {
    evt.target.classList.remove('hovered');
};

const dragdrop = (evt) => {
    evt.target.classList.remove('hovered');
    evt.target.append(item);
};

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})



const dragStart = (evt) => {
    evt.target.classList.add('hold');
    setTimeout(() => {
        evt.target.classList.add('hide');
    }, 0)
};


const dragEnd = (evt) => {
    evt.target.className = 'item';
};

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)



