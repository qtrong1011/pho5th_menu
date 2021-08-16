import React from "react"
import PhoData from "../data/PhoData"
import DisplayItem from "../components/DisplayItem"
import PS_logo from "../assets/images/pho_icon.png"
import PopupPS from "../components/PopupPS"

class PhoPage extends React.Component{
    constructor(){
        super()
        this.state = {
            phoData : PhoData,
            isOpen : false
        }
        this.setIsOpen= this.setIsOpen.bind(this);
        this.togglePopup =  this.togglePopup.bind(this)
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
        const phoComponent = this.state.phoData.map(item => <DisplayItem key={item.id} item = {item}/>)
        
        return(
        
            <div>
                <div className = "section_header">
                    <h1>Phở - Noodle Soup</h1>
                    <p>Our signature noodle soup comes with your choice of various beef cuts and fresh rice noodles. All orders are served with a side of fresh bean sprouts, basil, lime and jalapenos.</p>
                </div>
                <div className = "body-menu">
                    <div className="item_display">
                        {phoComponent}
                    </div>
                    <div className="PS_section">
                        <div className="PS_section_wrapper" onClick={this.togglePopup}>
                            <img src={PS_logo} className="PS_logo" alt="Something wrong!!!!!"></img>
                            <div className="PS_banner">SIDES</div>
                        </div>
                        {this.state.isOpen && <PopupPS  
                             handleClose = {this.togglePopup}
                        />}
                    </div>
                </div>
                
            </div>
        ) 
    }
}

export default PhoPage