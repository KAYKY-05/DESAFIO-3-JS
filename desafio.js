class heroi {
    constructor(nome, idade, tipo , ataque ) {
        this.nome = nome;
        this.idade = idade;
        this.poder = tipo;
        this.ataque = ataque;
    }
    escrever() {
        console.log(`O ${this.poder} atacou usando ${this.ataque}`);
    }
      escrever2() {
        console.log(`O ${this.poder} atacou usando ${this.ataque}`);
    }
      escrever3() {
        console.log(`O ${this.poder} atacou usando ${this.ataque}`);
    }
      escrever4() {
        console.log(`O ${this.poder} atacou usando ${this.ataque}`);
    }
}
let heroi1 = new heroi("lancelot", 25, "guerreiro","usou espada");

let heroi2 = new heroi("Merlin", 50, "mago","usou magia");

let heroi3 = new heroi("lee", 70, "monge","usou artes marciais");

let heroi4 = new heroi("storm shadow ", 22,"ninja","usou shuriken");

heroi1.escrever();
heroi2.escrever();
heroi3.escrever();
heroi4.escrever();