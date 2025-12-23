"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
  id: string;
  tags: string[];
  imageId: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imageId);

  return (
    <Dialog>
      <Card className="group bg-card overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-accent/20">
        {image && (
          <DialogTrigger asChild>
            <div className="overflow-hidden cursor-pointer">
              <Image
                src={image.imageUrl}
                alt={project.id}
                width={600}
                height={400}
                className="object-cover w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.imageHint}
              />
            </div>
          </DialogTrigger>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-xl text-left">{project.id}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      {image && (
        <DialogContent className="p-0 border-0 max-w-4xl">
           <DialogHeader className="sr-only">
            <DialogTitle>{project.id}</DialogTitle>
          </DialogHeader>
          <Image
            src={image.imageUrl}
            alt={project.id}
            width={1200}
            height={800}
            className="object-contain w-full h-auto rounded-lg"
            data-ai-hint={image.imageHint}
          />
        </DialogContent>
      )}
    </Dialog>
  );
}
