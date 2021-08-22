import React from "react"
import BunData from "../data/BunData"
import DisplayItem from "../components/DisplayItem"
import RS_logo from "../assets/images/rs_icon.webp"
import PopupRS from "../components/PopupRS"
import Bun_Pic from "../assets/images/bun.jpeg"

class BunPage extends React.Component{
    constructor(){
        super()
        this.state = {
            bunData : BunData
        }
        this.setIsOpen = this.setIsOpen.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
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
        const bunComponent = this.state.bunData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className="section_header">
                    <h1>Bún - Vermicelli</h1>
                    <p>Vermicelli rice noodles, shredded lettuce, cucumbers, bean sprouts, pickled carrots and daikon, roasted peanuts and a side of lime fish sauce.</p>
                    <span>
                        <img alt="Vermicelli Noodle" src={Bun_Pic} className="item_pics"></img>
                    </span>
                </div>
                <div className="body-menu">
                    <div className="item_display">
                        {bunComponent}
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

export default BunPage