import createElement from '../createElement'
const contentContainer = document.querySelector('.contentContainer')


function aboutPage(){
    const aboutBtn = document.querySelector('.menu-item2')
    const ourMission = createElement('h1', {class:'mission', id: 'aboutPage'})
    const aboutSection = createElement('p', {class:'about', id:'aboutPage'})
    const aboutDiv = createElement('div', {class:'aboutDiv', id:'statement'})
    aboutBtn.addEventListener('click', () =>{
        contentContainer.replaceChildren();
        contentContainer.appendChild(ourMission)
        contentContainer.appendChild(aboutDiv)
        aboutDiv.appendChild(aboutSection)
        ourMission.textContent = 'Our Mission'
        aboutSection.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        
    })
}

export default aboutPage