import React from 'react';

function Skills({skill}){

    const skills = []

    return (
        <>
            <p>SKILLS</p>

            {
                skill.map ((item)=> 
                    <div>{item}</div>
                )
            }
        </>
    )
}

export default Skills;