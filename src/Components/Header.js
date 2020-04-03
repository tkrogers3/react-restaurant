
import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="container">

                <img src={process.env.PUBLIC_URL + '/Images/RogersDiner.png'} className="logo mt-3" alt="logo" />

                <h1 className="slogan pb-3">
                    When you're here, you're home.
                </h1>
            </div>

        );
    }
}

export default Header;

