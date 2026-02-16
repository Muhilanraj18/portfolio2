import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Connector Line - glass effect */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-white/20 dark:bg-white/10 hidden md:block -translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative">
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-white/10 dark:bg-white/5 backdrop-blur-xl",
          "border border-white/20 dark:border-white/10",
          "hover:bg-white/20 dark:hover:bg-white/10",
          "hover:border-white/30 dark:hover:border-white/20",
          "transition-all duration-300",
          "shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10",
          "text-foreground"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-slate-700 dark:text-slate-300">
                {experience.company}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal bg-white/15 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-slate-800 dark:text-slate-200">
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-colors border-white/20 dark:border-white/10 text-slate-800 dark:text-slate-200"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.label}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
