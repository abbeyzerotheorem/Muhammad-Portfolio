import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, LayoutTemplate, PenTool, PencilRuler, WholeWord, Bot } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import { ParallaxLayer } from "@/components/parallax-layer";
import ContactForm from "@/components/contact-form";
import ScrollToTop from "@/components/scroll-to-top";
import { ScrollAnimation } from "@/components/scroll-animation";
import { PhotoshopIcon } from "@/components/icons/photoshop-icon";
import { IllustratorIcon } from "@/components/icons/illustrator-icon";
import { IndesignIcon } from "@/components/icons/indesign-icon";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { BlenderIcon } from "@/components/icons/blender-icon";

const projects = [
  { id: 'project-1', title: 'Brand Identity for Zenith Corp', tags: ['Logo Design', 'Branding', 'Typography'], imageId: 'project1' },
  { id: 'project-2', title: 'Packaging Design for Aura Cosmetics', tags: ['Packaging', 'Illustration', 'Print'], imageId: 'project2' },
  { id: 'project-3', title: 'Web UI for Fintech Startup', tags: ['UI/UX', 'Web Design', 'Figma'], imageId: 'project3' },
  { id: 'project-4', title: 'Abstract Digital Art Series', tags: ['Digital Art', 'Illustration', 'Procreate'], imageId: 'project4' },
  { id: 'project-5', title: 'Event Posters for Music Festival', tags: ['Poster Design', 'Typography', 'Branding'], imageId: 'project5' },
  { id: 'project-6', title: 'Minimalist Logo Collection', tags: ['Logo Design', 'Branding', 'Minimalism'], imageId: 'project6' },
  { id: 'project-7', title: 'Editorial Layout for "Vogue"', tags: ['Editorial', 'Typography', 'Layout'], imageId: 'project7' },
  { id: 'project-8', title: '3D Icons for Tech App', tags: ['3D Design', 'Iconography', 'Blender'], imageId: 'project8' },
  { id: 'project-9', title: 'Social Media Campaign for "Glow"', tags: ['Social Media', 'Branding', 'Marketing'], imageId: 'project9' },
  { id: 'project-10', title: 'Typography Exploration', tags: ['Typography', 'Calligraphy', 'Experiment'], imageId: 'project10' },
  { id: 'project-11', title: 'Apparel Graphics for "Urban Threads"', tags: ['Apparel', 'Illustration', 'Streetwear'], imageId: 'project11' },
  { id: 'project-12', title: 'Brand Guide for "Eco Foods"', tags: ['Branding', 'Strategy', 'Guidelines'], imageId: 'project12' },
];

const skills = [
  { name: 'Photoshop', icon: PhotoshopIcon },
  { name: 'Illustrator', icon: IllustratorIcon },
  { name: 'InDesign', icon: IndesignIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Blender', icon: BlenderIcon },
  { name: 'Brand Identity', icon: PencilRuler },
  { name: 'UI/UX Design', icon: LayoutTemplate },
  { name: 'Typography', icon: WholeWord },
  { name: 'Illustration', icon: PenTool },
  { name: 'GenAI', icon: Bot },
];

const GeometricShape = ({ className }: { className?: string }) => (
  <div className={`absolute border-accent/20 ${className}`} />
);

export default function Home() {
  const avatar = PlaceHolderImages.find(p => p.id === 'avatar');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[100svh] flex items-center justify-center text-center overflow-hidden">
          <ParallaxLayer speed={-0.3} className="absolute inset-0">
            <GeometricShape className="w-48 h-48 border-[12px] rounded-full top-[10%] left-[5%] animate-float" />
            <GeometricShape className="w-32 h-32 border-8 top-[60%] left-[20%] animate-spin-slow" />
          </ParallaxLayer>
          <ParallaxLayer speed={-0.15} className="absolute inset-0">
            <GeometricShape className="w-24 h-24 border-4 rounded-full top-[25%] right-[10%] animate-pulse-border" />
            <GeometricShape className="w-56 h-56 border-[20px] top-[70%] right-[15%] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
          </ParallaxLayer>
          <div className="z-10 flex flex-col items-center p-4">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
              <span className="text-5xl md:text-7xl lg:text-8xl">Muhammad</span> Taha
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl">
              Graphic Designer · Visual Storyteller · Designer Knight
            </p>
            <Button asChild size="lg" className="mt-8 border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105">
              <a href="#projects">Explore My Realm</a>
            </Button>
          </div>
        </section>

        {/* Projects Showcase */}
        <ScrollAnimation>
          <section id="projects" className="py-20 md:py-32 bg-card relative overflow-hidden">
            <ParallaxLayer speed={-0.1} className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(hsl(var(--accent))_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </ParallaxLayer>
            <div className="container mx-auto px-4 z-10 relative">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
                Projects Showcase
              </h2>
              <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/80">
                Armored with creativity, shielded by precision. Here lies a gallery of conquered creative challenges and forged visual identities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* About Section */}
        <ScrollAnimation>
          <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  {avatar && (
                    <div className="relative">
                      <Image
                        src={avatar.imageUrl}
                        alt={avatar.description}
                        width={300}
                        height={300}
                        className="rounded-full object-cover border-4 border-card"
                        data-ai-hint={avatar.imageHint}
                      />
                      <div className="absolute inset-0 rounded-full shadow-[0_0_40px_10px_hsl(var(--accent)/0.4)] animate-pulse" style={{ animationDuration: '3s' }}></div>
                    </div>
                  )}
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    The Knight Behind the Designs
                  </h2>
                  <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto md:mx-0">
                    I’m Muhammad Taha, a Graphic Designer on a quest to transform ideas into visual legends. I wield creativity as my sword and design principles as my shield.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        
        {/* Skills Section */}
        <ScrollAnimation>
          <section id="skills" className="py-20 md:py-32 bg-card">
            <div className="container mx-auto px-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
                The Knight&apos;s Arsenal
              </h2>
              <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/80">
                A collection of the tools and talents I wield to bring creative visions to life. Each one is a trusted weapon in my design quests.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col items-center text-center group">
                    <div
                      className="p-6 bg-background rounded-full border-2 border-border group-hover:border-accent group-hover:scale-110 transition-all duration-300 animate-icon-float"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <skill.icon className="w-12 h-12 text-accent" />
                    </div>
                    <p className="mt-4 font-body font-semibold text-lg">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation>
          <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            <ParallaxLayer speed={-0.2} className="absolute inset-0">
              <GeometricShape className="w-64 h-64 border-[30px] rounded-lg top-[50%] left-[-100px] transform -translate-y-1/2 rotate-45 animate-spin-slow" style={{ animationDuration: '25s' }} />
            </ParallaxLayer>
            <div className="container mx-auto px-4 z-10 relative">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
                Join the Quest
              </h2>
              <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/80">
                Have a creative challenge that needs conquering? Send a raven, or use the form below.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-6">Contact Details</h3>
                  <div className="space-y-4 text-lg">
                    <a href="mailto:mt3661066@gmail.com" className="flex items-center gap-4 group">
                      <Mail className="w-6 h-6 text-accent"/>
                      <span className="group-hover:text-accent transition-colors">mt3661066@gmail.com</span>
                    </a>
                    <a href="tel:+923175722776" className="flex items-center gap-4 group">
                      <Phone className="w-6 h-6 text-accent"/>
                      <span className="group-hover:text-accent transition-colors">+92 317 5722776</span>
                    </a>
                    <a href="https://instagram.com/imdesignerknight" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <Instagram className="w-6 h-6 text-accent"/>
                      <span className="group-hover:text-accent transition-colors">@imdesignerknight</span>
                    </a>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
