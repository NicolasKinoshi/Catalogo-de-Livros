

// Carregando o objeto JSON com os livros do localStorage
let livros = JSON.parse(localStorage.getItem('Livros')) || []

//Função para salvar os livros no LocalStorage
function saveBooks(){
    localStorage.setItem('Livros', JSON.stringify(livros))
}

function addBook(){
    const titulo = document.querySelector('#Titulo')
    const autor = document.querySelector('#Autor')
    const genero = document.querySelector('#Genero')
    const ano = document.querySelector('#Ano')

// Criando um objeto para representar o Livro
const book={
titulo: titulo.value,
autor: autor.value,
genero: genero.value,
ano: Number(ano.value)
}
// Atualizando o Array com o Livro

livros.push(book)
// Salvando no localStorage
saveBooks()


}

function listarLivros(arrayLivros){
    const catalogo = document.querySelector('#catalogo')
    catalogo.innerHTML = ''
    

    for (const livro of arrayLivros){

        const div= document.createElement('div')
        div.classList.add('book')
        div.innerHTML =`<h3>Livro: ${livro.titulo}</h3>
        <p>Autor: ${livro.autor}</p>
        <p>Genero: ${livro.genero}</p>
        <p>Ano: ${livro.ano}</p>`
        catalogo.append(div)
    }
}

function searchBook(){
    const termo = document.querySelector('#termo').value
    const resultados = livros.filter((book) =>{
        return book.autor === termo || book.titulo === termo || book.genero === termo


    })
    listarLivros(resultados)
}

listarLivros(livros)
