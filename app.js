const svg = document.querySelector('svg')

const coords = document.querySelector('#coords')

function randNums(min, max){
    if(Math.random()>0.5){
        return (Math.floor(Math.random()*max)+min)*-1   
    }
    else{
        return Math.floor(Math.random()*max)+min
    }
}

// PREVENT CONTEXT MENU FROM OPENING
document.addEventListener("contextmenu", function(evt){
    evt.preventDefault();
  }, false);


function createSVGLineElement(x1, y1){
    const svgns = "http://www.w3.org/2000/svg";
    let newLine = document.createElementNS(svgns, "line");
    let randX = randNums(50, 100)
    let randY = randNums(50, 100)
    newLine.setAttribute('x1' , `${x1}`)
    newLine.setAttribute('y1' , `${y1}`)
    newLine.setAttribute('x2' , `${x1+randX}`)
    newLine.setAttribute('y2' , `${y1+randY}`)
    newLine.setAttribute('stroke-width', '3')
    newLine.setAttribute('stroke' , 'white') 
    return newLine
}

document.addEventListener('pointerdown', (data)=>{
    let left = Math.round(svg.getBoundingClientRect().x)
    let top = Math.round(svg.getBoundingClientRect().y)
    let xCoord = Math.round(data.clientX) - left
    let yCoord = Math.round(data.clientY) - top
    coords.innerText = `${xCoord}x , ${yCoord}y`
    let newLine = createSVGLineElement(xCoord, yCoord)
    svg.appendChild(newLine)
})

