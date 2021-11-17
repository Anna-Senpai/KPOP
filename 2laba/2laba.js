var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category;
(function (Category) {
    Category[Category["BusAnal"] = 0] = "BusAnal";
    Category[Category["Dev"] = 1] = "Dev";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
function prize(str) {
    console.log(str);
}
function getAllworkers() {
    var workers = [
        { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer },
        { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Dev },
        { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Dev },
        { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
        { id: 4, name: 'Dima', surname: 'Nerdan', available: true, salary: 1488, category: Category.QA }
    ];
    return workers;
}
function getWorkersByID(id) {
    return getAllworkers().find(function (e) { return e.id == id; });
}
function printWorker(worker) {
    console.log(worker.name + " " + worker.surname + " got salary " + worker.salary);
}
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    /*title:string
    year:number
    constructor(newTitle:string, newYear:number){
        this.title = newTitle
        this.year=newYear
        console.log("Creating new ReferenceItem....")
    }*/
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by " + ReferenceItem.department);
    };
    ReferenceItem.prototype.publisherGetter = function () {
        return this.__publisher.toUpperCase();
    };
    ReferenceItem.prototype.publisherSetter = function (newPublisher) {
        this.__publisher = newPublisher;
    };
    ReferenceItem.department = "SS";
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.title = title;
        _this.year = year;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + ", " + this.year);
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
console.log("________1________");
printWorker(getWorkersByID(1));
console.log("________2________");
var logPrize = prize;
logPrize("1");
console.log("________3________");
var favoriteAuthor = { name: "Sasha", email: "sahsavasia@gmail.com", numBooksPublished: 1 };
//let favoriteLibrarian: Librarian = {name: "Sasha", email: "sahsavasia@gmail.com", department: "KNU", assistCustomer: function a(name: string){
//  name = name + "."
//}}
console.log(favoriteAuthor);
//console.log(favoriteLibrarian)
console.log("________4________");
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Serega";
favoriteLibrarian.assistCustomer("Nerdan");
console.log("________5________");
/*let ref = new ReferenceItem("1", 1)
ref.printItem()
ref.publisherSetter("bebebe")
console.log(ref.publisherGetter())*/
console.log("________6________");
var RefBook = new Encyclopedia("Bebebe", 2001, 2);
RefBook.printItem();
console.log("________7________");
RefBook.printCitation();
