import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/">
            <Button size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
