const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const {name: ironmanName, age, key} = person;

console.log({ironmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key,name,age,rank}:Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const {
    rank, 
    keyName, 
    user,
    //user:name
} = useContext(person);

const {name} = user;

console.log({rank,keyName, name});
