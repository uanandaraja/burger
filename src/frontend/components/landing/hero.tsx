import { Button } from "@/components/ui/button";

const bunLogo = "/public/logos/bun.svg";
const reactLogo = "/public/logos/react_light.svg";
const tailwindLogo = "/public/logos/tailwindcss.svg";
const tanstackLogo = "/public/logos/tanstack.svg";
const typescriptLogo = "/public/logos/typescript.svg";

const techStack = [
  { name: "Bun", src: bunLogo },
  { name: "React", src: reactLogo },
  { name: "TypeScript", src: typescriptLogo },
  { name: "Tailwind CSS", src: tailwindLogo },
  { name: "TanStack Router", src: tanstackLogo },
];

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 text-left md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-semibold text-3xl text-foreground md:text-4xl lg:text-5xl">
            Built with Bun from the ground up
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Full-stack starter powered by Bun. Fast, simple, ready to use.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-6 py-4">
          {techStack.map((tech) => (
            <img
              alt={tech.name}
              className="h-6 w-auto opacity-70"
              height={24}
              key={tech.name}
              src={tech.src}
              width={24}
            />
          ))}
        </div>

        <div className="flex flex-col items-start justify-start gap-4 pt-4 sm:flex-row">
          <Button asChild className="font-semibold" size="lg">
            <a href="/auth">Get started now</a>
          </Button>
          <Button asChild className="font-semibold" size="lg" variant="outline">
            <a
              href="https://github.com/uanandaraja/burger"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github Repo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
