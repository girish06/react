const num = [1,2];
const newNum = [...num,3];
console.log(newNum);


const person = {
  name: 'girish'
}

const newPerson = {
  ...person,
  age: 10,
}


console.log(newPerson);

const filters = (...args) => {
  return args.filter(el => el ===2);  
}

console.log(filters(1,2,3));
