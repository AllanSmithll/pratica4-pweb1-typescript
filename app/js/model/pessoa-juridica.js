class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(`${nome} - Jurídica`, idade, dataNascimento);
        this._cnpj = cpf;
    }
    get cnpj() {
        return this._cnpj;
    }
}
