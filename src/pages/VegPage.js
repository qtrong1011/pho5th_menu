import React from "react"
import VegData from "../data/VegData"
import DisplayItem from "../components/DisplayItem"

class VegPage extends React.Component{
    constructor(){
        super()
        this.state = {
            vegData : VegData
        }
    }
    render(){
        const vegComponent = this.state.vegData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className = "section_header">
                    <h1>Món Chay - Vegetarian</h1>
                </div>
                <div className="item_display">
                    {vegComponent}
                </div>
            </div>
        ) 
    }
}
export default VegPage