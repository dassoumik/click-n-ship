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

function AdminPost() {
    return (
        <div>
            <AdminNav />
            <h2 style={styles.titleStyle}>This will be the post new product page.</h2>
        </div>
    )
}

export default AdminPost;