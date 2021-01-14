var p = document.querySelector('.p');

p.style.cursor = 'pointer';

p.addEventListener("click", trocar);

function trocar(){
    p.style.color = 'red';
}