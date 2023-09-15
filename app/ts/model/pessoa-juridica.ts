class PessoaJuridica extends Pessoa {
    readonly _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(`${nome} - Jurídica`, idade, dataNascimento);
        this._cnpj = cpf;
    }

    get cnpj():string {
        return this._cnpj;
    }
}