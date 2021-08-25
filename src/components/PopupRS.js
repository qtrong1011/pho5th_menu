import React from "react";
import RiceSide from "../data/RiceSide"
import DisplayItem from "../components/DisplayItem"


class PopupRS extends React.Component {
    constructor(){
        super()
        this.state = {
            rsData : RiceSide
        }
        this.stopClickingPopup = this.stopClickingPopup.bind(this)
    }
    stopClickingPopup(e){
        e.stopPropagation();
    }
 
    render(){
        const rsComponent = this.state.rsData.map(item => <DisplayItem key={item.id} item = {item}/>)
        return (
                <div  className="popup-box" onClick={this.props.handleClose}  >
                    <div className="box" onClick={this.stopClickingPopup}>
                        <span className="close-icon" onClick={this.props.handleClose}>x</span>
                        <div className = "section_header">
                            <h1>Grilled Side Orders</h1>
                        </div>
                        <div className="item_display">
                            {rsComponent}
                        </div>

                     </div>
                </div>
          )
    }
}
        
  

 
export default PopupRS;