import React from 'react';
import HomeComp from '../../components/HomeComp/HomeComp.js';

function Home() {
    return (
        <div>
            {console.log("in Login")}
            <HomeComp type="login"/>
        </div>
    )
}

export default Home;

