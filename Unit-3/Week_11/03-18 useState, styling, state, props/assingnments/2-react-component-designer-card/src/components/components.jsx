import React from 'react';
import styles from './components.module.css'
import Skills from './skills/skills'

function DesignerCard() {

    const data = {
        name: "Ricky Park",
        location: "New York",
        description: "User interface designer and front-end developer",
        skill: ["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"]
    }

    return (
        <div className = {styles.mainBox}>
            <div className= {styles.borderBox}>
                <div>
                    <p>PRO</p>
                </div>
                <div className = {styles.imageBox}>
                    <img src="https://via.placeholder.com/300.png/09f/fff" alt="image" />
                </div>

                <h3>{data.name}</h3>

                <p>{data.location}</p>

                <p>{data.description}</p>

                <button>Message</button>

                <button>Following</button>

                <div className = {styles.footerBox}>
                    <Skills skill = {data.skill} />
                </div>
            </div>
        </div>
    )
}

export {DesignerCard};