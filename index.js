const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const cancel = document.getElementById('cancel');
const logo = document.getElementById('logo');

 burger.addEventListener ('click', () =>{
    if(nav.classList.contains('hidden') ){
        nav.classList.remove('hidden');
     
     logo.classList.add("hidden");
     burger.classList.add("hidden");

    
    }
}) ;
cancel.addEventListener('click', () =>{
    nav.classList.add('hidden')
    logo.classList.remove("hidden");
    burger.classList.remove("hidden");
})

