import react from '../assets/icons/react.svg'
import Bar from './Bar';

const languages = [
   
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'CSS',
        level: '60'
    },
    {
        icon: react,
        name: 'react',
        level: '70'
    },
    {
        icon: react,
        name: 'Graphql',
        level: '80'
    },
    {
        icon: react,
        name: 'ExpressJs',
        level: '80'
    },
    {
        icon: react,
        name: 'JavaScript',
        level: '80'
    },
    {
        icon: react,
        name: 'TypeScript',
        level: '70'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '50'
    },
    {
        icon: react,
        name: 'TailwindCss',
        level: '60'
    },
    {
        icon: react,
        name: 'AdonisJs',
        level: '50'
    },
    {
        icon: react,
        name: 'NestJs',
        level: '70'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '50'
    }

]


const Skills = () => {
    return (
      
        <div id="skills" className="skills" >
         
            <div className="container">
            <h1 className="py-5" style = {{textAlign:'center'}}>MY SKILLS</h1>
         
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;