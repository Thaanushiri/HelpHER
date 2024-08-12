// Emergency.js
import React from 'react';
import './Emergency.css'; // Make sure this path is correct

const Emergency = () => {
    return (
        <div className="emergency-page">
            <div className="container">
                <div className="emergency-header">
                    <h1>Emergency Help</h1>
                </div>
                <div className="emergency-buttons">
                    <button className="emergency-button alert-button">
                        Alert 15
                    </button>
                    <button className="emergency-button alert-button">
                        Alert 911
                    </button>
                </div>
                <div className="emergency-info">
                    <h2>Emergency Contacts</h2>
                    <ul>
                        <li>
                            <button className="emergency-button call-button">
                                1122 - Rescue
                            </button>
                        </li>
                        <li>
                            <button className="emergency-button call-button">
                                1124 - Highway Patrol
                            </button>
                        </li>
                        <li>
                            <button className="emergency-button call-button">
                                130 - Motorway Police
                            </button>
                        </li>
                        <li>
                            <button className="emergency-button call-button">
                                1043 - Women Helpline
                            </button>
                        </li>
                        <li>
                            <button className="emergency-button call-button">
                                1991 - Cyber Crime
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Emergency;
