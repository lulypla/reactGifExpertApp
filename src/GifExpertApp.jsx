import React, { useState } from 'react'
//import { AddCategory } from './componentes/addCategory';
//import { GifGrid } from './componentes/GifGrid';
//importamos el index de componentes en lugar del add category y el gifgrid por separado por eso creamos el index
import {AddCategory, GifGrid} from './componentes'
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']); //Inicializo el compnente con una categoria.

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        //setCategories([...categories,'Valorant']);
        setCategories([newCategory,...categories]);
        // setCategories(cat => [...categories,'Valorant']); es lo mismo,  si quisiera que este primero, desestructuro despues de valor.
    }
    return (
    <>
        {/*Title*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
        //setCategories={setCategories}// le puedo mandar este seter pero lo ideal es que lo maneje el componente padre y el otro solo emita el valor del input
        onNewCategory={ (event) => onAddCategory(event)}
        />
        {/*Listado Gif*/}
       
        {
            categories.map((category)=>(
                //la key unica es caseSensitive hola y Hola son distintos pero en el include deberia tenerlo en cuenta
                //return <li key={category}> {category}</li> 
            
                //return(
                (//es lo mismo sin el return
                    <GifGrid key={category} category={category}/>
                )
            ))
        }
    </>
  )
}

export default GifExpertApp
