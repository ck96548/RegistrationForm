const btn = document.querySelector('.btn');
const myform = document.querySelector('#myform');
const container = document.querySelector('.container');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#user');

btn.addEventListener('click', addUser);

function addUser(e) {
    e.preventDefault();

    // getting user value like name and email
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;

    // creating obj of user 
    let obj = {
        name: nameInput.value,
        Email: emailInput.value
    }
    // adding user in local storage
    let userDetails = JSON.stringify(obj)
    if (localStorage.getItem(obj.Email) !== null) {
        removeUserFromScreen(obj.Email);
    }

    localStorage.setItem(obj.Email, userDetails)

    window.addEventListener("DOMContentLoaded", () => {
        const localStorageObj = localStorage;
        const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen(userDetailsObj)
        }
    })


    // creating edit btn
    let editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('edit'));

    // creating delete btn
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('delete'));

    // creating li element 
    let li = document.createElement('li');
    li.id = `${user.Email}`

    // adding user name and email to li element
    li.appendChild(document.createTextNode(userName + " " + userEmail));
    // adding edit and delete btn
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)

    // adding li element within UL element
    userList.append(li)

}

 function removeUserFromScreen(userEmail){
    const parentNode = document.getElementById('user');
    const childNodeToBeDeleted = document.getElementById('user.Email')
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
 }



// editing and deleting username and User email

container.addEventListener('click', editDeleteItem)


// edit user name and email
function editDeleteItem(e) {
    if (e.target.classList.contains('edit')) {
        //e.target.parrentElement;
        nameInput.value = ' ';
        emailInput.value = ' ';
    }

    // delete user name and email
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you ok')) {
            const parentNode = document.getElementById('user');
            const childNodeToBeDeleted = document.getElementById('userEmail')
            if(childNodeToBeDeleted){
                parentNode.removeChild(childNodeToBeDeleted);
            } 
        }
    }
}
