document.querySelector('#btnEnviar').addEventListener('click', function(semCarregamento) {
    semCarregamento.preventDefault();

    document.querySelectorAll('form input').forEach(verificacao => {
        if (verificacao.value === '') {
            verificacao.classList.add('vazio');
            verificacao.nextElementSibling.classList.add('preenchimentoObrigatorio');
        } else {
            verificacao.classList.add('comConteudo');
            verificacao.classList.remove('vazio');
            verificacao.nextElementSibling.classList.remove('preenchimentoObrigatorio');
        }
    });

    document.querySelectorAll('form textarea').forEach(verificar => {
        if (verificar.value === '') {
            verificar.classList.add('vazio');
            verificar.nextElementSibling.classList.add('preenchimentoObrigatorio');
        } else {
            verificar.classList.add('comConteudo');
            verificar.classList.remove('vazio');
            verificar.nextElementSibling.classList.remove('preenchimentoObrigatorio');
        }
    });

    console.log('Clicou em enviar');
});

/*
<---    DESSA FORMA REALIZA A VERIFICAÇÃO SEM PRECISAR CLICAR EM ENVIAR    ---> */


/*
document.querySelectorAll('form input').forEach(input => {
    input.addEventListener('blur', function() {
        let aviso = input.nextElementSibling

        if(input.value.trim() === ''){
            input.classList.add('vazio')
            aviso.classList.remove('preenchimentoObrigatorioHidden')
            aviso.classList.add('preenchimentoObrigatorio')
        }else{
            input.classList.remove('vazio')
            aviso.classList.remove('preenchimentoObrigatorioHidden')
        }
    });
});

document.querySelectorAll('form input').forEach(input => {
    input.addEventListener('blur', function() {
        let aviso = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('vazio');
            aviso.classList.add('preenchimentoObrigatorio');
            aviso.classList.remove('preenchimentoObrigatorioHidden');
        } else {
            input.classList.remove('vazio');
            aviso.classList.remove('preenchimentoObrigatorio');
            aviso.classList.add('preenchimentoObrigatorioHidden');
        }
    });
});

document.querySelectorAll('.textArea').forEach(textArea => {
    textArea.addEventListener('blur', function() {
        let aviso = textArea.nextElementSibling;

        if (textArea.value.trim() === '') {
            textArea.classList.add('vazio');
            aviso.classList.add('preenchimentoObrigatorio'); 
        } else {
            textArea.classList.remove('vazio');
            aviso.classList.remove('preenchimentoObrigatorio'); 
        }
    });
});

*/


