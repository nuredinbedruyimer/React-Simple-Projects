import React, {useState} from "react";



const Accordian = ({data, selected,
    enableMultiSelection, 
    setSelectedElements, 
    selectedElements, 
     setSelected})=>{

   
    const handleSingleClick = (itemID)=>{
        if (selected === itemID){
        setSelected(null)


        }else{
            setSelected(itemID)
        }

    }

    const handleMultiClick = (itemID)=>{
        const copySelectedElements = [...selectedElements]

        const indexOfSelectedElement = copySelectedElements.indexOf(itemID)

        if (indexOfSelectedElement === -1){
            copySelectedElements.push(itemID)
        }else{
            copySelectedElements.splice(indexOfSelectedElement, 1)


        }

        console.log(copySelectedElements)

        setSelectedElements(copySelectedElements)

    }


    
    return (
        <div className="py-6 w-[500px] min-w-96  bg-blue-600 px-2">
        <div className="flex justify-between mr-4 cursor-pointer" onClick={enableMultiSelection?
        ()=>handleMultiClick(data.id)
         :()=>handleSingleClick(data.id)}>
        <p className="text-xl mb-4 font-normal text-white">{data.question}</p>
        <span className="text-xl text-white font-bold ">+</span>
        </div>
        {
            selected === data.id || selectedElements.indexOf(data.id) !== -1 ? <span>{data.answer}</span>:null
        }
        </div>
    )
}


export default Accordian


