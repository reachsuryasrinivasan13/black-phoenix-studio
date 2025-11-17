import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, Instagram } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }).max(100),
  email: z.string().email({ message: "Invalid email address" }).max(255),
  phone: z.string().min(10, { message: "Phone number is required" }).max(15),
  eventDate: z.string()
    .min(1, { message: "Event date is required" })
    .refine((val) => {
      const isValid = /^\d{4}-\d{2}-\d{2}$/.test(val);
      if (!isValid) return false;
      const [y, m, d] = val.split("-").map(Number);
      const selected = new Date(y, m - 1, d);
      selected.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, { message: "Please select today or a future date" }),
  eventLocation: z.string().min(1, { message: "Location is required" }).max(200),
  eventType: z.string().min(1, { message: "Event type is required" }),
  message: z.string().min(10, { message: "Please tell us about your event (minimum 10 characters)" }).max(1000),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventLocation: "",
      eventType: "",
      message: "",
      services: [],
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Event Inquiry - ${values.eventType} from ${values.name}`);
    const body = encodeURIComponent(`
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Event Type: ${values.eventType}
Event Date/Duration: ${values.eventDate}
Location: ${values.eventLocation}
Services Requested: ${values.services.join(", ")}

Message:
${values.message}
    `);
    
    const mailtoLink = `mailto:blackphoenixstudio07@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...", {
      description: "Please send the pre-filled email to complete your inquiry.",
    });
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
  };

  const services = ["Photography", "Films", "Edit-Photography-and-Films"];
  const eventTypes = [
    "Wedding",
    "Reception", 
    "Engagement",
    "Birthday",
    "Commercial",
    "Model Shoot",
    "Corporate Event",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Share all the details about you and your event so we can help make your memories last a lifetime. We'd love to hear your vision and answer any questions you might have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a 
                href="mailto:blackphoenixstudio07@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm text-center"
              >
                blackphoenixstudio07@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a 
                href="tel:+918940382626" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                +91 89403 82626
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Instagram className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/blackphoenixstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                @blackphoenixstudio
              </a>
            </div>
          </div>

          <div className="bg-card p-8 sm:p-12 rounded-lg border border-border shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-background border-input"
                            {...field} 
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
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Email Address <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="bg-background border-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Phone Number <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+91 12345 67890" 
                            className="bg-background border-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Estimated Event Dates <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            min={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`}
                            className="bg-background border-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="eventLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Location of the Event <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="City, State" 
                            className="bg-background border-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Event Type <span className="text-destructive">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-input">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Tell us about your event <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your vision, special requests, or any questions you have..."
                          className="min-h-[120px] bg-background border-input resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        What services are you looking for? <span className="text-destructive">*</span>
                      </FormLabel>
                      <div className="space-y-3 mt-3">
                        {services.map((service) => (
                          <FormField
                            key={service}
                            control={form.control}
                            name="services"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service)}
                                    onCheckedChange={(checked) => {
                                      const updatedServices = checked
                                        ? [...(field.value || []), service]
                                        : field.value?.filter((val) => val !== service) || [];
                                      field.onChange(updatedServices);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal cursor-pointer">
                                  {service}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
