const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        //res('This is my resolve data');
        rej("IT FUCKED UP")
    },5000)
    
});

promise.then((data)=> {
    console.log(data);
},(error=> {
    console.log('ERROR: ',error)
}))/*.catch(error=> {
    console.log('ERROR: ',error)
});*/