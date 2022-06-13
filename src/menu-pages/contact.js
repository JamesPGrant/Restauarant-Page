import createElement from '../createElement'
const contentContainer = document.querySelector('.contentContainer')

function contact(){
    const contactPage = document.querySelector('.menu-item3')
    const form = createElement('form', {class: 'forms'})
    const nameInfo = createElement('input', {type: 'text'})
    const email = createElement('input',{type: 'email'} )
    const textArea = createElement('textArea', {rows: '4', col:'50'})
    const contact = createElement('h1', {class:'contactInfo'})
    contactPage.addEventListener('click', () =>{
        contentContainer.replaceChildren();
        contact.textContent='Contact Us!'
        contentContainer.appendChild(contact)
        contentContainer.appendChild(form)
        form.appendChild(nameInfo)
        form.appendChild(email)
        form.appendChild(textArea)
    })
}



export default contact