function buscarCursos() {
  return fetch("http://localhost:8080/arrayCursos")
    .then(response => response.json());
}

const arrayCursos = buscarCursos()
  .then(cursos => {
    console.log(cursos);
  })
  .catch(erro => {
    console.error("Erro ao buscar cursos:", erro);
  });

console.log(arrayCursos)

function renderizarCursos() {
  const tbody = document.getElementById("listarCursos");
  tbody.innerHTML = "";

  buscarCursos().then(cursos => {
    cursos.forEach(curso => {
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

function confirmarDelete(id) {
    fetch(`http://localhost:8080/arrayCursos/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    alert("Curso excluído com sucesso!");
    fecharModal();
    carregarCursos();
  })
  .catch(error => {
    console.error("Erro ao deletar:", error);
  });
}

function atualizarCurso(id) {
  console.log("chamou o modal");
  buscarCursos()
    .then(cursos => {
      const curso = cursos.find(c => c.id === id);
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
    })
}
function fecharModal() {
  modal_container_adicionar.innerHTML = ``;
}