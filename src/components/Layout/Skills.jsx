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
      {/* CUSTOMIZED: Replaced video with the consistent dark theme */}
      <section
        id="skills"
        className="py-24 overflow-hidden relative bg-zinc-900"
      >
        {/* Background Gradient to match Hero/About */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,191,36,0.1),rgba(255,255,255,0))]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* CUSTOMIZED: Heading color changed to amber for consistency */}
          <h2 className="text-4xl font-bold mb-16 text-amber-400">
            My Tech Stack
          </h2>

          <div className="space-y-8">
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
