import React from 'react';
import './Style.css';
import './Function.css';

function HomePage() {
    return (
        <div className="homepage-container">
            {/* Prima sezione */}
            <div className="section">
                <div className="section-row">
                    <h2>Zona 1</h2>
                    <p>Contenuti per la seconda zona.</p>
                </div>
                <div className="divider-row"></div>
                <div className="section-row">
                    <h2>Zona 2</h2>
                    <p>Contenuti per la seconda zona.</p> 
                </div>
            </div>
           
            {/* Linea divisoria */}
            <div className="divider"></div>

            {/* Seconda sezione */}
            <div className="section">
                <h2>Zona 3</h2>
                <p>Contenuti per la seconda zona.</p>
            </div>

            {/* Linea divisoria */}
            <div className="divider"></div>

            {/* Terza sezione */}
            <div className="section">
                <h2>Zona 4</h2>
                <p>Contenuti per la terza zona.</p>
            </div>
        </div>
    );
}


export default HomePage;
