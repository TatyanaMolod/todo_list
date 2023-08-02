let addMessage = document.querySelector('.list__input'),
    addButton = document.querySelector('.list__button'),
    todoList = document.querySelector('.list__items');


addButton.addEventListener('click', function(){
    if (addMessage.value == ""){
        return
    }
    const li = document.createElement('li')
    li.innerHTML = addMessage.value
    todoList.appendChild(li)
    const span = document.createElement('span')
    li.appendChild(span)
    addMessage.value =''  
    saveData()
    
    
})

todoList.addEventListener('click', function(event){
    let target = event.target;
    if (target.tagName === 'LI'){
        target.classList.toggle('check')
        saveData()
        
    }
    else if (target.tagName === 'SPAN'){
        target.parentElement.remove()
        saveData()
    }
    
})

function saveData(){
    localStorage.setItem("data", todoList.innerHTML)
}

function printData(){
    todoList.innerHTML = localStorage.getItem("data")
}

printData()