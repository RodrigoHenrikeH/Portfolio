const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function(event) {
  
    event.preventDefault();
  
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');
  
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Endereço de e-mail inválido - Um exemplo de formato correto seria: "email@provedor.com"(não se esqueça do "@" nem do ".com").';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');
  
    if (campoAssunto.value.length < 5) {
      txtAssunto.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoAssunto.focus();
      return;
    }else{
      txtAssunto.innerHTML = '';
    }

    const campoMensagem = document.querySelector('#mensagem');

    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = ''
    campoEmail.value = ''
    campoAssunto.value = ''
    campoMensagem.value = ''

  });