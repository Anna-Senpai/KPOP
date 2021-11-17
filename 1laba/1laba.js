var Category;
(function (Category) {
    Category[Category["BusAnal"] = 0] = "BusAnal";
    Category[Category["Dev"] = 1] = "Dev";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: null, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer },
        { id: null, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Dev },
        { id: null, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Dev },
        { id: null, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
        { id: null, Name: 'Dima', surname: 'Nerdan', available: true, salary: 1488, category: Category.QA }
    ];
    var i = 0;
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        worker.id = i;
        i++;
    }
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    console.log("Amount of workers: " + workers.length);
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.available) {
            console.log(worker.id + " " + worker.Name + " " + worker.surname + " " + worker.salary);
            break;
        }
    }
}
function getWorkersNamesByCategory(cat) {
    if (cat === void 0) { cat = Category.Designer; }
    var surnames = [];
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.category == cat) {
            surnames.push(worker.surname);
        }
    }
    return surnames;
}
function logWorkersNames(names) {
    console.log(names);
}
function getWorkerByID(id) {
    //let worker = getAllworkers().find(x => x.id  == id) 
    //return worker.Name + " " + worker.surname + " " + worker.salary
    return getAllworkers().find(function (x) { return x.id == id; });
}
function createCustomerID(name, id) {
    return name + id;
}
function createCustomer(name, age, city) {
    console.log("Name: " + name + (age ? ", age: " + age : "") + (city ? ", city: " + city : "") + ".");
}
function checkoutWorkers(customer, workerIDs) {
    var names = [];
    for (var i = 0; i < workerIDs.length; i++) {
        if (getWorkerByID(workerIDs[i]).available) {
            var worker = getWorkerByID(workerIDs[i]);
            names.push(worker.Name + " " + worker.surname);
        }
    }
    console.log("Customer: " + customer);
    return names;
}
console.log("________1________");
logFirstAvailable(getAllworkers());
console.log("________2________");
console.log(getWorkersNamesByCategory(Category.QA));
logWorkersNames(["Kaka", "Popa", "Pisia"]);
console.log("________3________");
var workerNames = [];
getAllworkers().forEach(function (element) {
    if (element.category == Category.Dev)
        console.log(element.Name + " " + element.surname);
});
console.log(getWorkerByID(1));
console.log("________4________");
var myID = createCustomerID('Ann', 10);
console.log(myID);
var IdGenerator = function (name, id) { return name + id; };
IdGenerator = createCustomerID;
console.log(IdGenerator("ann", 10));
console.log("________5________");
createCustomer("sasha");
createCustomer("sasha", 19, "kiev");
createCustomer("sasha", 19);
console.log(getWorkersNamesByCategory());
logFirstAvailable();
var names = checkoutWorkers("Serega", [0, 2, 4]);
console.log(names);
