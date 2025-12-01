'use client';

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact Form Component - Client Component
 * Validates input with Zod and submits to Convex
 */
export function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitContact = useMutation(api.mutations.leads.submitContactForm);

  const handleChange = (field: keyof ContactFormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrors({});

    // Validate with Zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      // Submit to Convex
      await submitContact(formData);

      // Success! Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrors({ message: 'Failed to submit form. Please try again.' });
    }
  };

  return (
    <div className="rounded-lg bg-background p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>

      {isSubmitted ? (
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
          <h3 className="mb-2 text-xl font-semibold text-green-900">Thank You!</h3>
          <p className="text-green-800">
            We've received your message and will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={errors.name ? 'border-destructive' : ''}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={errors.email ? 'border-destructive' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <Label htmlFor="phone">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={errors.phone ? 'border-destructive' : ''}
              placeholder="(210) 555-1234"
            />
            {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
          </div>

          {/* Message Field */}
          <div>
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.message ? 'border-destructive' : ''
              }`}
              placeholder="Tell us about your vehicle and what service you're interested in..."
            />
            {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      )}

      {/* Alternative Contact Methods */}
      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Or contact us directly:
        </p>
        <div className="flex flex-col gap-2 text-center text-sm">
          <a href="tel:+17262071007" className="font-semibold text-primary hover:underline">
            (726) 207-1007
          </a>
          <a
            href="mailto:contact@onedetailatatime.com"
            className="text-muted-foreground hover:text-foreground"
          >
            contact@onedetailatatime.com
          </a>
        </div>
      </div>
    </div>
  );
}
