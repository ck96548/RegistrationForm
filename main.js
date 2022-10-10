
const item = document.getElementsByTagName("li");
//console.log(document.getElementsByClassName('item'))
//console.log(document.getElementsByTagName('li'))

//ul.firstElementChild.textContent = 'Hello';

for (let i = 0; i < item.length; i++) {
    console.log(item[i])
    item[i].style.fontSize = "50px";
    item[i].style.color = "red";
    if(i == 0){
        item[i].textContent = 'Hello';
        item[i].style.color = "Yellow";
    }else if(i == 1){
        item[i].style.color = "green";
    }
    
    
}




