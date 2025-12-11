import type {GiphyResponse} from "../data/giphy.response";

const API_KEY = 'mtfqeNiBWUAd53Yl1jLhQyMt2yzGjeBc';



const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;

    document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string>=> {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data }:GiphyResponse = await response.json();

    return data.images.original.url;
}


getRandomGifUrl().then(createImageInsideDOM);