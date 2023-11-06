const inputContainer = document.querySelector('#input-container');
const btnContainer = document.querySelector('#button-container');
const gridContainer = document.querySelector('#grid-container');


/* -- INPUT -- */
inputContainer.innerHTML += '<label for="grid-size">GRID SIZE</label>';
inputContainer.innerHTML += '<input  type="range" name="" id="grid-size" min="1" max="100" value="10" oninput="this.nextElementSibling.value = this.value">'
inputContainer.innerHTML += '<output>10</output>'


/* -- GRID -- */
let size = document.querySelector('input').value;

function grid(size) {

    for(let i = 0; i < size*size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'grid-square');
        gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
        gridContainer.appendChild(gridSquare);
    }
    
    const input = document.querySelector('input');
    
    input.addEventListener('input', event => {
        removeItems();
        
        let size = event.target.value;
        
        for(let i = 0; i < size*size; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('class', 'grid-square');
            gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
            gridContainer.appendChild(gridSquare);
        }
    })
}

function removeItems() {
    const oldGridSquares = document.querySelectorAll('.grid-square');
    
    oldGridSquares.forEach(square => {
        square.remove();
    })
}

grid(size);


/* -- BLACK & WHITE -- */
function blackAndWhite() {
    const bwBtn = document.createElement('button');
    bwBtn.textContent = 'BLACK & WHITE';
    btnContainer.appendChild(bwBtn);
    
    bwBtn.addEventListener('click', () => {
        gridContainer.addEventListener('mouseover', event => {
            let target = event.target;

            target.style['background'] = 'black';
        })

        gridContainer.addEventListener('mouseout', event => {
            let target = event.target;

            target.style.removeProperty('background');
        })
    })
}

blackAndWhite();


/* -- RGB -- */
function rgb() {
    const rgbBtn = document.createElement('button');
    rgbBtn.textContent = 'RGB';
    btnContainer.appendChild(rgbBtn);
    
    rgbBtn.addEventListener('click', () => {
        gridContainer.addEventListener('mouseover', event => {
            let target = event.target;

            let randomColor = `rgb(${Math.random()*185}, ${Math.random()*185}, ${Math.random()*185})`;

            target.style['background'] = randomColor;
        })

        gridContainer.addEventListener('mouseout', event => {
            let target = event.target;

            target.style.removeProperty('background');
        })
    })
}

rgb();