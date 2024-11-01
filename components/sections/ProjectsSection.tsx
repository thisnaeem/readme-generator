// components/sections/ProjectsSection.tsx
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UserData, Project } from "@/lib/types";
import { X, Plus, Link, Code2 } from "lucide-react";
import { TECH_CATEGORIES } from "@/lib/constants";

interface ProjectsSectionProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export function ProjectsSection({
  userData,
  setUserData,
}: ProjectsSectionProps) {
  const addProject = () => {
    setUserData({
      ...userData,
      projects: [
        ...userData.projects,
        { name: "", description: "", url: "", tech: [] },
      ],
    });
  };

  const removeProject = (index: number) => {
    setUserData({
      ...userData,
      projects: userData.projects.filter((_, i) => i !== index),
    });
  };

  const updateProject = (index: number, project: Partial<Project>) => {
    setUserData({
      ...userData,
      projects: userData.projects.map((p, i) =>
        i === index ? { ...p, ...project } : p
      ),
    });
  };

  const toggleProjectTech = (index: number, tech: string) => {
    const project = userData.projects[index];
    const updatedTech = project.tech.includes(tech)
      ? project.tech.filter((t) => t !== tech)
      : [...project.tech, tech];

    updateProject(index, { tech: updatedTech });
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-purple-400">Projects</h2>
        <Button
          onClick={addProject}
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 hover:bg-purple-400/10"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      <div className="space-y-6">
        {userData.projects.map((project, index) => (
          <div
            key={index}
            className="relative space-y-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50"
          >
            <button
              onClick={() => removeProject(index)}
              className="absolute top-4 right-4 p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Project Name
                  </label>
                  <Input
                    value={project.name}
                    onChange={(e) =>
                      updateProject(index, { name: e.target.value })
                    }
                    placeholder="e.g., Awesome Project"
                    className="bg-gray-900/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Project URL
                  </label>
                  <div className="relative">
                    <Input
                      value={project.url}
                      onChange={(e) =>
                        updateProject(index, { url: e.target.value })
                      }
                      placeholder="https://github.com/username/project"
                      className="pl-9 bg-gray-900/50"
                    />
                    <Link className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    updateProject(index, { description: e.target.value })
                  }
                  placeholder="Brief description of your project..."
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-md border border-gray-700 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           placeholder-gray-500 text-sm"
                  rows={4}
                />
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Code2 className="h-4 w-4" />
                <span>Technologies Used</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.values(TECH_CATEGORIES)
                  .flatMap((category) => category.items)
                  .map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleProjectTech(index, tech)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        project.tech.includes(tech)
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-gray-700/30 text-gray-400 border border-gray-700 hover:bg-gray-700/50 hover:text-gray-300"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        ))}

        {userData.projects.length === 0 && (
          <button
            onClick={addProject}
            className="w-full py-8 rounded-lg border-2 border-dashed border-gray-700 
                     hover:border-purple-500/50 hover:bg-purple-500/5 transition-colors
                     flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-purple-400"
          >
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Add Your First Project</span>
          </button>
        )}
      </div>
    </section>
  );
}
