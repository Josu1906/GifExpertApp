import {useState, useEffect} from 'react';
import {getGif} from '../Helpers/getGifs';
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGif(category)
    .then(imgs =>{
      setTimeout(() => {
        console.log(imgs)
        setState({
          data: imgs,
          loading: false
        })
      }, 3000)
    }
    )
  }, [category]); //useEffect sirve para ejecutar una vez el codigo al renderizar, en las [] le decimos que la vez que cambie lo ejecute
  return state;
}
