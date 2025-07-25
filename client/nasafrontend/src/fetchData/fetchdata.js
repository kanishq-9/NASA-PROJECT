async function fetchPlanetData(url){
    const response = await fetch(url);
    const newdata = await response.json();
    return newdata;
}
export {
    fetchPlanetData
}