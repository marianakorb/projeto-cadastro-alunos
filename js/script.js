function cadastrarAluno() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fase = document.getElementById("select").value;
    
    if (nome && idade && genero && fase) {
      const aluno = {
        id: Math.floor(Math.random() * 1000), // Gerando um ID aleatório
        nome,
        idade,
        genero,
        fase,
    };
  
    // Adiciona o aluno à lista
    adicionarAluno(aluno);
    
} else {
        alert("Por favor, preencha todos os campos.");
    }
}

function adicionarAluno(aluno) {
    const listaAlunos = [];
    listaAlunos.push(aluno);
    
    mostrarListaAlunos(listaAlunos);
    
}

function mostrarListaAlunos(listaAlunos) {
    
    const queryParams = listaAlunos.map(aluno => 
        `id=${aluno.id}&nome=${(aluno.nome)}&idade=${aluno.idade}&genero=${(aluno.genero)}&fase=${aluno.fase}`
        ).join('&');
        
        const url = `listaAlunos.html?${queryParams}`;
        window.location.href = url
        
    }
  function alterarAluno(params) {
    const url = `alterarAluno.html?${params}`;
    window.location.href = url;
  }  
    /** 
    cadastraAluno() 
    se todos os campos estiverem preenchidos:
    - pega as informacoes do formulario;
    - cria um objeto com essas informacões + um id para esse aluno;
    - esse objeto é adicionado na lista de alunos
    - direciona para a pagina listaAlunos após o cadastro
    senao:
    -exibe mensagem de erro;
    criar uma tabela com as informações do aluno
    */
    
    
    /**
     Na página listaAlunos possui a opção de alterar o aluno.
Quando for solicitado a alteração do aluno é direcionado para a pagina alterarAluno.
- é preciso pegar as informações do aluno e imprimir nos respectivos inputs;
- quando confirmar a alteração é atualizado o objeto que tiver o id do aluno;
- exibe as informações atualizadas na lista de alunos;
- para excluir um aluno será pego o objeto com o id do aluno e removido.
*/