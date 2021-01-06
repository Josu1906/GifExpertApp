import React, {useState} from "react";
import AddCategory from "../AddCategory/AddCategory";
import {GifGrid} from "../GifGrid/GifGrid"
//rafc para poner todo simplificado

const GifExpertApp = () => {
    // const categories = ['Elon Musk', 'Thanos', 'Linterna Verde', 'Spider-man', 'Batman', 'Ironman'];
    // const [categories, setCategories] = useState(['Elon Musk', 'Thanos', 'Linterna Verde', 'Spider-man', 'Batman', 'Ironman']);
    const [categories, setCategories] = useState([]);
    // const handelBand = () => {
    //     return setCategories([...categories, 'Josue']);
    // }
    return (
    <>
    <h2>GifExpertApp</h2>
    <hr></hr>
    <AddCategory setCategories={setCategories}/>
    {/* <button onClick={handelBand}>Agregar</button> */}
    <ul>
        {
            categories.map(categorie => {
                // return <li key={categorie}>{categorie}</li> //key le sirve a React para saber que item del array a sido eliminado o cambiado
                return <GifGrid key={categorie} category={categorie}/>
            })
        }
    </ul>
    </>
)}

export default GifExpertApp;
