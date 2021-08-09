'use srticts'
import menuTemplate from './templates/menu-cards.hbs';
import menuArray from './menu.json';

// добавление разметки на страницу с помощью шаблонизатора

const createCardMenuMarkup = menuArray.map(menuTemplate).join('');
const menuContainer = document.querySelector('.menu');
menuContainer.insertAdjacentHTML('beforeend', createCardMenuMarkup)

// Изменения темы сайта и работа с localStorage

const inputChangeTheme = document.querySelector('.theme-switch__toggle')
const bodyForTheme = document.querySelector('body')
inputChangeTheme.addEventListener('change', changeThemeForBodyByInput)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
// сохранение темы при перезагрузке

const themeLocalStorage = localStorage.getItem('Theme');
if (inputChangeTheme.checked = (themeLocalStorage == Theme.DARK)) {
    bodyForTheme.setAttribute('class', Theme.DARK)
    inputChangeTheme.checked === true
}
else {
    bodyForTheme.setAttribute('class', Theme.LIGHT);
    inputChangeTheme.checked === false
}
// функция изменения темы при смене положения чекбокса
function changeThemeForBodyByInput() {
    if (inputChangeTheme.checked) {
        bodyForTheme.setAttribute('class', Theme.DARK)
        localStorage.setItem('Theme', Theme.DARK)
    } else {
        bodyForTheme.setAttribute('class', Theme.LIGHT)
        localStorage.setItem('Theme', Theme.LIGHT)
    }
}



