function useState(animeCharacter:string){
    return [animeCharacter, (setName:string):void =>{
        console.log(setName);
    }] as const
}

const [animeCharacter, setName] = useState('Naruto');
setName('Itachi');
setName('Sasuke');

console.log({animeCharacter})

