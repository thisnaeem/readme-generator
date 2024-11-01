import { TECH_CATEGORIES } from "@/lib/constants";
import { UserData } from "@/lib/types";

interface TechStackSectionProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export function TechStackSection({
  userData,
  setUserData,
}: TechStackSectionProps) {
  const toggleTech = (tech: string) => {
    const newTechStack = userData.techStack.includes(tech)
      ? userData.techStack.filter((t) => t !== tech)
      : [...userData.techStack, tech];

    setUserData({ ...userData, techStack: newTechStack });
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-400">Tech Stack</h2>

      {Object.entries(TECH_CATEGORIES).map(([category, { title, items }]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-lg font-medium text-gray-300">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  userData.techStack.includes(tech)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
