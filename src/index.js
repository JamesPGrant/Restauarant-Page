import createElement from "./createElement"
import menu from './menu'
import contact from './menu-pages/contact'
import aboutPage from './menu-pages/about'
import foodItems from './menu-pages/food'
import "./styles.css";
import choc from '../src/images/choc.png'
import cherry from  '../src/images/cherry.png'
import strawberry from '../src/images/strawberry.png'
import lemon from '../src/images/lemon.png'
import vanilla from '../src/images/vanilla.png'
import purp from '../src/images/purple.png'
const container = document.querySelector('.container')

const myChoc = new Image();
const myCherry = new Image();
const myStraw = new Image();
const myLemon = new Image();
const myVan = new Image();
const myPurp = new Image();
myChoc.src = choc
myCherry.src = cherry
myStraw.src = strawberry
myLemon.src = lemon
myVan.src = vanilla
myPurp.src = purp

function header(){
    const heading = createElement('h1', {class: 'heading'})
    heading.textContent = 'Doughnut Shop'
    return heading
}

container.appendChild(header())
container.appendChild(menu())

contact()
aboutPage()


function onClick(){
    const menuItem1 = document.querySelector('.menu-item1')

    menuItem1.addEventListener('click', () =>{
        const cherryDough = document.querySelector('.cherryDoughnut1')
        const purpDough = document.querySelector('.purpDoughnut1')
        const vanDough = document.querySelector('.vanillaDoughnut1')
        const lemDough = document.querySelector('.lemonDoughnut1')
        const strawDough = document.querySelector('.strawberryDoughnut1')
        const chocDough = document.querySelector('.chocolateDoughnut1')
        chocDough.setAttribute('src', `${myChoc.src}`)
        cherryDough.setAttribute('src', `${myCherry.src}`)
        strawDough.setAttribute('src', `${myStraw.src}`)
        lemDough.setAttribute('src', `${myLemon.src}`)
        vanDough.setAttribute('src', `${myVan.src}`)
        purpDough.setAttribute('src', `${myPurp.src}`)
    })
}

foodItems()
onClick()

