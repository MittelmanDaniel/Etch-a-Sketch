

let container=document.querySelector('#container');
let size=16;
let rainbowMode=false;
for(let i=1;i<=size;i++){
    for(let j=1; j<=size;j++){
        const div= document.createElement('div');
        div.setAttribute('grid-column-start',i);
        div.setAttribute('grid-row-start',j);
        div.style.backgroundColor='#C6B7A4'
        div.addEventListener('mouseover', function(e){
            if(rainbowMode){ e.target.style.backgroundColor=getRandomColor()}
            else{
                    e.target.style.backgroundColor='black';
                }
        });
        container.appendChild(div);
    }
}


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



function resetBoard(){
    container.innerHTML='';
    for(let i=1;i<=size;i++){
        for(let j=1; j<=size;j++){
            const div= document.createElement('div');
            div.setAttribute('grid-column-start',i);
            div.setAttribute('grid-row-start',j);
            div.style.backgroundColor='#C6B7A4'
            div.addEventListener('mouseover', function(e){
                if(rainbowMode){ e.target.style.backgroundColor=getRandomColor()}
                else{
                    e.target.style.backgroundColor='black';
                }
            });
            container.appendChild(div);
        }
    }
}

function changeSize(){
    size=prompt("Choose Grid Size");
    container.style.gridTemplateColumns='repeat('+size+',1fr)';
    container.style.gridTemplateRows='repeat('+size+',1fr)';
    resetBoard();
}


let restbutton=document.querySelector('#resetBut');
let sizebutton=document.querySelector('#changeBut');
let randbutton=document.querySelector('#randBut');

restbutton.addEventListener('click', resetBoard);

sizebutton.addEventListener('click', changeSize);

randbutton.addEventListener('click',function () {
    rainbowMode=!rainbowMode;
    if(rainbowMode){
        randbutton.textContent="Press to turn off rainbow mode";
    }
    else{
        randbutton.textContent="Press to activate rainbow mode";
    }
});