import React, { useEffect, useState } from "react"
import "./App.css"

const COLOR_TYPE = {
  HEX :"HEX",
  RGB:"RGB"
}

const App = ()=>{

  const [color, setColor] = useState("#000000")
  const [colorSchema, setColorSchema] = useState(COLOR_TYPE.HEX)

  function getRandomIndex(maxValue){
    return Math.floor(Math.random() * maxValue)
  }

  const handleHexColorGeneration = ()=>{
    const values = [0, 1, 2,3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    

    let hexColor = "#"
    for (let index = 0; index <= 5; index ++){
      const randomIndex = getRandomIndex(values.length)
      hexColor += values[randomIndex]

    }

    setColor(hexColor)
  }

  const handleRGBColorGeneration =()=>{
    const red = getRandomIndex(256)
    const green = getRandomIndex(256)
    const blue = getRandomIndex(256)

    setColor(`rgb(${red}, ${green}, ${blue})`)


    
  }

  useEffect(()=>{
    if (COLOR_TYPE.HEX == colorSchema){
      handleHexColorGeneration()
    }else{
      handleRGBColorGeneration()
    }
  }, [colorSchema])

  const bgStyle = {
    backgroundColor : color
  }
  return <div className="main">
    <div className="btn">
      <button onClick={()=> setColorSchema(COLOR_TYPE.RGB)}>Generate RGB</button>
      <button onClick={()=>setColorSchema(COLOR_TYPE.HEX)}>Generate HEX</button>
      <button onClick={
        colorSchema === "HEX" ? handleHexColorGeneration:handleRGBColorGeneration
      }>Generate Random Color</button>

    </div>
    <div className="display-bord" style={bgStyle} > {color}</div>
  </div>
}


export default App