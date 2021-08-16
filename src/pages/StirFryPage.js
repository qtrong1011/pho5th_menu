import React from "react"
import StirFryData from "../data/StirFryData"
import DisplayItem from "../components/DisplayItem"

class StirFryPage extends React.Component{
    constructor(){
        super()
        this.state = {
            stirfryData : StirFryData
        }
    }
    render(){
        const stirfryComponent = this.state.stirfryData.map(item => <DisplayItem key={item.id} item = {item}/>)
        return(
        
            <div>
                <div className="section_header">
                    <h1>Món Xào - Stir-Fry</h1>
                </div>
                <div className="item_display">
                    {stirfryComponent}
                </div>
            </div>
        ) 
    }
}

export default StirFryPage