const plus = document.querySelector('.plus');
const input = document.querySelector('input');
const todoSection = document.querySelector('#todo-section');

const ul = document.createElement('ul');
todoSection.appendChild(ul);

plus.addEventListener('click', () => {
    if (!input.value) {
        alert('Please write something!')
    }
    else {
        ul.innerHTML += 
        `<div class="task">
        <button class="check">
            <i class="fa-solid fa-check"></i>
        </button>
        <li class="liste">${(input.value).toLocaleUpperCase()}</li>
        
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
         </div>`
        input.value = '';

        let close = document.querySelectorAll(".delete");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                this.parentNode.remove();
        }        
        let check = document.querySelectorAll(".check");
        for (let i = 0; i < check.length; i++) {
            check[i].onclick = function () {
                this.parentNode.style.textDecoration = 'line-through';        
                this.nextElementSibling.style.opacity = '.5';        
                this.nextElementSibling.style.color = 'green';
                this.style.backgroundColor = 'green';
                this.nextElementSibling.style.fontStyle = 'oblique';

}}
        for (let i = 0; i < check.length; i++) {
            check[i].ondblclick = function () {
                this.parentNode.style.textDecoration = 'none';
                this.nextElementSibling.style.opacity = '1';    
                this.nextElementSibling.style.color = 'black';
                this.style.backgroundColor = 'white';
                this.nextElementSibling.style.fontStyle = 'normal';   
                    
}}
}
}
});



input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        plus.click();
    }
})


window.onload = () => {
    input.focus();
}