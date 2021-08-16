import React from "react"
import RiceData from "../data/RiceData"
import DisplayItem from "../components/DisplayItem"
import RS_logo from "../assets/images/rs_icon.webp"
import PopupRS from "../components/PopupRS"

class RicePage extends React.Component{
    constructor(){
        super()
        this.state = {
            riceData : RiceData,
            isOpen : false
        }
        this.togglePopup = this.togglePopup.bind(this);
        this.setIsOpen = this.setIsOpen.bind(this);
    }
    setIsOpen(){
        
        this.setState(prevState =>{
            return{
                isOpen : !prevState.isOpen
            }
        })
        
        
    }
    togglePopup(){
        this.setIsOpen();
        if(!this.state.isOpen){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "unset"
        }
    }
    render(){
        const riceComponent = this.state.riceData.map(item => <DisplayItem key={item.id} item = {item}/>)
        return(
        
            <div>
                <div className="section_header">
                    <h1>Cơm - Rice</h1>
                </div>
                <div className="body-menu">
                    <div className="item_display">
                        {riceComponent}
                    </div>
                    <div className="PS_section">
                        <div className="PS_section_wrapper" onClick={this.togglePopup}>
                            <img src={RS_logo} className="PS_logo" alt="Something wrong!!!!!"></img>
                            <div className="PS_banner">SIDES</div>
                        </div>
                        {this.state.isOpen && <PopupRS  
                             handleClose = {this.togglePopup}
                        />}
                    </div>
                </div>
                
            </div>
        ) 
    }
    
}

export default RicePage