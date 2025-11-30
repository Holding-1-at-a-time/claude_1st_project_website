/**
 * Seed Data Script for One Detail At A Time LLC
 * Run with: pnpm convex run seed:seedAll
 *
 * Creates sample data for:
 * - Pillar Pages (3 core services)
 * - Service Areas (San Antonio neighborhoods)
 * - Reviews (sample customer testimonials)
 */

import { mutation } from './_generated/server';

/**
 * Seed all data
 */
export const seedAll = mutation({
  args: {},
  handler: async (ctx) => {
    console.log('🌱 Starting database seed...');

    // Clear existing data (optional - comment out to keep existing data)
    // await clearAll(ctx);

    // Seed data
    await seedServiceAreas(ctx);
    await seedPillarPages(ctx);
    await seedReviews(ctx);

    console.log('✅ Database seeded successfully!');
    return { success: true };
  },
});

/**
 * Seed Service Areas
 */
async function seedServiceAreas(ctx: any): Promise<void> {
  console.log('📍 Seeding service areas...');

  const serviceAreas = [
    {
      name: 'Stone Oak',
      slug: 'stone-oak',
      description: 'Serving Stone Oak residents with premium auto detailing since 2019',
      landmarks: ['Stone Oak Parkway', 'Sonterra', 'The Rim Shopping Center'],
      zipCodes: ['78258', '78259'],
      travelTime: '15 minutes',
      active: true,
    },
    {
      name: 'Alamo Heights',
      slug: 'alamo-heights',
      description: 'Professional auto detailing services in the prestigious Alamo Heights area',
      landmarks: ['Broadway', 'Alamo Heights High School', 'Olmos Park'],
      zipCodes: ['78209', '78212'],
      travelTime: '20 minutes',
      active: true,
    },
    {
      name: 'Medical Center',
      slug: 'medical-center',
      description: 'Convenient auto detailing near the San Antonio Medical Center',
      landmarks: ['UT Health San Antonio', 'South Texas Medical Center', 'USAA'],
      zipCodes: ['78229', '78230'],
      travelTime: '18 minutes',
      active: true,
    },
    {
      name: 'Northwest Side',
      slug: 'northwest-side',
      description: 'Serving Northwest San Antonio with mobile detailing services',
      landmarks: ['Culebra Road', 'Bandera Road', 'SeaWorld San Antonio'],
      zipCodes: ['78251', '78254'],
      travelTime: '25 minutes',
      active: true,
    },
    {
      name: 'Northeast Side',
      slug: 'northeast-side',
      description: 'Auto detailing for Northeast San Antonio and surrounding areas',
      landmarks: ['Fort Sam Houston', 'Windcrest', 'Randolph AFB'],
      zipCodes: ['78233', '78239', '78218'],
      travelTime: '10 minutes',
      active: true,
    },
    {
      name: 'Downtown',
      slug: 'downtown',
      description: 'Downtown San Antonio auto detailing - mobile service available',
      landmarks: ['Riverwalk', 'Alamo', 'Tower of the Americas'],
      zipCodes: ['78205', '78207'],
      travelTime: '22 minutes',
      active: true,
    },
    {
      name: 'North Side',
      slug: 'north-side',
      description: 'North San Antonio auto detailing with convenient scheduling',
      landmarks: ['San Antonio International Airport', 'The Quarry', 'North Star Mall'],
      zipCodes: ['78216', '78217'],
      travelTime: '20 minutes',
      active: true,
    },
  ];

  for (const area of serviceAreas) {
    await ctx.db.insert('serviceAreas', area);
  }

  console.log(`✅ Seeded ${serviceAreas.length} service areas`);
}

/**
 * Seed Pillar Pages
 */
