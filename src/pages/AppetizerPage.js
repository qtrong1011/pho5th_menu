import React from "react"
import AppetizerData from "../data/AppetizerData"
import DisplayItem from "../components/DisplayItem"
import Eggrolls from "../assets/images/eggrolls.jpeg"
import Springrolls from "../assets/images/springrolls.jpeg"

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
                    <span className="item_pics_wrapper">
                        <img alt="Egg Rolls" src={Eggrolls} className="item_pics" ></img>
                        <img alt="Spring Rolls" src={Springrolls} className="item_pics"></img>
                    </span>
                </div>
                
                <div className="item_display">
                    {appetizerComponent}
                </div>
            </div>
        ) 
    }

}

export default AppetizerPage