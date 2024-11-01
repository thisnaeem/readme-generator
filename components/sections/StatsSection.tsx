// components/sections/StatsSection.tsx
import { Checkbox } from "../ui/checkbox";
import { UserData } from "@/lib/types";
import { BarChart2, GitGraph } from "lucide-react";

interface StatsSectionProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export function StatsSection({ userData, setUserData }: StatsSectionProps) {
  const toggleStat = (statKey: keyof UserData["showSections"]) => {
    setUserData({
      ...userData,
      showSections: {
        ...userData.showSections,
        [statKey]: !userData.showSections[statKey],
      },
    });
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-400">
        GitHub Statistics
      </h2>

      <div className="space-y-4">
        {/* Stats Card Option */}
        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={userData.showSections.stats}
              onChange={() => toggleStat("stats")}
            />
            <div className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-gray-400" />
              <label className="text-sm text-gray-300">
                Show GitHub Statistics
              </label>
            </div>
          </div>
        </div>

        {/* Contribution Graph Option */}
        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={userData.showSections.graph}
              onChange={() => toggleStat("graph")}
            />
            <div className="flex items-center gap-2">
              <GitGraph className="h-4 w-4 text-gray-400" />
              <label className="text-sm text-gray-300">
                Show Contribution Graph
              </label>
            </div>
          </div>
        </div>
      </div>

      {(userData.showSections.stats || userData.showSections.graph) && (
        <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
          <p className="text-sm text-purple-200">
            Note: Make sure your GitHub username is set in the profile section
            to display these statistics.
          </p>
        </div>
      )}
    </section>
  );
}
