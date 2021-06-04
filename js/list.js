let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(event) {
    
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(event){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function(event){
        toDoContainer.removeChild(paragraph);
    })
    
});
