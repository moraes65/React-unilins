//Funcao (function) e Arrow function (=>) no javascript
const calculo = function (valor){
    return valor * 3;
}
console.log(calculo(4));

//arrow function
const calculo2 = (valor) => valor * 3;
console.log(calculo2(5));

//exemplo function
const oldWay = function(nome, apelido) {
    return `Meu nome é ${apelido}, ${nome}`;
}
console.log(oldWay('James Bond', 'Bond'));

//arrow function
const oldWay1 = (nome, apelido) => {
    return `Meu nome é ${apelido}, ${nome}`;
}
console.log(oldWay1('James Bond', 'Bond'));

//arrow function
const oldWay2 = (nome, apelido) => `Meu nome é ${apelido}, ${nome}`;
console.log(oldWay2('James Bond', 'Bond'));

//definicao de um OBJETO
//criando funcao sem arrow function
const sandwich = {
    bread: 'integral',
    cheese: 'white',
    prepare: function() {
        return `Eu quero um sandwich com 
                farinha ${this.bread} e queijo ${this.cheese}`;
    },
    make: function() {
        const that = this;
        setTimeout( function(){
            console.log(that.prepare());
        }, 1000);
    }
}
sandwich.make();

//criando funcao COM arrow function
const sandwich2 = {
    bread: 'integral',
    cheese: 'white',
    prepare() {
        return `Eu quero um sandwich com 
                farinha ${this.bread} e queijo ${this.cheese}`;
    },
    make() {
        setTimeout( () => console.log(this.prepare()), 2000);
    }
}
sandwich2.make();

//Array
const exemplo01 = [1, 2, 3, 4, 5];
const calcArray01 = exemplo01.map((item) => item * 2);
console.log(calcArray01);

const exemplo02 = ['Joao', 'Maria', 'Ana', 'Jose', 'Antonio'];
const calcArray02 = exemplo02.map((item) => item.length);
console.log(calcArray02);


//diferenca entre VAR, LET e CONST
var exibeMsg = function(){
    var msgForaDoIF = 'varJavascript';
    if (msgForaDoIF == 'varJavascript'){
        let msgDentroDoIF = 'letJavascript';
        console.log(msgDentroDoIF);
        console.log(msgForaDoIF);
    }
    //console.log(msgDentroDoIF);
    console.log(msgForaDoIF);
}

//Qual a saida acima?

console.log(exibeMsg())