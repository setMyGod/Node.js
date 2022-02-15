const fs = require('fs');
const path = require("path");

fs.mkdir(path.join(__dirname,'main','online','inPerson'),{recursive:true},err => {
    if(err){
        console.log(err);
    }
})
fs.rmdir(path.join(__dirname,'main','online','inPerson'),err => {
    if(err){
        console.log(err);
    }
})

fs.mkdir(path.join(__dirname,'main','inPerson'),err => {
    if(err){
        console.log(err);
    }
})

const onlineUser = {
    name: "Andrii",
    age: 22,
    city: "Lviv"};
const inPersonUser = {
    name: 'Petro',
    age: 33,
    city: 'Kyiv'};

fs.writeFile(path.join(__dirname,"main",'inPerson','users.txt'),JSON.stringify(inPersonUser),err => {
    if(err){
        console.log(err);
    }
})
fs.writeFile(path.join(__dirname, 'main', 'online','users.txt'),JSON.stringify(onlineUser),err => {
    if(err){
        console.log(err);
    }
})

fs.appendFile(path.join(__dirname, 'main','inPerson', 'users.txt'),JSON.stringify(onlineUser),{flag:'w'},err => {
    if(err){
        console.log(err);
    }
})

fs.appendFile(path.join(__dirname,'main','online','users.txt'),JSON.stringify(inPersonUser),{flag:'w'},err => {
    if(err){
        console.log(err);
    }
})