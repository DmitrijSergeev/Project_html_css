document.addEventListener("DOMContentLoaded", () => {

    let el;
    let item;
    
    el = 'input';
    item = document.querySelector(el);
    item.setAttribute('value', 'Пока');

    let square = document.querySelector('.alarm'),
        stop = document.querySelector('.stop');
    square.className = 'view'; 

    let pic = document.querySelector('img');
    pic.src = 'https://i.ytimg.com/vi/Ff8MraDWbGU/hqdefault.jpg';
    pic.title = "Hello world!";

    stop.innerHTML = '<ul><li>1</li><li>2</li></ul>'

       
});