
//function to store the values as object

function handleFormSubmit(event){
    event.preventDefault();
   const description = event.target.description.value;
   const amount = event.target.amount.value;
   const category = event.target.category.value;
   const obj = {
    description,
    amount,
    category
   };
   const userDetailsJSON = JSON.stringify(obj);
   localStorage.setItem(obj.amount,userDetailsJSON);
   event.target.description.value='';
   event.target.amount.value='';
   displayOnScreen(obj);
}
function displayOnScreen(obj){
    const ul = document.getElementById('user-list');
    const li = document.createElement('li');
    li.textContent = obj.description+"-"+obj.amount+"-"+obj.category;
    //creting delete button and add duction of the delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('btn','btn-danger','btn-sm')    
    delBtn.addEventListener('click',function(event){
        event.preventDefault();
        localStorage.removeItem(obj.amount);
        li.remove();
    });
    //creatin the edit button and add fuctioning of this edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('btn', 'btn-warning','btn-sm');
    editBtn.addEventListener('click', function(event){
        event.preventDefault();
        localStorage.removeItem(obj.amount);
        li.remove();

        // Populate input fields with existing values
        document.getElementById('description').value = obj.description;
        document.getElementById('amount').value = obj.amount;
        document.getElementById('category').value = obj.category;
    });   

    
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
}

 