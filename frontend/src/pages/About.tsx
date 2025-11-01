import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">About</CardTitle>
          <CardDescription>Learn more about this application</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder About page. Built with Bun + React + Tailwind CSS.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

