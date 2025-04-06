import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Cory Johnson</h1>
          <p className="text-gray-400">Web Developer • Game Dev • Automation Enthusiast</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button asChild variant="outline">
              <a href="https://github.com/cejohns" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://southstargamesstudios.itch.io/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Itch.io
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m a developer focused on building clean, fast websites and games. My passion lies in automation, interactive content, and game systems that create dynamic experiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-center">
            <li>React & Tailwind</li>
            <li>JavaScript / TypeScript</li>
            <li>Node.js & Express</li>
            <li>Unity / C#</li>
            <li>Unreal Engine / C++</li>
            <li>Automation / Puppeteer</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
