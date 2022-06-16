import createElement from "./createElement"
import menu from './menu'
import contact from './menu-pages/contact'
import aboutPage from './menu-pages/about'
import foodItems from './menu-pages/food'
import "./styles.css";
import choc from '../src/images/choc.png'
import cherry from  '../src/images/choc.png'
const container = document.querySelector('.container')



function header(){
    const heading = createElement('h1', {class: 'heading'})
    heading.textContent = 'Doughnut Shop'
    return heading
}

container.appendChild(header())
container.appendChild(menu())
contact()
aboutPage()
foodItems()
onClick()
