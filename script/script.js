let form = $('.formulario')

form.validate({
    errorElement: 'span',
    rules: {
        
    email: {
        required: true,
        email: true,
    },
        assunto: 'required',
        mensagem: 'required',
    },
    messages: {        
    email:{
        required: 'Digite seu e-mail para retornarmos.',
        email: 'Por favor, digite um e-mail válido!'
    },
        assunto: 'Por favor, digite o assunto.',
        mensagem: 'Por favor, digite uma mensagem.',
    }
});
//scroll da page
const button = document.getElementById("arrowTop")
button.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0);
})
window.addEventListener("scroll", function(){
    if(this.pageYOffset >900){
    button.hidden = false
    return false;
    }
    button.hidden = true;
})

   
    
