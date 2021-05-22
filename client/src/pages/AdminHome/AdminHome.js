import React from 'react';
import AdminNav from "../../components/AdminNav";

const styles = {
    titleStyle: {
        margin: "10px"
    },
    listStyle: {
        textAlign: "center", 
        padding: "20px"
    }
}

function AdminHome() {
    return(
        <div>
            <AdminNav />
            <h2 style={styles.titleStyle}>Welcome to your Admin Home Page!</h2>
            <h4>Click on the links below to navigate the site</h4>
            <div style={styles.listStyle}>
                <h6><a href="/addproduct">Add New Products</a></h6>
                <h6><a href="/orderhist">View Pending Orders</a></h6>
                <h6><a href="/reporting">Reporting</a></h6>
            </div>
        </div>
    )
}

export default AdminHome;