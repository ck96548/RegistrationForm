
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

        setTimeout(() =>msg.remove(),3000);
    } else {
        //let li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // userList.appendChild(li);

        // // clear field

        // nameInput = '';
        // emailInput = '';
        
        localStorage.setItem("name",nameInput.value)

        localStorage.setItem("Email",emailInput.value)

        let obj = {
            name:nameInput.value,
            Email:emailInput.value
        }
        let userDetails = JSON.stringify(obj)
        localStorage.setItem("User Details",userDetails)

    }
}




