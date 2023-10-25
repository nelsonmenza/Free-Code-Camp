const input = document.getElementById('enter-todo');
const btn = document.querySelector('button');
const todoList = document.getElementById("todo-list");

function addTodo() {
    // verify if input has value or not 
    if (input.value) {
        let newTodo = document.createElement('div');
        newTodo.classList.add('todo');
        // text added by user 
        let text = document.createElement('p');
        text.innerHTML = input.value;

        // create and add the container icons 
        let icon = document.createElement('div')
        icon.classList.add('icons')
        newTodo.append(text, icon)
        // newTodo.appendChild(icon)


        // icons 
        let finished = document.createElement('i')
        finished.classList.add('bi', 'bi-check-circle-fill', 'icon-finished')
        finished.addEventListener('click', todoFinished)

        let deleteIcon = document.createElement('i')
        deleteIcon.classList.add('bi', 'bi-trash3-fill', 'icon-delete')
        deleteIcon.addEventListener('click', todoDelete)


        icon.append(finished, deleteIcon)

        todoList.appendChild(newTodo)
    
        input.value=""


    } else {
        alert('Input text is empty, Please, enter a todo.')
    }
}
// mark as finished 
function todoFinished(e) {
    let todo = e.target.parentNode.parentNode;
    todo.classList.toggle('finished')

}

// delete the a task 

function todoDelete(e) {
    let todo = e.target.parentNode.parentNode
    todo.remove()
}

// button event listener 
btn.addEventListener('click', addTodo)
// If press Enter Event keydown 
input.addEventListener('keydown',(e)=>{
    if (e.key==='Enter'){
        addTodo()
    }
})