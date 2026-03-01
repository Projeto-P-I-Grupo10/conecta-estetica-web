const arrayCursos = [
  {
    id: 1,
    nome: "Harmonização Facial e Glútea",
    descricao: "Curso avançado de estética facial e corporal",
    professor: "João Silva",
    data_inicio: "2026-03-10",
    data_encerramento: "2026-03-20",
    area: "Estética Avançada",
    preco: 8500.00,
    vagas: 20,
    endereco: {
      cep: "01001-000",
      rua: "Av. Paulista",
      logradouro: "Sala 101",
      bairro: "Bela Vista",
      numero: "1234",
      complemento: "Bloco B",
      cidade: "São Paulo",
      estado: "SP"
    }
  },
  {
    id: 2,
    nome: "Limpeza de Pele Profunda",
    descricao: "Curso básico de técnicas de limpeza facial",
    professor: "Maria Oliveira",
    data_inicio: "2026-04-05",
    data_encerramento: "2026-04-10",
    area: "Estética Básica",
    preco: 1200.00,
    vagas: 15,
    endereco: {
      cep: "20040-020",
      rua: "Rua da Quitanda",
      logradouro: "2º Andar",
      bairro: "Centro",
      numero: "567",
      complemento: "Sala 12",
      cidade: "Rio de Janeiro",
      estado: "RJ"
    }
  },
  {
    id: 3,
    nome: "Massagem Relaxante",
    descricao: "Curso prático de técnicas de massagem para bem-estar",
    professor: "Carlos Pereira",
    data_inicio: "2026-05-01",
    data_encerramento: "2026-05-07",
    area: "Bem-estar",
    preco: 600.00,
    vagas: 10,
    endereco: {
      cep: "30130-010",
      rua: "Av. Afonso Pena",
      logradouro: "Loja 5",
      bairro: "Funcionários",
      numero: "890",
      complemento: "Shopping Center",
      cidade: "Belo Horizonte",
      estado: "MG"
    }
  }
];



  function renderizarCursos() {
    const tbody = document.getElementById("listarCursos");
    tbody.innerHTML = ""; 

    arrayCursos.forEach(curso => {
      const tr = document.createElement("tr");

      tr.innerHTML = ` <td>${curso.id}</td>
      <td>${curso.nome}</td>
      <td>${curso.area}</td>
      <td>${curso.preco}</td>
      <td>${curso.vagas}</td>
      <td class="text-center"> 
        <button onclick="atualizarCurso(${curso.id})" class="dropdown-item">
           <i class="fas fa-edit fa-lg text-secondary"></i> 
        </button> 
      </td>
      <td class="text-center">
         <button onclick="deletarCurso(${curso.id})" class="dropdown-item">
           <i class="fas fa-trash-alt fa-lg text-danger"></i>
          </button>
      </td> `;

      tbody.appendChild(tr);
    });
  }

  renderizarCursos();
  function adicionarCurso() {
    console.log("chamou o modal");
    modal_container_adicionar.innerHTML = `
    <div class="modal-container show">
      <div class="modal-overlay" onclick="fecharModal()"></div>
      <div class="modal">
        <button class="close-btn" onclick="fecharModal()">✖</button>
        
        <div class="form_curso container-fluid">
          <div class="row mb-3">
            <div class="col-12">
              <h1>Cadastrar Curso</h1>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_nome">Nome do Curso:</label>
              <input type="text" class="form-control" id="input_nome" placeholder="Ex: Harmonização Facial">
            </div>
            <div class="col-md-6">
              <label for="input_descricao">Descrição:</label>
              <input type="text" class="form-control" id="input_descricao" placeholder="Breve descrição do curso">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_data_inicio">Data de Início:</label>
              <input type="date" class="form-control" id="input_data_inicio">
            </div>
            <div class="col-md-6">
              <label for="input_data_encerramento">Data de Encerramento:</label>
              <input type="date" class="form-control" id="input_data_encerramento">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_professor">Professor:</label>
              <input type="text" class="form-control" id="input_professor" placeholder="Ex: João Silva">
            </div>
            <div class="col-md-3">
              <label for="input_preco">Preço (R$):</label>
              <input type="number" step="0.01" class="form-control" id="input_preco" placeholder="Ex: 8500.00">
            </div>
            <div class="col-md-3">
              <label for="input_vagas">Qtd Vagas:</label>
              <input type="number" class="form-control" id="input_vagas" placeholder="Ex: 20" value="20">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_area">Área:</label>
              <input type="text" class="form-control" id="input_area" placeholder="Ex: Estética Avançada">
            </div>
            <div class="col-md-6">
              <label for="input_iniciado">Curso Iniciado?</label>
              <select class="form-control" id="input_iniciado">
                <option value="0">Não</option>
                <option value="1">Sim</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <h2>Endereço</h2>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
             <label for="input_cep">CEP:</label>
             <input type="text" class="form-control" id="input_cep" placeholder="Ex: 01001-000" maxlength="9">
            </div>
            <div class="col-md-6">
              <label for="input_rua">Rua:</label>
              <input type="text" class="form-control" id="input_rua" placeholder="Ex: Av. Paulista">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <label for="input_bairro">Bairro:</label>
              <input type="text" class="form-control" id="input_bairro" placeholder="Ex: Bela Vista">
            </div>
            <div class="col-md-4">
              <label for="input_numero">Número:</label>
              <input type="text" class="form-control" id="input_numero" placeholder="Ex: 1234">
            </div>
            <div class="col-md-4">
              <label for="input_complemento">Complemento:</label>
              <input type="text" class="form-control" id="input_complemento" placeholder="Ex: Bloco B">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_cidade">Cidade:</label>
              <input type="text" class="form-control" id="input_cidade" placeholder="Ex: São Paulo">
            </div>
            <div class="col-md-6">
              <label for="input_estado">Estado:</label>
              <input type="text" class="form-control" id="input_estado" placeholder="Ex: SP">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-success me-2" onclick="inserirCurso()">Cadastrar Curso</button>
              <button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }

function deletarCurso(id) {
  console.log("chamou o modal");

  modal_container_adicionar.innerHTML = `
    <div class="modal-container show">
      <div class="modal-overlay" onclick="fecharModal()"></div>
      <div class="modaldel modal-delete">
         <button class="close-btn" onclick="fecharModal()">✖</button>
        <h3>Excluir Curso</h3>
        <p>Deseja realmente excluir o curso <strong>ID ${id}</strong>?</p>
        <div class="delete-actions">
          <button class="btn-cancel" onclick="fecharModal()">Não</button>
          <button class="btn-confirm" onclick="confirmarDelete(${id})">Sim</button>
        </div>
      </div>
    </div>
  `;
}


  // aqui é a fucao que faz o delete do array/json/ aqui vocês tem que ver como vão fazer deixei como eu faria
  //aqui também depende do nome do json principal, não sei como vai ser feito fiquem avontade pra só apagar e refazer
  function confirmarDelete(id) {
    console.log("Curso deletado com ID:", id);

    // como eu faria pra remover duj array 
    //aqui ele proucura a posicao do id que voce passar, se ele lnão achar  retorna -1
    const posicao = arrayCursos.findIndex(c => c.id === id);
    //vcs nao sao burro ,mas aqui signifca que se a posicao for difernete de -1 ou seja ele achou o id dentro dos cursos ele apaga com splice, 
    //que espera a posicao onde ele vai comecar e o segundo parametro é a quantidade que ele vai remover apartir dai.
    if (posicao !== -1) {
      arrayCursos.splice(posicao, 1);
      alert("Curso excluído com sucesso!");
      //da um reload aquiiii
    }

    fecharModal();
  }

  function atualizarCurso(id) {
    console.log("chamou o modal");

    const curso = arrayCursos.find(c => c.id === id);
    if (!curso) {
      alert("Curso não encontrado!");
      return;
    }

    modal_container_adicionar.innerHTML = `
    <div class="modal-container show">
      <div class="modal-overlay" onclick="fecharModal()"></div>
      <div class="modal">
        <button class="close-btn" onclick="fecharModal()">✖</button>
        
        <div class="form_curso container-fluid">
          <div class="row mb-3">
            <div class="col-12">
              <h1>Atualizar Curso</h1>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_nome">Nome do Curso:</label>
              <input type="text" class="form-control" id="input_nome" value="${curso.nome}">
            </div>
            <div class="col-md-6">
              <label for="input_descricao">Descrição:</label>
              <input type="text" class="form-control" id="input_descricao" value="${curso.descricao}">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_data_inicio">Data de Início:</label>
              <input type="date" class="form-control" id="input_data_inicio" value="${curso.data_inicio}">
            </div>
            <div class="col-md-6">
              <label for="input_data_encerramento">Data de Encerramento:</label>
              <input type="date" class="form-control" id="input_data_encerramento" value="${curso.data_encerramento}">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_professor">Professor:</label>
              <input type="text" class="form-control" id="input_professor" value="${curso.professor}">
            </div>
            <div class="col-md-3">
              <label for="input_preco">Preço (R$):</label>
              <input type="number" step="0.01" class="form-control" id="input_preco" value="${curso.preco}">
            </div>
            <div class="col-md-3">
              <label for="input_vagas">Qtd Vagas:</label>
              <input type="number" class="form-control" id="input_vagas" value="${curso.vagas}">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_area">Área:</label>
              <input type="text" class="form-control" id="input_area" value="${curso.area}">
            </div>
            <div class="col-md-6">
              <label for="input_iniciado">Curso Iniciado?</label>
              <select class="form-control" id="input_iniciado">
                <option value="0" ${curso.iniciado === 0 ? "selected" : ""}>Não</option>
                <option value="1" ${curso.iniciado === 1 ? "selected" : ""}>Sim</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <h2>Endereço</h2>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_cep">CEP:</label>
              <input type="text" class="form-control" id="input_cep" value="${curso.endereco.cep}" maxlength="9">
            </div>
            <div class="col-md-6">
              <label for="input_rua">Rua:</label>
              <input type="text" class="form-control" id="input_rua" value="${curso.endereco.rua}">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <label for="input_bairro">Bairro:</label>
              <input type="text" class="form-control" id="input_bairro" value="${curso.endereco.bairro}">
            </div>
            <div class="col-md-4">
              <label for="input_numero">Número:</label>
              <input type="text" class="form-control" id="input_numero" value="${curso.endereco.numero}">
            </div>
            <div class="col-md-4">
              <label for="input_complemento">Complemento:</label>
              <input type="text" class="form-control" id="input_complemento" value="${curso.endereco.complemento}">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="input_cidade">Cidade:</label>
              <input type="text" class="form-control" id="input_cidade" value="${curso.endereco.cidade}">
            </div>
            <div class="col-md-6">
              <label for="input_estado">Estado:</label>
              <input type="text" class="form-control" id="input_estado" value="${curso.endereco.estado}">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-success me-2" onclick="salvarAtualizacao(${curso.id})">Salvar Alterações</button>
              <button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }
  function fecharModal() {
    modal_container_adicionar.innerHTML = ``;
  }