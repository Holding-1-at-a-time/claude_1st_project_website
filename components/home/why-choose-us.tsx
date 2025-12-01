import { Award, Clock, Shield, Users, Sparkles, TrendingUp } from 'lucide-react';

/**
 * Why Choose Us Section
 * Highlights business USPs and credentials
 */
export function WhyChooseUs(): JSX.Element {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'IDA Certified Professionals',
      description:
        'Our team is certified by the International Detailing Association, ensuring the highest industry standards.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Since 2019',
      description:
        'Years of experience serving San Antonio with consistent quality and customer satisfaction.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Premium Products',
      description:
        'We use only professional-grade products and equipment for superior results that last.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '100+ Happy Customers',
      description:
        '5-star ratings and glowing reviews from satisfied customers throughout San Antonio.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Attention to Detail',
      description:
        'True to our name, we focus on every detail to deliver results that exceed expectations.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Satisfaction Guaranteed',
      description:
        'We stand behind our work. If you're not completely satisfied, we'll make it right.',
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose One Detail At A Time?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're not just another detailing service. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
