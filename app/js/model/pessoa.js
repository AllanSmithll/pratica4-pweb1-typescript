class Pessoa {
    constructor(nome, idade, dataDascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataDascimento = dataDascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    get dataNascimento() {
        return this._dataDascimento;
    }
    set dataNascimento(novaData) {
        this._dataDascimento = novaData;
    }
    toString() {
        return `Nome: ${this._nome} 
        - Idade: ${this._idade} - Data Nascimento: ${this._dataDascimento}`;
    }
}
