import axios from 'axios';
import { api_key } from './apiKey';

export const getGifs = async (cat) => {
    const limitValue = "6";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      cat
    )}&limit=${limitValue}&api_key=${api_key}`;

    const { data } = await axios.get(url);

    const gifs = data.data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium,
        tags: img.tags,
      };
    });
    return gifs
};