import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting AFZHARS. We will get back to you soon.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Let's Grow Together
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Have questions about our grains, logistics, or partnership opportunities? Reach out to our team today.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Kano Head Office</h3>
                <p className="text-muted-foreground">123 Agricultural Layout, Kano State, Nigeria</p>
                <p className="text-primary font-bold mt-2">+234 800 123 4567</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Borno Branch</h3>
                <p className="text-muted-foreground">45 Grain Market Road, Maiduguri, Borno State</p>
                <p className="text-primary font-bold mt-2">+234 800 987 6543</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-border/50">
            <h3 className="font-serif font-bold text-2xl mb-6 text-foreground">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="rounded-xl bg-muted/20 border-border/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="rounded-xl bg-muted/20 border-border/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Grain Inquiry" {...field} className="rounded-xl bg-muted/20 border-border/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what you need..." 
                          className="min-h-[150px] rounded-xl bg-muted/20 border-border/50 resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
