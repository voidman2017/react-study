import React, { Component } from 'react';
import {Link} from "react-router-dom";

class home extends Component {
    render() {
        return (
            <div>
                <Link to="/tab">tab</Link>
                home
            </div>
        );
    }
}
export default home;