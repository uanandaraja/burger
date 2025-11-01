import { Button } from "@/components/ui/button";
import bunLogo from "@/public/logos/bun.svg";
import reactLogo from "@/public/logos/react_light.svg";
import tailwindLogo from "@/public/logos/tailwindcss.svg";
import tanstackLogo from "@/public/logos/tanstack.svg";
import typescriptLogo from "@/public/logos/typescript.svg";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 text-left md:py-24">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-semibold text-3xl text-foreground md:text-4xl lg:text-5xl">
            Built with Bun from the ground up
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Full-stack starter powered by Bun. Fast, simple, ready to use.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-6 py-4">
          <img
            alt="Bun"
            className="h-6 w-auto opacity-70"
            height={24}
            src={bunLogo}
            width={24}
          />
          <img
            alt="React"
            className="h-6 w-auto opacity-70"
            height={24}
            src={reactLogo}
            width={24}
          />
          <img
            alt="TypeScript"
            className="h-6 w-auto opacity-70"
            height={24}
            src={typescriptLogo}
            width={24}
          />
          <img
            alt="Tailwind CSS"
            className="h-6 w-auto opacity-70"
            height={24}
            src={tailwindLogo}
            width={24}
          />
          <img
            alt="TanStack Router"
            className="h-6 w-auto opacity-70"
            height={24}
            src={tanstackLogo}
            width={24}
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-4 pt-4 sm:flex-row">
          <Button className="font-semibold" size="lg">
            Get started now
          </Button>
          <Button asChild className="font-semibold" size="lg" variant="outline">
            <a
              href="https://github.com"
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
