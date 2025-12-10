import { type Hero, heroes, Owner } from "../data/heroes.data";

function getHeroesByOwner(owner:Owner) {
    const heroesByOwner = heroes.filter(hero => {
        return hero.owner === owner;
    })
    return heroesByOwner;
}

console.log(getHeroesByOwner(Owner.Marvel));