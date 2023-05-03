// await = makes an async function wait for a Promise

async function loadFile(){

    let fileLoaded = false;
    // let fileLoaded = true;

    if(fileLoaded){
        return 'File loaded'
    }
    else{
        throw 'File not loaded'
    }
}

async function startprocess(){
    try{
        let message = await loadFile();
        console.log(message)
    }
    catch(error){
        console.log(error)
    }
}

startprocess();

