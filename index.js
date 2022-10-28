const userInput = document.getElementById('userInput');
const userBtn = document.getElementById('userBtn');
const userInputCon = document.getElementById('userInputCon');

userBtn.addEventListener('click',()=>{
    if(userInput.value===""){
        alert("You have to insert something");
    }else{
        let parentDiv = document.createElement('div');
        let list = document.createElement('li');
        list.innerText=`${userInput.value}`;
        userInput.value="";
        parentDiv.append(list);
        userInputCon.append(parentDiv);
    
        let editBtn = document.createElement('button');
        editBtn.innerText ="Edit";
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText= "Delete";
        parentDiv.append(editBtn,deleteBtn);
    
        deleteBtn.addEventListener('click',()=>{
            parentDiv.remove();
        })
        editBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            if(editBtn.innerText==="Edit"){
                const childInput = document.getElementById('userInput');
                childInput.focus();
                editBtn.innerText="Save";
                
            }else{
                list.innerText=`${userInput.value}`;
                userInput.value="";
                editBtn.innerText="Edit";
            }
        })
    }
   
})
