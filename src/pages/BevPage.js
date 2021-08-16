import React from "react"
import BevData from "../data/BevData"
import DisplayItem from "../components/DisplayItem"

class BevPage extends React.Component{
    constructor(){
        super()
        this.state = {
            bevData : BevData
        }
    }
    render(){
        const bevComponent = this.state.bevData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className="section_header">
                    <h1>Giải Khát - Beverages</h1>
                </div>
                <div className="item_display">
                    {bevComponent}
                </div>
            </div>
        ) 
    }
    
}

export default BevPage