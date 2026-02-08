"use client";

import Image from "next/image";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  id: string;
  tags: string[];
  imageId: string | string[];
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isMultiImage = Array.isArray(project.imageId);
  const thumbnailId = isMultiImage ? project.imageId[0] : project.imageId;
  const thumbnailImage = PlaceHolderImages.find((p) => p.id === thumbnailId);

  let galleryImages: (ImagePlaceholder | undefined)[] = [];
  if (isMultiImage) {
    galleryImages = project.imageId.map((id) =>
      PlaceHolderImages.find((p) => p.id === id)
    );
  } else if (thumbnailImage) {
    galleryImages = [thumbnailImage];
  }

  return (
    <Dialog>
      <Card className="group bg-card overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-accent/20">
        {thumbnailImage && (
          <DialogTrigger asChild>
            <div className="overflow-hidden cursor-pointer">
              <Image
                src={thumbnailImage.imageUrl}
                alt={project.id}
                width={600}
                height={400}
                className="object-cover object-top w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={thumbnailImage.imageHint}
                unoptimized
              />
            </div>
          </DialogTrigger>
        )}
        <CardContent>
          <div className="flex flex-wrap gap-2 pt-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-[90vw] w-auto h-auto max-h-[90vh] flex items-center justify-center">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.id}</DialogTitle>
        </DialogHeader>
        {isMultiImage ? (
          <Carousel className="w-full max-w-5xl" opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((image, index) =>
                image ? (
                  <CarouselItem key={index}>
                    <Image
                      src={image.imageUrl}
                      alt={`${project.id} - Image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="object-contain w-full h-auto max-h-[85vh] rounded-lg"
                      data-ai-hint={image.imageHint}
                      unoptimized
                    />
                  </CarouselItem>
                ) : null
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80" />
          </Carousel>
        ) : (
          thumbnailImage && (
            <Image
              src={thumbnailImage.imageUrl}
              alt={project.id}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[90vh] rounded-lg"
              data-ai-hint={thumbnailImage.imageHint}
              unoptimized
            />
          )
        )}
      </DialogContent>
    </Dialog>
  );
}
