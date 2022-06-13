
import createElement from '../createElement'
const contentContainer = document.querySelector('.contentContainer')

function contact(){
    const contactPage = document.querySelector('.menu-item3')
    const contact = createElement('h1', {class:'contactInfo'})
    contactPage.addEventListener('click', () =>{
        contact.textContent='hi'
        contentContainer.appendChild(contact)
    })
}



export default contact