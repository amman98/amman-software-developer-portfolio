import React from 'react';
import Project from '../../components/Project';
import biteBuddies from '../../images/Bite-Buddies.jpeg';
import randomWordCalendar from '../../images/Random-Word-Calendar.jpeg';
import techBlog from '../../images/Tech-Blog.jpeg';
import wrestlingQuiz from '../../images/Wrestling-Quiz.png';
import covidCrasher from '../../images/Covid-Crasher.png';
import noteTaker from '../../images/Note-Taker.jpeg';

import './style.css';

export default function Portfolio() {
    return (
        <div className="main-section">
            <h2>Portfolio</h2>
            <div className='projects'>
                <Project card={biteBuddies} name={"Bite Buddies"} deploy={"https://bite-buddies.herokuapp.com/"} repo={"https://github.com/bear-muna/bite-buddies"} identifier={"project-1"} />
                
                <Project card={randomWordCalendar} name={"Random Word Calendar"} deploy={"https://amman98.github.io/Random-Word-Calendar/"} repo={"https://github.com/amman98/Random-Word-Calendar"} identifier={"project-2"} />
                
                <Project card={techBlog} name={"Tech Blog"} deploy={"https://agile-wildwood-77347.herokuapp.com/"} repo={"https://github.com/amman98/Tech-Blog"} identifier={"project-3"} />
                
                <Project card={wrestlingQuiz} name={"Pro Wrestling Quiz"} deploy={"https://amman98.github.io/Pro-Wrestling-Quiz/"} repo={"https://github.com/amman98/Pro-Wrestling-Quiz"} identifier={"project-4"} />
                
                <Project card={covidCrasher} name={"Covid Crasher"} deploy={"https://simmer.io/@Khaoula/covidcrasher-final"} repo={"https://github.com/CSS385Team/CovidCrasher"} identifier={"project-5"} />
                
                <Project card={noteTaker} name={"Note Taker"} deploy={"https://murmuring-springs-58601.herokuapp.com/"} repo={"https://github.com/amman98/Note-Taker"} identifier={"project-6"} />
            </div>
        </div>
    );
}
