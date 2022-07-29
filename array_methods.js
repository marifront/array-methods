const arr = [
    {id:1, name: 'Marina', age: 20, budget: 6333},
    {id:2, name: 'Maria', age: 25, budget: 2333},
    {id:3, name: 'Lera', age: 19, budget: 1333},
    {id:3, name: 'Gena', age: 14, budget: 4444}
  ]
  
  //forEach
  
  //ES6
  // arr.forEach((person, index, pArr) => {
  //   console.log(person);
  //    console.log(index);
  //    // console.log(pArr);
  // })
  
  //ES5
  // arr.forEach(function(person, index, pArr) {
  //   console.log(person);
  //    console.log(index);
  //    // console.log(pArr);
  // })
  
  //Map
  
  // const newArr = arr.map(person => `${person.name} (${person.age})`);
  // const newArr = arr.map(person => person.age *3);
  // console.log(newArr);
  
  //Filter
  
  // const newArr = arr.filter(person => person.age >= 18);
  // console.log(newArr);
  
  
  //Reduce
  
  // 1
  // const amount = arr.reduce((total, person) => {
  //   return total + person.budget
  // },0)
  
  // 2
  const amount = arr.reduce((total, person) =>  total + person.budget,0)
  console.log(amount)
  
  //Find
  
  // const marina = arr.find(person => person.name == 'Marina');
  // console.log(marina)
  
  //FindIndex
  
  const maria = arr.findIndex(person => person.name == 'Maria');
  console.log(maria)
  
  