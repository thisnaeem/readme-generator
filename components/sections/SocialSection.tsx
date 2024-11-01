import { Input } from "../ui/input";
import { UserData } from "@/lib/types";

interface SocialSectionProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export function SocialSection({ userData, setUserData }: SocialSectionProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-400">Social Links</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="github"
          value={userData.github}
          onChange={handleChange}
          placeholder="GitHub username"
          label="GitHub"
        />

        <Input
          name="linkedin"
          value={userData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn profile URL"
          label="LinkedIn"
        />

        <Input
          name="twitter"
          value={userData.twitter}
          onChange={handleChange}
          placeholder="Twitter username"
          label="Twitter"
        />

        <Input
          name="website"
          value={userData.website}
          onChange={handleChange}
          placeholder="Your website URL"
          label="Website"
        />
      </div>
    </section>
  );
}