async function seedPillarPages(ctx: any): Promise<void> {
  console.log('📄 Seeding pillar pages...');

  const now = Date.now();

  const pillarPages = [
    {
      slug: 'auto-detailing',
      serviceName: 'Auto Detailing',
      serviceType: 'AutoRepair',
      title: 'Professional Auto Detailing San Antonio | One Detail At A Time',
      metaDescription:
        'Expert auto detailing in San Antonio. Interior & exterior detailing, paint correction, ceramic coating. IDA Certified. 5-star rated. Call (726) 207-1007 for a quote.',
      h1: 'Professional Auto Detailing Services in San Antonio, TX',
      introContent: `<p>One Detail At A Time LLC is San Antonio's premier auto detailing service, serving the greater San Antonio area since 2019. Our IDA-certified technicians specialize in transforming your vehicle with meticulous attention to detail and professional-grade products.</p>`,
      mainContent: `<h2>Comprehensive Auto Detailing Services</h2>
<p>Our full-service auto detailing includes both interior and exterior treatments designed to restore your vehicle's showroom shine. We use only premium products and proven techniques to deliver exceptional results every time.</p>

<h3>Interior Detailing</h3>
<ul>
  <li>Deep vacuum and steam cleaning of all surfaces</li>
  <li>Leather conditioning and treatment</li>
  <li>Dashboard and console restoration</li>
  <li>Carpet and upholstery shampooing</li>
  <li>Window cleaning (interior)</li>
</ul>

<h3>Exterior Detailing</h3>
<ul>
  <li>Multi-stage hand wash</li>
  <li>Clay bar treatment to remove contaminants</li>
  <li>Paint correction and scratch removal</li>
  <li>Sealant or wax protection</li>
  <li>Wheel and tire detailing</li>
  <li>Glass cleaning and treatment</li>
</ul>

<h2>Why Choose One Detail At A Time?</h2>
<ul>
  <li>IDA Certified Professional Detailers</li>
  <li>5-Star Google Rating (28 reviews)</li>
  <li>Mobile Service Available</li>
  <li>Serving San Antonio Since 2019</li>
  <li>Premium Products Only</li>
  <li>100% Satisfaction Guarantee</li>
</ul>`,
      keywords: [
        'auto detailing San Antonio',
        'car detailing San Antonio',
        'professional auto detailing',
        'mobile car detailing',
        'interior detailing',
        'exterior detailing',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side'],
      faqs: [
        {
          question: 'How long does a full auto detail take?',
          answer:
            'A complete interior and exterior detail typically takes 4-6 hours depending on the vehicle size and condition. We never rush the process to ensure exceptional results.',
        },
        {
          question: 'Do you offer mobile detailing services?',
          answer:
            'Yes! We bring our professional detailing services to your home or office throughout the San Antonio area. Mobile service is available for most detailing packages.',
        },
        {
          question: 'What areas do you serve?',
          answer:
            'We serve all of San Antonio and surrounding areas including Stone Oak, Alamo Heights, Medical Center, Northwest Side, Northeast Side, and Downtown San Antonio.',
        },
        {
          question: 'How often should I get my car detailed?',
          answer:
            'We recommend a full detail every 3-6 months depending on usage. Regular maintenance washes every 2 weeks help maintain the protective coatings and keep your vehicle looking great.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'ceramic-coating',
      serviceName: 'Ceramic Coating',
      serviceType: 'AutoRepair',
      title: 'Ceramic Coating San Antonio | Professional Nano Coating',
      metaDescription:
        'Premium ceramic coating services in San Antonio. 9H hardness, 5-year protection. IDA certified. Protect your paint with professional nano ceramic coating. Call (726) 207-1007.',
      h1: 'Professional Ceramic Coating Services in San Antonio',
      introContent: `<p>Protect your vehicle's paint with our professional ceramic coating services. Our nano-ceramic coatings provide long-lasting protection against UV rays, scratches, chemicals, and environmental contaminants while delivering an incredible gloss finish.</p>`,
      mainContent: `<h2>What is Ceramic Coating?</h2>
<p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint, creating a protective layer that's significantly harder than traditional wax or sealant. Our professional-grade coatings offer 9H hardness and protection that lasts for years, not months.</p>

<h2>Benefits of Ceramic Coating</h2>
<ul>
  <li><strong>Long-Lasting Protection:</strong> 2-5 year durability depending on coating tier</li>
  <li><strong>Hydrophobic Properties:</strong> Water and dirt slide right off</li>
  <li><strong>UV Protection:</strong> Prevents paint oxidation and fading</li>
  <li><strong>Chemical Resistance:</strong> Protection from bird droppings, tree sap, and harsh chemicals</li>
  <li><strong>Scratch Resistance:</strong> 9H hardness protects against minor scratches</li>
  <li><strong>Enhanced Gloss:</strong> Deep, mirror-like finish that enhances paint depth</li>
  <li><strong>Easy Maintenance:</strong> Washing becomes quicker and easier</li>
</ul>

<h2>Our Ceramic Coating Process</h2>
<ol>
  <li><strong>Paint Inspection:</strong> Thorough assessment of paint condition</li>
  <li><strong>Decontamination:</strong> Deep clean and clay bar treatment</li>
  <li><strong>Paint Correction:</strong> Remove swirls, scratches, and imperfections</li>
  <li><strong>Surface Prep:</strong> IPA wipe to ensure perfect bonding</li>
  <li><strong>Coating Application:</strong> Multiple layers of ceramic coating</li>
  <li><strong>Curing:</strong> Proper curing time for maximum durability</li>
</ol>

<h2>Coating Tiers Available</h2>
<h3>Professional Grade (2-Year Protection)</h3>
<p>Our entry-level ceramic coating perfect for daily drivers. Provides excellent protection and gloss enhancement.</p>

<h3>Premium Grade (5-Year Protection)</h3>
<p>Top-tier coating with maximum thickness and durability. Ideal for luxury and high-performance vehicles.</p>`,
      keywords: [
        'ceramic coating San Antonio',
        'nano ceramic coating',
        'paint protection',
        'ceramic coating near me',
        '9H ceramic coating',
        'professional ceramic coating',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'North Side', 'Medical Center'],
      faqs: [
        {
          question: 'How long does ceramic coating last?',
          answer:
            'Our professional-grade coatings last 2-5 years depending on the tier selected and maintenance. With proper care, coatings can exceed their rated lifespan.',
        },
        {
          question: 'Can ceramic coating be applied to any vehicle?',
          answer:
            'Yes! Ceramic coating can be applied to all vehicle types including cars, trucks, SUVs, RVs, and boats. The paint must be in good condition for best results.',
        },
        {
          question: 'How much does ceramic coating cost?',
          answer:
            'Pricing varies based on vehicle size and coating tier selected. Contact us at (726) 207-1007 for a detailed quote. We offer competitive pricing and payment plans.',
        },
        {
          question: 'Do I still need to wash my car after ceramic coating?',
          answer:
            'Yes, regular washing is still required but becomes much easier. The hydrophobic properties mean dirt and grime wash away more easily, reducing washing time.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'paint-correction',
      serviceName: 'Paint Correction',
      serviceType: 'AutoRepair',
      title: 'Paint Correction San Antonio | Remove Swirls & Scratches',
      metaDescription:
        'Professional paint correction in San Antonio. Remove swirls, scratches, oxidation. Multi-stage polishing. IDA certified. Restore your paint to showroom condition. (726) 207-1007.',
      h1: 'Expert Paint Correction Services in San Antonio, TX',
      introContent: `<p>Transform your vehicle's paint with our professional paint correction services. Our multi-stage polishing process removes swirls, scratches, oxidation, and other imperfections to restore your paint to better-than-new condition.</p>`,
      mainContent: `<h2>What is Paint Correction?</h2>
<p>Paint correction is the process of removing imperfections from your vehicle's paint through careful machine polishing. Unlike waxing which temporarily fills in scratches, paint correction permanently removes defects by leveling the clear coat.</p>

<h2>Common Paint Defects We Fix</h2>
<ul>
  <li>Swirl marks from improper washing</li>
  <li>Light to moderate scratches</li>
  <li>Water spots and etching</li>
  <li>Oxidation and fading</li>
  <li>Bird dropping etching</li>
  <li>Hologramming from previous poor detailing</li>
  <li>Orange peel texture</li>
</ul>

<h2>Our Paint Correction Process</h2>
<h3>Stage 1: Single-Step Correction</h3>
<p>One-step polish to remove 50-60% of defects. Perfect for newer vehicles or light correction needs.</p>

<h3>Stage 2: Two-Step Correction</h3>
<p>Compound followed by polish removes 80-90% of defects. Ideal for most vehicles with moderate imperfections.</p>

<h3>Stage 3: Multi-Step Correction</h3>
<p>Heavy cutting, medium polish, and finishing polish removes 95%+ of defects. For show cars and maximum correction.</p>

<h2>Why Professional Paint Correction Matters</h2>
<ul>
  <li><strong>Proper Technique:</strong> Incorrect polishing can burn through clear coat</li>
  <li><strong>Professional Equipment:</strong> Dual-action and rotary polishers with proper backing plates</li>
  <li><strong>Paint Depth Monitoring:</strong> We measure clear coat thickness to ensure safe correction</li>
  <li><strong>Premium Products:</strong> Professional-grade compounds and polishes</li>
  <li><strong>Experience:</strong> IDA certified with years of correction experience</li>
</ul>

<h2>Paint Correction + Ceramic Coating Package</h2>
<p>For maximum protection and appearance, we recommend following paint correction with ceramic coating. This preserves your newly perfected paint for years to come.</p>`,
      keywords: [
        'paint correction San Antonio',
        'remove swirls',
        'scratch removal',
        'paint polishing',
        'swirl mark removal',
        'professional paint correction',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Downtown', 'North Side'],
      faqs: [
        {
          question: 'Will paint correction remove all scratches?',
          answer:
            'Paint correction can remove scratches that haven\'t penetrated through the clear coat. Deep scratches that reach the base coat or primer require touch-up paint or repainting.',
        },
        {
          question: 'How long does paint correction take?',
          answer:
            'Stage 1 takes 4-6 hours, Stage 2 takes 8-12 hours, and Stage 3 can take 16-24 hours depending on vehicle size and paint condition.',
        },
        {
          question: 'Is paint correction safe for my car?',
          answer:
            'Yes, when performed by trained professionals. We measure paint thickness before correction to ensure we stay within safe limits. Our IDA certification ensures proper techniques.',
        },
        {
          question: 'How often should I get paint correction?',
          answer:
            'With proper maintenance and protection (ceramic coating or quality wax), paint correction may only be needed every 3-5 years or less.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
  ];

  for (const page of pillarPages) {
    await ctx.db.insert('pillarPages', page);
  }

  console.log(`✅ Seeded ${pillarPages.length} pillar pages`);
}

/**
 * Seed Reviews
 */
async function seedReviews(ctx: any): Promise<void> {
  console.log('⭐ Seeding reviews...');

  const now = Date.now();
  const monthAgo = now - 30 * 24 * 60 * 60 * 1000;
  const twoMonthsAgo = now - 60 * 24 * 60 * 60 * 1000;
  const threeMonthsAgo = now - 90 * 24 * 60 * 60 * 1000;

  const reviews = [
    {
      serviceSlug: 'auto-detailing',
      serviceName: 'Auto Detailing',
      customerName: 'Michael Rodriguez',
      customerInitial: 'Michael R.',
      rating: 5,
      title: 'Absolutely Outstanding Work!',
      comment:
        'Ricardo did an incredible job detailing my SUV. It looks better than the day I bought it! Very professional, punctual, and the attention to detail is unmatched. Highly recommend!',
      source: 'google',
      verified: true,
      featured: true,
      createdAt: monthAgo,
      publishedAt: monthAgo,
    },
    {
      serviceSlug: 'ceramic-coating',
      serviceName: 'Ceramic Coating',
      customerName: 'Sarah Thompson',
      customerInitial: 'Sarah T.',
      rating: 5,
      title: 'Best Investment for My Car',
      comment:
        'Got the ceramic coating on my new BMW and couldn\'t be happier. The water beading is amazing and washing is so much easier now. Ricardo explained everything thoroughly and the results are perfect!',
      source: 'google',
      verified: true,
      featured: true,
      createdAt: twoMonthsAgo,
      publishedAt: twoMonthsAgo,
    },
    {
      serviceSlug: 'paint-correction',
      serviceName: 'Paint Correction',
      customerName: 'James Wilson',
      customerInitial: 'James W.',
      rating: 5,
      title: 'Removed Years of Swirls',
      comment:
        'My black Corvette had terrible swirl marks from the previous owner. Ricardo\'s paint correction brought it back to life. The paint looks deep and glossy now. Worth every penny!',
      source: 'google',
      verified: true,
      featured: true,
      createdAt: threeMonthsAgo,
      publishedAt: threeMonthsAgo,
    },
    {
      serviceSlug: 'auto-detailing',
      serviceName: 'Auto Detailing',
      customerName: 'Jennifer Martinez',
      customerInitial: 'Jennifer M.',
      rating: 5,
      title: 'Interior Looks Brand New',
      comment:
        'Had dog hair everywhere and stains on the seats. Ricardo got everything out and made my interior look showroom fresh. Super impressed with the level of detail!',
      source: 'google',
      verified: true,
      featured: true,
      createdAt: monthAgo,
      publishedAt: monthAgo,
    },
    {
      serviceSlug: 'ceramic-coating',
      serviceName: 'Ceramic Coating',
      customerName: 'David Chen',
      customerInitial: 'David C.',
      rating: 5,
      title: 'Professional Service',
      comment:
        'Very knowledgeable and professional. Ricardo took the time to do proper paint correction before applying the ceramic coating. The finish is flawless!',
      source: 'google',
      verified: true,
      featured: false,
      createdAt: twoMonthsAgo,
      publishedAt: twoMonthsAgo,
    },
    {
      serviceSlug: 'auto-detailing',
      serviceName: 'Auto Detailing',
      customerName: 'Lisa Anderson',
      customerInitial: 'Lisa A.',
      rating: 5,
      title: 'Goes Above and Beyond',
      comment:
        'Ricardo is a perfectionist in the best way. He spent extra time on some stubborn spots and didn\'t charge extra. Will definitely use One Detail At A Time again!',
      source: 'google',
      verified: true,
      featured: false,
      createdAt: monthAgo,
      publishedAt: monthAgo,
    },
  ];

  for (const review of reviews) {
    await ctx.db.insert('reviews', review);
  }

  console.log(`✅ Seeded ${reviews.length} reviews`);
}

/**
 * Clear all data (use with caution!)
 */
export const clearAll = mutation({
  args: {},
  handler: async (ctx) => {
    console.log('🗑️  Clearing all data...');

    // Clear all tables
    const pillarPages = await ctx.db.query('pillarPages').collect();
    for (const page of pillarPages) {
      await ctx.db.delete(page._id);
    }

    const serviceAreas = await ctx.db.query('serviceAreas').collect();
    for (const area of serviceAreas) {
      await ctx.db.delete(area._id);
    }

    const reviews = await ctx.db.query('reviews').collect();
    for (const review of reviews) {
      await ctx.db.delete(review._id);
    }

    console.log('✅ All data cleared');
    return { success: true };
  },
});
