// try, catch, finally

try {
    // Executado quando nao ha erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
        console.log('Teste');
    }
    catch(e) {
        console.log('Tratando o erro');
    }
    finally {
        console.log('Tambem sou executado finally')
    }
       
    
}
catch(e) {
    // Executado quando ha erros
    console.log('Tratando o erro');
}
finally {
    // É executado sempre
    console.log('Eu sempre sou executado');
}


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de date');
    }

    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hora12:false
    });
}

try {
    const data = new Date('01-01-1970 12:58:20');

    const hora = retornaHora(data);
    console.log(hora);
}
catch (e) {
    // Tratar erro 
}
finally {
    console.log('Tenha um bom dia');
}
