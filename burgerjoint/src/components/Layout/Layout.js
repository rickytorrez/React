import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props )=>(
    <Aux> 
        <ToolBar />
        <SideDawer />
        <main className = { classes.Content }>
            {props.children}
        </main>
    </Aux>
);

export default layout;