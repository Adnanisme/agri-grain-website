import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, MapPin, Phone, Mail } from "lucide-react";
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
    <section id="contact" className="py-24 md:py-32 relative bg-[#F5F5F0]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-1/3 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8">
              Let's Grow<br/>Together
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-md">
              Have questions about our grains, logistics, or partnership opportunities? Reach out to our team today.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1 text-foreground">Kano Head Office</h3>
                    <p className="text-muted-foreground mb-2">123 Agricultural Layout, Kano State, Nigeria</p>
                    <p className="text-primary font-bold">+234 800 123 4567</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                     <h3 className="font-serif font-bold text-xl mb-1 text-foreground">Borno Branch</h3>
                    <p className="text-muted-foreground mb-2">45 Grain Market Road, Maiduguri, Borno State</p>
                    <p className="text-primary font-bold">+234 800 987 6543</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <h3 className="font-serif font-bold text-3xl mb-8 text-foreground">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-xl bg-gray-50 border-gray-200 h-12 focus:bg-white transition-colors" />
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
                          <Input placeholder="john@example.com" {...field} className="rounded-xl bg-gray-50 border-gray-200 h-12 focus:bg-white transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Grain Inquiry" {...field} className="rounded-xl bg-gray-50 border-gray-200 h-12 focus:bg-white transition-colors" />
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
                          className="min-h-[150px] rounded-xl bg-gray-50 border-gray-200 resize-none focus:bg-white transition-colors"
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
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
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
