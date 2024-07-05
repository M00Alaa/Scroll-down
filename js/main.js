let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains2 = document.getElementById('mountains2');
let mountains3 = document.getElementById('mountains3');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains1 = document.getElementById('mountains1');

let welcome = document.getElementById('welcome');



window.onscroll = function () {
    let value = window.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains2.style.top = value * 2 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value * 1.75 + 'px';
    boat.style.left = value * 3 + 'px';
    mountains1.style.top = value + 'px';
    welcome.style.bottom = value * 1.05 + 'px';
    welcome.style.fontSize = value + 'px';
    if (value >= 122) {
        welcome.style.fontSize = 122 + 'px';
        welcome.style.position = 'fixed';

        if (value >= 177) {
            document.querySelector('body').style.background = 'linear-gradient(#687EFF, #80B3FF)';
        }
        else {
            document.querySelector('body').style.background = 'linear-gradient(#863A6F, #975C8D)';
        }
    }
}