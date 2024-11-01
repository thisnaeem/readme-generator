import { Input } from "../ui/input";
import { UserData } from "@/lib/types";

interface AboutSectionProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export function AboutSection({ userData, setUserData }: AboutSectionProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-400">About You</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Your name"
          label="Name"
        />

        <Input
          name="title"
          value={userData.title}
          onChange={handleChange}
          placeholder="e.g., Full Stack Developer"
          label="Title"
        />

        <Input
          name="location"
          value={userData.location}
          onChange={handleChange}
          placeholder="City, Country"
          label="Location"
        />

        <Input
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          label="Email"
          type="email"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">About</label>
        <textarea
          name="about"
          value={userData.about}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-gray-700/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Write a brief introduction about yourself..."
        />
      </div>
    </section>
  );
}
