// For

const paragrafos = document.querySelector('.paragrafos'); // QuerySelector so retorna 1 elemento
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody)

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}