//Sistema controle de estoque de uma biblioteca
// - definnir um array de objrtos para amarzenar os livros do estoque. Livro representado por titulo, autor e quantidade.
let Livros = [
    {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        quant: 5
    },
    {
        titulo: 'Harry potter e a pedra filosofal',
        autor: 'J.K. Rowling',
        quant: 6
    },
    {
        titulo: 'Star wars: O despertar da força',
        autor: 'George Lucas',
        quant: 3
    }
]

// 2 - Criar função para cada coisa:
// - Adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quant){
    let livroexistente = Livros.find(livro => livro.titulo === titulo && livro.autor === autor); //procura o primeiro livro no array que tenha o título igual ao que você passou. Se achar, ele retorna esse livro; se não achar, retorna undefined.

    if (livroexistente) {
        livroexistente.quant += quant;
        console.log(`O livro ${livroexistente.titulo} já está cadastrado. A quantidade agora é: ${livroexistente.quant}`);
    } else {
        Livros.push({
            titulo: titulo,
            autor: autor,
            quant: quant
        });
    }
}
adicionarLivro('O Hobbit', 'J.R.R. Tolkien', 4);
adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', 5);
adicionarLivro('O Hobbit', 'J.R.R. Tolkien', 2);
adicionarLivro('O evangelho segundo o espritismo', 'Allan Kardec', 3);
console.log(Livros)
console.log('--------------------')

//removerLivro(titulo) - Remove um livro do estoque pelo título.
function removerLivro(titulo){
    let indice = Livros.findIndex(Livro => Livro.titulo === titulo); //findIndex() procura a posição do livro no array.
    if (indice !== -1) {                                             //Se encontrar: Remove usando splice()
        Livros.splice(indice, 1);
        console.log(`O livro ${titulo} foi removido do estoque.`);
    }
    else {
        console.log(`O livro ${titulo} não foi encontrado no estoque, portanto não pode ser removido.`);
    }
}
removerLivro('O Senhor dos Anéis');
removerLivro('A vantagem de ser invisível');
console.log(Livros)
console.log('--------------------')

//atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.
function atualizarQuantidade(titulo, novaQuantidade){
    let livro = Livros.find(livro => livro.titulo === titulo);      //find() procura o livro no array.
    if (livro) {                                                     //Se encontrar: Atualiza a quantidade.
        livro.quant = novaQuantidade;
        console.log(`A quantidade do livro ${titulo} foi atualizada para: ${novaQuantidade}`);
    }
    else {
        console.log(`O livro ${titulo} não foi encontrado no estoque, portanto não pode ter sua quantidade atualizada.`);
    }
}
atualizarQuantidade('O Hobbit', 10);
atualizarQuantidade('A vantagem de ser invisível', 7);
console.log(Livros)
console.log('--------------------')


//listarLivros() - Lista todos os livros no estoque.
function listarLivros(){
    console.log('Livros no estoque:');
    Livros.forEach(livro => {
        console.log(`- ${livro.titulo} (${livro.autor}) - Quantidade: ${livro.quant}`);
    });
}
listarLivros();