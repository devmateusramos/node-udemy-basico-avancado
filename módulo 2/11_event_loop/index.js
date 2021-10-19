function a () {
    console.log('executando função a');
}


function b () {
    console.log('executando função b');
}


function c () {
    console.log('executando função c');
    a();
    b();
}


c();