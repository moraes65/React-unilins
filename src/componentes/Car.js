import React, {Component} from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marca: "Ford",
            modelo: "Mustang",
            cor: "vermelho",
            ano: 1960
        };
    }

    mudaCor = () => {
        this.setState({cor: "AZUL"});
    }

    render(){
        return (
            <div>
                <h1>Meu {this.state.marca}</h1>
                <p>
                    Essa é a cor {this.state.cor} do meu {this.state.modelo} ano {this.state.ano}.
                </p>
                <button 
                    type="button"
                    onClick={this.mudaCor}>
                    Mudar Cor
                </button>
            </div>
        )
    }
}

export default Car;