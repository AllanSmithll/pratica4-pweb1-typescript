class Pessoa {

    protected _nome: string;
    private _idade: number;
    private _dataDascimento: Date;

    constructor(nome: string, idade: number, dataDascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataDascimento = dataDascimento;
    }

    get nome():string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get idade():number {
        return this._idade;
    }

    set idade(novaIdade: number) {
        this._idade = novaIdade;
    }

    get dataNascimento():Date {
        return this._dataDascimento;
    }

    set dataNascimento(novaData: Date) {
        this._dataDascimento = novaData;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - Idade: ${this._idade} - Data Nascimento: ${this._dataDascimento}`;
    }
}
