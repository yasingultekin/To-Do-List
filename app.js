const plus = document.querySelector('.plus');
const input = document.querySelector('.input');

const todoSection = document.querySelector('#todo-section');
const ul = document.createElement('ul');
todoSection.appendChild(ul);


plus.addEventListener('click', () => {
    if (!input.value) {
        alert('Burası boş bırakılamaz!')
    } else {
        ul.innerHTML  += `<li style="list-style-type: none">${input.value}</li>`
        input.value = '';
    }
})