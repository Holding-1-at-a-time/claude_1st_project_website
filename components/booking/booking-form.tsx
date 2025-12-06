'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';

// Zod validation schema matching Convex bookingValidator
const bookingFormSchema = z.object({
  serviceSlug: z.string().min(1, 'Please select a service'),
  serviceName: z.string().min(1, 'Service name is required'),
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerEmail: z.string().email('Invalid email address'),
  customerPhone: z.string().min(10, 'Phone number must be at least 10 digits'),
  customerAddress: z.string().optional(),
  customerZip: z.string().optional(),
  vehicleType: z.string().min(1, 'Please select vehicle type'),
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehicleYear: z.number().optional(),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
  status: z.string(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  preselectedService?: string;
  onSuccess?: (bookingId: string) => void;
}

/**
 * Booking Form Component - Client Component
 * Comprehensive form with Zod validation and Convex submission
 */
export function BookingForm({ preselectedService, onSuccess }: BookingFormProps): JSX.Element {
  const router = useRouter();
  const pillarPages = useQuery(api.queries.pillarPages.getAll);
  const createBooking = useMutation(api.mutations.bookings.create);

  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    serviceSlug: preselectedService || '',
    serviceName: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    customerZip: '',
    vehicleType: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: undefined,
    preferredDate: '',
    preferredTime: '',
    notes: '',
    status: 'pending',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update service name when service slug changes
  useEffect(() => {
    if (formData.serviceSlug && pillarPages) {
      const service = pillarPages.find((p) => p.slug === formData.serviceSlug);
      if (service) {
        setFormData((prev) => ({ ...prev, serviceName: service.serviceName }));
      }
    }
  }, [formData.serviceSlug, pillarPages]);

  const handleChange = (field: keyof BookingFormData, value: string | number | undefined): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate with Zod
      const result = bookingFormSchema.safeParse(formData);

      if (!result.success) {
        const fieldErrors: Partial<Record<keyof BookingFormData, string>> = {};
        result.error.errors.forEach((err) => {
          const field = err.path[0] as keyof BookingFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
        setIsSubmitting(false);
        return;
      }

      // Submit to Convex
      const bookingId = await createBooking(result.data);

      // Success! Redirect to confirmation page
      if (onSuccess) {
        onSuccess(bookingId);
      } else {
        router.push(`/booking/confirmation?id=${bookingId}`);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setErrors({ customerName: 'Failed to submit booking. Please try again.' });
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const minDate = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Service Selection */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Select Service</h2>
        <div>
          <Label htmlFor="service">
            Service <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.serviceSlug}
            onValueChange={(value) => handleChange('serviceSlug', value)}
          >
            <SelectTrigger className={errors.serviceSlug ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {pillarPages?.map((service) => (
                <SelectItem key={service._id} value={service.slug}>
                  {service.serviceName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceSlug && (
            <p className="mt-1 text-sm text-destructive">{errors.serviceSlug}</p>
          )}
        </div>
      </div>

      {/* Customer Information */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Your Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="customerName">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="customerName"
              type="text"
              value={formData.customerName}
              onChange={(e) => handleChange('customerName', e.target.value)}
              className={errors.customerName ? 'border-destructive' : ''}
              placeholder="John Doe"
            />
            {errors.customerName && (
              <p className="mt-1 text-sm text-destructive">{errors.customerName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="customerEmail">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="customerEmail"
              type="email"
              value={formData.customerEmail}
              onChange={(e) => handleChange('customerEmail', e.target.value)}
              className={errors.customerEmail ? 'border-destructive' : ''}
              placeholder="john@example.com"
            />
            {errors.customerEmail && (
              <p className="mt-1 text-sm text-destructive">{errors.customerEmail}</p>
            )}
          </div>

          <div>
            <Label htmlFor="customerPhone">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="customerPhone"
              type="tel"
              value={formData.customerPhone}
              onChange={(e) => handleChange('customerPhone', e.target.value)}
              className={errors.customerPhone ? 'border-destructive' : ''}
              placeholder="(210) 555-1234"
            />
            {errors.customerPhone && (
              <p className="mt-1 text-sm text-destructive">{errors.customerPhone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="customerZip">ZIP Code</Label>
            <Input
              id="customerZip"
              type="text"
              value={formData.customerZip}
              onChange={(e) => handleChange('customerZip', e.target.value)}
              placeholder="78201"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="customerAddress">Address (Optional)</Label>
          <Input
            id="customerAddress"
            type="text"
            value={formData.customerAddress}
            onChange={(e) => handleChange('customerAddress', e.target.value)}
            placeholder="123 Main St, San Antonio, TX"
          />
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Vehicle Details</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="vehicleType">
              Vehicle Type <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.vehicleType}
              onValueChange={(value) => handleChange('vehicleType', value)}
            >
              <SelectTrigger className={errors.vehicleType ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="rv">RV</SelectItem>
                <SelectItem value="boat">Boat</SelectItem>
              </SelectContent>
            </Select>
            {errors.vehicleType && (
              <p className="mt-1 text-sm text-destructive">{errors.vehicleType}</p>
            )}
          </div>

          <div>
            <Label htmlFor="vehicleMake">Make (Optional)</Label>
            <Input
              id="vehicleMake"
              type="text"
              value={formData.vehicleMake}
              onChange={(e) => handleChange('vehicleMake', e.target.value)}
              placeholder="Toyota"
            />
          </div>

          <div>
            <Label htmlFor="vehicleModel">Model (Optional)</Label>
            <Input
              id="vehicleModel"
              type="text"
              value={formData.vehicleModel}
              onChange={(e) => handleChange('vehicleModel', e.target.value)}
              placeholder="Camry"
            />
          </div>

          <div>
            <Label htmlFor="vehicleYear">Year (Optional)</Label>
            <Input
              id="vehicleYear"
              type="number"
              value={formData.vehicleYear || ''}
              onChange={(e) =>
                handleChange('vehicleYear', e.target.value ? parseInt(e.target.value) : undefined)
              }
              placeholder="2020"
              min="1900"
              max={new Date().getFullYear() + 1}
            />
          </div>
        </div>
      </div>

      {/* Scheduling */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Preferred Schedule</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="preferredDate">
              Preferred Date <span className="text-destructive">*</span>
            </Label>
            <Input
              id="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => handleChange('preferredDate', e.target.value)}
              className={errors.preferredDate ? 'border-destructive' : ''}
              min={minDate}
            />
            {errors.preferredDate && (
              <p className="mt-1 text-sm text-destructive">{errors.preferredDate}</p>
            )}
          </div>

          <div>
            <Label htmlFor="preferredTime">
              Preferred Time <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => handleChange('preferredTime', value)}
            >
              <SelectTrigger className={errors.preferredTime ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</SelectItem>
                <SelectItem value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</SelectItem>
                <SelectItem value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</SelectItem>
                <SelectItem value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</SelectItem>
                <SelectItem value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</SelectItem>
              </SelectContent>
            </Select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-destructive">{errors.preferredTime}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <textarea
            id="notes"
            rows={4}
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Any special requests or concerns..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          We'll call you to confirm your appointment
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Book Appointment'
          )}
        </Button>
      </div>
    </form>
  );
}
