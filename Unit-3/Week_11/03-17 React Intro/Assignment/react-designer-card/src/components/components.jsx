import React from 'react';
import styles from './components.module.css'

function DesignerCard() {
    return (
        <div className = {styles.mainBox}>
            <div className= {styles.borderBox}>
                <div>
                    <p>PRO</p>
                </div>
                <div className = {styles.imageBox}>
                    <img src="https://via.placeholder.com/300.png/09f/fff" alt="image" />
                </div>
                <h3>Ricky Park</h3>
                <p>New York</p>
                <p>User interface designer and front-end developer</p>
                <button>Message</button>
                <button>Following</button>
                <div className = {styles.footerBox}>
                    <p>SKILLS</p>
                    <div>U/UX</div>
                    <div>Front End Development</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>React</div>
                    <div>Node</div>
                </div>
            </div>
        </div>
    )
}

export {DesignerCard};