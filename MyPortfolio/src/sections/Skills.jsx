import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiCplusplus, 
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, 
  SiFramer, SiGreensock, SiGit, SiGithub, SiArduino, SiVercel, SiNetlify, SiAppwrite
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = {
    "languages": [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript ES6+", icon: SiJavascript, color: "text-yellow-400" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
    ],
    "frameworksAndLibraries": [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
      { name: "GSAP", icon: SiGreensock, color: "text-green-500" },
    ],
    "toolsAndPlatforms": [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-400" },
      { name: "Arduino", icon: SiArduino, color: "text-teal-500" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-500" },
      { name: "Appwrite", icon: SiAppwrite, color: "text-pink-500" },
    ],
  };

  const formatTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1')
                .replace('And', '/')
                .toUpperCase();
  };

  return (
    <div id="skills" className="flex flex-col items-center py-2 px-4 bg-black text-white">

      <div className="w-full max-w-2xl mx-auto py-4 md:py-10 border-dashed border-b-2 border-gray-500 my-4">
        <h1 className='text-3xl font-bold text-left mb-8 text-white underline  underline-offset-8'>Skills I have</h1>
        {Object.keys(skillCategories).map((categoryKey) => (
          <div key={categoryKey} className="mb-10 last:mb-0">
            <h2 className="text-xl font-medium mb-6 text-red-400 flex items-center p-">
              <span className="text-white mr-2">&lt;</span>
              {formatTitle(categoryKey)}
              <span className="text-white ml-2">/&gt;</span>
            </h2>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-4">
              {skillCategories[categoryKey].map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-sm font-medium hover:bg-gray-700 transition duration-200"
                >
                  <skill.icon className={`text-xl ${skill.color} mr-2`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;