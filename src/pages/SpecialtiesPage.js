import React from "react"
import SpecialtiesData from "../data/SpecialtiesData"
import DisplayItem from "../components/DisplayItem"

class SpecialtiesPage extends React.Component{
    constructor(){
        super()
        this.state = {
            specialtiesData : SpecialtiesData
        }
    }
    render(){
        const specialtiesComponent = this.state.specialtiesData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className="section_header">
                    <h1>Phở Fifth Avenue Specials</h1>
                </div>
                <div className="item_display">
                    {specialtiesComponent}
                </div>
            </div>
        ) 
    }
    
}

export default SpecialtiesPage