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
      <h2 className="mb-12 text-center font-semibold text-3xl text-foreground md:text-4xl">
        What's included
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            className="space-y-3 rounded-lg border border-border bg-card p-6"
            key={index}
          >
            <h3 className="font-semibold text-card-foreground text-xl">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
