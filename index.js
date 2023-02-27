//this function for when a button hovering then chenge it is bg and color of it is text

hoveringEfect=(fstcol,sedcol,bgitem,text,bole)=>{
   if(bole){
    console.log('hei')
   
    bgitem.style.background=sedcol;
    text.style.color=fstcol;
    bgitem.style.transition="all ease-in-out .5s"
    
       
   }else{
       bgitem.style.transition="border ease-in-out .5s"
       bgitem.style.transition="background ease-in-out .6s"
     bgitem.style.background=fstcol;
       bgitem.style.border="1px solid #46ccdb"
       text.style.color=sedcol;
       
       
   }
}

// navebar right section "contact us" button
const last_list = document.querySelector('.last_list')
const last_list_a =document.querySelector('.last_list_a')
last_list.addEventListener('mouseenter',()=>{ hoveringEfect("white","#46ccdb",last_list,last_list_a,true) })
last_list.addEventListener('mouseleave',()=>{ hoveringEfect("white","#46ccdb",last_list,last_list_a,false) })

//home page text btn hover event
const homepagebtn =document.querySelector('.homepagebtn')
homepagebtn.addEventListener('mouseenter',()=>{ hoveringEfect("white","#46ccdb",homepagebtn,homepagebtn,true) })
homepagebtn.addEventListener('mouseleave',()=>{ hoveringEfect("white","#46ccdb",homepagebtn,homepagebtn,false) })

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
//this function for remove and add a navigation slider in the smalldevise
function navbar_remove_add(bole){
    if(bole){
        responsivemenubar.style.transform="translateY(0)"
     bole_1=false
    }else{
        responsivemenubar.style.transform="translateY(-1000px)"
        bole_1=true
    }

}

//----------------services section-------------------------

const card_1=document.querySelectorAll('.cardcontainer_1');

card_1.forEach((index)=>{
    let butn
    let imge
    index.addEventListener('mouseenter',(ind)=>{
        butn = ind.target.childNodes[3].childNodes[5]
        butn.style.background="#46ccdb"
        butn.childNodes[0].style.color="white"
        imge =ind.target.childNodes[1].children[0]
        imge.style.transform="scale(1.1)"
        
        let bg_of_cards =ind.target
        let h4 =ind.target.childNodes[3].childNodes[1]
        let p =ind.target.childNodes[3].childNodes[3]         
    })
    index.addEventListener('mouseleave',(ind)=>{
        butn.style.background="white"
        butn.childNodes[0].style.color="#46ccdb"
        imge.style.transform="scale(1)"
        

    })
})
