var obj = {
    x: 10,
    y: 20
 };
 var obj2 = Object.create(obj);
//  for( let item in  obj2){
//     console.log(item)
//     console.log(obj2[item])

//   }
 
console.log(obj)

function spreadTest(name){
    console.log(name)
}

spreadTest({
    id: 3,
    year: 2021
})






