import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  avatarFallback,
  secondaryPortraitPath,
  skills,
  careerTitleShort,
  shortName,
} from "@/constant.config";
import { Blocks, BrainCircuit, Workflow } from "lucide-react";

const focusAreas = [
  {
    title: "Product engineering",
    description:
      "I like owning the full path from an ambiguous idea to a dependable interface, data model, API, and deployment.",
    icon: Blocks,
  },
  {
    title: "Systems & automation",
    description:
      "Recent work includes household operations, finance workflows, health data ingestion, background jobs, and self-hosted services.",
    icon: Workflow,
  },
  {
    title: "Applied AI",
    description:
      "I use AI where it creates real leverage: structured extraction, vision-assisted capture, local model services, and workflow automation.",
    icon: BrainCircuit,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.24em] text-foreground/50 mb-3">
            How I work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-5">
              <Avatar className="w-24 h-24 md:w-32 md:h-32">
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
                <h3 className="text-2xl font-semibold mb-1">{shortName}</h3>
                <p className="text-foreground/60">{careerTitleShort}</p>
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a software engineer who enjoys turning practical problems into
              software I can actually use, operate, and improve over time. That has
              pushed me beyond isolated UI work into APIs, databases, deployment,
              automation, hardware integrations, and AI-assisted workflows.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My recent projects include a personal health platform with structured
              data ingestion and experiments, a household dashboard with finance and
              operations workflows, a production nutrition tracker with AI-assisted
              capture, and a self-hosted local AI service.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I care about maintainability, clear system boundaries, useful tests,
              and product details that remove friction for the person actually using
              the software. I&apos;m especially interested in React/TypeScript product
              work and full-stack roles where I can own meaningful pieces of a system.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4">
              {focusAreas.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-5 flex gap-4"
                >
                  <div className="shrink-0 rounded-lg bg-muted p-3 h-fit">
                    <Icon className="w-5 h-5 text-regal-blue dark:text-moonglow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/65">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Current toolkit</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-card border border-border rounded-lg p-3 text-center hover:border-blue-500/50 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
