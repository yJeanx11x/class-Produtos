class Produto {
  constructor(cliente, nome, quantidade, estoque, preco) {
    this.cliente = cliente;
    this.nome = nome;
    this.quantidade = quantidade;
    this.estoque = estoque;
    this.preco = preco;
  }
  comprar() {
    if (this.quantidade > this.estoque) {
      console.log("Estoque Esgotado");
    }
 else{   
         console.log(`${this.cliente} Comprou ${this.quantidade} ${this.nome} no Valor R$${this.preco * this.quantidade}`);
         this.estoque = this.estoque - this.quantidade;
         this.preco=this.preco * this.quantidade
 }


  }
}

const p1 = new Produto("Jean", "blusa", 2, 32, 22);
p1.comprar();
console.log(p1);
