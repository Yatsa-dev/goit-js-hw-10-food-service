'use srticts'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const inputChangeTheme = document.querySelector('.theme-switch__toggle')

const bodyForTheme = document.querySelector('body')

inputChangeTheme.addEventListener('change', function changeThemeForBodyByInput() {

    if (inputChangeTheme.checked) {
        bodyForTheme.setAttribute('class', Theme.DARK)
        localStorage.setItem('Thems', Theme.DARK)


    } else {
        bodyForTheme.setAttribute('class', Theme.LIGHT)
        localStorage.setItem('Thems', Theme.LIGHT)
    }

})

const theme = localStorage.getItem('Thems');
if (inputChangeTheme.checked = (theme == Theme.DARK)) {
    bodyForTheme.setAttribute('class', Theme.DARK)
    inputChangeTheme.checked === true
}
else {
    bodyForTheme.setAttribute('class', Theme.LIGHT);
    inputChangeTheme.checked === false
}

