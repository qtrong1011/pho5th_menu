import React from "react";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


class Popup extends React.Component {
    // constructor(){
    //     super()
    // }
 
    render(){
        return (
            <div className="popup-box">
              <div className="box">
                {/* <span className="close-icon" onClick={this.props.handleClose}>x</span> */}
                
                    <div className="menu-section">
                        <ul>
                            <li className="box-title">
                                CATEGORY
                                <span onClick={this.props.handleClose}><i className="fa fa-close"></i></span>
                            </li>
                            <li><Link className="go-to-menu" to={'/'} onClick={this.props.handleClose}><p>Specialties<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/appetizer'} onClick={this.props.handleClose}><p>Appetizer<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/pho'} onClick={this.props.handleClose}><p>Noodle Soup<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/bun'} onClick={this.props.handleClose}><p>Vermicelli<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/sandwich'} onClick={this.props.handleClose}><p>Sandwich<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/rice'} onClick={this.props.handleClose}><p>Rice<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/veg'} onClick={this.props.handleClose}><p>Vegetarian<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                            <li><Link className="go-to-menu" to={'/bev'} onClick={this.props.handleClose}><p>Beverages<span><i class="fa fa-arrow-right"></i></span></p></Link></li>
                        </ul>
                    </div>
              </div>
            </div>
          )
    }
}
        
  

 
export default Popup;