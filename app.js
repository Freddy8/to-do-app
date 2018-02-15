

function onReady() {
  let id = 0;
let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  function createNewToDo() {
    if (!newToDoText.value) { return; }
        toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id++,
      });

        newToDoText.value = '';

        renderTheUI();
   }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const debutton = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(debutton);

      debutton.addEventListener('click', () =>{
        deleteToDo(toDo.id);
      });
   });
 }
 function deleteToDo(id) {

   toDos = toDos.filter(item => item.id !== id);
   renderTheUI();
 };
 addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
       newToDoText.value = '';
     });
renderTheUI();


  }

}




window.onload = function() {
  onReady();
};
