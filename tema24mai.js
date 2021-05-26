//Matricea - array, declararea ei. O matrice in js se foloseste pentru a stoca mai multe valori intr-o variabila
let arr = ['string1', 'string2', 'string3'];
console.log(arr[0]); //indexul la primul element dintr-un array este 0, in exemplul de mai sus avem intexurile 0, 1 si 2
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); //indexul 3 nu este definit, putem sa-l definim in felul umator
arr[3] = 'string4';
console.log(arr[3]);

//new array, declararea unei noi array
let array = new Array('html', 'CSS', 'js');
//
let arrayNew = new Array(5); //acest tip de notare creeaza o matrice goala cu 5 elemente
console.log(arrayNew[0]); //va fi undefined

//lungimea unei matrici length
let arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1.length); //lungimea matricii este vloarea ultimului index + 1, 
//daca avem arr[1000] = true, arr.length ne va afisa 1001, arr 999 si 1001 nu sunt definite, doar 1001 are valoare true.
//putem schimba lungimea unei matrici prin declararea
arr1.length = 1;
console.log(arr1.length); //va afisa 1 lungimea matricii
console.log(arr1); //iar daca facem display la arr1, noi vedem care element a ramas

//metode de adaugare si eliminare a elementelor dintr-o matrice
//metoda pop(), elimina si returneaza ultimul element
let arr2 = ['a', 'b', 'c', 'd'];
console.log(arr2.pop()); //ne va returna d in consola
console.log(arr2);
//metoda push(el), adauga un element la finalul matricii
let arr3 = ['a', 'b', 'c', 'd'];
console.log(arr3.push('e')); //ne va afisa a, b, c, d, e si lungimea matricii in consola
console.log(arr3);
//metoda shift() elimina primul element al matricii si il returneaza 
let arr4 = ['a', 'b', 'c', 'd'];
console.log(arr4.shift()); //ne va returna a in consola
console.log(arr4);
//metoda unshift(el) va adauga un element la inceputul matricii
let arr5 = ['a', 'b', 'c', 'd'];
console.log(arr5.unshift('z')); //ne va afisa z, a, b, c, d, si lungimea matricii in consola
console.log(arr5);
//viteza de procesare la pop si push e mai mare decat la unshift si shift

//Tablouri multi-dimensionale sau Multi-dimensional array
let arr6 = [
  [1,2,3], //index 0
  [4,5,6],  //index 1
  [7,8,9],  //index 2
  [[10,11,12], 13, 14] //index 3
];
//arr6[3];
//arr6[3][0];
//arr6[3][0][1];
console.log(arr6[3]); //este [[10, 11, 12], 13, 14], 
console.log(arr6[3][0]); // este [10, 11, 12], si 
console.log(arr6[3][0][1]); // este 11.

//metoda split() permite convertirea unui sir intr-un tablou
let arr7 = 'mama, tata, bunelu';
console.log(arr7.split(", "));

//metoda join() aceasta dintr-o matrice o converteste in șir cu un delimitator pe care-l selectam noi
let arr8 = ['a', 'b', 'c', 'd'];
console.log(arr8.join(' - '));

//metoda splice() metoda universala de lucru cu matricea, elimina, adauga, inlocuieste elemente

let arr9 = ['a', 'b', 'c', 'd'];
console.log(arr9.splice(1, 2)); //1 - selecteaza pozitia, 2 - elimina 2 elemente incepind cu pozitia 1, respectiv b si c
let arr10 = ['a', 'b', 'c', 'd'];
console.log(arr10.splice(1, 1, 'b1', 'c1')); //selecteaza b, il sterge si adauga b1, c1
console.log(arr10);

let arr11 = [['a'],['b'],['c'],['d']];
console.log(arr11[2].splice(0, 0, 'c1')); //fara sa sterga elementul din index 2 adauga c1, apare in fata
console.log(arr11);

//metoda slice() copiaza o matrice de la valoarea pina la alta, doar ca fara cea din urma,
//daca selectam [1, 3] va selecta primul si al doilea element, fara al treilea
let arr12 = ['carne', 'lapte', 'brinza', 'oua', 'blana'];
let arr121 = arr12.slice(1, 4);
console.log(arr121); //se va afisa elementele incepind cu index 1 pina la 3 inclusiv, 4 nu se copiaza
//daca nu se indica end 4, atunci se va copia pina la urma matricea

//sortarea matricilor
//alfabetica
let arr13 = ['apa', 'soare', 'mare', 'plaja', 'nisip', 'bere'];
let arr131 = arr13.sort();
console.log(arr131);

//numerica
let arr14 = [5, 9, 0, 14, 21, 43];
let arr141 = arr14.sort(function (a, b) {
return a - b});
console.log(arr141);

//sortare reverse, l-e aranjeaza invers
let arr15 = [5, 9, 0, 14, 21, 43];
let arr151 = arr15.reverse(function (a, b) {
return a - b});
console.log(arr151);

//sortare inversa descrescatoare, adaugam sort si reverse
let arr16 = [5, 9, 0, 14, 21, 43];
let arr161 = arr16.sort(function (a, b) {
return b - a});
console.log(arr161);

//functia concat, ajuta la combinarea a doua sau mai multe matrici
let arr17 = ['proteine', 'lipide', 'glucide'];
let newArr17 = arr17.concat('carbohidrati', 'fibre');
console.log(newArr17);

//cautarea in matrice
let arr18 = [2,4,6,8];
let index = arr18.indexOf(6);
console.log(index);

// ciclul for..of
let arr19 = [3,4,7,8];
for (let i = 0; i < arr19.length; i++) { //acest for poate fi scris altfel, utilizand (let el of arr19)
	console.log(arr19[i]);                // si la display vom avea console.log(el)
}

//iterarea asupra metodelor
//forEach
let arr20 = [1,3,5,7];

arr20.forEach((el, index, array) => {
    console.log(el);
    console.log(index);
    console.log(array);
})
//filter mothod
const numbers = [2, -2, -1, 1, 2, 3];
const filtered = numbers.filter(function(value) {
 return value >= 0;
}) 
console.log('fliter' + filtered);
//map
// let vals = [1,3,7,10,8,2];
// console.log(vals);

// function multipler(x) {
//     return x ** 2;
// }
// vals = vals.map(multipler);
// console.log(vals);

let vals = [1,3,7,10,8,2];
console.log(vals);
vals = vals.map( x => x ** 2);
console.log(vals);