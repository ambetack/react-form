import React from 'react';
import {BrowserRouter} from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <div>
            <>
            <h2> SIMFORM </h2>

            <NavLink activeClassName="active_class" to="/">ABOUT US </NavLink>
            <NavLink activeClassName="active_class" to="/">SERVICE </NavLink>
            <NavLink activeClassName="active_class" to="/">Case  Studies </NavLink>
            <NavLink activeClassName="active_class" to="/"> How it Works </NavLink>
            <NavLink activeClassName="active_class" to="/">Blog </NavLink>
            <Switch>
<Route exact path ="/" component={About} />

<Route exact path ="/" component={Services} />

<Route exact path ="/" component={CaseStudies } />
<Route exact path ="/" component={HowitWorks} />
<Route exact path ="/" component={Blog } />



            </Switch>

            </>
            
        </div>
    )
}

export default Nav

