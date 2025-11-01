import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Built with Bun from the ground up
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Full-stack starter powered by Bun. Fast, simple, ready to use.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
          <div className="text-sm text-muted-foreground font-semibold">Bun</div>
          <div className="text-sm text-muted-foreground font-semibold">React</div>
          <div className="text-sm text-muted-foreground font-semibold">TypeScript</div>
          <div className="text-sm text-muted-foreground font-semibold">Tailwind CSS</div>
          <div className="text-sm text-muted-foreground font-semibold">TanStack Router</div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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

