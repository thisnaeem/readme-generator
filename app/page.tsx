// app/page.tsx
"use client";

import { useState } from "react";
import { Github, Copy, Download, Eye, Code2 } from "lucide-react";
import { UserData } from "@/lib/types";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import Preview from "@/components/Preview";
import { Toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { generateMarkdown } from "@/lib/utils";

const defaultUserData: UserData = {
  name: "",
  title: "",
  subtitle: "",
  about: "",
  location: "",
  email: "",
  github: "",
  linkedin: "",
  twitter: "",
  website: "",
  currentWork: "",
  currentLearn: "",
  collaboration: "",
  askMe: "",
  funFact: "",
  techStack: [],
  projects: [],
  showSections: {
    about: true,
    techStack: true,
    stats: true,
    graph: true,
    social: true,
    projects: true,
  },
};

export default function Home() {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCopy = async () => {
    const markdown = generateMarkdown(userData);
    await navigator.clipboard.writeText(markdown);
    setToastMessage("README copied to clipboard!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDownload = () => {
    const markdown = generateMarkdown(userData);
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setToastMessage("README downloaded successfully!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                GitHub README Generator
              </span>
            </div>
            <a
              href="https://github.com/thisnaeem/readme-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:block">Star on GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-gray-700/50">
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab("edit")}
              className={`px-6 py-3 flex items-center gap-2 transition-colors ${
                activeTab === "edit"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Code2 className="h-5 w-5" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-6 py-3 flex items-center gap-2 transition-colors ${
                activeTab === "preview"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Eye className="h-5 w-5" />
              <span>Preview</span>
            </button>
          </div>

          <div className="p-6">
            {activeTab === "edit" ? (
              <div className="space-y-8">
                <AboutSection userData={userData} setUserData={setUserData} />
                <StatsSection userData={userData} setUserData={setUserData} />
                <TechStackSection
                  userData={userData}
                  setUserData={setUserData}
                />
                <SocialSection userData={userData} setUserData={setUserData} />
                <ProjectsSection
                  userData={userData}
                  setUserData={setUserData}
                />
              </div>
            ) : (
              <Preview userData={userData} />
            )}
          </div>
        </div>

        <div className="fixed bottom-8 right-8 flex gap-4">
          <Button
            onClick={handleCopy}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
          >
            <Copy className="h-5 w-5" />
            <span>Copy</span>
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download</span>
          </Button>
        </div>

        {showToast && (
          <Toast
            message={toastMessage}
            type="success"
            onClose={() => setShowToast(false)}
          />
        )}
      </main>
    </div>
  );
}
