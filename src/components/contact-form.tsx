"use client";

import { useState, useRef, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "e1e00837-e552-49b2-9717-b8b0babc6ada");
    
    // Add a subject for the email
    formData.append("subject", "New Contact Form Submission from Portfolio");
    formData.append("from_name", "Designer Knight Portfolio");


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="bg-background/50 text-lg p-4"
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="bg-background/50 text-lg p-4"
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="bg-background/50 text-lg p-4"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
