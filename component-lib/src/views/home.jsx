import React, { Component } from 'react';
import {Link} from "react-router-dom";

class home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/tab">tab</Link>
                    </li>
                    <li>
                        <Link to="/user">user</Link>
                    </li>
                    <li>
                        <Link to="/redux">redux</Link>
                    </li>
                    <li>
                        <Link to="/reduxHigh">reduxHigh</Link>
                    </li>
                    <li>
                        <Link to="/reduxWithoutConnect">reduxWithoutConnect</Link>
                    </li>
                    <li>
                        <Link to="/loadmore">loadmore</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default home;