// Try, catch e throw

// try {
//     console.log(variavel);
// }
// catch(err) {
//     console.log(err);
// }


function soma (x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // Lançando o erro
        // throw ('x e y precisam ser numeros.');
        // throw new Error('x e y precisam ser numeros.');
        // throw new ReferenceError('x e y precisam ser numeros.');
    }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch (err) {
    // console.log(err);

    console.log('Alguma coisa mais amigavel')
}
