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
     disableScroll()
    }else{
        responsivemenubar.style.transform="translateY(-2000px)"
        bole_1=true
        enableScroll()
    }

}

function navbrr(){
    responsivemenubar.style.transform="translateY(-2000px)"
    bole_1=true
    menue.classList.remove('fa-close')
       menue.classList.add('fa-bars')
       enableScroll()
}





function disableScroll() {


    document.querySelector('body').style.height='100%'
    document.querySelector('body').style.overflow='hidden'
  }
    
  function enableScroll() {

    document.querySelector('body').style.height='auto'
    document.querySelector('body').style.overflow='visible'
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
       
        e.target.childNodes[1].style.borderRadius="25px"
        e.target.childNodes[1].children[0].style.transform="scale(1.1)";
        button_bg=e.target.childNodes[5].children[1]
        button_bg.style.background="#46ccdb"
        button_bg.style.border="1px solid #46ccdb"
        button_bg.style.color="white"
    })
    index.addEventListener('mouseleave',(e)=>{
       
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
       
       i.target.children[0].children[0].style.filter="brightness(40%)"
       i.target.children[0].children[1].style.transform="translateX(0)"
    })
    e.addEventListener('mouseleave',(i)=>{
       
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
let buttn =document.querySelector('.buttondiv button')

buttn.addEventListener('mouseenter',()=>{
    hoveringEfect("#46ccdb","white",buttn,buttn,true)
     
})
buttn.addEventListener('mouseleave',()=>{
    hoveringEfect("#46ccdb","white",buttn,buttn,false)
     
})

const erorObj={
    numberError:"Phone number must have 10 digit's",
    isNumber:"is not a number please enter vlaid 10 digit's number",
    emailError:"Invalid emai please enter a valid email",
    emptyError:"This feald is required"

}

const form =document.getElementById('validationofform')


//------------p tag's id
let ptagArray=[
document.getElementById('nameid'),
document.getElementById('phoneid'),
document.getElementById('emailid'),
document.getElementById('msgid')
]


//---------input's
let inputArray=[
document.getElementById('name'),
document.getElementById('phone'),
document.getElementById('email'),
document.getElementById('msg')
]

let formArray=[
    document.querySelector('.form_1'),
    document.querySelector('.form_2'),
    document.querySelector('.form_3'),
    document.querySelector('.form_4'),    
]


function items(j,ptagArray,inputArray,obj){
    ptagArray[j].innerHTML=obj
    ptagArray[j].style.color="red"
    inputArray[j].style.borderBottom="1px solid red"
    

}

function removeItems(j,ptagArray,inputArray){
    ptagArray[j].innerHTML=""
    inputArray[j].style.borderBottom="1px solid var(--standerd)"

}

boll=true
console.log(formArray)


let labels
let oldLabels
let inputLab
let oldinputLab

formArray.forEach(function(el){

    el.addEventListener('click',function(){
        if(labels!=null){
        oldLabels=labels
        oldinputLab=inputLab
        }
        inputLab=el.children[0]
        labels=el.children[1]
       labels.style.top='-55px'
       labels.style.opacity='0.5'

    })
})

window.addEventListener('click',(e)=>{
   
      if(oldLabels!=labels &&  oldLabels!=null && !oldinputLab.value){

        oldLabels.style.top='-26px'
        oldLabels.style.opacity='1'
        
      }

      if(e.target!=inputLab && e.target!=buttn && !oldinputLab.value ){

        labels.style.top='-26px'
        labels.style.opacity='1'
       
      }

})

form.addEventListener('submit',(e)=>{
    console.log("it is calld")
    for(let i in inputArray){
        if(inputArray[i].value=="" || inputArray[i].value==null ){

            items(i,ptagArray,inputArray,erorObj.emptyError)
            boll=false
            e.preventDefault()
        }else{
            removeItems(i,ptagArray,inputArray)
            boll=true
        }
    }
    
    if(inputArray[1].value.length<10 && boll){
        items(1,ptagArray,inputArray,erorObj.numberError)
        e.preventDefault()
       
        
    }
    if(isNaN(inputArray[1].value)){
        items(1,ptagArray,inputArray,erorObj.isNumber)
        e.preventDefault()
    }

    if( !validateEmail(inputArray[2].value) && inputArray[2].value!=""  ){
        console.log('email is valided')
        items(2,ptagArray,inputArray,erorObj.emailError)
        e.preventDefault()

    }



    
})
    
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

    



