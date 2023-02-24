import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {CircularProgress} from "@mui/material";

export const withRouter = (Component: React.ComponentType) => () => (
    <BrowserRouter>
        <Suspense fallback={<CircularProgress className='overlay' />}>
            <Component />
        </Suspense>
    </BrowserRouter>
)