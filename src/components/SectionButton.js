import React from "react"
import PopupSection from "./PopupSection"

function SectionButton(){
    const [isOpen, setIsOpen] = React.useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)
        if(!isOpen){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "unset"
        }
    }
    return(
        <div className="section-button-border-wrap">
            <button  className="section-button" onClick={togglePopup}>
                <i class="fa fa-bars"></i>
                <span>Jump to Menu Section</span>
            </button>
            
            
            {isOpen && <PopupSection  
                handleClose = {togglePopup}
            />}
        </div>
    )
}

export default SectionButton