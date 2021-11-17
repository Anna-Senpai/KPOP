enum Category{
    BusAnal, Dev, Designer, QA, ScrumMaster
}

function getAllworkers() {
    let workers = [
        {id: null, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer},
        {id: null, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Dev},
        {id: null, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Dev},
        {id: null, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA},
        {id: null, Name: 'Dima', surname: 'Nerdan', available: true, salary: 1488, category: Category.QA}
    ]
    var i = 0
    for (let worker of workers) {
        worker.id = i
        i++
    }
    return workers
}

function logFirstAvailable(workers = getAllworkers()): void{
    console.log(`Amount of workers: ${workers.length}`)
    for(let worker of workers){
        if(worker.available){
            console.log(`${worker.id} ${worker.Name} ${worker.surname} ${worker.salary}`)
            break;
        }
    }
}

function getWorkersNamesByCategory(cat: Category = Category.Designer): Array<string>{
    let surnames: Array<string> = []

    for(let worker of getAllworkers()){
        if(worker.category == cat){
            surnames.push(worker.surname)
        }
    }

    return surnames
}

function logWorkersNames(names: string[]): void{
    console.log(names)
}

function getWorkerByID(id: number){
    //let worker = getAllworkers().find(x => x.id  == id) 
    //return worker.Name + " " + worker.surname + " " + worker.salary
    return getAllworkers().find(x => x.id == id)
}

function createCustomerID(name: string, id: number): string{
    return name + id
}

function createCustomer(name: string, age?: number, city?: string): void{
    console.log(`Name: ${name}` + (age?`, age: ${age}`:``) + (city?`, city: ${city}`:``) + `.`) 
}

function checkoutWorkers(customer: string, workerIDs: number[]): string[]{
    let names: Array<string> = []
    for(let i = 0; i<workerIDs.length; i++){
        if(getWorkerByID(workerIDs[i]).available){
            let worker = getWorkerByID(workerIDs[i])
            names.push(worker.Name+" "+ worker.surname)
        }   
    }
    console.log(`Customer: ${customer}`)
    return names
}



console.log(`________1________`)
logFirstAvailable(getAllworkers())

console.log(`________2________`)
console.log(getWorkersNamesByCategory(Category.QA))

logWorkersNames(["Kaka", "Popa", "Pisia"])

console.log(`________3________`)

let workerNames: Array<string> = []; 
getAllworkers().forEach(element => {
    if (element.category == Category.Dev)
        console.log(`${element.Name} ${element.surname}`)    
});

console.log(getWorkerByID(1))

console.log(`________4________`)

let myID = createCustomerID('Ann', 10)
console.log(myID)

let IdGenerator = (name: string, id: number): string => {return name+id}
IdGenerator = createCustomerID
console.log(IdGenerator(`ann`,10))

console.log(`________5________`)

createCustomer("sasha")
createCustomer("sasha", 19, "kiev")
createCustomer("sasha", 19)

console.log(getWorkersNamesByCategory())

logFirstAvailable()

let names = checkoutWorkers("Ann", [1,2,4])
console.log(names)