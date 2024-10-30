import Accordian from "./Accordian";
import React, {useState} from "react";

import { animeFaqData } from "../data/data"


const AccordianList = ()=>{
    const [selected , setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [selectedElements, setSelectedElements ] = useState([])

    return (
        <div className="mt-6 flex flex-col items-center gap-6">
             <button className="bg-orange-500 px-4 py-2" onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection? "Single Selection" : "Multi Selection"}
             </button>
            {
                animeFaqData && animeFaqData.length > 0 ?(
                    animeFaqData.map((singleData, index)=>{
                        return <Accordian selected={selected} enableMultiSelection={enableMultiSelection} setSelectedElements={setSelectedElements} selectedElements ={selectedElements} setSelected={setSelected} data={singleData} key={index}/>
                    })
                ): (<div>No Accordian List Here</div>)
            }
       
 

        </div>
    )
}

export default AccordianList