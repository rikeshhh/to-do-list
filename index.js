const userInput = document.getElementById('userInput');
const userBtn = document.getElementById('userBtn');
const userInputCon = document.getElementById('userInputCon');

userBtn.addEventListener('click',()=>{
    let parentDiv = document.createElement('div');
    let list = document.createElement('li');
    list.innerText=`${userInput.value}`;
    parentDiv.append(list);
    userInputCon.append(parentDiv);
})