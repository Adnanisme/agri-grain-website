import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xpwvjygd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out to AFZHARS AgriGrains. Our team will review your inquiry and get back to you within 24-48 hours. We appreciate your interest in our services!",
          duration: 6000,
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-gradient-to-br from-[#F9FAF7] via-[#F5F5F0] to-[#F0F2ED] overflow-hidden">
      {/* Modern Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 max-w-[50vw]" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1A4D2E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
              <span className="w-8 h-[2px] bg-secondary inline-block"></span> Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Let's Grow<br/><span className="text-secondary">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
              Have questions about our grains, logistics, or partnership opportunities? Reach out to our team today.
            </p>

            <div className="space-y-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-lg border border-white/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-2xl group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 shadow-sm">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">Kano Head Office</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">Fagge, Jaba Unity Estate. Alh. Idris Fadille street, Kano State, Nigeria</p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Phone className="h-4 w-4" />
                      <span>07025513414</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-lg border border-white/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-2xl group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 shadow-sm">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">Borno Branch</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">Biu, Almohap Service Station. Gombe Road, Borno State, Nigeria</p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Phone className="h-4 w-4" />
                      <span>07025513414</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md p-8 md:p-10 lg:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 relative overflow-hidden group"
          >
            {/* Animated gradient top border */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Send us a Message</h3>
              </div>
              <p className="text-muted-foreground mb-8 ml-[52px]">Fill out the form below and we'll get back to you promptly.</p>
              
              <Form {...form}>
                <form action="https://formspree.io/f/xpwvjygd" method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-semibold text-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 h-12 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-semibold text-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="john@example.com" 
                              {...field} 
                              className="rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 h-12 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400" 
                            />
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
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-semibold text-foreground">Subject</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 h-12 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl">
                            <SelectItem value="Grain Supply Inquiry">Grain Supply Inquiry</SelectItem>
                            <SelectItem value="Import/Export Services">Import/Export Services</SelectItem>
                            <SelectItem value="Livestock & Aquaculture Services">Livestock & Aquaculture Services</SelectItem>
                            <SelectItem value="Grain Storage & Logistics">Grain Storage & Logistics</SelectItem>
                            <SelectItem value="Traditional Foods (Gargajiya Concept)">Traditional Foods (Gargajiya Concept)</SelectItem>
                            <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-semibold text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us what you need..." 
                            className="min-h-[160px] rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 resize-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
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
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
