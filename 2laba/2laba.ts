enum Category{
    BusAnal, Dev, Designer, QA, ScrumMaster
}

interface Worker {
    id: number
    name: string
    surname: string
    available: boolean
    salary: number
    category: Category
    markPrize: PrizeLogger
}

interface PrizeLogger{
    (str:string):void
}

interface Person {
    name: string
    email: string
}

interface Author extends Person{
    numBooksPublished:number
}

interface Librarian extends Person{
    department:string;
    assistCustomer(custName:string):void;
}

class UniversityLibrarian implements Librarian{
    name:string;
    email:string;
    department:string;

    assistCustomer(custName:string):void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}



function prize(str:string) {
    console.log(str)
}

function getAllworkers(){
    let workers = [
        {id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer},
        {id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Dev},
        {id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Dev},
        {id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA},
        {id: 4, name: 'Dima', surname: 'Nerdan', available: true, salary: 1488, category: Category.QA}
    ]
    return workers
}

function getWorkersByID(id: number): Worker {
    return getAllworkers().find(e => e.id == id)
}

function printWorker(worker: Worker){
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}

abstract class ReferenceItem{
    /*title:string
    year:number
    constructor(newTitle:string, newYear:number){
        this.title = newTitle
        this.year=newYear
        console.log("Creating new ReferenceItem....")
    }*/

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`)
    }

    private __publisher: string
    static department: string = "SS"

    publisherGetter():string{
        return this.__publisher.toUpperCase()
    }

    publisherSetter(newPublisher:string):void{
        this.__publisher = newPublisher
    }

    constructor(public title:string, protected year:number){}  

    abstract printCitation():void
}
class Encyclopedia extends ReferenceItem {
    constructor(public title: string, protected year: number, public edition: number) {
        super(title, year)
    }

    printItem(): void {
        super.printItem()
        console.log(`Edition: ${this.edition}, ${this.year}`)
    }

    printCitation(){
        console.log(`${this.title} - ${this.year}`)
    }
}

console.log(`________1________`)
printWorker(getWorkersByID(1))


console.log(`________2________`)
let logPrize: PrizeLogger = prize
logPrize("1")

console.log(`________3________`)
let favoriteAuthor: Author = {name: "Sasha", email: "sahsavasia@gmail.com", numBooksPublished: 1}
//let favoriteLibrarian: Librarian = {name: "Sasha", email: "sahsavasia@gmail.com", department: "KNU", assistCustomer: function a(name: string){
  //  name = name + "."
//}}

console.log(favoriteAuthor)
//console.log(favoriteLibrarian)

console.log(`________4________`)
let favoriteLibrarian:Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Serega"
favoriteLibrarian.assistCustomer("Nerdan")

console.log(`________5________`)
/*let ref = new ReferenceItem("1", 1)
ref.printItem()
ref.publisherSetter("bebebe")
console.log(ref.publisherGetter())*/

console.log(`________6________`)
let RefBook: Encyclopedia = new Encyclopedia(`Bebebe`, 2001, 2)
RefBook.printItem()

console.log(`________7________`)

RefBook.printCitation()