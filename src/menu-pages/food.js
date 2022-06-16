import createElement from '../createElement'
const contentContainer = document.querySelector('.contentContainer')
//import cherry from  '../src/images/choc.png'

function foodItems(){

    const menuBtn = document.querySelector('.menu-item1')
    const doughnutDiv = createElement('div', {class:'doughnutMenu1', id: 'doughnut1'})
    const doughnutDiv2 = createElement('div', {class:'doughnutMenu2', id: 'doughnut1'})
    const doughnutDiv3 = createElement('div', {class:'doughnutMenu3', id: 'doughnut1'})
    const doughnutDiv4 = createElement('div', {class:'doughnutMenu4', id: 'doughnut1'})
    const doughnutDiv5= createElement('div', {class:'doughnutMenu5', id: 'doughnut1'})
    const doughnutDiv6 = createElement('div', {class:'doughnutMenu6', id: 'doughnut1'})
    const doughnutDiv7= createElement('div', {class:'doughnutMenu7', id: 'doughnut1'})
    const chocImage = createElement('img', {class:'chocolateDoughnut', id:'doughnut1', src: '../src/images/choc.png'})
    const strawImage = createElement('img', {class:'strawberryDoughnut', id:'doughnut1', src: '../src/images/strawberry.png'})
    const lemImage = createElement('img', {class:'lemonDoughnut', id:'doughnut1', src: '../src/images/lemon.png'})
    const vanImage = createElement('img', {class:'vanillaDoughnut', id:'doughnut1', src: '../src/images/vanilla.png'})
    const purpImage =  createElement('img', {class:'purpDoughnut', id:'doughnut1', src: '../src/images/purple.png'})
    const cherryImage = createElement('img', {class:'cherryDoughnut', id:'doughnut1', src: '../src/images/cherry.png'})
    const chocolateDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut1'})
    const strawberryDoughnut = createElement('p', {class:'strawberryDoughnut ', id:'doughnut1'})
    const vanillaDoughnut = createElement('p', {class:'vanillaDoughnut', id:'doughnut1'})
    const lemonDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut1'})
    const purpleDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut1'})
    const cherryDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut1'})

    menuBtn.addEventListener('click', ()=>{
        contentContainer.replaceChildren();
        contentContainer.appendChild(doughnutDiv);
        contentContainer.appendChild(doughnutDiv2);
        contentContainer.appendChild(doughnutDiv3);
        contentContainer.appendChild(doughnutDiv4);
        contentContainer.appendChild(doughnutDiv5);
        contentContainer.appendChild(doughnutDiv6);
        contentContainer.appendChild(doughnutDiv7);
        doughnutDiv.appendChild(chocImage);
        doughnutDiv2.appendChild(strawImage);
        doughnutDiv3.appendChild(vanImage);
        doughnutDiv4.appendChild(lemImage);
        doughnutDiv5.appendChild(purpImage)
        doughnutDiv6.appendChild(cherryImage)
        doughnutDiv.appendChild(chocolateDoughnut);
        doughnutDiv2.appendChild(strawberryDoughnut);
        doughnutDiv3.appendChild(vanillaDoughnut);
        doughnutDiv4.appendChild(lemonDoughnut);
        doughnutDiv5.appendChild(purpleDoughnut);
        doughnutDiv6.appendChild(cherryDoughnut);
        
        chocolateDoughnut.textContent = 'Chocolate Doughnut'
        strawberryDoughnut.textContent = 'Strawberry Doughnut'
        vanillaDoughnut.textContent = 'Vanilla Doughnut'
        lemonDoughnut.textContent = 'Lemon Doughnut'
        purpleDoughnut.textContent = 'Purple Doughnut'
        cherryDoughnut.textContent = 'Cherry Doughnut'
        if (contentContainer.id === `flexContainer`){
            contentContainer.removeAttribute('id', 'flexContainer')
            contentContainer.setAttribute('id', 'menuAfter')
        }else{
            contentContainer.setAttribute('id', 'menuAfter')
            return
        }
        if(document.body.style.height === '100%'){
            document.body.style.height = '100vh'
            return
        }
    })

}

export default foodItems