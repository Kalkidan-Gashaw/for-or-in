
//#1.
const ary1 =[22, 44, 16, 8];
function doublArr( ary1){
    const ary2= [];
    for (let e of ary1){
        ary2.push(e*2);
        
    }
    return ary2;
    
}
//#2.
console.log(doublArr(ary1));
const obj = {
    Name:'kalkidan',
    Lname:'Gashaw'
}
function displayObj(obj){
    for (var k in obj){
        console.log(`${k}: ${obj[k]}`);
    }
}
displayObj(obj);
//#3.
const arry = [1, 2, 3, 4];
function dispInDelay(arry) {
    for (let i = 0; i < arry.length; i++) {

        setTimeout(() => {console.log(arry[i]);}, i * 1000);
    }
}
dispInDelay(arry);