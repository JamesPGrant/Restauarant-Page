import createElement from './createElement';

function menu(){
    const menuPage = createElement('div', {class:'menu'})
    const menuItem = createElement('button', {class: 'menu-item1'})
    const menuItem2 = createElement('button', {class: 'menu-item2'})
    const menuItem3 = createElement('button', {class: 'menu-item3'})
    menuItem.textContent = 'Menu'
    menuItem2.textContent = 'About'
    menuItem3.textContent = 'Contact'
    menuPage.appendChild(menuItem)
    menuPage.appendChild(menuItem2)
    menuPage.appendChild(menuItem3)
    return menuPage
}

export default menu;