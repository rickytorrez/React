// arguments object - no longer bound with arrow functions 

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(7, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Eduardoß',
    cities: ['Cochabamba', 'NYC', 'DC'],
    printPlacesLived(){
        const cityMessages = this.cities.map(city) = {

        }

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        })
    }
};

user.printPlacesLived();