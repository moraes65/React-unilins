//USO DOS CONCEITOS DE REST, SPREAD E DESESTRUTURAÇÃO
const arrA = [1, 2, 3];
console.log('Item [0]', arrA[0]);
console.log('arrA', arrA);//arrA [ 1, 2, 3 ]
//spread e rest sao tecnicas do JS para trabalhar
//com arrays e objetos
//e esses conceitos podem expandir arrays, objetos, strings
//por meio do operador spread ...

//como fazer para criar um novo array a partir de um
//array já existente??
const arrB = [...arrA, 4, 5, 6];
console.log('arrB',arrB);//arrB [ 1, 2, 3, 4, 5, 6 ]
//como fazer para criar um arrC como cópia do arrA?
const arrC = [...arrA];
console.log('arrC',arrC);//arrC [ 1, 2, 3 ]

//Funciona tambem com Objetos
const objCarro = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    getCarro: () => {
        return `${objCarro.fabricante} ${objCarro.modelo}`;
    }
}
console.log(objCarro.getCarro());//Ford Fiesta
const newObjCarro = {...objCarro};
console.log(newObjCarro.getCarro());//Ford Fiesta

//Funciona tambem com Strings
const strAlo = 'alo';
const newStrAlo = [...strAlo];
//cria um array com cada caracter da string
console.log('newStrAlo', newStrAlo);//newStrAlo [ 'a', 'l', 'o' ]

//Destructuring
const arrNumeros = [1, 2, 3, 4, 5];
//como fazer um recuperação dos elementos do array se forma
//mais simples que referenciando pelo indices???
[primeiro, segundo, ...outros] = arrNumeros;
console.log('Primeiro',primeiro);//Primeiro 1
console.log('Outros', outros);//Outros [ 3, 4, 5 ]

//o array [1, 2, 3, 4, 5, 6] nao foi declarado
[elm01, elm02, ...elmRest] = [1, 2, 3, 4, 5, 6];
console.log('Eml01', elm01);//Eml01 1
console.log('EmlRest', elmRest);//EmlRest [ 3, 4, 5, 6 ]

//como desestruturar um objeto 
//{codigo: 10, fone: 988882211, cpf: 123456789-11}

//usar parenteses ao redor da declaracao de atribuicao
//para utilizar a sintaxe de desestruturação de um
//OBJETO sem que esse contenha uma declaracao
//O objeto {codigo: 10, fone: 988882211, cpf: 123456789-11} nao foi
//declarado - da mesma forma que o array acima [1, 2, 3, 4, 5, 6]
({codigo, ...rest} = {codigo: 10, fone: 988882211, cpf: 123456789});
console.log('Codigo', codigo);//Codigo 10
console.log('Rest',rest);//Rest { fone: 988882211, cpf: 123456789 }

const arrStrings = ["Um", "Dois", "Tres"];
//desestruturando o arrStrings
const [um, dois, tres] = arrStrings;
console.log('Tres', tres);//Tres Tres

//const arrNumeros = [1, 2, 3, 4, 5];
//criar uma funcao que some todos os elementos do arrNumeros
//usando arrow Function
const somaNumeros = (nr1, nr2, nr3, nr4, nr5) => 
                    nr1 + nr2 + nr3 + nr4 + nr5;
const somaTotal = somaNumeros(...arrNumeros);
console.log('Soma Total', somaTotal);

const objPessoa = {
    primeiroNome: 'JOAO',
    ultimoNome: 'MORAES',
    anoNasc: 1965
}

//const { primeiroNome, ultimoNome } = objPessoa;
//console.log('Ultimo Nome', ultimoNome);//Ultimo Nome MORAES
//ordem das variaveis desestruturadas pode ser diferente
//da ordem da definicao das propriedades do objeto
const { ultimoNome, primeiroNome } = objPessoa;
console.log('Ultimo Nome', ultimoNome);//Ultimo Nome MORAES
const { anoNasc: ano } = objPessoa;
console.log('Ano', ano);//Ano 1965

