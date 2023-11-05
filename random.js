const access= document.getElementById("password");
const length=8;
const uppercase="ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const specialsymbol="@#!$&*?/";
const randomchar=uppercase+lowercase+numbers+specialsymbol;

function randomnum(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=specialsymbol[Math.floor(Math.random()*specialsymbol.length)];
    while(length>password.length){
        password+=randomchar[Math.floor(Math.random()*randomchar.length)];
    }
    access.value=password;
}
