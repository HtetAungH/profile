import AnimatedSection from "../Effect/AnimatedSection";
import Icons from "./Icons";
import IconSkillMarquee from "../Effect/IconSkillMarquee";

const Skills = () => {
  const developmentSkills = [
    { name: "React.js", icon: <Icons.ReactIcon /> },
    { name: "Vite", icon: <Icons.ViteIcon /> },
    { name: "JavaScript", icon: <Icons.JavaScriptIcon /> },
    { name: "TypeScript", icon: <Icons.TypeScriptIcon /> },
    { name: "Redux", icon: <Icons.ReduxIcon /> },
    { name: "Tailwind CSS", icon: <Icons.TailwindCssIcon /> },
    { name: "Node.js", icon: <Icons.NodeJsIcon /> },
    { name: "Firebase", icon: <Icons.FirebaseIcon /> },
    { name: "Git", icon: <Icons.GitIcon /> },
  ];

  return (
    <AnimatedSection id="skills">
      <section
        id="skills"
        className="py-24 overflow-hidden relative bg-zinc-950"
      >
        {/* Subtle Cyan Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.05),rgba(0,0,0,0))]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
            My Tech Stack
          </h2>

          <div className="space-y-8">
            {/* The IconSkillMarquee already has the new glass card design */}
            <IconSkillMarquee
              skills={developmentSkills}
              speed={30}
              direction="left"
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
