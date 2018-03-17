var nameVar = 'Ricardo';
var nameVar = "Eduardo";
console.log('nameVar: ', nameVar);

let nameLet = 'Edgar';
nameLet = 'Lucacho';
console.log('nameLet: ', nameLet);

const nameConst = 'Sophy';
console.log('nameConst: ', nameConst);

function getPetName(){
    var petName = 'Bals';
    return petName;
}

getPetName();

// Block Scoping

var fullName = "Eduardo Torrez";

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);