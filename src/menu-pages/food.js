import createElement from '../createElement'
const contentContainer = document.querySelector('.contentContainer')

function foodItems(){
    const menuBtn = document.querySelector('.menu-item1')
    const doughnutDiv = createElement('div', {class:'doughnutMenu', id: 'doughnut'})
    const chocolateDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut'})
    const strawberryDoughnut = createElement('p', {class:'strawberryDoughnut ', id:'doughnut'})
    const vanillaDoughnut = createElement('p', {class:'vanillaDoughnut', id:'doughnut'})
    const lemonDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut'})
    const purpleDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut'})
    const cherryDoughnut = createElement('p', {class:'chocolateDoughnut', id:'doughnut'})

    menuBtn.addEventListener('click', ()=>{
        contentContainer.replaceChildren();
        contentContainer.appendChild(doughnutDiv);
        doughnutDiv.appendChild(chocolateDoughnut);
        doughnutDiv.appendChild(strawberryDoughnut);
        doughnutDiv.appendChild(vanillaDoughnut);
        doughnutDiv.appendChild(lemonDoughnut);
        doughnutDiv.appendChild(purpleDoughnut);
        doughnutDiv.appendChild(cherryDoughnut);
        doughnutDiv.appendChild(chocolateDoughnut);
        chocolateDoughnut.textContent = 'Chocolate Doughnut'
        strawberryDoughnut.textContent = 'Strawberry Doughnut'
        vanillaDoughnut.textContent = 'Vanilla Doughnut'
        lemonDoughnut.textContent = 'Lemon Doughnut'
        purpleDoughnut.textContent = 'Purple Doughnut'
        cherryDoughnut.textContent = 'Cherry Doughnut'
    })

}

export default foodItems