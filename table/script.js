const studentTable = document.getElementById('student-info')
const addButton = document.getElementById('show_form')
const deleteButton = document.getElementById('delete')
const addForm = document.getElementById('form')
const submitButton = document.getElementById('add')
const cancelButton = document.getElementById('cancel')

addButton.addEventListener('click', () => {
  addForm.style.display = 'block'
})

cancelButton.addEventListener('click', () => {
  addForm.style.display = 'none'
  clearForm()
})

studentTable.addEventListener('click', (e) => {
  const row = e.target.closest('tr')
  if (row) {
    row.classList.toggle('selected')
  }
})

submitButton.addEventListener('click', () => {
  console.log('clicked')
  const code = document.getElementById('code').value
  const nom = document.getElementById('nom').value
  const prenom = document.getElementById('prenom').value
  const semestre = document.getElementById('semestre').value
  const filiere = document.getElementById('filiere').value
  const action = document.getElementById('action').value

  const newRow = `
        <tr>
            <td>${code}</td>
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${semestre}</td>
            <td>${filiere}</td>
            <td>${action}</td>
        </tr>
    `

  studentTable.innerHTML += newRow
  addForm.style.display = 'none'
  clearForm()
})

deleteButton.addEventListener('click', () => {
  const selectedRows = studentTable.querySelectorAll('.selected');
  selectedRows.forEach(row => {
      row.remove();
  });
});

function clearForm() {
  document.getElementById('code').value = ''
  document.getElementById('nom').value = ''
  document.getElementById('prenom').value = ''
  document.getElementById('semestre').value = ''
  document.getElementById('filiere').value = ''
  document.getElementById('action').value = ''
}