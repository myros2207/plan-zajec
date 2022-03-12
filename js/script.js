// Запис інформації ведення

  const form = document.getElementById('form1')

    const formFileds = form.elements;

function changeHandler(){
     if(this.type !=='chekbox'){
         console.log(this.name, this.value)
         localStorage.setItem(this.name, this.value )
     }
}

function  chekStorage(){
    for (let i=0; i < formFileds.length; i++){
        if (formFileds [i].type !=='submit'){
           if (formFileds[i].type ==='checked'){
               formFileds[i].checked = localStorage.getItem(formFileds[i].name)
           }
           else {
               formFileds[i].value = localStorage.getItem(formFileds[i].name)
           }
        }
    }
    attachEvents();
}

function attachEvents(){
    for (let i=0; i < formFileds.length; i++){
        formFileds[i].addEventListener('change', changeHandler)
    }
}
chekStorage();

