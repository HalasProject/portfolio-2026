import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold">Project not found</h1>
      <p className="mt-2 text-muted-foreground">
        The project you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/#projects"
        className="mt-6 inline-flex items-center gap-2 text-accent hover:underline"
      >
        <ArrowLeft size={18} />
        Back to projects
      </Link>
    </main>
  );
}
