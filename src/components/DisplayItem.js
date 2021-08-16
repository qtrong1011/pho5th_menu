import React from 'react'

function DisplayItem(props){
    if(props.item.description !== ""){
        return(
            <div className="each_item_display">
                <p>{props.item.id}</p><br/>
                <div className="name_description">
                    <p>{props.item.name}</p><br/>
                    <p className="description">{props.item.description}</p>
                </div>
                <p>{props.item.price}</p><br/>
                
            </div>
        )
    }
    else{
        return(
            <div className="each_item_display">
                <p>{props.item.id}</p><br/>
                <div className="name_description">
                    <p>{props.item.name}</p>
                </div>
                <p>{props.item.price}</p><br/>
                
            </div>
        )
    }
}
export default DisplayItem 