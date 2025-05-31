
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { avatarFallback, name, secondaryPortraitPath, skills, careerTitleShort, shortName } from '@/constant.config';

const InlineTxt = ({ text }: { text: string; }) => (<span className=" text-regal-blue dark:text-moonglow">{text}</span>);


const About = () => {
  const getYearsOfJourney = () => String(new Date().getFullYear() - 2009);
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Me Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        {/* About Me Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* About Me Left Side */}
          <div className="space-y-6">
            <div className="flex items-center space-x-6 mb-6">
              <Avatar className="w-24 h-24 md:w-40 md:h-40">
                <AvatarImage 
                  src={secondaryPortraitPath} 
                  alt="Jacob Daurham"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{shortName}</h3>
                <p className="text-foreground/60">{careerTitleShort}</p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              For {getYearsOfJourney()} years, I&apos;ve thrived as a <InlineTxt text="design specialist" />, with {Number(getYearsOfJourney()) - 4} years of commissioned freelance work and the last {new Date().getFullYear() - 2019} years diving deep into programming—often spending 12+ hours a day mastering my craft.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Now, as a passionate software engineer, I focus on building efficient, scalable solutions with clean, maintainable code. My journey spans full-stack development, problem-solving, and collaborative teamwork, always driven by curiosity and precision.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I stay on the cutting edge of technology, whether exploring new frameworks, contributing to open-source projects, or planning my next technical challenge. Currently, I&apos;m seeking new opportunities where I can apply my expertise, learn from a dynamic team, and grow as a developer.  
            </p>
          </div>
          
          {/* About Me Right Side */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-card border border-border rounded-lg p-3 text-center hover:border-blue-500/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
