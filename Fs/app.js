//const {readFileSync, writeFileSync} = require('fs') //Sync
// Ak bude nacim egzaktny sposob tj syntax ako sa to robi, tak pohladat, ale u sustini sa svodi na ednoduchvo citania zo suborov aj zapisuvania

//Async

const { readFile, writeFile } = require('fs')

readFile('./prvy.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err);
        return null; // or simply return; it will return null...
    }
    const prvy = result;
    readFile('./druhy.txt','utf8', (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const druhy = result;
    writeFile(
        './vysledok.txt',
        `${prvy}, ${druhy}`,
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
        })
})

