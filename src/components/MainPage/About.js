import React from 'react';


export default function About () {
    return(
        <div className="about home">
            <h2 className="title">About Taskmate</h2>
            <p className="para">At TaskMate, we are driven by the belief that better organization leads to greater accomplishments. Our mission is to create tools that empower individuals and teams to focus on what truly matters.</p>
            <p className="para sideline">We are committed to:</p>
            <ul>
                <li><span className="side-heading">Simplifying Complexity: </span>TaskMate is designed with an intuitive interface that makes managing tasks straightforward and enjoyable.</li>
                <li><span className="side-heading">Encouraging Growth:</span>Whether you’re working solo or as part of a team, TaskMate helps you reach your potential by keeping your goals in sight.</li>
                <li><span className="side-heading">Building Trust:</span> As a user-focused company, we prioritize reliability, security, and continuous improvement in everything we do.</li>
            </ul>
            <p className="para">TaskMate is more than an app—it’s a partner in your journey towards success. With every feature carefully crafted, we aim to inspire productivity, foster collaboration, and simplify the art of getting things done.</p>
            <span className="side-heading">Join us as we redefine task management, one accomplishment at a time. Let’s build a future where no task feels too daunting and no goal is out of reach!</span>
        </div>
    )
}