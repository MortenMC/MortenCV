import React from 'react';
import TopBar from '../TopBar/TopBar';

// import BottomBar from '../BottomBar';

type = {
    children: React.ReactNode
}

const Layout = (props) => <React.Fragment>
    <TopBar/>
    {props.children}
    <BottomBar/>
</React.Fragment>;

export default Layout;