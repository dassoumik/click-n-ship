import React from 'react';
import HomeComp from '../../components/HomeComp/HomeComp.js';

function Home() {
    return (
        <div>
            {console.log("in adminlogin")}
            <HomeComp type="adminlogin" />
        </div>
    )
}

export default Home;