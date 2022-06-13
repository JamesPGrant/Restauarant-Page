import createElement from "./createElement"
import menu from './menu'
import contact from './menu-pages/contact'
const container = document.querySelector('.container')

function header(){
    const heading = createElement('h1', {class: 'heading'})
    heading.textContent = 'Doughnut Shop'
    return heading
}

container.appendChild(header())
container.appendChild(menu())
contact()