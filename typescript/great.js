var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello, " + person;
}
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
// The given type is boolean, the provided value is a string.
// var tasty: boolean = "I haven't tried it yet";
var burger = 'hamburger', // String 
calories = 300, // Numeric
tasty = true; // Boolean
var ice_cream = {
    name: "ice cream",
    calories: 200
};
var user = "Jane User";
console.log(greeter(user));
speak(burger, calories);
// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak2(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak2(ice_cream);
var Menu = /** @class */ (function () {
    // A straightforward constructor. 
    function Menu(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
console.log(sundayMenu);
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    // Properties are inherited
    // A new constructor has to be defined.
    function HappyMeal(item_list, total_pages) {
        // In this case we want the exact same constructor as the parent class (Menu), 
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        return _super.call(this, item_list, total_pages) || this;
    }
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
// This time the log message will begin with the special introduction.
menu_for_children.list();
//Generics
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep123");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
//第一次调用函数的时候，我们将类型手动设置成字符串。第二次及以后再次调用的时候就不必这样做了，因为编译器会判断传递过什么参数并且自动决定哪种类型最适合。
//虽然不是强制性的，但是由于编译器在众多复杂环境中确定正确类型的时候可能会失败，所以每次都传入类型是好的做法。
//多行字符串
var content = "aaa\n  bbb\n  ccc";
//字符串模板
var myname = "abc";
var getName = function () {
    return "cde";
};
console.log("hello " + myname);
console.log("hello " + getName());
// 析构表达式
function getStock() {
    return {
        code: "IBM",
        price: 100
    };
}
var _a = getStock(), code = _a.code, price = _a.price;
console.log(code);
console.log(price);
