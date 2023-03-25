import { heroes } from "../Data/Heroes";

export const getHeroesByPub=(publisher)=>{
    const validPublisher = ['DC Comics','Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid input`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}