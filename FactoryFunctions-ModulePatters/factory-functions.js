
// Factory Function, creates an object with the desired keys and properties

const Person = (name, age) => {

  const sayName = () => console.log(`my name is ${name}`)

  const sayAge = () => console.log(`${name} age is ${age}`)

  let object = {name: name, sayName: sayName, sayAge: sayAge} // "Normal" object

  return {name, sayName, age, sayAge} // Object Shorthand

  // Se o nome da variavel for o mesmo da propriedade do objeto não é necessario escrever 
  // - { KEY: VALUE } -
}








