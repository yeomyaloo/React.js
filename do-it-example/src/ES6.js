var string1 = '안녕하세요';
var string2 = '반갑습니다.';

var greeding = `${string1} ${string2}`;


var boolValue = false;
var op = `${boolValue ? '참' : '거짓'}입니다.`

var cart = {name:'도서', price:1500};
var getTotal = function(cart){
    return `${cart.price}원`;
}
var myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다.`;


//전개 연산자 사용
var array1 = ['one','two'];
var array2 = ['three','four'];

var combined = [array1[0],array1[1],array2[0],array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);

var combined = [...array1, ...array2];

const [first, second, three= 'empty', ...others] = array1;

var obj1 = {one:1, two:2, other:0};
var obj2 = {three:1, four:2, other:-1};
var combined2 = {
    one:obj1.one,
    two:obj1.two,
    three:obj2.three,
    four:obj2.four,
};

var obj1 = {one:1, two:2, other:0};
var obj2 = {three:1, four:2, other:-1};
var combined2 = {
    one:obj1.one,
    two:obj1.two,
    three:obj2.three,
    four:obj2.four,
};

var combined2 = Object.assign({}, obj1, obj2);

var obj1 = {one:1, two:2, other:0};
var obj2 = {three:3, four:4, other:-1};
var combined2 = {
    ...obj1,
    ...obj2,
};

//가변 불변 변수
let num = 1;
num = num * 3;

let str = '문자';
str = '다른 문자';

let arr = [];
arr = [1,2,3];

let obj = {};
obj = {name:'새 객체'};

const arr2 = []; //불변 변수 선언
arr2.push(1); //arr2 = [1]
arr2.splice(0,0,0) //arr2 = [0,1]
arr2.pop();

const obj2 = {};
obj2['name'] = '내이름'; //obj2 = {name:'내이름'}
Object.assign(obj2, {name:'새이름'}); //obj2 = {name:'새이름'}
delete obj2.name; //obj2 = {}

const num1 = 1;
const num2 = num1 * 3; //3

const str1 = '문자';
const str2 = str1+'추가'; //문자 추가

const arr3 = [];
const arr4 = arr3.concat(1); //arr4 =[1]

const arr5 = [...arr4,2,3]; // 1,2,3

const arr6 = arr5.slice(0,1); //arr6=[1], arr5 = [1,2,3]

const [first, ...arr7] = arr5; // first = 1, arr7 =[2,3]

const obj3 = {name: '내이름', age:20};
const objValue = {name:'새이름', age: obj3.age};
const obj4 = {...obj3,name:'새이름'} //{name:'새이름', age: 20}
const {name, ...obj5} = obj4; // obj5 ={age:20}


//클래스

function Shape(x,y){
    this.name = 'Shape';
    this.move(x,y);
}

//static(클래스 변수) 함수를 선언하는 예제
Shape.create = function(x,y) {return new Shape(x,y);};

//인스턴스 함수를 선언하는 예제
Shape.prototype.move = function(x,y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.area = function(){
    return 0;
}

Shape.prototype = {
    move: function(x,y){
        this.x = x;
        this.y = y;
    },
    area: function(){
        return 0;
    }
};
var s = new Shape(0,0); 
s.area(); //0

function Circle(x,y,radius){
    Shape.call(this,x,y);
    this.name = 'Circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype,{
    area: function(){
        return this.radius * this.radius;
    }
});
var c = new Circle(0,0,10);
c.area(); // 100


class Shape {
    static create(x,y) {return new Shape(x,y);}
    name='Shape';
    constructor(x,y){
        this.move(x,y);
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
    area(){
        return 0;
    }
}
var s = new Shape(0,0);
s.area(); //0


class Circle extends Shape{
    constructor(x,y,radius){
        super(x,y);
        this.radius = radius;
    }
    area(){
        if (this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}
var c = new Circle(0,0,10);
c.area(); //100


//Arrow function 화살표 함수
function add(first, second){
    return first+second;
}; // typeof add === 'function'

var add = function(first, second){
    return first+second;
}; // typeof add === 'function'


var add = (first, second) => {
    return first+second;
} // 기존의 함수 표현식을 화살표 함수로 변경

var add = (first, second) => first + second;
// 본문 블록이 비어있고 결과값을 바로 반환하는 경우 중괄호 생략 후 => 뒤에 반환 표현식을 넣을 수 있다

var addAndMultiple = (first,second) => ({add:first+second, mutiply: fist*second});

function addNumber(num){
    return function(value) {
        return num + value;
    };
}
var addNumber = num => value => num + value;

class MyClass{
    value = 10;
    constructor(){
        var addThis2 = function(first,second){
            return this.value + first + second;
        }.bind(this);
        
        var addThis3 = (first, second) => this.value + first +second;
    }
}

var x = 0;
var y = 0;
var obj ={
    x:x,
    y:y
};
var randomKeyString = 'other';
combined['one' + randomKeyString] = 'some value';
var obj2 = {
    x: x,
    methodA: function() {console.log('method A')},
    methodB: function() {return 0},
};

var x = 0;
var y = 0;
var obj ={x,y}; // 1
var randomKeyString = 'other';
combined = {
    ['one'+randomKeyString]:'some value',
};
var obj2 = {
    x,
    methodA() {console.log('method A');},
    methodB() {return 0;},
};


var list = [0,1];
var item1 = list[0]; // 1
var item2 = list[1]; 
var item3 = list[2] || -1; // 2

var temp = item2 // 3

item2 = item1;
item1 = temp;

var obj = {
    key1 : 'one',
    key2 : 'two',
};

var key1 = obj.key1; // 4
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; // 5
var newkey1 = obj.key1; // 6

var list = [0,1];
var [
    item1, // 1
    item2, 
    item3 = -1, // 2
] = list; 

[item1, item2] = [item2, item1]; // 3

var obj = {
    key1 : 'one',
    key2 : 'two',
};

var {
    key1:newkey1,
    key2,
    key3 = 'default key3 value',
} = obj;

var [item1, ...otherItems] = [0,1,2];
//otherItems =[1,2]

var {key1, ...others} = {key1:'one', key2:'two'};
//others = {key2:'two'}

function parse(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    var chucks = qs.split('&');
    var result = {};
    for (var i = 0; chuck.length; i++){
        var parts = chucks[i].split('=')
        var key = parse[0]; //key = 'banana'
        var value = parse[1]; //value = '10'
        result[key] = value; //result = {banana:'10'}
    }
    return result;
}

function parse(qs) {
    var queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    var chucks = qs.split('&');
    var result = {};
    for (var i = 0; chuck.length; i++){
        var parts = chucks[i].split('=')
        var key = parse[0]; //key = 'banana'
        var value = Number.isNaN(Number(parse[1]))?parts[1]:Number(parts[1]); //value = '10'
        result[key] = value; //result = {'banana':'10'}
    }
    return result;
}


function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chucks = qs.split('&');
    let result = {};
    chucks.forEach((chuck)=>{
        const parts = chucks[i].split('=')
        const key = parts[0]; //key = 'banana'
        const value = Number.isNaN(Number(parts[1]))?parts[1]:Number(parts[1]); //value = '10'
        result[key] = value; //result = {'banana':'10'}
    });
    return result;
}

function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk)=>{
        const [key, value] = chunk.split('='); //key = 'banana'
        result[key] = value; //result = {'banana':'10'}
    });
    return result;
}

function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = qs.split('&');
    const result = chunks.map((chunk)=>{
        const [key, value] = chunk.split('=');
        return {key:key, value:value};
    });
    return result;
}

function parse(qs) {
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = qs.split('&');
    return chunks
        .map((chunk)=>{
            const [key, value] = chunk.split('=');
            return {key, value};
        })
        .reduce((result, item)=>{
            result[item.key] = item.value;
            return result; 
        }, {});
}

function sum(number){
    return number.reduce((total,num)=>total+num, 0);
    //첫 번째 인자에는 변환함수, 두 번째 인자에는 초깃값(0)을 전달
}

function work1(onDone){
    setTimeout(() => onDone('작업1 완료!'),100);
}
function work2(onDone){
    setTimeout(() => onDone('작업2 완료!'),200);
}
function work3(onDone){
    setTimeout(() => onDone('작업3 완료!'),300);
}
function urgentWork(){
    console.log('긴급 작업!');
}

work1(function(msg1){
    console.log('done after 100ms:' +msg1);
    work2(function(msg2){
        console.log('done after 200ms:' +msg2);
        work3(function(msg3){
            console.log('done after 300ms:' +msg3);
        });
    });
});
urgentWork();


class Promise{
    constructor(fn){
        const resolve =(...args) => {
            if (typeof this.onDone === 'function'){
                this.onDone(...args);
            }
            if (typeof this.onComplete ==='function'){
                this.onComplete();
            }
        }
        const reject = (...args) => {
            if (typeof this.onError === 'function'){
                this.onError(...args);
            }
            if (typeof this.onComplete === 'function'){
                this.onComplete();
            }
        }
        fn(resolve,reject);
    }
    the(onDone,onError){
        this.onDone = onDone;
        this.onError = onError;
        return this;
    }
    catch(oneError){
        this.onError = onError;
        return this;
    }
    finally(onComplete){
        this.onComplete = onComplete;
        return this;
    }
}

const work1 = () => 
    new Promise((resolve) => {
        setTimeout(() => resolve('작업1 완료!'),100);
});
const work2 = () => 
    new Promise((resolve) => {
        setTimeout(() => resolve('작업2 완료!'),200);
});
const work3 = () => 
    new Promise((resolve) => {
        setTimeout(() => resolve('작업3 완료!'),300);
});
function urgentWork(){
    console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms: '+msg1);
    return work2();
};

work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 200ms: '+msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms: '+msg3)
    });

urgentWork();