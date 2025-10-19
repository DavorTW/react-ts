function greet(name: string):string {
    return `Hola soy ${name}`;
}

const greet2 = (name:string):string => `Hola soy ${name}`;



const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message);
console.log(message2);


interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23',
    };
}

const getUser2 = ():User => ({
        uid: 'AFK-410',
        username: 'asdfjg',
    });

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach(value => {
    console.log({value})
});