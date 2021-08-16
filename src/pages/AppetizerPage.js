import React from "react"
import AppetizerData from "../data/AppetizerData"
import DisplayItem from "../components/DisplayItem"

class AppetizerPage extends React.Component{
    constructor(){
        super()
        this.state = {
            appetizerData : AppetizerData
        }
    }
    render(){
        const appetizerComponent = this.state.appetizerData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className="section_header">
                    <h1>Khai Vị - Appetizer</h1>
                </div>
                
                <div className="item_display">
                    {appetizerComponent}
                </div>
            </div>
        ) 
    }

}

export default AppetizerPage