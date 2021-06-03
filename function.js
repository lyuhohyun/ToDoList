const toDoinput = document.querySelector("input"); 
const toDobutton = document.querySelector("button");
const toDolist = docuemnt.querySelector("list"); // 왜 계속 여기서 오류가 날까...?

toDoButton.addEventListener("click", clickButton);

function handleClick(){
    const currentVal = toDoinput.value;
    paintTodo(currentVal);
    toDoinput.value ='';
}
button.onclick = handleClick

