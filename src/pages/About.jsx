import React from "react";
import SkillCards from '../components/SkillCards';
import { SiDocker, SiJavascript, SiPython, SiReact } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

export function About() {
    const skills = [
    { Icon: FaJava, name: 'Java', color: 'text-blue-400'},
    { Icon: SiJavascript, name: 'JavaScript', color: 'text-purple-400' },
    { Icon: SiReact, name: 'React.js', color: 'text-blue-400' },
    { Icon: FaJava, name: 'Java', color: 'text-purple-400'},
    { Icon: SiPython, name: 'Python', color: 'text-blue-400' },
    { Icon: SiDocker, name: 'Docker', color: 'text-purple-400'},
    ];

return (
    <div className="min-h-screen flex flex-col items-center px-6 bg-gradient-to-b from-blue-300 to-purple-400">
        <section className="w-full max-w-6xl py-20">
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center md:justify-between gap-12 pt-10">
                <div className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                    <img
                    src="/src/assets/me.png"
                    alt="Larissa Shiba"
                    className="w-full h-full object-cover"
                    />
            </div>

            <div className="max-w-xl text-center md:text-left pt-30 pb-20">
                <h1 className="text-4xl md:text-7xl font-family mb-4 leading-tight typing bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    More about me!
                </h1>
                
                <p className="text-white text-lg leading-relaxed pt-5">
                    I'm <span className="font-family text-blue-600">Larissa Shiba</span>, from São Paulo, Brazil.<br />
                    Passionate about programming, reading, traveling, animals, and gaming.<br />
                    Currently studying <span className="font-family text-blue-600">Software Engineering at FIAP</span>.<br />
                    Where I discovered a passion for <span className="font-family text-pink-400">IoT</span>, 
                    <span className="font-family text-yellow-200"> Edge Computing</span>,
                    <span className="font-family text-red-400"> Automation</span> and
                    <span className="font-family text-blue-300"> Backend development</span>. <br/>
                    I also work with Front-End and Python.<br/>
                    Proficient in Portuguese, Spanish, English, and Japanese. <br />
                </p>
            </div>
        </div>
        </section>

        <div className="w-full" />
        <section className="w-full max-w-6xl py-16">
        <h2 className="text-1xl md:text-5xl font-family mb-8 text-center text-white">My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
            {skills.length > 0 ? (
                skills.map((skill, idx) => (
                <SkillCards
                key={idx}
                Icon={skill.Icon}
                name={skill.name}
                className={skill.color}
                />
            ))
        ) : (
            <p className="text-white/80">No skills provided</p>
        )}
        </div>
        </section>
    </div>
    );
}
