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

import {HashRouter as Router, Routes ,Route} from "react-router-dom"



function App(){
    return(
        <div className="menu_display">
            
            <TitleBar/>
            <Router>
            <SectionButton/>
                <Routes>
                    <Route path='/' exact element={<SpecialtiesPage/> }>
                         
                    </Route>
                    <Route path='/appetizer' element={<AppetizerPage/>}>
                    </Route>
                    <Route path='/pho' element={<PhoPage/>}>
                    </Route>
                    <Route path='/bun' element={<BunPage/>}>
                    </Route>
                    <Route path='/sandwich' element={<SandwichPage/>}>
                    </Route>
                    <Route path='/rice' element={<RicePage/>}>
                    </Route>
                    {/* <Route path='/stirfry'>
                        <StirFryPage/>
                    </Route> */}
                    <Route path='/veg' element={<VegPage/>}>
                    </Route>
                    <Route path='/bev' element={<BevPage/>}>
                    </Route>
                </Routes>
                <FootNote />
            </Router>
        </div>
    )
}
export default App 