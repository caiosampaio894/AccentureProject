const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['passaro', 'gato', 'cachorro', 'coelho'];
const stringsAndNumbers: any[] = [1, 'one', 2, 'two', 3, 'three'];


interface Book {
	title: string;
  author?: string
}

const book: Book = {
	title: 'Senhor dos Aneis'
}

function addToLibrary(item: Book) {
    const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
    console.log(response);
}

console.log(addToLibrary(book), '======oi=====')



function addMoney(money: number, message?: string): void{
    if(money != 0) {
        console.log(money)
    }

    if(message != undefined) {
        console.log(message)
    }
}

addMoney(20, 'Din add')


