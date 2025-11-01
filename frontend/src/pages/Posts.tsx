import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Posts() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">Posts</CardTitle>
          <CardDescription>Browse all posts</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder Posts page. Posts will be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

