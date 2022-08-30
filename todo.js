document.getElementById('adicionar').addEventListener('click', function(){
    const inputTarefa = document.getElementById('tarefa');
    const tarefa = inputTarefa.value;
    if (tarefa.trim()){
        const li = document.createElement ('li');
        li.innerText = tarefa;
        document.getElementById('tarefas').appendChild(li);
        inputTarefa.value = '';
    }
})