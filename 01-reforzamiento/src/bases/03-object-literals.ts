interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
};



console.log(ironman);

// const spiderman = {...ironman}; //spread all properties to the first level

// //for a real clone is better to use:
// const realSpiderman = structuredClone(ironman);//whic is a deep clone

// ironman.firstName = 'Peter';
// ironman.lastName = 'Parker';
// spiderman.address.city = 'San Jose';

// console.log(ironman, spiderman);