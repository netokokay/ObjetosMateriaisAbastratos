class Produtos {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    getPreco() {
        return this.preco;
    }

    setQuantidade(qntd) {
        return this.quantidade + qntd;
    }

}

class Cachorro {
    constructor(nome, raca, peso) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }

    getNome() {
        return this.nome;
    }

    setRaca(novaRaca) {
        this.raca = novaRaca;
    }

    setPeso(novoPeso){
        this.preso = novoPeso;
    }

}

class ContaTwitter {
    constructor(email,senha,biografia){
        this.email = email;
        this.senha = senha;
        this.biografia = biografia;
    }

    setNewBiografia(newBio){
        this.biografia = newBio;
    }

    setNewPass(newPass){
        this.senha = newPass;
    }

    setNewMail(newMail){
        this.email = newMail;
    }

}

class VideoYoutube {
    constructor(titulo,likes,duracao){
        this.titulo = titulo;
        this.likes = likes;
        this.duracao = duracao;
    }

    getTitulo(){
        return this.titulo;
    }

    getLikes(){
        return this.likes;
    }

    getDuracao(){
        return this.duracao;
    }

}


