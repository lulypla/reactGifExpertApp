import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInpuValue] = useState('')

  const onInputChange = (event) => {
    setInpuValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    //setCategories(categories => [inputValue, ...categories])
    setInpuValue(''); 
    onNewCategory(inputValue.trim());
    
  }

  return (
    <form onSubmit={event => onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(event)=>onInputChange(event)} // es lo mismo que poner onInputChange sacando los event, porque siempre manda eso

        />
    </form>
  )
}
