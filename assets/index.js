
const submit = document.getElementById('submit')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')


// validação do email 
// const validacao = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+?\.[a-zA-Z0-9.-_]+$/
// um numero valido seria +55 948172515
//                        +55948172515
//                        caracter +, dois numeros , nove numeros  
// const number = /^\+[0-9]{2}[0-9]{9}$/ 


inputEmail.oninput = ()=>{
    const checkInput = inputEmail.parentElement.querySelector('.checkInput');
    const email = inputEmail.value;

    if(!email){
        checkInput.classList.remove('ph-x-circle');
        checkInput.classList.remove('ph-check-circle');
        return;
    }

    if(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+?\.[a-zA-Z0-9.-_]+$/.test(email) ||
       /^\+[0-9]{2} *[0-9]{9}$/.test(email)){
        checkInput.classList.add('ph-check-circle');
        checkInput.classList.remove('ph-x-circle');
    }else{
        checkInput.classList.add('ph-x-circle');
        checkInput.classList.remove('ph-check-circle');
    }
}

inputSenha.oninput = ()=>{
    const checkInput = inputSenha.parentElement.querySelector('.checkInput');
    const password = inputSenha.value;
    
    if(!inputSenha.value){
        checkInput.classList.remove('ph-x-circle');
        checkInput.classList.remove('ph-check-circle');
        return;
    }

    if(password.length >= 8 && /[@#$%&]+/.test(password) && /[A-Z]+/.test(password)){
        checkInput.classList.add('ph-check-circle');
        checkInput.classList.remove('ph-x-circle');
    }else{
        checkInput.classList.add('ph-x-circle');
        checkInput.classList.remove('ph-check-circle');
    }
}


function sucess(){
    const iconSucess = document.querySelectorAll('.checkInput')
    iconSucess.forEach((input)=>{
        input.classList.add('ph-check-circle');       
    })
}

function invalid(){
    const iconX = document.querySelectorAll('.checkInput')
    iconX.forEach((input)=>{
        input.classList.add('ph-x-circle');
    })
}