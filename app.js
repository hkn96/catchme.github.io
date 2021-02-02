alert('!!! CATCH ME IF YOU CAN !!!');

let counter=0,obj,xpos,ypos;
obj=document.querySelector('#obj');

obj.onmouseover=function(){
    counter++;
    xpos=parseInt(Math.random()*1000);
    ypos=parseInt(Math.random()*500);
    obj.style.left=xpos+'px';
    obj.style.top=ypos+'px';
    obj.style.width=this.clientWidth+10+'px';
    obj.style.height=this.clientHeight+10+'px';
}

obj.onclick = function(){
    
    let x = document.querySelector('#prf'); 
   if(counter <= 15){
        x.innerHTML = counter + "........You caught it before 15 tries ... CONGRATULATIONS";
        obj.style.width = "220px";
        obj.style.height = "167px";
        obj.style.backgroundImage = "url('image/bravo.gif')";
    }
    
    if(counter >= 15 ){
        x.innerHTML = counter + "........You caught it after 15 tries  ... LOST";
       obj.style.width = "360px";
       obj.style.height = "200px";
       obj.style.backgroundImage = "url('image/angry.gif')";
    }
    
    
    counter=0;
}