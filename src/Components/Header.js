
import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="Container">

                <img src="./Images/RogersDiner.png" className="logo mt-3" alt="logo" />

                <h1 className="logo">
                    When you're here, you're home.
                </h1>
            </div>

        );
    }
}

export default Header;

