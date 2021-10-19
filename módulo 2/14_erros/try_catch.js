/* let x = 10;

// try {
//     x = 2;
//     console.log(x);
// }catch(error){
//     console.log(error);
// }

try{
    x = 2;
}catch(e){
    console.log(e)
} */
const x = '10';
try{

throw new Error('não é um inteiro!')

}catch(e){
    console.log(e)
}