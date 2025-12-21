import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term:string) => {
    console.log({term});
  }

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();
    if(query.length === 0) return;
    
    if(previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0,8));
    
    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  }

  return (
    <>
        {/* Header */}
        <CustomHeader title="Gif Finder" description="Discover and share the perfect gif"/>

        {/* Search */}
        <SearchBar placeholder="Find gifs" onQuery={handleSearch}/>

        {/*Busquedas previas*/}
        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

        {/* Gifs */}
        <GifList gifs={gifs}/>
    </>
  );
}
