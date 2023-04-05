
var world=[
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,2,2,2,2,1,2,2,2,1,1,2],
    [2,1,3,2,2,2,1,2,1,1,2,1,2,1,2,1,1,2],
    [2,1,1,1,1,2,2,2,1,1,2,1,1,1,2,1,1,2],
    [2,1,1,3,1,2,1,1,1,1,2,1,1,3,2,1,1,2],
    [2,1,1,1,1,2,1,2,2,1,2,1,1,3,2,1,1,2],
    [2,1,3,1,1,2,2,2,1,1,2,2,2,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,1,2,1,1,1,1,2],
    [2,1,2,1,1,3,1,1,1,1,1,1,2,1,2,1,1,2],
    [2,1,2,2,1,1,1,2,1,1,1,1,2,3,2,1,1,2],
    [2,1,1,2,2,2,1,2,1,1,1,3,2,1,2,1,1,2],
    [2,1,1,1,1,2,2,2,1,3,1,1,2,2,2,1,1,2],
    [2,1,1,3,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]

var pacman={
    x:1,
    y:1
}
var ghost={
    x:getRndInteger(1,world[0].length-1),
    y:getRndInteger(1,world.length-1)
}

displayGhost=()=>{
    document.getElementById("ghost").style.left=ghost.x*20 +"px";
    document.getElementById("ghost").style.top=ghost.y*20 +"px";
}
displayGhost()

displayWorld=()=>{
    world[pacman.y][pacman.x]=0;
    var output="";
    for(var i=0;i<world.length;i++){
        output+='\n<div class="row">\n';
        for(var j=0;j<world[i].length;j++){
            if(world[i][j]==2){
                output+='<div class="brick"></div>'
            }
            else if(world[i][j]==1){
                output+='<div class="coin"></div>'
            }
            else if(world[i][j]==3){
                output+='<div class="cherry"></div>'
            }
            else if(world[i][j]==0){
                output+='<div class="empty"></div>'
            }
        }
        output+='\n</div>'
    }
    document.getElementById("world").innerHTML=output
}
displayWorld();

displayPacman=()=>{
    document.getElementById("pacman").style.left=pacman.x*20 +"px";
    document.getElementById("pacman").style.top=pacman.y*20 +"px";
}
var count=0
document.onkeydown=function(ele){
   if(ele.code=="ArrowRight" && world[pacman.y][pacman.x+1]!=2){
        pacman.x++;
        document.getElementById("pacman").style.transform="rotate(0deg)"
        }
    else if(ele.code=="ArrowLeft" && world[pacman.y][pacman.x-1]!=2){
        pacman.x--;
        document.getElementById("pacman").style.transform="rotate(-180deg)"
        }
    else if(ele.code=="ArrowUp" && world[pacman.y-1][pacman.x]!=2){
        pacman.y--;
        document.getElementById("pacman").style.transform="rotate(-90deg)"
        }
    else if (ele.code=="ArrowDown" && world[pacman.y+1][pacman.x]!=2){
            pacman.y++;
            document.getElementById("pacman").style.transform="rotate(+90deg)"
            }    
    score();
    displayPacman();
    document.getElementById("score").innerHTML=count*5
    if(pacman.y==ghost.y && pacman.x==ghost.x){
        reset()
    }
    finish()
}

finish=()=>{
    let b=true
    for(let i=0;i<world.length;i++){
        for(let j=0;j<world[i].length;j++){
            if(world[i][j]==1 || world[i][j]==3){
                b=false
            }
            }
        }
    if(b==true){
       reset()
    }
}
    
reset=()=>{
    world=[
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,2,1,1,1,2,2,2,2,1,2,2,2,1,1,2],
        [2,1,3,2,2,2,1,2,1,1,2,1,2,1,2,1,1,2],
        [2,1,1,1,1,2,2,2,1,1,2,1,1,1,2,1,1,2],
        [2,1,1,3,1,2,1,1,1,1,2,1,1,3,2,1,1,2],
        [2,1,1,1,1,2,1,2,2,1,2,1,1,3,2,1,1,2],
        [2,1,3,1,1,2,2,2,1,1,2,2,2,2,2,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,1,2,1,1,1,1,2],
        [2,1,2,1,1,3,1,1,1,1,1,1,2,1,2,1,1,2],
        [2,1,2,2,1,1,1,2,1,1,1,1,2,3,2,1,1,2],
        [2,1,1,2,2,2,1,2,1,1,1,3,2,1,2,1,1,2],
        [2,1,1,1,1,2,2,2,1,3,1,1,2,2,2,1,1,2],
        [2,1,1,3,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
        [2,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ]
    count=0
    pacman.x=1
    pacman.y=1
}


var vect=[-1,0,1]
setInterval (ghostMoving=()=>{
    switch(ghost.x){
        case 0:
            vect=[0,1];
            ghost.x+=vect[Math.floor(Math.random()*vect.length)];
            break;
        case world[0].length-1:
            vect=[-1,0];
            ghost.x+=vect[Math.floor(Math.random()*vect.length)];
            break;
    }
    switch(ghost.y){
        case 0:
            vect=[0,1];
            ghost.y+=vect[Math.floor(Math.random()*vect.length)];
            break;
        case world.length-1:
            vect=[-1,0]
            ghost.y+=vect[Math.floor(Math.random()*vect.length)];
    }

    ghost.x+=vect[Math.floor(Math.random()*vect.length)]
    ghost.y+=vect[Math.floor(Math.random()*vect.length)]
    displayGhost()
},1000)
    
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

score=()=>{
    if(world[pacman.y][pacman.x]==1 || world[pacman.y][pacman.x]==3  ){
        if(world[pacman.y][pacman.x]==3){
            count+=10
            world[pacman.y][pacman.x]=0;
        }
        else{
            count++;
            world[pacman.y][pacman.x]=0;
        }
        displayWorld();
    }
}
