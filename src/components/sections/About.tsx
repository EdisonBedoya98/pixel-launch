import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";

const team = [
  {
    photo: "/edi.png",
    name: "Edison Bedoya García",
    linkedIn: "https://www.linkedin.com/in/edison-bedoya/",
    shadowColor: "shadow-sky-500/20",
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/30",
    bgColor: "bg-sky-500/10",
    hoverBg: "hover:bg-sky-500/20",
    roleKey: "about.edison.role",
    bio1Key: "about.edison.bio1",
    bio2Key: "about.edison.bio2",
    skillsKey: "about.edison.skills",
  },
  {
    photo: "/ema.jpeg",
    name: "Emanuel Buriticá",
    linkedIn: "https://www.linkedin.com/in/emanuel-buritic%C3%A1-b477931a8/",
    shadowColor: "shadow-violet-500/20",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
    hoverBg: "hover:bg-violet-500/20",
    roleKey: "about.emanuel.role",
    bio1Key: "about.emanuel.bio1",
    bio2Key: "about.emanuel.bio2",
    skillsKey: "about.emanuel.skills",
  },
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {t("about.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("about.titleMain")}{" "}
            <span className="text-gradient">{t("about.titleGradient")}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, idx) => {
            const skills = t(member.skillsKey, { returnObjects: true }) as string[];
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="rounded-2xl bg-slate-900/60 border border-white/10 p-8 backdrop-blur-sm flex flex-col gap-6"
              >
                {/* Top: Avatar + Name */}
                <div className="flex items-center gap-5">
                  <div className="relative shrink-0">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className={`w-20 h-20 rounded-2xl object-cover shadow-xl ${member.shadowColor}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-medium mt-0.5 ${member.accentColor}`}>
                      {t(member.roleKey)}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex flex-col gap-3">
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {t(member.bio1Key)}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {t(member.bio2Key)}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* LinkedIn */}
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg ${member.bgColor} border ${member.borderColor} ${member.accentColor} text-sm font-medium ${member.hoverBg} transition-colors`}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
