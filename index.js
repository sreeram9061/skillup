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
       bgitem.style.border="1px solid sedcol"
       text.style.color=sedcol;
       console.log("false")
       
       
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

//-------------------scrooling page button------------------------

const scrolbutn=document.querySelector('.scroolign_btn button')


scrolbutn.addEventListener('mouseenter',()=>{ hoveringEfect("#46ccdb","white",scrolbutn,scrolbutn,true) })
scrolbutn.addEventListener('mouseleave',()=>{ hoveringEfect("#46ccdb","white",scrolbutn,scrolbutn,false) })


//-----------------this section for news an blog section code----------

const card =document.querySelectorAll('.newsblogs_section .newsblogs .card')
let button_bg
card.forEach((index)=>{
    index.addEventListener('mouseenter',(e)=>{
        console.log(e)
        e.target.childNodes[1].style.borderRadius="25px"
        e.target.childNodes[1].children[0].style.transform="scale(1.1)";
        button_bg=e.target.childNodes[5].children[1]
        button_bg.style.background="#46ccdb"
        button_bg.style.border="1px solid #46ccdb"
        button_bg.style.color="white"
    })
    index.addEventListener('mouseleave',(e)=>{
        console.log(e)
        e.target.childNodes[1].children[0].style.transform="none";
        button_bg=e.target.childNodes[5].children[1]
        button_bg.style.background="ghostwhite"
        button_bg.style.border="1px solid rgb(147, 146, 146)"
        button_bg.style.color="black"
        e.target.childNodes[1].style.borderRadius="0"
    })

})


//---------------------contact aus---------------------------

const profile =document.querySelectorAll('.about_us .container_of_about_us .profile_container .profile')

profile.forEach(e=>{
    e.addEventListener('mouseenter',(i)=>{
        console.log(i)
       i.target.children[0].children[0].style.filter="brightness(40%)"
       i.target.children[0].children[1].style.transform="translateX(0)"
    })
    e.addEventListener('mouseleave',(i)=>{
        console.log(i)
       i.target.children[0].children[0].style.filter="brightness(100%)"
       i.target.children[0].children[1].style.transform="translateX(60px)"
    })
})


//----------------------courses-------------------------------

const cos=document.querySelectorAll('.courses .coursesitems .slice')
let bol=false
cos.forEach(index=>{
   
   index.addEventListener('mouseenter',e=>{
    e.target.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
   })

   index.addEventListener('mouseleave',e=>{
    e.target.style.boxShadow="none"
   })
   index.addEventListener('click',()=>{
    
    if(!bol){
        index.children[1].style.display="block"
        index.style.height="auto"
        index.children[0].children[0].style.display="none"
        index.children[0].children[1].style.display="block"
        bol=true
    }else{
        index.children[1].style.display="none"
        index.style.height="85px"
        index.children[0].children[1].style.display="none"
        index.children[0].children[0].style.display="block"
        bol=false

    }
    
   })
})


//----------------form section----------------------


let inp_texa
inp_texa =document.querySelectorAll('.formvalidation form .container .forr')

let lavel=[]
inp_texa.forEach(e=>{
  e.addEventListener('click',()=>{
    
    lavel.push(e.children[0])
    lavel.forEach(m=>{
        m.style.top='0'
    })
   
    for(let i in lavel){
        if(i>0){
            lavel[i-1].style.top='30px'
        console.log(lavel[i-1])
        }
        
    }

    
     
  })
})



window.onclick = (event)=> {
    if(!event.target.matches('.forr') && !event.target.matches('.formvalidation form .container div input') && !event.target.matches('.formvalidation form .container div textarea')){
       
        lavel.forEach(m=>{
            m.style.top='30px'
        })

        lavel=[]
        
    }



}