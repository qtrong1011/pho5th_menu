import React from "react"
import SandwichData from "../data/SandwichData"
import DisplayItem from "../components/DisplayItem"
import Sandwich_Pic from "../assets/images/sandwich.jpeg"

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
                    <p>Bagguette, mayonaise, cucumber, pickled carrots and daikon, jalapenos and cilantro.</p>
                    <span>
                        <img alt="Sandwich" src={Sandwich_Pic} className="item_pics"></img>
                    </span>
                </div>
                <div className="item_display">
                    {sandwichComponent}
                </div>
            </div>
        ) 
    }
    
}

export default SandwichPage