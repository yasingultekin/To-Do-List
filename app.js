const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('input');
const todoSection = document.querySelector('#todo-section');
// const close = document.querySelector('.close');

const ul = document.createElement('ul');
todoSection.appendChild(ul);
let check = document.querySelectorAll(".check");
plus.addEventListener('click', () => {
    if (!input.value) {
        alert('Burası boş bırakılamaz!')
    }
    else {
        ul.innerHTML += `<div class="task">
        <button class="check">
        <i class="fa-solid fa-square-check"></i>
         </button>
        <li class="liste">${input.value}</li>
        
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
                this.nextElementSibling.style.opacity = '.7';        
}}
        for (let i = 0; i < check.length; i++) {
            check[i].ondblclick = function () {
                this.parentNode.style.textDecoration = 'none';
                this.nextElementSibling.style.opacity = '1';    
}}
}
}});

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        plus.click();
    }
})


window.onload = () => {
    input.focus();
}


   // <button class="check">
        // <i class="fa-solid fa-square-check"></i>
        //  </button>