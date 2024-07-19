/*  --------------- mentors_request page js -------------------- */ 
const A=document.getElementById("task-area");
const B=document.getElementById("single-task");
const C=document.getElementById("tasks");

// add a new task to the list
function addTask(event){
    event.preventDefault();
    if(B.value === "") return;
    const task=createTask(B.value);
    C.appendChild(task);
    B.value = "";
}
// create new task element
function createTask(taskName){
 const task = document.createElement('li');
 task.classList.add('task')
 task.innerHTML=`
  <div class="task_sarlavha">
  <label>${taskName}№32166</label>
  <label>${taskName}11.08.2023</label>
  <span>Yuborildi</span>
  </div>
  <div class="task_road_btn" >
  <span class="delete"><i class="bi bi-trash3"></i></span>
  <span class="task_road"><i class="bi bi-chevron-right"></i></span>
  </div>
 `;
 // add delete btn
 const deleteButton = task.querySelector('.delete');
 deleteButton.addEventListener("click",deleteTask);

 return task;
}
// delete task from the list
function deleteTask(event){
    event.target.parentElement.parentElement.parentElement.remove();
}
A.addEventListener("submit",addTask);
/*  --------------- /mentors_request page js -------------------- */ 