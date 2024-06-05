// Sintaxe

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));

// Parênteses são opcionais quando só há um nome de parâmetro:

const teste = teste => console.log(teste)

teste(materials.map(material => material.length))

// Exercicios

// Ex 1

const add = (a, b) => {
    const result = a + b;
    return result
};

console.log(add(2, 3)); // 5
console.log(add(10, 20)); // 30

// Ex 2
const greet = name => {
    return name
};

console.log(greet("João")); // "Olá, João!"
console.log(greet("Maria")); // "Olá, Maria!"

// Ex 3 
const filterEvens = numbers => {
    const array = []
    numbers.forEach(number => {
        if(number % 2 == 0) {
            array.push(number)
        }
    });
    console.log(array)
};

// Teste a função
filterEvens([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
filterEvens([7, 8, 9, 10]); // [8, 10]