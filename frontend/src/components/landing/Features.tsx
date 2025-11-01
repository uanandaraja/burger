export function Features() {
  const features = [
    {
      title: "Bun Runtime",
      description: "All-in-one fast JavaScript runtime and package manager.",
    },
    {
      title: "Type-Safe APIs",
      description: "End-to-end type safety across backend and frontend.",
    },
    {
      title: "Hot Module Reload",
      description: "Instant hot reload for backend and frontend development.",
    },
    {
      title: "Modern UI Components",
      description: "Ready-to-use accessible components with Tailwind CSS.",
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

