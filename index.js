const ham = document.getElementById('ham');
const cancel = document.getElementById('cancel');
const nav = document.getElementById('nav');

ham.addEventListener('click', () =>{
   if(nav.classList.contains('hidden')){
    nav.classList.remove('hidden');
    ham.classList.add('hidden');
   }
   cancel.addEventListener('click', () =>{
             nav.classList.add('hidden');
             ham.classList.remove('hidden');
   })
});