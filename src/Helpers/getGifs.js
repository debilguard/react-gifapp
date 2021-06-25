export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=KrDcd8PdsZILFEo9sCcHgd7lKtsMzdvf`;
    const resp = await fetch(url);
    //const jsonResponse = await resp.json();
    //console.log(jsonResponse);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}