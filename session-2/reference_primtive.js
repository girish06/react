
const num = 2;
const num1 = num;
console.log(num1);


const person = {  
  name : 'girish'
};

const newPerson = person;
person.name = 'giri';
console.log(newPerson);


const cperson = {
  cname: 'cgiri'
};

const cnewPerson = {
  ...cperson
};

console.log(cnewPerson);
