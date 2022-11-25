
// const item = document.getElementsByTagName("li");
// //console.log(document.getElementsByClassName('item'))
// //console.log(document.getElementsByTagName('li'))

// //ul.firstElementChild.textContent = 'Hello';

// for (let i = 0; i < item.length; i++) {
//     console.log(item[i])
//     item[i].style.fontSize = "50px";
//     item[i].style.color = "red";
//     if(i == 0){
//         item[i].textContent = 'Hello';
//         item[i].style.color = "Yellow";
//     }else if(i == 1){
//         item[i].style.color = "green";
//     }


// }

const btn = document.querySelector('.btn');
const myform = document.querySelector('#myform');
const container = document.querySelector('.container');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#user');

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     console.log("mouseover");
//     myform.style.background = 'yellow'
//     container.style.background = 'pink'
// });
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log("mouseout");
//     myform.style.background = 'green'
//     container.style.background = 'grey'
// });
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("click");
//     myform.style.background = 'brown'
//     container.style.background = 'red'
// });

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();



    if (nameInput.value === '' || emailInput === '') {
        msg.innerHTML = 'Please enter all the details'

        setTimeout(() => msg.remove(), 3000);
    } else {
        //let li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // userList.appendChild(li);

        // // clear field

        // nameInput = '';
        // emailInput = '';

        // localStorage.setItem("name",nameInput.value)

        // localStorage.setItem("Email",emailInput.value)


        // adding user name and email in a list and display on browser 

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

            if(localStorage.getItem(userEmail) !== null){
                removeUserFromScreen(userEmail)
            }
            localStorage.setItem(obj.Email, userDetails)

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
            // adding user name and email to li element
            li.appendChild(document.createTextNode(userName + " " + userEmail));
            // adding edit and delete btn
            li.appendChild(editBtn)
            li.appendChild(deleteBtn)

            // adding li element within UL element
            userList.append(li)



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
                    let li = e.target.parrentElement;
                    userList.remove(li)
                }
            }
        }





    }
}




