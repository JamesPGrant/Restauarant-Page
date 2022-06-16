import createElement from '../createElement'
const contentContainer = document.querySelector('.contentContainer')

function contact(){
    const contactPage = document.querySelector('.menu-item3')
    const form = createElement('form', {class: 'forms'})
    const nameLabel = createElement('label', {for: 'name', class:'name', id: 'name'})
    const nameInfo = createElement('input', {type: 'text'})
    const emailLabel = createElement('label', {for:'email', class:'email', id:'email'})
    const additionalInfoLabel = createElement('label', {for:'other', class:'other', id:'other'})
    const submit = createElement('button', {class:'submitButton', id:'formButton'})
    const email = createElement('input',{type: 'email'} )
    const textArea = createElement('textArea', {rows: '4', col:'50'})
    const contact = createElement('h1', {class:'contactInfo'})
    contactPage.addEventListener('click', () =>{
        contentContainer.replaceChildren();
        contact.textContent='Contact Us!'
        contentContainer.appendChild(contact)
        contentContainer.appendChild(form)
        form.appendChild(nameLabel)
        form.appendChild(nameInfo)
        form.appendChild(emailLabel)
        form.appendChild(email)
        form.appendChild(additionalInfoLabel)
        form.appendChild(textArea)
        form.appendChild(submit)
        nameLabel.textContent = 'Name: '
        emailLabel.textContent = 'Email: '
        additionalInfoLabel.textContent = 'Additional Info: '
        submit.textContent = 'Submit'
        if (contentContainer.id === `menuAfter`){
            contentContainer.removeAttribute('id', 'menuAfter')
            contentContainer.setAttribute('id', 'flexContainer')
        }else{
            contentContainer.setAttribute('id', 'flexContainer')
            return
        }

        if(document.body.style.height === '100%'){
            document.body.style.height = '100vh'
            return
        }
        
    })
}



export default contact