// async = makes a function return a Promise

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return 'File loaded'
    }
    else{
        throw 'File NOT loaded'
    }
}

function loadFile(){
    // let fileLoaded = false;
    let fileLoaded = true;

    if(fileLoaded){
        return Promise.resolve('File loaded')
    }
    else{
        return Promise.reject('File NOT loaded')
    }
}






loadFile().then(value => console.log(value))
        .catch(error => console.log(error))