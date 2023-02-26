//this function for when a button hovering then chenge it is bg and color of it is text

 hoveringEfect=(bg,col,bgitem,text,bole)=>{
    if(bole){
        bgitem.style.background=bg;
        text.style.color=col;
        bgitem.style.transition="background ease-in-out .3s"
        text.style.transition="color ease-in-out .3s"

    }else{
        bgitem.style.background=bg;
        text.style.color=col;
        bgitem.style.transition="background ease-in-out .3s"
        text.style.transition="color ease-in-out .3s"
    }
}

// navebar right section "contact us" button
const last_list = document.querySelector('.last_list')
const last_list_a =document.querySelector('.last_list_a')
last_list.addEventListener('mouseenter',()=>{ hoveringEfect('#46ccdb',"white",last_list,last_list_a,true) })
last_list.addEventListener('mouseleave',()=>{ hoveringEfect('#cacfcb',"black",last_list,last_list_a,false) })

// this section for menu icon 
const menue =document.querySelector('.menue')
const responsivemenubar =document.querySelector('.right_side_slide_navigation')
let bole_1=true
menue.addEventListener('click',()=>{
   if(bole_1){
       menue.classList.remove('fa-bars')
       menue.classList.add('fa-close')
       navbar_remove_add(bole_1)
   }else{
       menue.classList.remove('fa-close')
       menue.classList.add('fa-bars')
       navbar_remove_add(bole_1)
   }
})
//this function for remove and add a navigation slider in the smallevise
function navbar_remove_add(bole){
    if(bole){
        responsivemenubar.style.transform="translateY(0)"
     bole_1=false
    }else{
        responsivemenubar.style.transform="translateY(-1000px)"
     bole_1=true
    }

}
