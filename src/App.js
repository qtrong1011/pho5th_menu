import React from "react"
import TitleBar from "./components/TitleBar"
import SectionButton from "./components/SectionButton"
import SpecialtiesPage from "./pages/SpecialtiesPage"
import AppetizerPage from "./pages/AppetizerPage"
import PhoPage from "./pages/PhoPage"
import BunPage from "./pages/BunPage"
import SandwichPage from "./pages/SandwichPage"
import RicePage from "./pages/RicePage"
import VegPage from "./pages/VegPage"
import BevPage from "./pages/BevPage"
import FootNote from "./components/FootNote"

import {HashRouter as Router, Switch, Route} from "react-router-dom"



function App(){
    return(
        <div className="menu_display">
            
            <TitleBar/>
            <Router>
            <SectionButton/>
                <Switch>
                    <Route path='/' exact>
                        <SpecialtiesPage/>  
                    </Route>
                    <Route path='/appetizer'>
                        <AppetizerPage/>
                    </Route>
                    <Route path='/pho'>
                        <PhoPage/>
                    </Route>
                    <Route path='/bun'>
                        <BunPage/>
                    </Route>
                    <Route path='/sandwich'>
                        <SandwichPage/>
                    </Route>
                    <Route path='/rice'>
                        <RicePage/>
                    </Route>
                    {/* <Route path='/stirfry'>
                        <StirFryPage/>
                    </Route> */}
                    <Route path='/veg'>
                        <VegPage/>
                    </Route>
                    <Route path='/bev'>
                        <BevPage/>
                    </Route>
                </Switch>
                <FootNote />
            </Router>
        </div>
    )
}
export default App 