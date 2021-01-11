import React from 'react';
import {GiftGridItem} from '../GiftGridItem/GiftGridItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import PropTypes from "prop-types"
// import {getGif} from '../../Helpers/getGifs';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  //
  const {data, loading} = useFetchGifs(category);
  // useEffect(() => {
  //   getGif(category).then(setImages)
  // }, [category]); //useEffect sirve para ejecutar una vez el codigo al renderizar, en las [] le decimos que la vez que cambie lo ejecute



    return (
      <>
      <h3 className='animate__animated animate__lightSpeedInRight'>Buscaste: {category}</h3>
      {
        loading && <p className='animate__animated animate__lightSpeedInLeft'>Loading...</p>
      }
      <div className='card-grid'>
        {
          data.map(img => (
            <GiftGridItem
            key={img.id}
            {...img} //img={img} Se hace de esta forma pero de esta tambien
            />
          ))
        }
      </div>
      </>
    )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired 
};

// <ol>
//     {
  //       images.map(img => {
    //         // return (
      //         //   <div key={img.id}>
      //         //   <li><b>Id:</b> {img.id}</li>
      //         //   <li><b>Title:</b> {img.title}</li>
      //         //   <li><b>Url:</b> {img.url}</li><br></br>
      //         //   </div>
      //         // )
      //       })
      //     }
      // </ol>
