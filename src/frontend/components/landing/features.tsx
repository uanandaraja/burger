import {
  Lightning,
  Rocket,
  ShieldCheck,
  SquaresFour,
} from "@phosphor-icons/react";

export function Features() {
  const features = [
    {
      title: "Bun Runtime",
      description: "All-in-one fast JavaScript runtime and package manager.",
      icon: Rocket,
    },
    {
      title: "Type-Safe APIs",
      description: "End-to-end type safety across backend and frontend.",
      icon: ShieldCheck,
    },
    {
      title: "Hot Module Reload",
      description: "Instant hot reload for backend and frontend development.",
      icon: Lightning,
    },
    {
      title: "Modern UI Components",
      description: "Ready-to-use accessible components with Tailwind CSS.",
      icon: SquaresFour,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-left font-semibold text-2xl text-foreground md:text-3xl">
          What's included
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="space-y-2 rounded-lg border border-border bg-card p-6"
                key={feature.title}
              >
                <Icon className="h-6 w-6 text-foreground" weight="duotone" />
                <h3 className="font-semibold text-base text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
