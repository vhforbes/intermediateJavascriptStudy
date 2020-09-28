
// ---------------- Prototype Property -------------------

  function PrintStuff (myDocuments) {
    this.documents = myDocuments;
    }

  // Com o prototype, todos os objetos criados com PrintStuff terão o metodo print embutidos

  PrintStuff.prototype.print = function () {
    console.log(this.documents);
    }

  let newObj = new PrintStuff('I`m the new object')

  newObj.print() // Acessa o metodo print do objeto

// -------------- Prototype Atribute -----------------

  // Uma característica do objeto que nos diz quem é o seu "parent"

  // An Object Prototype Atribute points to the object parent

  // O "Parent" de newObj é PrintStuff.prototype

// -------------- Constructor ----------------
  
  // Função utilizada para criar o objeto
  
  // Objeto pode ser criado com um constructor ou com {}.

  // Objetos criados tanto com o constructor quanto com new Object() ou {} herdarão do Object.prototype


// ---------------- Inheritance ---------------

function Plant () {
  this.country = "Mexico";
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor =  function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function () {
  if (this.isOrganic)
  console.log("I am organic, Baby!");
}

function Fruit (fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

Fruit.prototype = new Plant (); // Fruit herda todos as propriedades e metodos de Plant.
                                // Também herda todos os metodos definidos em Plant.prototype

let aBanana = new Fruit ("Banana", "Yellow")

console.log(aBanana.showNameAndColor())

// Como ele não encontra esse metodo no prototype de Fruit, ele vai buscar no seu Parent Plant

