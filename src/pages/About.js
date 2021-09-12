import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from "../components/Content"
import resumephotofaded from '../assets/images/resumephotofaded.jpg';
import resume from '../assets/links/resumept2-2021.pdf'


function About(props) {
    return(
    <div>
        <Jumbo title={props.title} />
        <Content>
            <img class="rounded mx-auto d-block resume-img" src={resumephotofaded} alt="Dillon Smith" />
            <p>
            Hello, my name is Dillon. I'm a full stack dev with experience in React, Express, Nodejs, MySQL, and MongoDB, and Javascript.
My goal is to continue learning so I can build useful and creative applications for people, and myself. You can find my <a href={resume} target="_blank" rel="noreferrer">resume here</a>
. I'm constantly learning new tasks and refining others. Currently this includes learning new React tools, and branching in to Python scripting.
My latest project is Poggers: a game task manager built with Nodejs, MySQL, and Express. I plan on building out my React portfolio in the upcoming months.
When I'm not learning something new, chances are I'm building my NFT projects <a href="https://opensea.io/collection/treasures-of-study" target="_blank" rel="noreferrer">here</a>, as I have experience as a graphic designer, and am also fluent
with Blender 3D software.
            </p>
        </Content>
    </div>
    )
}

export default About;