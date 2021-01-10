import PropTypes from 'prop-types';

export const getGif = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YxY7JolTtSPKd1jxc6S8b6roU9Fa17ib`;
  const peticion = await fetch(url);
  const {data} = await peticion.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  console.log(data)

  return gifs;
}

getGif.propTypes = {
  category: PropTypes.string.isRequired
};
