import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

export default AppRouters = ()=> {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/registro" component={Registro} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/todas" component={ListContainer} />
                    <Route exact path="/crud" component={CrudPeliculas} />
                    <Route exact path="/mas" component={Mas} />
                    <Route exact path="/menos" component={Menos} /> */}
                </Switch>

            </BrowserRouter>
        )
}