let alunos = [
    ['Samuel', 'samuel@gmail.com', '85 88888888'],
    ['Bruno', 'bruno@gmail.com', '85 88888888'],
    ['Matheus', 'matheus@gmail.com', '85 88888888'],
    ['Marcelo', 'marcelo@gmail.com', '85 88888888'],
    ['Julio', 'julio@gmail.com', '85 99999999'] 
];

function novo() {
    pagina_novo.style.display = 'block'; //mostrar
    pagina_listar.style.display = 'none'; //esconder
}

function listar() {
    pagina_listar.style.display = 'block'; //mostrar 
    pagina_novo.style.display = 'none'; //esconder
    
    alunos.forEach(function (cadaAluno) {
        tabela_alunos.innerHTML += `
            <tr>
                <td>${cadaAluno[0]}</td>
                <td>${cadaAluno[1]}</td>
                <td>${cadaAluno[2]}</td>
                <td>---</td>
             </tr>
        `;

    });
}

function atualizarListar(){
    tabela_alunos.innerHTML = '';
}


function adiconar () {
    event.preventDefault();
       alunos.push([`${nome.value}`,`${email.value}`,`${telefone.value}`]);
       
       listar_aluno();
}

