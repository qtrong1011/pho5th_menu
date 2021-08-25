import React from "react";
import PhoSide from "../data/PhoSide"
import DisplayItem from "../components/DisplayItem"


class Popup extends React.Component {
    constructor(){
        super()
        this.state = {
            psData : PhoSide
        }
        this.stopClickingPopup = this.stopClickingPopup.bind(this)
    }
    stopClickingPopup(e){
        e.stopPropagation();
    }
    render(){
        const psComponent = this.state.psData.map(item => <DisplayItem key={item.id} item = {item}/>)
        return (
            <div className="popup-box" onClick={this.props.handleClose}>
              <div className="box" onClick={this.stopClickingPopup}>
                    <span className="close-icon" onClick={this.props.handleClose}>x</span>
                    <div className = "section_header">
                        <h1>Phở Side Orders</h1>
                    </div>
                    <div className="item_display">
                        {psComponent}
                    </div>

              </div>
            </div>
          )
    }
}
        
  

 
export default Popup;