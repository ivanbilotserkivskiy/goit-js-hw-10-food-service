import menuCardTpl from '../src/templates/menu.hbs';
import menuCards from './menu.json';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const listRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const themSwitchRef = document.querySelector('.theme-switch__toggle')

if(localStorage.getItem('Theme')=='dark-theme'){
    bodyRef.classList.add('dark-theme')
    themSwitchRef.setAttribute('checked','checked')
}
else{
    bodyRef.classList.add('light-theme')  
}
listRef.insertAdjacentHTML('afterbegin', menuMarkup(menuCards));
function menuMarkup (menuCards) {
    return menuCards.map(menuCardTpl ).join('');
  }
  themSwitchRef.addEventListener('click',() => {
    if(bodyRef.classList.contains('dark-theme')) {
        bodyRef.classList.add('light-theme')
        bodyRef.classList.remove('dark-theme')
        localStorage.setItem('Theme',Theme.LIGHT)
     }
     else if(bodyRef.classList.contains('light-theme')) {
        bodyRef.classList.remove('light-theme')
        bodyRef.classList.add('dark-theme')
        localStorage.setItem('Theme',Theme.DARK)
     }
});

