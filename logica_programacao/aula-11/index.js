// For

for( let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log(`Linha ${i}`);
}

for( let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log(i,par);
}

const frutas = ['Maça', 'Pera', 'Uva'];

for( let i = 0; i < frutas.length; i++) {
    
    console.log(`Indice ${i}`, frutas[i]);
}