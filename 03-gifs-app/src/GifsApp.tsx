import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term:string) => {
    console.log({term});
  }

  const handleSearch = (query: string) => {
    console.log({query});
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
        <GifList gifs={mockGifs}/>
    </>
  );
}
