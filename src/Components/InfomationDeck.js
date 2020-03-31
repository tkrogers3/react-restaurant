
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";


class InformationDeck extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="card-group">
                <div className="card">
                    <img src="./rogers1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Location</h5>
                        <hr></hr>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211413038313!2d-84.49472698527144!3d38.04215997971164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1585602046704!5m2!1sen!2sus" width="300" height="300" frameBorder="0" className="sjustify-content-center" aria-hidden="false" ></iframe>
                    </div>
                    
                </div>
                <div className="card">
                    <img src="./hours.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Hours</h5>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Sunday</td>
                                    <td>10a-10p</td>
                                </tr>

                                <tr>
                                    <td>Monday</td>
                                    <td>12p-10p</td>
                                </tr>

                                <tr>
                                    <td>Tuesday</td>
                                    <td>12p-10p</td>
                                </tr>

                                <tr>
                                    <td>Wednesday</td>
                                    <td>12p-10p</td>
                                </tr>

                                <tr>
                                    <td>Thursday</td>
                                    <td>12p-10p</td>
                                </tr>

                                <tr>
                                    <td>Friday</td>
                                    <td>12p-10p</td>

                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>10a-12p</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="card">
                    <img src="./contactus.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Contact Info</h5>
                        <hr></hr>
                        <h4 className="row justify-content-start pb-4"><FontAwesomeIcon icon={faFacebook} /><span className="ml-3">  Facebook.com/RogersDiner</span></h4>
                        <h4 className="row justify-content-start pb-4"><FontAwesomeIcon icon={faTwitter} /><span className="ml-3"> @RogersDiner</span></h4>
                        <h4 className="row justify-content-start pb-4"><FontAwesomeIcon icon={faMobileAlt} /> <span className="ml-3"> 859-300-6000</span></h4>
                        <h4 className="row justify-content-start pb-4"><FontAwesomeIcon icon={faEnvelopeOpenText} /> <span className="ml-3"> info@RogersDiner.com</span></h4>
                        <h4 className="row justify-content-start pb-5"><FontAwesomeIcon icon={faInstagramSquare} /><span className="ml-3"> @RogersDiner</span></h4>
                    </div>
                   
                </div>
              
            </div>
            
        );
    }
}

export default InformationDeck;

