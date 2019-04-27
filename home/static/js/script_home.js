console.log('hello user');

const caixa=document.querySelector('#box');
const texto=document.querySelector('h1');
const form=document.querySelector('form')

// let enter = event.keyCode==13

// function myFunction(event) {
//     if ((window.event ? event.keyCode : event.which) == 13) {        
//             caixa.style.display='none';
//             texto.style.display='none';
//             form.style.display='none'; 
// }
// }

function myFunction() {
    input.addEventListener('keyup',function(e){
        if (e.keyCode === 13) {
            caixa.style.display='none';
            texto.style.display='none';
            form.style.display='none'; 
}  
})
}

// Pikachu aparece

const aparece=document.querySelector('#Pikachu');

// function ta_da() {
//     if (texto)
//         aparece.style.display='flex';
// } 

function h1(){
        aparece.style.display='flex';  
};

texto.onclick=h1