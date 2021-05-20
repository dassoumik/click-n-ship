import React from 'react';
import HomeComp from '../../components/HomeComp/HomeComp.js';

function Home() {
    return (
        <div>
            {console.log("in Home")}
            <HomeComp type="home"/>
        </div>
    )
}

export default Home;
