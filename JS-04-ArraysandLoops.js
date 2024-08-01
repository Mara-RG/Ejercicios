

//*Sum of Resistors in Series

const ohms = [3.4, 9, 1.8, 10];

const suma1 = ohms.reduce((valorAnterior, valorActual) => { return valorAnterior + valorActual;}, 0);

console.log(suma1);

//*Number diveded into halves

const numberSplit = (num) => {
    if (num === undefined) {
        return
    } else {
        let a = Math.floor(num / 2);
        let b = num - a;
        let c = [];
        c.push(a, b);
        return c;
    }
};

console.log(numberSplit(8));
console.log(numberSplit(15));


// Secret Socity

const nombres = ["Eduardo", "Lenardo", "Ivana"];
nombres.forEach((val)=>{
    console.log(val.split("")[0]);
    
})

//*Online Status

const users = ["mocklg99", "J0eyPunch", "glessedFer", "Abejaa96", "Push.Magic"];
 
const Full = users.slice(0,2)
const Online = (users.length - 2);
const Status = Full.concat(Online);

console.log(Full    +    `and ${(Online)} more online`);

//*Array of Multiples

const arrayOfMultiples = (d, e) => {
    let arr = [];
    let x = 1;
    for (let i=1; i <= e; i++) {
        arr.push( d * x);
        x++;
    }
    return arr;
}

console.log(arrayOfMultiples(2,10));
console.log(arrayOfMultiples(5,7));

//*Positive dominance in Array
const isPositiveDominant = (arr) => {
    let f = 0;
    let g = 0;
    
  
    
    for (let j = 1; j <= arr.length; j++) {
      if (arr[j - 1] > 0 && j > 1 && arr[j - 1] !== arr[j] 
      && arr[j+ 1] !== arr[j - 1]) {
         f += 1;
      }
      if (arr[j] < 0 && arr[j] !== arr[j + 1] && arr[j] !== arr[j - 1] && arr[j + 1] !== arr[j - 1]) {
        g += 1;
      }
    }
    if (f > g) {
      return true;
    } else return false;
}

console.log(isPositiveDominant([1, 3, -4, -5, -14]))

//*Antipodal Avera

const vec=[1, 2, 3, 4, 5, 6];
const chunk1 = vec.slice(0, vec.length / 2);
const chunk2 = vec.slice(vec.length / 2, vec.length);

const reversed = chunk2.reverse();
console.log(reversed);

var r = [];

for(m = 0; m < chunk1.length; m++){
    r[m]=chunk1[m]+chunk2[m];
}

console.log(r);

r.forEach((p)=>{
    q=(p/2);
    console.log(q);
})



