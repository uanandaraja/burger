export function Features() {
  const features = [
    {
      title: "Bun Runtime",
      description: "Fast JavaScript runtime with built-in bundler, test runner, and package manager. No need for separate tools.",
    },
    {
      title: "Type-Safe APIs",
      description: "End-to-end type safety with TypeScript. Write backend routes and call them from the frontend with full autocomplete.",
    },
    {
      title: "Hot Module Reload",
      description: "Instant feedback during development. Bun's HMR watches files and hot-reloads both backend and frontend automatically.",
    },
    {
      title: "Modern UI Components",
      description: "shadcn/ui components with Tailwind CSS. Accessible, customizable, and ready to use.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
        What's included
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="space-y-3 p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-semibold text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

