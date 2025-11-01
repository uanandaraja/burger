import { Button } from "@/components/ui/button";
import bunLogo from "@/public/logos/bun.svg";
import reactLogo from "@/public/logos/react_light.svg";
import typescriptLogo from "@/public/logos/typescript.svg";
import tailwindLogo from "@/public/logos/tailwindcss.svg";
import tanstackLogo from "@/public/logos/tanstack.svg";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-left">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Built with Bun from the ground up
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Full-stack starter powered by Bun. Fast, simple, ready to use.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-start gap-6 py-4">
          <img src={bunLogo} alt="Bun" className="h-6 w-auto opacity-70" />
          <img src={reactLogo} alt="React" className="h-6 w-auto opacity-70" />
          <img src={typescriptLogo} alt="TypeScript" className="h-6 w-auto opacity-70" />
          <img src={tailwindLogo} alt="Tailwind CSS" className="h-6 w-auto opacity-70" />
          <img src={tanstackLogo} alt="TanStack Router" className="h-6 w-auto opacity-70" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-4">
          <Button size="lg" className="font-semibold">
            Get started now
          </Button>
          <Button variant="outline" size="lg" className="font-semibold" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

