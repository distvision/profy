// procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
  // Duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  
  // Limpar os campos
  const fields = newFieldContainer.querySelectorAll('input')

  // para cada campo limpar
  fields.forEach(function(field) {
    // pega o field e limpa ele
    field.value= ""
  })

  // colocar na página
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}