import React from "react"
import SandwichData from "../data/SandwichData"
import DisplayItem from "../components/DisplayItem"

class SandwichPage extends React.Component{
    constructor(){
        super()
        this.state = {
            sandwichData : SandwichData
        }
    }
    render(){
        const sandwichComponent = this.state.sandwichData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className="section_header">
                    <h1>Bánh Mì - Sandwiches</h1>
                </div>
                <div className="item_display">
                    {sandwichComponent}
                </div>
            </div>
        ) 
    }
    
}

export default SandwichPage