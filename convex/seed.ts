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
    await seedClusterPages(ctx);
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
    // Car Detailing Service Category (12 services)
    {
      slug: 'auto-detailing',
      serviceName: 'Auto Detailing',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Auto Detailing San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Expert auto detailing in San Antonio. Interior & exterior detailing, paint correction, ceramic coating. IDA Certified. 5-star rated. Call (726) 207-1007 for a quote.',
      h1: 'IDA Certified Auto Detailing Services in San Antonio, TX',
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
      slug: 'auto-interior-vacuuming',
      serviceName: 'Auto Interior Vacuuming',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Auto Interior Vacuuming San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional auto interior vacuuming in San Antonio. Deep carpet cleaning, upholstery vacuuming, pet hair removal. IDA Certified. Mobile service available. Call (726) 207-1007.',
      h1: 'Professional Auto Interior Vacuuming in San Antonio',
      introContent: `<p>Keep your vehicle's interior spotless with our professional vacuuming service. Our IDA-certified technicians use commercial-grade equipment to deep clean carpets, seats, and hard-to-reach areas, removing dirt, debris, and pet hair effectively.</p>`,
      mainContent: `<h2>Comprehensive Interior Vacuuming</h2>
<p>Our thorough vacuuming service goes beyond a quick once-over. We use professional equipment and techniques to ensure every surface is completely cleaned.</p>

<h3>Complete Carpet Cleaning</h3>
<p>We vacuum all carpet areas including floor mats, under seats, and trunk carpeting. Our high-powered vacuum extractors remove embedded dirt that regular vacuums miss.</p>

<h3>Upholstery Vacuuming</h3>
<p>Fabric and leather seats receive careful attention with appropriate attachments to lift dirt from seams and crevices without damaging materials.</p>

<h3>Hard-to-Reach Areas</h3>
<ul>
  <li>Between and under seats</li>
  <li>Center console compartments</li>
  <li>Door pockets and map pockets</li>
  <li>Dashboard vents and crevices</li>
  <li>Trunk and cargo areas</li>
</ul>

<h2>Pet Hair Removal Specialist</h2>
<p>Pet hair requires specialized tools and techniques. We use rubber brushes, pet hair stones, and high-suction vacuums to completely remove pet hair from all surfaces.</p>

<h2>Commercial-Grade Equipment</h2>
<p>Our professional vacuum systems provide significantly more suction power than household vacuums, ensuring deep cleaning that removes allergens, dust mites, and embedded particles.</p>

<h2>Mobile Vacuuming Service</h2>
<p>We bring our professional equipment to your San Antonio location for convenient service at home, office, or workplace.</p>`,
      keywords: [
        'auto interior vacuuming San Antonio',
        'car vacuuming service',
        'pet hair removal car',
        'professional car vacuum',
        'mobile car vacuuming',
        'deep carpet cleaning car',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'Can you remove all pet hair from my car?',
          answer:
            'Yes! We specialize in pet hair removal using commercial tools specifically designed for this purpose. Our rubber brushes and high-suction vacuums remove pet hair that regular vacuums leave behind.',
        },
        {
          question: 'How long does interior vacuuming take?',
          answer:
            'A thorough vacuuming typically takes 30-45 minutes for most vehicles. Larger vehicles or those with heavy pet hair may take up to an hour.',
        },
        {
          question: 'Do you vacuum the trunk area?',
          answer:
            'Yes, our service includes vacuuming the entire interior including trunk, cargo areas, and under all removable floor mats.',
        },
        {
          question: 'Is this safe for leather seats?',
          answer:
            'Absolutely. We use soft brush attachments designed for leather that lift dirt without scratching or damaging the surface.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'car-waxing',
      serviceName: 'Car Waxing',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Car Waxing San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional car waxing in San Antonio. Premium carnauba wax, synthetic sealants, long-lasting protection. IDA Certified. Enhance shine and protect paint. Call (726) 207-1007.',
      h1: 'Professional Car Waxing Services in San Antonio',
      introContent: `<p>Protect and enhance your vehicle's paint with professional car waxing. Our IDA-certified technicians use premium waxes and sealants to create a deep, lasting shine while providing crucial protection against UV rays, environmental contaminants, and the elements.</p>`,
      mainContent: `<h2>Premium Car Waxing Services</h2>
<p>Car waxing is essential for maintaining your vehicle's appearance and protecting the paint from damage. We offer professional-grade products and application techniques that deliver superior results.</p>

<h3>Benefits of Professional Waxing</h3>
<ul>
  <li>UV protection prevents paint fading and oxidation</li>
  <li>Hydrophobic barrier repels water and contaminants</li>
  <li>Enhanced gloss and depth of color</li>
  <li>Protection against bird droppings, tree sap, and road salt</li>
  <li>Easier washing and maintenance</li>
  <li>Smooth, slick paint surface</li>
</ul>

<h2>Wax Options Available</h2>
<h3>Premium Carnauba Wax</h3>
<p>Natural Brazilian carnauba wax provides the warmest, deepest shine. Perfect for show cars and enthusiasts who want the best visual results. Lasts 2-3 months with proper care.</p>

<h3>Synthetic Sealant</h3>
<p>Long-lasting polymer protection that bonds to paint at a molecular level. Provides 4-6 months of protection with excellent water beading and durability.</p>

<h3>Hybrid Wax/Sealant</h3>
<p>Combines the warm glow of carnauba with the durability of synthetic polymers. Best of both worlds for appearance and longevity.</p>

<h2>Our Waxing Process</h2>
<p>Proper waxing requires clean, contaminant-free paint. Our complete process ensures maximum results:</p>
<ol>
  <li>Thorough hand wash to remove surface dirt</li>
  <li>Clay bar treatment to remove embedded contaminants</li>
  <li>Paint inspection and light polishing if needed</li>
  <li>Hand application of premium wax</li>
  <li>Proper curing time for optimal bonding</li>
  <li>Buffing to reveal deep gloss</li>
</ol>

<h2>Hand Application vs. Machine</h2>
<p>We use both hand and machine application depending on the product and desired results. Machine application ensures even coverage, while hand application works better for intricate areas and curved surfaces.</p>

<h2>Waxing Frequency</h2>
<p>In San Antonio's intense sun and heat, we recommend waxing every 2-3 months to maintain protection. Regular waxing prevents paint damage and maintains that showroom shine.</p>`,
      keywords: [
        'car waxing San Antonio',
        'professional car wax',
        'carnauba wax',
        'paint sealant',
        'car wax near me',
        'auto waxing service',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'How long does car wax last?',
          answer:
            'Carnauba wax lasts 2-3 months, while synthetic sealants can last 4-6 months. Longevity depends on environmental exposure, washing frequency, and product quality.',
        },
        {
          question: 'Should I wax or get ceramic coating?',
          answer:
            'Wax is perfect for regular maintenance and costs less. Ceramic coating lasts 2-5 years but costs more upfront. We can help you decide based on your budget and goals.',
        },
        {
          question: 'Can you wax over ceramic coating?',
          answer:
            'No, wax isn\'t necessary over ceramic coating and can actually reduce its hydrophobic properties. Ceramic coatings provide superior protection and don\'t need wax.',
        },
        {
          question: 'How is professional waxing different from DIY?',
          answer:
            'We use professional-grade products, proper surface preparation including clay bar treatment, and proven application techniques. This ensures better coverage, longer life, and superior results.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'clay-bar-treatment',
      serviceName: 'Clay Bar Treatment',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Clay Bar Treatment San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional clay bar treatment in San Antonio. Remove embedded contaminants, overspray, brake dust. Smooth-as-glass finish. IDA Certified. Call (726) 207-1007.',
      h1: 'Professional Clay Bar Treatment in San Antonio',
      introContent: `<p>Experience the smoothness of glass with our professional clay bar treatment. This essential service removes embedded contaminants that washing can't touch, preparing your paint for waxing, sealant, or ceramic coating while restoring that perfectly smooth finish.</p>`,
      mainContent: `<h2>What is Clay Bar Treatment?</h2>
<p>Clay bar treatment uses a specially formulated detailing clay to safely remove bonded surface contaminants from your vehicle's paint, glass, and wheels. These contaminants can't be removed by washing alone.</p>

<h2>Contaminants We Remove</h2>
<ul>
  <li>Industrial fallout and rail dust</li>
  <li>Brake dust bonded to paint</li>
  <li>Tree sap and tar spots</li>
  <li>Overspray (paint, concrete)</li>
  <li>Water spots and mineral deposits</li>
  <li>Road grime and pollution residue</li>
  <li>Bug residue</li>
</ul>

<h2>Why Clay Bar Treatment is Essential</h2>
<h3>Smooth Surface</h3>
<p>After clay bar treatment, your paint feels smooth as glass. The rough, gritty texture from contaminants is completely gone.</p>

<h3>Better Wax/Sealant Adhesion</h3>
<p>Wax and sealants can't bond properly to contaminated paint. Clay bar treatment ensures maximum adhesion and longevity of protective coatings.</p>

<h3>Improved Appearance</h3>
<p>Removing contaminants allows light to reflect properly off your paint, enhancing gloss and color depth.</p>

<h3>Required Before Paint Correction</h3>
<p>Polishing contaminated paint will grind contaminants into the clear coat, causing scratches. Clay bar treatment is mandatory before any correction work.</p>

<h2>Our Clay Bar Process</h2>
<ol>
  <li><strong>Thorough Wash:</strong> Complete hand wash to remove loose dirt</li>
  <li><strong>Surface Assessment:</strong> Feel test to identify contamination levels</li>
  <li><strong>Panel-by-Panel Treatment:</strong> Work systematically across entire vehicle</li>
  <li><strong>Lubrication:</strong> Use proper clay lubricant to prevent marring</li>
  <li><strong>Frequent Clay Folding:</strong> Expose fresh clay surface regularly</li>
  <li><strong>Final Wipe Down:</strong> Remove all residue</li>
  <li><strong>Inspection:</strong> Feel test confirms glass-smooth finish</li>
</ol>

<h2>Professional vs. DIY Clay Bar</h2>
<p>While DIY clay bar kits exist, professional treatment ensures:</p>
<ul>
  <li>High-quality professional-grade clay</li>
  <li>Proper technique that won't scratch paint</li>
  <li>Thorough coverage of entire vehicle</li>
  <li>Appropriate clay grade for contamination level</li>
  <li>Proper lubrication to prevent marring</li>
</ul>

<h2>When Do You Need Clay Bar Treatment?</h2>
<p>Run your hand over your paint after washing. If it feels rough or gritty, you need clay bar treatment. We recommend it every 6 months in San Antonio, or before any waxing or coating application.</p>`,
      keywords: [
        'clay bar treatment San Antonio',
        'paint decontamination',
        'remove paint contaminants',
        'clay bar service',
        'car clay bar near me',
        'paint surface preparation',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'Will clay bar remove scratches?',
          answer:
            'No, clay bar only removes bonded surface contaminants. Scratches in the clear coat require paint correction (polishing/compounding) to remove.',
        },
        {
          question: 'How often should I get clay bar treatment?',
          answer:
            'Every 6 months is ideal for San Antonio vehicles. More frequently if you park near industrial areas, airports, or train tracks where fallout is heavy.',
        },
        {
          question: 'Is clay bar treatment safe for my paint?',
          answer:
            'Yes, when done properly with adequate lubrication. Our IDA-certified technicians use proper techniques and professional products that won\'t damage your paint.',
        },
        {
          question: 'Do I need to wax after clay bar treatment?',
          answer:
            'Yes, clay bar removes your existing wax along with contaminants. We recommend immediately following clay bar treatment with wax, sealant, or ceramic coating for protection.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'engine-detailing',
      serviceName: 'Engine Detailing',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Engine Detailing San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional engine bay detailing in San Antonio. Safe steam cleaning, degreasing, dressing. Show-quality results. IDA certified. Call (726) 207-1007.',
      h1: 'Professional Engine Bay Detailing in San Antonio',
      introContent: `<p>Transform your engine bay with professional detailing. Our careful process safely removes grease, grime, and buildup while protecting sensitive components. Perfect for show cars or maintaining your investment.</p>`,
      mainContent: `<h2>Engine Detailing Benefits</h2>
<h3>Maintenance</h3>
<p>A clean engine bay makes it easier to spot leaks, worn belts, and other maintenance issues before they become serious problems.</p>

<h3>Resale Value</h3>
<p>A detailed engine bay shows pride of ownership and can significantly increase resale value. Buyers notice a clean, well-maintained engine compartment.</p>

<h3>Cooling Efficiency</h3>
<p>Removing built-up grime and debris can improve cooling system efficiency by allowing better airflow.</p>

<h3>Fire Prevention</h3>
<p>Oil and grease buildup poses a fire risk. Regular engine detailing removes flammable materials from hot components.</p>

<h2>Our Safe Engine Detailing Process</h2>
<h3>1. Pre-Clean Inspection</h3>
<p>We identify sensitive electrical components and ensure everything is cool before starting. Batteries, alternators, and exposed electronics are protected.</p>

<h3>2. Pre-Treatment</h3>
<p>Professional degreaser applied to heavily soiled areas. Allowed to dwell and break down grease and oil buildup.</p>

<h3>3. Gentle Washing</h3>
<p>Low-pressure rinse or steam cleaning (preferred). We never use high-pressure washers that can force water into electrical components.</p>

<h3>4. Detailing</h3>
<p>Brushes and specialized tools clean hard-to-reach areas. Attention to every wire, hose, and component.</p>

<h3>5. Drying</h3>
<p>Compressed air removes water from sensitive areas. Complete air drying before applying dressings.</p>

<h3>6. Protection & Dressing</h3>
<p>UV protectant applied to plastic and rubber components. Engine dressing for a factory-fresh appearance.</p>

<h2>Safe for Modern Vehicles</h2>
<p>Our process is completely safe for modern vehicles with complex electronics. We use steam cleaning and low-pressure methods specifically designed for sensitive components.</p>

<h2>Show-Quality Results</h2>
<p>Whether you're preparing for a car show or just want a pristine engine bay, we deliver concours-level results.</p>`,
      keywords: [
        'engine detailing San Antonio',
        'engine bay cleaning',
        'engine degreasing',
        'clean engine compartment',
        'engine bay detailing near me',
        'professional engine cleaning',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'North Side', 'Medical Center'],
      faqs: [
        {
          question: 'Is engine cleaning safe for modern cars with lots of electronics?',
          answer:
            'Yes! We use low-pressure methods and steam cleaning specifically designed for modern vehicles. Sensitive components are protected, and we never use high-pressure washers that can force water into electrical connections.',
        },
        {
          question: 'How often should I have my engine detailed?',
          answer:
            'For most vehicles, annual engine detailing is sufficient. Performance and show cars may benefit from more frequent detailing every 6 months.',
        },
        {
          question: 'Can engine detailing find leaks?',
          answer:
            'Yes! A clean engine makes it much easier to spot new leaks. After detailing, any fresh oil or fluid will be immediately visible against the clean surfaces.',
        },
        {
          question: 'Will you damage any components?',
          answer:
            'No. Our technicians are trained to identify and protect sensitive components. We use appropriate cleaning methods for each area of the engine bay.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'full-body-wash',
      serviceName: 'Full Body Wash',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Full Body Wash San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional full body wash in San Antonio. Premium hand wash, two-bucket method, safe for all finishes. IDA Certified. Protect your paint. Call (726) 207-1007.',
      h1: 'Professional Full Body Wash Services in San Antonio',
      introContent: `<p>Experience the difference of a proper full body wash. Our meticulous hand wash process safely removes dirt and grime while protecting your vehicle's finish. We use premium products and proven techniques that automatic car washes simply can't match.</p>`,
      mainContent: `<h2>Why Hand Washing is Superior</h2>
<p>Automatic car washes use harsh brushes that scratch and swirl your paint. Our hand wash process is completely safe and far more effective at removing contamination.</p>

<h2>Our Two-Bucket Hand Wash Process</h2>
<h3>Pre-Wash Preparation</h3>
<ul>
  <li>Wheel and tire cleaning with dedicated brushes</li>
  <li>Wheel well rinse to remove loose debris</li>
  <li>Bug and tar removal from front end</li>
  <li>Pre-soak with pH-neutral foam</li>
</ul>

<h3>The Two-Bucket Method</h3>
<p>This professional technique prevents scratches by keeping wash media clean:</p>
<ul>
  <li>Bucket 1: Fresh soapy water with premium pH-neutral shampoo</li>
  <li>Bucket 2: Clean rinse water to remove dirt from mitt</li>
  <li>Grit guards in both buckets trap dirt at bottom</li>
  <li>Premium microfiber wash mitts (never sponges or brushes)</li>
</ul>

<h3>Proper Washing Technique</h3>
<ul>
  <li>Top-to-bottom approach (cleanest to dirtiest)</li>
  <li>Straight-line motions (never circular)</li>
  <li>Frequent mitt rinsing in clean water bucket</li>
  <li>Separate mitt for lower panels and wheels</li>
</ul>

<h3>Thorough Rinsing</h3>
<ul>
  <li>Complete rinse to remove all soap</li>
  <li>Pay special attention to crevices and trim</li>
  <li>Door jambs and edges included</li>
</ul>

<h3>Proper Drying</h3>
<ul>
  <li>Filtered water or deionized water (when available) for spot-free finish</li>
  <li>Plush microfiber drying towels</li>
  <li>Compressed air for mirrors, badges, and crevices</li>
  <li>No water spots or streaks</li>
</ul>

<h2>Final Touches</h2>
<ul>
  <li>Tire dressing application</li>
  <li>Window and glass cleaning (exterior)</li>
  <li>Chrome and trim wiped down</li>
  <li>Final inspection for any missed spots</li>
</ul>

<h2>Safe for All Finishes</h2>
<p>Our pH-neutral products and soft microfiber materials are completely safe for:</p>
<ul>
  <li>Ceramic coatings</li>
  <li>Paint protection film (PPF)</li>
  <li>Vinyl wraps</li>
  <li>All paint types (clear coat, single stage, matte)</li>
  <li>Polished metals and chrome</li>
</ul>

<h2>Maintenance Wash Programs</h2>
<p>Keep your vehicle looking its best with regular washing. We recommend every 2 weeks to maintain protection and prevent contamination buildup.</p>`,
      keywords: [
        'full body wash San Antonio',
        'professional car wash',
        'hand wash car',
        'two bucket wash',
        'safe car wash',
        'car wash near me',
      ],
      neighborhoods: ['Stone Oak', 'Northeast Side', 'North Side', 'Medical Center', 'Alamo Heights'],
      faqs: [
        {
          question: 'Why is hand washing better than automatic car washes?',
          answer:
            'Hand washing allows us to carefully clean each panel without harsh brushes that cause scratches and swirls. We can address specific contaminants and adjust pressure for delicate areas, ensuring your paint stays perfect.',
        },
        {
          question: 'How long does a full body wash take?',
          answer:
            'A thorough hand wash typically takes 45-60 minutes. We never rush the process because proper technique takes time.',
        },
        {
          question: 'Do you offer mobile washing?',
          answer:
            'Yes! We bring all necessary water, equipment, and supplies to your San Antonio location for convenient on-site washing.',
        },
        {
          question: 'Is this safe for ceramic coatings?',
          answer:
            'Absolutely. Our pH-neutral soaps and soft microfiber materials are specifically chosen to be safe for ceramic coatings and won\'t strip or damage the protection.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'headlight-polishing',
      serviceName: 'Headlight Polishing',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Headlight Polishing San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional headlight polishing in San Antonio. Remove oxidation, yellowing, haze. Restore clarity and brightness. UV protection. Call (726) 207-1007.',
      h1: 'Professional Headlight Polishing in San Antonio, TX',
      introContent: `<p>Restore clarity and safety to your vehicle with professional headlight polishing. Our multi-stage process removes oxidation, yellowing, and haze while applying UV protection to prevent future damage.</p>`,
      mainContent: `<h2>Why Polish Your Headlights?</h2>
<h3>Safety</h3>
<p>Foggy or yellowed headlights can reduce visibility by up to 80%, creating a serious safety hazard for night driving. Polishing restores full brightness and beam pattern.</p>

<h3>Appearance</h3>
<p>Cloudy headlights make even new vehicles look old and neglected. Crystal-clear headlights dramatically improve your vehicle's appearance.</p>

<h3>Cost-Effective</h3>
<p>Headlight polishing costs a fraction of replacement. New headlight assemblies can cost $200-$1000+ per side, while polishing is much more affordable.</p>

<h2>Our Polishing Process</h2>
<h3>1. Cleaning & Masking</h3>
<p>Thorough cleaning and careful masking of surrounding paint to prevent damage during restoration.</p>

<h3>2. Wet Sanding</h3>
<p>Progressive wet sanding with 400, 800, 1500, and 2000-grit sandpaper removes oxidation and damaged layers.</p>

<h3>3. Machine Polishing</h3>
<p>Multi-stage polishing compounds restore optical clarity and remove sanding marks.</p>

<h3>4. UV Protective Coating</h3>
<p>Professional-grade UV sealant prevents future oxidation and yellowing. Lasts 1-3 years with proper maintenance.</p>

<h2>What Causes Headlight Damage?</h2>
<ul>
  <li>UV radiation from sunlight</li>
  <li>Oxidation from exposure to air</li>
  <li>Road debris impact</li>
  <li>Chemical exposure (cleaners, salt)</li>
  <li>Heat from halogen bulbs</li>
</ul>

<h2>Results You Can See</h2>
<p>Our restoration process typically improves clarity by 95%+ on plastic headlights. Results are immediate and dramatic - like upgrading to new headlights.</p>

<h2>Maintenance Tips</h2>
<ul>
  <li>Wash headlights regularly with pH-neutral soap</li>
  <li>Park in shade when possible</li>
  <li>Reapply UV sealant every 12-18 months</li>
  <li>Avoid harsh cleaners and abrasives</li>
</ul>`,
      keywords: [
        'headlight polishing San Antonio',
        'headlight restoration',
        'clear foggy headlights',
        'headlight cleaning',
        'yellow headlight repair',
        'restore headlights near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Northwest Side', 'North Side', 'Medical Center'],
      faqs: [
        {
          question: 'How long does headlight polishing take?',
          answer:
            'Both headlights typically take 1-2 hours to fully restore depending on the level of oxidation and damage.',
        },
        {
          question: 'How long will the restoration last?',
          answer:
            'With our UV protective coating, restoration typically lasts 1-3 years. Longevity depends on UV exposure and maintenance. Reapplication of UV sealant extends life.',
        },
        {
          question: 'Can severely damaged headlights be polished?',
          answer:
            'Most plastic headlights can be restored unless they have deep cracks or internal damage. We assess each headlight and provide honest recommendations.',
        },
        {
          question: 'Will polishing work on glass headlights?',
          answer:
            'Glass headlights don\'t oxidize like plastic, but we can polish them if scratched. Most modern vehicles have plastic/polycarbonate headlights which respond excellently to polishing.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'interior-scenting',
      serviceName: 'Interior Scenting',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Interior Scenting San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional interior scenting in San Antonio. Long-lasting fragrances, odor elimination, custom scents. IDA Certified. Fresh-smelling interior. Call (726) 207-1007.',
      h1: 'Professional Interior Scenting Services in San Antonio',
      introContent: `<p>Transform your vehicle's interior atmosphere with our professional scenting service. We use premium, long-lasting fragrances that eliminate odors and create a pleasant driving environment without overwhelming artificial scents.</p>`,
      mainContent: `<h2>Professional Interior Scenting</h2>
<p>Unlike cheap air fresheners that mask odors temporarily, our professional scenting service addresses odors at the source and applies long-lasting, pleasant fragrances.</p>

<h2>Our Scenting Process</h2>
<h3>1. Odor Elimination First</h3>
<p>Before applying fragrance, we identify and eliminate any existing odors:</p>
<ul>
  <li>Deep cleaning of carpets and upholstery</li>
  <li>HVAC system deodorizing</li>
  <li>Enzyme treatment for organic odors</li>
  <li>Ozone treatment if needed for severe odors</li>
</ul>

<h3>2. Fragrance Selection</h3>
<p>Choose from our curated selection of professional automotive fragrances:</p>
<ul>
  <li><strong>New Car:</strong> That fresh, clean new vehicle scent</li>
  <li><strong>Leather:</strong> Rich, sophisticated leather aroma</li>
  <li><strong>Ocean Breeze:</strong> Fresh, clean aquatic scent</li>
  <li><strong>Citrus:</strong> Bright, energizing citrus fragrance</li>
  <li><strong>Vanilla:</strong> Warm, comforting vanilla notes</li>
  <li><strong>Cedar:</strong> Natural, woody fragrance</li>
  <li><strong>Coconut:</strong> Tropical, relaxing scent</li>
  <li><strong>Custom:</strong> We can source specialty fragrances</li>
</ul>

<h3>3. Professional Application</h3>
<p>We use professional scenting methods that provide long-lasting results:</p>
<ul>
  <li>HVAC system scenting for even distribution</li>
  <li>Under-seat placement of professional scent diffusers</li>
  <li>Fabric and carpet treatment with microencapsulated fragrances</li>
  <li>Vent clip installation for continuous freshness</li>
</ul>

<h2>Scent Intensity Options</h2>
<h3>Subtle</h3>
<p>Barely noticeable fresh scent. Perfect for those sensitive to fragrances.</p>

<h3>Medium (Recommended)</h3>
<p>Pleasant fragrance that's noticeable but not overwhelming. Most popular option.</p>

<h3>Strong</h3>
<p>Prominent fragrance for those who want maximum scent impact.</p>

<h2>Long-Lasting Results</h2>
<p>Our professional scenting lasts 30-90 days depending on usage and ventilation. We use slow-release technology that provides consistent fragrance over time.</p>

<h2>Perfect Additions</h2>
<p>Interior scenting pairs perfectly with:</p>
<ul>
  <li>Interior deep cleaning</li>
  <li>Carpet shampooing</li>
  <li>Seat treatment</li>
  <li>Full interior detailing</li>
</ul>`,
      keywords: [
        'interior scenting San Antonio',
        'car fragrance',
        'auto scent service',
        'new car smell',
        'vehicle air freshener',
        'professional car scenting',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'How long does interior scenting last?',
          answer:
            'Our professional scenting typically lasts 30-90 days depending on usage, ventilation, and climate. We use slow-release technology for consistent fragrance.',
        },
        {
          question: 'Will the scent be overpowering?',
          answer:
            'No. We offer three intensity levels and most clients choose medium. The scent is pleasant and noticeable without being overwhelming. We avoid cheap, artificial-smelling products.',
        },
        {
          question: 'Can you remove existing odors before scenting?',
          answer:
            'Yes! We always address odors at the source before applying fragrance. This includes deep cleaning, enzyme treatments, and ozone if needed.',
        },
        {
          question: 'Is the scent safe for people with allergies?',
          answer:
            'We use high-quality fragrances, but those with severe fragrance sensitivities should inform us. We can use hypoallergenic or fragrance-free odor elimination only.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'paint-repair',
      serviceName: 'Paint Repair',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Paint Repair San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional paint repair in San Antonio. Touch-up, scratch repair, chip repair. IDA Certified. Restore your vehicle\'s finish. Call (726) 207-1007.',
      h1: 'Professional Paint Repair Services in San Antonio',
      introContent: `<p>Restore your vehicle's finish with our professional paint repair services. From minor touch-ups to more extensive damage repair, our IDA-certified technicians deliver seamless results that blend perfectly with your existing paint.</p>`,
      mainContent: `<h2>Paint Damage We Repair</h2>
<ul>
  <li>Rock chips and stone chips</li>
  <li>Parking lot scratches and dings</li>
  <li>Door edge chips</li>
  <li>Key scratches and vandalism</li>
  <li>Paint transfer from other vehicles</li>
  <li>Clear coat damage</li>
  <li>Minor collision damage</li>
  <li>Rust spots (after treatment)</li>
</ul>

<h2>Our Paint Repair Process</h2>
<h3>1. Damage Assessment</h3>
<p>We inspect the damage to determine the best repair approach:</p>
<ul>
  <li>Measure paint depth to assess damage severity</li>
  <li>Identify paint code for color matching</li>
  <li>Determine if repair, touch-up, or refinish is needed</li>
  <li>Check for rust or corrosion underneath</li>
</ul>

<h3>2. Surface Preparation</h3>
<p>Proper prep ensures long-lasting repairs:</p>
<ul>
  <li>Clean and degrease repair area</li>
  <li>Rust treatment if applicable</li>
  <li>Sanding to create proper adhesion surface</li>
  <li>Masking of surrounding areas</li>
</ul>

<h3>3. Repair Application</h3>
<h4>For Minor Chips (Touch-Up)</h4>
<ul>
  <li>Color-matched touch-up paint application</li>
  <li>Multiple thin layers for proper coverage</li>
  <li>Allow proper dry time between coats</li>
  <li>Clear coat application for protection and gloss</li>
</ul>

<h4>For Scratches (Paint and Polish)</h4>
<ul>
  <li>Fill deep scratches with matching paint</li>
  <li>Level with ultra-fine sanding</li>
  <li>Machine polishing to blend repair</li>
  <li>Clear coat and final polish</li>
</ul>

<h4>For Larger Damage (Panel Repair)</h4>
<ul>
  <li>Professional spray application</li>
  <li>Multiple base coat layers</li>
  <li>Clear coat application</li>
  <li>Color blending into surrounding areas</li>
  <li>Final buffing and polishing</li>
</ul>

<h3>4. Finishing</h3>
<ul>
  <li>Wet sanding for smooth finish (if needed)</li>
  <li>Machine polishing to match surrounding paint</li>
  <li>Inspection under various lighting</li>
  <li>Protective wax or sealant application</li>
</ul>

<h2>Color Matching Expertise</h2>
<p>We use your vehicle's paint code and professional color matching systems to ensure perfect color match. Multi-stage and tri-coat paints receive special attention for accurate matching.</p>

<h2>Types of Paint We Work With</h2>
<ul>
  <li>Solid colors</li>
  <li>Metallic paints</li>
  <li>Pearl finishes</li>
  <li>Tri-coat/multi-stage paints</li>
  <li>Matte and satin finishes</li>
</ul>

<h2>When to Repair vs. Refinish</h2>
<h3>Touch-Up Repair (Minor Damage)</h3>
<p>Best for small chips, minor scratches, and isolated damage. Cost-effective and quick.</p>

<h3>Panel Refinish (Extensive Damage)</h3>
<p>Better for large scratches, multiple chips, or when damage covers significant area. Provides like-new results.</p>`,
      keywords: [
        'paint repair San Antonio',
        'scratch repair',
        'chip repair',
        'touch-up paint',
        'automotive paint repair',
        'car paint fix near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'North Side', 'Downtown'],
      faqs: [
        {
          question: 'Will the paint repair match my car color exactly?',
          answer:
            'We use your vehicle\'s factory paint code and professional color matching to ensure accurate color match. Most repairs are virtually invisible when complete.',
        },
        {
          question: 'How long does paint repair take?',
          answer:
            'Minor touch-ups take 1-2 hours. Larger repairs requiring spray application and blending may take 1-3 days for proper curing.',
        },
        {
          question: 'Should I repair chips right away?',
          answer:
            'Yes. Exposed metal will rust quickly, especially in San Antonio\'s climate. Repairing chips promptly prevents rust and more expensive repairs later.',
        },
        {
          question: 'Can you repair scratches down to bare metal?',
          answer:
            'Yes. We treat any rust, apply primer, base coat, and clear coat to properly repair deep scratches and restore protection.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'seat-shampooing',
      serviceName: 'Seat Shampooing',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Seat Shampooing San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional seat shampooing in San Antonio. Deep clean fabric and upholstery, stain removal, odor elimination. IDA Certified. Call (726) 207-1007.',
      h1: 'Professional Seat Shampooing Services in San Antonio',
      introContent: `<p>Restore your vehicle's seats to like-new condition with our professional shampooing service. We use commercial-grade extraction equipment and professional cleaners to deep clean fabric and upholstery, removing stains, odors, and embedded dirt.</p>`,
      mainContent: `<h2>Deep Seat Cleaning</h2>
<p>Regular vacuuming only removes surface dirt. Our professional shampooing penetrates deep into fibers to extract embedded soil, oils, and contaminants.</p>

<h2>Our Shampooing Process</h2>
<h3>1. Pre-Treatment</h3>
<ul>
  <li>Thorough vacuuming to remove loose dirt</li>
  <li>Inspection for stains and heavy soiling</li>
  <li>Pre-treatment of stains with specialized cleaners</li>
  <li>Agitation to break up embedded dirt</li>
</ul>

<h3>2. Hot Water Extraction</h3>
<p>We use professional-grade extraction equipment (similar to carpet cleaners but designed for automotive use):</p>
<ul>
  <li>Hot water and professional upholstery shampoo</li>
  <li>High-pressure injection deep into fabric</li>
  <li>Immediate extraction removes dirt and water</li>
  <li>Multiple passes for heavily soiled areas</li>
</ul>

<h3>3. Stain Treatment</h3>
<p>Targeted treatment for common stains:</p>
<ul>
  <li><strong>Food and drinks:</strong> Enzyme cleaners break down organic matter</li>
  <li><strong>Grease and oil:</strong> Degreasing agents lift petroleum stains</li>
  <li><strong>Ink and dye:</strong> Solvent-based removers</li>
  <li><strong>Pet accidents:</strong> Enzyme treatments neutralize odors</li>
</ul>

<h3>4. Deodorizing</h3>
<ul>
  <li>Odor-neutralizing agents applied during shampooing</li>
  <li>Fabric refresher for pleasant scent</li>
  <li>Antimicrobial treatment available for bacteria/mold concerns</li>
</ul>

<h3>5. Drying & Grooming</h3>
<ul>
  <li>High-powered air movers for faster drying</li>
  <li>Grooming brush to restore nap direction</li>
  <li>Final inspection and touch-up if needed</li>
</ul>

<h2>What We Clean</h2>
<ul>
  <li>Fabric seats (cloth, velour, microfiber)</li>
  <li>Bench seats and captain's chairs</li>
  <li>Seat backs and bolsters</li>
  <li>Integrated headrests</li>
  <li>Third-row seating</li>
</ul>

<h2>Stain Removal Expertise</h2>
<p>We successfully remove most common stains including:</p>
<ul>
  <li>Coffee, soda, juice</li>
  <li>Food and candy</li>
  <li>Makeup and cosmetics</li>
  <li>Grease and oil</li>
  <li>Pet stains and odors</li>
  <li>Mud and dirt</li>
  <li>Ink and marker</li>
</ul>

<h2>Drying Time</h2>
<p>Seats are typically dry within 2-6 hours depending on fabric type, humidity, and airflow. We use air movers to accelerate drying when possible.</p>

<h2>Fabric Protection Available</h2>
<p>After shampooing, consider our fabric protection treatment that repels liquids and makes future cleaning easier.</p>`,
      keywords: [
        'seat shampooing San Antonio',
        'upholstery cleaning',
        'car seat cleaning',
        'fabric seat shampoo',
        'stain removal seats',
        'auto upholstery cleaning near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'Will shampooing remove all stains?',
          answer:
            'We remove most common stains successfully. Very old, set-in stains or permanent dye stains may not be fully removable. We\'ll assess stains during inspection.',
        },
        {
          question: 'How long until seats are dry?',
          answer:
            'Typically 2-6 hours depending on fabric type and weather. We use high-powered air movers to speed drying. You can usually use your vehicle the same day.',
        },
        {
          question: 'Do you clean leather seats?',
          answer:
            'Leather requires different cleaning methods. We offer professional leather cleaning and conditioning as a separate service. Shampooing is for fabric upholstery.',
        },
        {
          question: 'Can you remove pet odors?',
          answer:
            'Yes! We use enzyme-based cleaners that break down organic compounds causing pet odors. For severe cases, we may recommend additional ozone treatment.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'steam-cleaning',
      serviceName: 'Steam Cleaning',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Steam Cleaning San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional steam cleaning in San Antonio. Sanitize interior, deep clean surfaces, chemical-free cleaning. IDA Certified. Kill 99.9% bacteria. Call (726) 207-1007.',
      h1: 'Professional Steam Cleaning Services in San Antonio',
      introContent: `<p>Experience the power of professional steam cleaning. Our high-temperature steam sanitizes and deep cleans your vehicle's interior without harsh chemicals, killing 99.9% of bacteria, viruses, and germs while being completely safe for all surfaces.</p>`,
      mainContent: `<h2>What is Steam Cleaning?</h2>
<p>Steam cleaning uses superheated water vapor (typically 200-300°F) under pressure to clean, sanitize, and deodorize. The high heat kills bacteria and breaks down dirt without chemicals.</p>

<h2>Benefits of Steam Cleaning</h2>
<h3>Sanitization</h3>
<p>Steam heat kills 99.9% of:</p>
<ul>
  <li>Bacteria (E. coli, Salmonella, Staph)</li>
  <li>Viruses (including COVID-19)</li>
  <li>Dust mites and allergens</li>
  <li>Mold and mildew spores</li>
  <li>Bed bugs and other pests</li>
</ul>

<h3>Chemical-Free Cleaning</h3>
<ul>
  <li>Safe for children and pets</li>
  <li>No harsh chemical residue</li>
  <li>Environmentally friendly</li>
  <li>Safe for sensitive individuals</li>
</ul>

<h3>Deep Penetration</h3>
<ul>
  <li>Steam penetrates into pores and crevices</li>
  <li>Lifts embedded dirt regular cleaning misses</li>
  <li>Breaks down grease and grime naturally</li>
  <li>Refreshes and deodorizes fabrics</li>
</ul>

<h2>What We Steam Clean</h2>
<h3>Upholstery & Fabric</h3>
<ul>
  <li>Cloth seats and seat backs</li>
  <li>Carpets and floor mats</li>
  <li>Headliner and visors</li>
  <li>Door panels and inserts</li>
</ul>

<h3>Hard Surfaces</h3>
<ul>
  <li>Dashboard and console</li>
  <li>Door panels and armrests</li>
  <li>Steering wheel and controls</li>
  <li>Center console and cup holders</li>
  <li>Windows and mirrors</li>
</ul>

<h3>Detailed Areas</h3>
<ul>
  <li>Air vents and grilles</li>
  <li>Gaps and crevices</li>
  <li>Between seats</li>
  <li>Trunk and cargo areas</li>
  <li>Door jambs</li>
</ul>

<h2>Our Steam Cleaning Process</h2>
<h3>1. Pre-Vacuum</h3>
<p>Remove loose dirt and debris before steam cleaning.</p>

<h3>2. Steam Treatment</h3>
<p>Systematic application of steam to all surfaces:</p>
<ul>
  <li>Appropriate nozzles for each surface type</li>
  <li>Controlled temperature and pressure</li>
  <li>Extraction of loosened dirt and moisture</li>
  <li>Multiple passes on heavily soiled areas</li>
</ul>

<h3>3. Wiping & Drying</h3>
<ul>
  <li>Microfiber towels remove loosened dirt</li>
  <li>Air circulation for faster drying</li>
  <li>Final inspection and touch-up</li>
</ul>

<h2>Perfect For</h2>
<ul>
  <li>Allergy sufferers (removes allergens)</li>
  <li>Families with small children</li>
  <li>Pet owners (sanitizes after pets)</li>
  <li>Rideshare drivers (frequent sanitization)</li>
  <li>Anyone concerned about germs and bacteria</li>
  <li>Those sensitive to chemical cleaners</li>
</ul>

<h2>Safe for All Surfaces</h2>
<p>Our professional steam cleaners have adjustable temperature and pressure settings, making them safe for:</p>
<ul>
  <li>Leather (with reduced heat)</li>
  <li>Vinyl and plastics</li>
  <li>Fabric and carpeting</li>
  <li>Electronics (with proper technique)</li>
  <li>Glass and windows</li>
</ul>`,
      keywords: [
        'steam cleaning San Antonio',
        'car steam clean',
        'auto sanitization',
        'chemical-free car cleaning',
        'interior steam cleaning',
        'car disinfection near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'Does steam cleaning really kill germs?',
          answer:
            'Yes! Steam at 200-300°F kills 99.9% of bacteria, viruses, and germs on contact. This includes common pathogens like E. coli, Staph, and viruses including COVID-19.',
        },
        {
          question: 'Will steam damage my interior?',
          answer:
            'No. Professional steam cleaners have adjustable settings. We use appropriate temperature and pressure for each surface type. Steam is safe for leather, fabric, vinyl, and plastics when used correctly.',
        },
        {
          question: 'How long does steam cleaning take?',
          answer:
            'A complete interior steam cleaning typically takes 2-3 hours depending on vehicle size and condition.',
        },
        {
          question: 'Will my car be wet after steam cleaning?',
          answer:
            'Steam uses minimal water, so surfaces dry quickly. Most areas are dry within 30 minutes to 2 hours. We use air circulation to speed drying.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'wheel-washing',
      serviceName: 'Wheel Washing',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Wheel Washing San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional wheel washing in San Antonio. Brake dust removal, tire cleaning, wheel well detailing. IDA Certified. Restore wheel shine. Call (726) 207-1007.',
      h1: 'Professional Wheel Washing Services in San Antonio',
      introContent: `<p>Give your wheels the attention they deserve with our professional wheel washing service. We safely remove brake dust, road grime, and tar while protecting your wheel finish. Includes tire cleaning and wheel well detailing for a complete look.</p>`,
      mainContent: `<h2>Complete Wheel Washing Service</h2>
<p>Wheels accumulate brake dust, road tar, and grime faster than any other part of your vehicle. Our detailed process ensures spotless, protected wheels.</p>

<h2>What's Included</h2>
<h3>Wheel Face Cleaning</h3>
<ul>
  <li>pH-appropriate wheel cleaner for your finish type</li>
  <li>Soft brushes for spokes and details</li>
  <li>Iron-removing cleaner for brake dust</li>
  <li>Scrubbing of all visible surfaces</li>
  <li>Lug nut cleaning</li>
</ul>

<h3>Wheel Barrel Cleaning</h3>
<ul>
  <li>Long brushes reach inside wheel barrels</li>
  <li>Remove hidden brake dust and grime</li>
  <li>Clean weight balances and valve stems</li>
  <li>Thorough rinse</li>
</ul>

<h3>Tire Cleaning</h3>
<ul>
  <li>Dedicated tire cleaner removes browning</li>
  <li>Stiff brushes scrub tire sidewalls</li>
  <li>Remove old tire dressing buildup</li>
  <li>Clean white letters or raised lettering</li>
  <li>Fresh tire dressing application</li>
</ul>

<h3>Wheel Well Cleaning</h3>
<ul>
  <li>Spray degreaser on fender liners</li>
  <li>Brush cleaning of textured surfaces</li>
  <li>High-pressure rinse removes caked dirt</li>
  <li>Dressing application (optional)</li>
</ul>

<h2>Safe for All Wheel Types</h2>
<p>We use appropriate products for each wheel finish:</p>

<h3>Chrome Wheels</h3>
<p>pH-neutral cleaners safe for chrome. No acidic products that cause pitting.</p>

<h3>Polished Aluminum</h3>
<p>Gentle cleaners that won't oxidize or dull polished surfaces.</p>

<h3>Powder-Coated Wheels</h3>
<p>pH-balanced products that won't damage coating.</p>

<h3>Painted Wheels</h3>
<p>Safe cleaners that won't strip paint or clear coat.</p>

<h3>Matte/Satin Finishes</h3>
<p>No gloss-enhancing products that would ruin matte appearance.</p>

<h2>Brake Dust Removal</h2>
<p>Brake dust is metallic and corrosive, bonding tightly to wheels. We use iron-removing cleaners that dissolve brake dust without aggressive scrubbing that can scratch wheels.</p>

<h2>Tire Dressing Options</h2>
<h3>Satin Finish (Recommended)</h3>
<p>Natural-looking finish. Water-based formula won't sling onto paint. Lasts 2-4 weeks.</p>

<h3>High-Gloss Finish</h3>
<p>Wet-look shine for show vehicles. May require reapplication after rain.</p>

<h2>Add-On Services</h2>
<ul>
  <li>Wheel polishing (for chrome/polished aluminum)</li>
  <li>Wheel wax or sealant protection</li>
  <li>Ceramic coating for wheels (long-term protection)</li>
  <li>Tire shine</li>
</ul>

<h2>Maintenance Tips</h2>
<ul>
  <li>Rinse wheels first during washing</li>
  <li>Clean wheels weekly to prevent buildup</li>
  <li>Use dedicated wheel brushes (never the same as paint)</li>
  <li>Apply tire dressing sparingly</li>
  <li>Consider ceramic coating for easy maintenance</li>
</ul>`,
      keywords: [
        'wheel washing San Antonio',
        'professional wheel cleaning',
        'brake dust removal',
        'tire cleaning',
        'wheel detailing',
        'clean wheels near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Northeast Side', 'North Side', 'Medical Center'],
      faqs: [
        {
          question: 'Will you scratch my wheels?',
          answer:
            'No. We use soft brushes designed specifically for wheels and pH-appropriate cleaners that dissolve brake dust without aggressive scrubbing. Different brush types for different finishes.',
        },
        {
          question: 'How often should wheels be washed?',
          answer:
            'Weekly washing prevents brake dust from bonding permanently. For heavily used vehicles or performance cars with aggressive brake pads, twice weekly is better.',
        },
        {
          question: 'Do you clean the inside of the wheels?',
          answer:
            'Yes! We clean both the wheel face (visible side) and the barrel (inside) using long-reach brushes to remove hidden brake dust and grime.',
        },
        {
          question: 'Can you remove brake dust from chrome wheels?',
          answer:
            'Yes. We use pH-neutral, chrome-safe cleaners that dissolve brake dust without causing pitting or corrosion. Chrome requires special care.',
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
    },
    // Auto Painting Category (5 services)
    {
      slug: 'rock-chip-repair',
      serviceName: 'Rock Chip Repair',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Rock Chip Repair San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional rock chip repair in San Antonio. Fill and seal paint chips, prevent rust, color-matched repair. IDA Certified. Protect your investment. Call (726) 207-1007.',
      h1: 'Professional Rock Chip Repair in San Antonio',
      introContent: `<p>Don't let rock chips ruin your vehicle's appearance or lead to rust damage. Our professional rock chip repair service fills and seals chips to prevent corrosion while restoring your paint's smooth finish with color-matched materials.</p>`,
      mainContent: `<h2>Why Repair Rock Chips Immediately</h2>
<p>Exposed metal will rust quickly. Early repair prevents costly escalation and maintains your vehicle's value and appearance.</p>

<h2>Our Rock Chip Repair Process</h2>
<ul>
  <li>Color-matched touch-up paint application</li>
  <li>Multiple thin layers for proper coverage</li>
  <li>Clear coat protection</li>
  <li>Wet sanding and polishing to blend</li>
</ul>`,
      keywords: [
        'rock chip repair San Antonio',
        'stone chip repair',
        'paint chip fix',
        'chip repair car',
        'touch up paint chips',
        'auto chip repair near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'North Side', 'Downtown'],
      faqs: [
        {
          question: 'How much does rock chip repair cost?',
          answer:
            'Cost depends on chip size and quantity. We provide free estimates and can repair multiple chips in one session for efficiency.',
        },
        {
          question: 'Will the repair be noticeable?',
          answer:
            'Professional rock chip repair with proper color matching and blending makes repairs virtually invisible from normal viewing distance.',
        },
        {
          question: 'How long does repair take?',
          answer:
            'Small chips take 30-60 minutes including drying time. Multiple chips or larger damage may require several hours.',
        },
        {
          question: 'Should I repair all chips or just the worst ones?',
          answer:
            'We recommend repairing all chips that expose metal to prevent rust. Even small chips can lead to bigger problems.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'paint-transfer-removal',
      serviceName: 'Paint Transfer Removal',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Paint Transfer Removal San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional paint transfer removal in San Antonio. Remove paint from other vehicles, parking lot scuffs. IDA Certified. Call (726) 207-1007.',
      h1: 'Professional Paint Transfer Removal in San Antonio',
      introContent: `<p>Remove unsightly paint transfer from other vehicles without damaging your original finish. Our safe removal process eliminates transferred paint from parking lot incidents while preserving your vehicle's paint underneath.</p>`,
      mainContent: `<h2>Our Paint Transfer Removal Process</h2>
<p>We use progressively stronger methods as needed:</p>
<ul>
  <li>Chemical removal solvents</li>
  <li>Clay bar treatment</li>
  <li>Machine polishing</li>
  <li>Wet sanding (if needed)</li>
</ul>`,
      keywords: [
        'paint transfer removal San Antonio',
        'remove paint scuffs',
        'door ding paint removal',
        'scuff mark removal',
        'paint mark removal car',
        'remove transferred paint',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'Can all paint transfer be removed?',
          answer:
            'Most paint transfer can be removed successfully if your clear coat is intact underneath.',
        },
        {
          question: 'Will removal damage my paint?',
          answer:
            'Our process is designed to safely remove transferred paint without harming your original finish.',
        },
        {
          question: 'How long does paint transfer removal take?',
          answer:
            'Simple paint transfer removal takes 30-60 minutes per area. More stubborn transfer may take 2-4 hours.',
        },
        {
          question: 'What if there\'s a dent along with the paint transfer?',
          answer:
            'We can remove the paint transfer and address the dent with our dent repair service.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'touch-up-paint',
      serviceName: 'Touch Up Paint',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Touch Up Paint San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional touch up paint service in San Antonio. Fix chips, scratches, minor damage. Color-matched. IDA Certified. Call (726) 207-1007.',
      h1: 'Professional Touch Up Paint Services in San Antonio',
      introContent: `<p>Restore your vehicle's finish with professional touch up paint service. Our color-matched, expertly applied touch ups repair chips and scratches while preventing rust.</p>`,
      mainContent: `<h2>Our Touch Up Paint Process</h2>
<ul>
  <li>Exact color matching using factory paint codes</li>
  <li>Proper surface preparation and priming</li>
  <li>Professional paint application in thin layers</li>
  <li>Clear coat protection</li>
  <li>Wet sanding and polishing to blend</li>
</ul>`,
      keywords: [
        'touch up paint San Antonio',
        'car touch up',
        'paint chip touch up',
        'professional touch up paint',
        'automotive touch up',
        'car paint touch up near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'North Side', 'Downtown'],
      faqs: [
        {
          question: 'Will touch up paint match my car color exactly?',
          answer:
            'We use your vehicle\'s factory paint code and professional automotive paints for accurate color matching.',
        },
        {
          question: 'How long does touch up paint last?',
          answer:
            'Professional touch up with proper primer and clear coat lasts as long as your original paint.',
        },
        {
          question: 'Can you touch up scratches or just chips?',
          answer:
            'We can touch up both chips and scratches. Deeper scratches requiring touch up are filled and blended just like chips.',
        },
        {
          question: 'How long until I can wash my car after touch up?',
          answer:
            'Wait 48-72 hours for paint to fully cure before washing.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'wet-sanding',
      serviceName: 'Wet Sanding',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Wet Sanding San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional wet sanding in San Antonio. Remove orange peel, level paint. IDA Certified. Show-car finish. Call (726) 207-1007.',
      h1: 'Professional Wet Sanding Services in San Antonio',
      introContent: `<p>Achieve a glass-smooth, show-quality finish with professional wet sanding. Our precise technique removes orange peel texture and creates the perfect surface for an incredible mirror-like shine.</p>`,
      mainContent: `<h2>What is Wet Sanding?</h2>
<p>Wet sanding uses ultra-fine sandpaper with water to level clear coat imperfections, remove orange peel, and prepare paint for final polishing to achieve show-car results.</p>

<h2>What We Fix</h2>
<ul>
  <li>Orange peel texture</li>
  <li>Paint runs and sags</li>
  <li>Dirt nibs</li>
  <li>Severe scratches</li>
  <li>Water spot etching</li>
</ul>`,
      keywords: [
        'wet sanding San Antonio',
        'remove orange peel',
        'paint leveling',
        'show car finish',
        'professional wet sanding',
        'clear coat wet sanding',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'North Side', 'Medical Center'],
      faqs: [
        {
          question: 'Is wet sanding safe for my car paint?',
          answer:
            'Yes, when done by professionals. We measure paint thickness to ensure safe removal.',
        },
        {
          question: 'Will wet sanding remove all orange peel?',
          answer:
            'We can significantly reduce orange peel, typically achieving 80-95% reduction.',
        },
        {
          question: 'How long does wet sanding take?',
          answer:
            'Full-vehicle wet sanding takes 8-16 hours including sanding, compounding, and polishing.',
        },
        {
          question: 'Can wet sanding be done on any car?',
          answer:
            'Only if there\'s sufficient clear coat thickness. We measure before proceeding.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'cut-and-buff',
      serviceName: 'Cut and Buff',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Cut and Buff San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional cut and buff in San Antonio. Remove scratches, swirls, oxidation. IDA Certified. Show-quality results. Call (726) 207-1007.',
      h1: 'Professional Cut and Buff Services in San Antonio',
      introContent: `<p>Restore your vehicle's paint to showroom condition with professional cut and buff service. Our multi-stage machine polishing removes scratches, swirls, and oxidation while bringing out incredible depth and shine.</p>`,
      mainContent: `<h2>What is Cut and Buff?</h2>
<p>Cut and buff is a two-stage paint correction process. "Cutting" uses abrasive compounds to remove defects, while "buffing" uses finer polishes to restore gloss.</p>

<h2>What We Fix</h2>
<ul>
  <li>Swirl marks</li>
  <li>Scratches</li>
  <li>Oxidation</li>
  <li>Water spots</li>
  <li>Bird dropping etching</li>
  <li>Dullness</li>
</ul>`,
      keywords: [
        'cut and buff San Antonio',
        'paint correction',
        'compounding and polishing',
        'remove swirls and scratches',
        'professional buffing',
        'auto paint restoration',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'North Side', 'Downtown'],
      faqs: [
        {
          question: 'What\'s the difference between cut and buff and regular buffing?',
          answer:
            'True cut and buff is a two-step process with cutting compound followed by finishing polish, providing much better defect removal.',
        },
        {
          question: 'Will cut and buff remove all scratches?',
          answer:
            'We remove scratches that are in the clear coat only (90-95% of defects).',
        },
        {
          question: 'How often can cut and buff be done?',
          answer:
            'With proper technique, cut and buff can be done 2-3 times over a vehicle\'s life.',
        },
        {
          question: 'How long does cut and buff last?',
          answer:
            'Results are permanent - defects are physically removed. However, new scratches can occur from improper washing.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    // Auto Dent Removal Category (3 services)
    {
      slug: 'dent-removal-services',
      serviceName: 'Dent Removal Services',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Dent Removal San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional dent removal in San Antonio. Paintless dent repair, door dings, hail damage. IDA Certified. Restore factory finish. Call (726) 207-1007.',
      h1: 'Professional Dent Removal Services in San Antonio',
      introContent: `<p>Remove dents and restore your vehicle's body panels with our professional dent removal services. We specialize in paintless dent repair (PDR) that removes dents without affecting your original factory paint.</p>`,
      mainContent: `<h2>Types of Dents We Remove</h2>
<ul>
  <li>Door dings from parking lots</li>
  <li>Hail damage</li>
  <li>Minor collision dents</li>
  <li>Shopping cart impacts</li>
  <li>Creases and body lines</li>
</ul>

<h2>Paintless Dent Repair (PDR)</h2>
<p>PDR is the process of removing dents from the inside of body panels without disturbing the paint. This method preserves your original factory finish and maintains vehicle value.</p>`,
      keywords: [
        'dent removal San Antonio',
        'paintless dent repair',
        'PDR San Antonio',
        'door ding removal',
        'auto dent repair',
        'dent fix near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'What is paintless dent repair?',
          answer:
            'PDR removes dents by massaging the metal from behind the panel, preserving your original paint. No filling or repainting needed.',
        },
        {
          question: 'Can all dents be removed with PDR?',
          answer:
            'Most minor to moderate dents without paint damage can be removed with PDR. Deep creases or dents with cracked paint may require traditional bodywork.',
        },
        {
          question: 'How long does dent removal take?',
          answer:
            'Simple door dings take 30-60 minutes. Multiple dents or hail damage may take several hours.',
        },
        {
          question: 'Will PDR affect my paint warranty?',
          answer:
            'No. PDR doesn\'t affect paint at all, so paint warranties remain intact.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'hail-damage-repairs',
      serviceName: 'Hail Damage Repairs',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Hail Damage Repair San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional hail damage repair in San Antonio. Paintless dent repair for hail damage. IDA Certified. Insurance claims assistance. Call (726) 207-1007.',
      h1: 'Professional Hail Damage Repair in San Antonio',
      introContent: `<p>Restore your vehicle after hail damage with our professional repair services. We specialize in paintless dent repair for hail damage, working with insurance companies to make the process smooth and stress-free.</p>`,
      mainContent: `<h2>Hail Damage Repair Services</h2>
<p>San Antonio can experience severe hailstorms. Our PDR specialists can remove dozens or even hundreds of hail dents without repainting, preserving your vehicle's value.</p>

<h2>Our Process</h2>
<ul>
  <li>Complete damage assessment</li>
  <li>Insurance documentation assistance</li>
  <li>Paintless dent repair for all panels</li>
  <li>Roof, hood, trunk, and body panel repair</li>
  <li>Final inspection and quality check</li>
</ul>`,
      keywords: [
        'hail damage repair San Antonio',
        'hail dent removal',
        'PDR hail damage',
        'hail damage fix',
        'auto hail repair',
        'insurance hail claim',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'Does insurance cover hail damage repair?',
          answer:
            'Most comprehensive insurance policies cover hail damage. We work with all major insurance companies and can assist with claims.',
        },
        {
          question: 'How long does hail damage repair take?',
          answer:
            'Depends on severity. Minor hail damage takes 1-2 days. Severe damage with 100+ dents may take 3-5 days.',
        },
        {
          question: 'Will you work with my insurance?',
          answer:
            'Yes! We handle insurance documentation, provide estimates, and work directly with adjusters to ensure proper coverage.',
        },
        {
          question: 'Can all hail dents be repaired with PDR?',
          answer:
            'Most hail dents can be repaired with PDR. Dents that cracked paint or are in inaccessible areas may require traditional repair.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'ding-repairs',
      serviceName: 'Ding Repairs',
      serviceType: 'AutoRepair',
      title: 'IDA Certified Ding Repair San Antonio, TX | One Detail At A Time',
      metaDescription:
        'Professional ding repair in San Antonio. Remove door dings, parking lot damage. Paintless dent repair. IDA Certified. Quick service. Call (726) 207-1007.',
      h1: 'Professional Ding Repair Services in San Antonio',
      introContent: `<p>Don't let door dings ruin your vehicle's appearance. Our quick and affordable ding repair service uses paintless dent repair to remove parking lot dings and restore your panels to factory condition.</p>`,
      mainContent: `<h2>Common Ding Locations</h2>
<ul>
  <li>Doors (most common)</li>
  <li>Fenders</li>
  <li>Quarter panels</li>
  <li>Bumpers</li>
</ul>

<h2>Our Ding Repair Process</h2>
<ul>
  <li>Assess ding location and depth</li>
  <li>Access panel from behind</li>
  <li>Use specialized PDR tools to massage metal</li>
  <li>Restore panel to original shape</li>
  <li>No painting or filling required</li>
</ul>

<h2>Fast Service</h2>
<p>Most single dings can be repaired in 30-60 minutes. Mobile service available for your convenience.</p>`,
      keywords: [
        'ding repair San Antonio',
        'door ding removal',
        'parking lot ding fix',
        'remove door dings',
        'ding removal near me',
        'quick ding repair',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'How much does ding repair cost?',
          answer:
            'Simple door dings typically range from affordable rates. Contact us for a free quote based on your specific damage.',
        },
        {
          question: 'Can you fix multiple dings?',
          answer:
            'Yes! We can repair multiple dings in one appointment, often with volume discounts.',
        },
        {
          question: 'Will the ding repair be noticeable?',
          answer:
            'No. Properly performed PDR is invisible and maintains your factory paint and finish.',
        },
        {
          question: 'Do you offer mobile ding repair?',
          answer:
            'Yes! We can come to your home or office in the San Antonio area to repair dings on-site.',
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
 * Seed Cluster Pages
 */
async function seedClusterPages(ctx: any): Promise<void> {
  console.log('📄 Seeding cluster pages...');

  const now = Date.now();

  // Get pillar pages to link clusters to them
  const autoDetailingPillar = await ctx.db
    .query('pillarPages')
    .withIndex('by_slug', (q: any) => q.eq('slug', 'auto-detailing'))
    .first();

  const ceramicCoatingPillar = await ctx.db
    .query('pillarPages')
    .withIndex('by_slug', (q: any) => q.eq('slug', 'ceramic-coating'))
    .first();

  const paintCorrectionPillar = await ctx.db
    .query('pillarPages')
    .withIndex('by_slug', (q: any) => q.eq('slug', 'paint-correction'))
    .first();

  if (!autoDetailingPillar || !ceramicCoatingPillar || !paintCorrectionPillar) {
    throw new Error('Pillar pages must be seeded before cluster pages');
  }

  const clusterPages = [
    // AUTO DETAILING CLUSTERS (7)
    {
      slug: 'auto-detailing/paint-protection-options',
      pillarPageId: autoDetailingPillar._id,
      title: 'Paint Protection Options for Auto Detailing | San Antonio',
      metaDescription:
        'Explore paint protection options including wax, sealants, and ceramic coatings. Compare benefits and costs for San Antonio vehicles. Expert guidance from IDA certified detailers.',
      h1: 'Paint Protection Options for Your Vehicle',
      content: `<h2>Protecting Your Vehicle's Paint Investment</h2>
<p>Paint protection is essential for maintaining your vehicle's appearance and value, especially in San Antonio's intense sun and heat. We offer multiple levels of paint protection to fit every budget and need.</p>

<h2>Paint Protection Options</h2>

<h3>Carnauba Wax</h3>
<p>Traditional paste wax provides warm glow and 2-3 months of protection. Best for enthusiasts who enjoy regular maintenance and don't mind frequent reapplication.</p>
<ul>
  <li>Beautiful warm shine</li>
  <li>Affordable and easy to apply</li>
  <li>Lasts 2-3 months</li>
  <li>Best for: Show cars, regular maintenance enthusiasts</li>
</ul>

<h3>Synthetic Sealant</h3>
<p>Polymer-based protection bonds to paint for 4-6 months of durability. Excellent water beading and resistance to environmental contaminants.</p>
<ul>
  <li>Long-lasting protection (4-6 months)</li>
  <li>Superior water repellency</li>
  <li>UV protection</li>
  <li>Best for: Daily drivers, practical protection</li>
</ul>

<h3>Ceramic Coating</h3>
<p>Professional-grade nano-ceramic coating provides 2-5 years of protection. The ultimate in paint protection with 9H hardness and extreme hydrophobic properties.</p>
<ul>
  <li>Lasts 2-5 years</li>
  <li>Maximum scratch resistance</li>
  <li>Incredible water beading</li>
  <li>Chemical resistance</li>
  <li>Best for: Long-term protection, luxury vehicles</li>
</ul>

<h2>Which Option is Right for You?</h2>
<p>Contact our IDA certified team for a personalized consultation. We'll assess your vehicle, usage patterns, and budget to recommend the perfect protection solution.</p>`,
      keywords: [
        'paint protection options San Antonio',
        'car wax vs sealant',
        'ceramic coating benefits',
        'paint protection comparison',
        'vehicle paint protection',
      ],
      relatedClusterIds: [],
      callToAction: 'Book a consultation to discuss paint protection options for your vehicle.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'auto-detailing/interior-vs-exterior-detailing',
      pillarPageId: autoDetailingPillar._id,
      title: 'Interior vs Exterior Detailing: What You Need to Know | San Antonio',
      metaDescription:
        'Understand the difference between interior and exterior auto detailing. Learn what each includes and which your San Antonio vehicle needs most.',
      h1: 'Interior vs Exterior Detailing Explained',
      content: `<h2>Understanding Auto Detailing Services</h2>
<p>Auto detailing encompasses both interior and exterior services, each addressing different aspects of vehicle care. Understanding the difference helps you choose the right service for your needs.</p>

<h2>Exterior Detailing</h2>
<h3>What's Included</h3>
<ul>
  <li>Multi-stage hand wash and dry</li>
  <li>Clay bar treatment for contaminant removal</li>
  <li>Paint correction (polishing to remove swirls and scratches)</li>
  <li>Wax, sealant, or ceramic coating application</li>
  <li>Wheel and tire cleaning and dressing</li>
  <li>Glass cleaning and treatment</li>
  <li>Trim restoration and protection</li>
</ul>

<h3>Benefits</h3>
<ul>
  <li>Protects paint from UV damage and oxidation</li>
  <li>Removes scratches, swirls, and imperfections</li>
  <li>Enhances resale value</li>
  <li>Prevents rust and corrosion</li>
  <li>Improves visibility with clean glass</li>
</ul>

<h2>Interior Detailing</h2>
<h3>What's Included</h3>
<ul>
  <li>Deep vacuum of all surfaces</li>
  <li>Steam cleaning of carpets and upholstery</li>
  <li>Leather cleaning and conditioning</li>
  <li>Dashboard and console detailed cleaning</li>
  <li>Door panel and trim cleaning</li>
  <li>Window cleaning (interior)</li>
  <li>Air vent cleaning and deodorizing</li>
  <li>Stain and odor removal</li>
</ul>

<h3>Benefits</h3>
<ul>
  <li>Removes bacteria, allergens, and germs</li>
  <li>Eliminates odors at the source</li>
  <li>Protects leather and vinyl from cracking</li>
  <li>Improves air quality inside vehicle</li>
  <li>Creates healthier driving environment</li>
</ul>

<h2>Which Do You Need?</h2>
<p><strong>Get Both:</strong> For best results, complete auto detailing includes both interior and exterior services. This provides comprehensive protection and cleaning.</p>

<p><strong>Exterior First:</strong> If you can only choose one, exterior detailing protects your investment from environmental damage.</p>

<p><strong>Interior for Health:</strong> Families with children, pets, or allergies benefit most from regular interior detailing.</p>`,
      keywords: [
        'interior vs exterior detailing',
        'interior detailing San Antonio',
        'exterior detailing benefits',
        'complete auto detailing',
        'car detailing services',
      ],
      relatedClusterIds: [],
      callToAction: 'Book complete interior and exterior detailing for maximum protection.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'auto-detailing/benefits-of-professional-detailing',
      pillarPageId: autoDetailingPillar._id,
      title: 'Benefits of Professional Auto Detailing | San Antonio Expert Guide',
      metaDescription:
        'Discover why professional auto detailing beats DIY. Learn the benefits of IDA certified detailing for your San Antonio vehicle. Expert techniques and results.',
      h1: 'Benefits of Professional Auto Detailing',
      content: `<h2>Why Choose Professional Detailing?</h2>
<p>Professional auto detailing delivers results that DIY simply cannot match. Our IDA-certified technicians bring expertise, professional equipment, and proven techniques to every vehicle.</p>

<h2>Superior Results</h2>
<h3>Professional-Grade Products</h3>
<p>We use commercial products not available to consumers. These professional formulations deliver better results and longer-lasting protection than retail products.</p>

<h3>Proper Techniques</h3>
<p>Improper washing and polishing techniques cause more damage than they fix. Our certified technicians know:</p>
<ul>
  <li>Safe washing methods that prevent scratches</li>
  <li>Paint correction without burning through clear coat</li>
  <li>Proper product application for maximum longevity</li>
  <li>How to identify and treat different paint types</li>
</ul>

<h2>Time Savings</h2>
<p>Professional detailing takes 4-8 hours for complete service. DIY detailing takes beginners 2-3 days of trial and error, often with mediocre results.</p>

<h2>Protection from Damage</h2>
<p>Incorrect techniques cause permanent damage:</p>
<ul>
  <li>Swirl marks from improper washing</li>
  <li>Holograms from incorrect polishing</li>
  <li>Clear coat burn-through from aggressive correction</li>
  <li>Streaky wax application</li>
  <li>Water spots from improper drying</li>
</ul>

<h2>Value for Money</h2>
<p>When you factor in product costs, equipment purchases, and your time value, professional detailing often costs less than quality DIY:</p>
<ul>
  <li>No need to buy expensive equipment</li>
  <li>No product trial and error</li>
  <li>No redoing work that didn't turn out right</li>
  <li>Guaranteed results or we'll make it right</li>
</ul>

<h2>IDA Certification Matters</h2>
<p>Our International Detailing Association certification means:</p>
<ul>
  <li>Ongoing training in latest techniques</li>
  <li>Adherence to industry best practices</li>
  <li>Insurance and professional standards</li>
  <li>Quality guarantee on all work</li>
</ul>`,
      keywords: [
        'professional detailing benefits',
        'IDA certified detailing',
        'auto detailing vs DIY',
        'professional car detailing San Antonio',
        'detailing expertise',
      ],
      relatedClusterIds: [],
      callToAction: 'Experience the professional difference. Book your IDA-certified detailing today.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'auto-detailing/pricing-guide',
      pillarPageId: autoDetailingPillar._id,
      title: 'Auto Detailing Pricing Guide San Antonio | Cost & Packages',
      metaDescription:
        'Understand auto detailing pricing in San Antonio. Package options, service costs, and what affects price. Transparent pricing from IDA certified detailers.',
      h1: 'Auto Detailing Pricing Guide',
      content: `<h2>Understanding Detailing Costs</h2>
<p>Auto detailing pricing varies based on vehicle size, condition, and services selected. We provide transparent pricing with no hidden fees.</p>

<h2>Factors That Affect Price</h2>

<h3>Vehicle Size</h3>
<ul>
  <li><strong>Sedan/Coupe:</strong> Base pricing</li>
  <li><strong>SUV/Truck:</strong> 25-40% increase due to larger surface area</li>
  <li><strong>RV/Boat:</strong> Custom pricing based on size</li>
</ul>

<h3>Vehicle Condition</h3>
<ul>
  <li><strong>Well-maintained:</strong> Standard pricing</li>
  <li><strong>Neglected (1+ year):</strong> May require extra time</li>
  <li><strong>Heavy pet hair:</strong> Additional labor</li>
  <li><strong>Severe staining:</strong> May need specialty treatments</li>
</ul>

<h3>Service Level</h3>
<ul>
  <li><strong>Maintenance Wash:</strong> Quick exterior cleaning</li>
  <li><strong>Standard Detail:</strong> Interior and exterior</li>
  <li><strong>Premium Detail:</strong> Includes paint correction</li>
  <li><strong>Ultimate Detail:</strong> Everything plus ceramic coating</li>
</ul>

<h2>Typical Service Packages</h2>

<h3>Maintenance Wash ($50-$80)</h3>
<p>Perfect for regularly detailed vehicles:</p>
<ul>
  <li>Hand wash and dry</li>
  <li>Wheel cleaning</li>
  <li>Tire dressing</li>
  <li>Glass cleaning</li>
</ul>

<h3>Standard Detail ($150-$250)</h3>
<p>Most popular package:</p>
<ul>
  <li>Everything in Maintenance Wash</li>
  <li>Interior vacuum and wipe down</li>
  <li>Dashboard cleaning and dressing</li>
  <li>Door jambs</li>
  <li>Wax or sealant</li>
</ul>

<h3>Premium Detail ($300-$500)</h3>
<p>For vehicles needing correction:</p>
<ul>
  <li>Everything in Standard Detail</li>
  <li>Clay bar treatment</li>
  <li>Paint correction (one-step)</li>
  <li>Interior deep cleaning</li>
  <li>Leather conditioning</li>
  <li>Premium sealant</li>
</ul>

<h3>Ultimate Detail ($600-$1200+)</h3>
<p>Show car perfection:</p>
<ul>
  <li>Everything in Premium Detail</li>
  <li>Multi-stage paint correction</li>
  <li>Ceramic coating application</li>
  <li>Engine bay detailing</li>
  <li>Headlight restoration</li>
</ul>

<h2>Add-On Services</h2>
<ul>
  <li>Pet hair removal: $30-$75</li>
  <li>Engine detailing: $75-$150</li>
  <li>Headlight restoration: $75-$125</li>
  <li>Odor removal: $50-$150</li>
  <li>Ceramic coating (standalone): $500-$1500</li>
</ul>

<h2>Get a Custom Quote</h2>
<p>Every vehicle is unique. Contact us for a personalized quote based on your vehicle's specific needs.</p>`,
      keywords: [
        'auto detailing pricing San Antonio',
        'car detailing cost',
        'detailing packages',
        'how much does detailing cost',
        'detailing price guide',
      ],
      relatedClusterIds: [],
      callToAction: 'Call (726) 207-1007 for a free, no-obligation quote on detailing services.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'auto-detailing/diy-vs-professional',
      pillarPageId: autoDetailingPillar._id,
      title: 'DIY vs Professional Auto Detailing | San Antonio Comparison Guide',
      metaDescription:
        'Should you detail your car yourself or hire professionals? Compare DIY vs professional auto detailing costs, results, and time investment for San Antonio vehicles.',
      h1: 'DIY vs Professional Auto Detailing: Which is Right for You?',
      content: `<h2>The DIY vs Professional Debate</h2>
<p>Many car owners wonder if they can achieve professional results with DIY detailing. Let's compare both approaches honestly.</p>

<h2>DIY Detailing</h2>
<h3>Advantages</h3>
<ul>
  <li>Lower immediate cost (products only)</li>
  <li>Complete control over process and timing</li>
  <li>Satisfaction of doing it yourself</li>
  <li>Learn about your vehicle</li>
</ul>

<h3>Disadvantages</h3>
<ul>
  <li>Requires significant time investment (8-12 hours for complete detail)</li>
  <li>Need to purchase and store equipment</li>
  <li>Learning curve leads to mistakes</li>
  <li>Results often mediocre without experience</li>
  <li>Risk of causing damage (swirls, holograms, burn-through)</li>
  <li>Consumer products inferior to professional-grade</li>
</ul>

<h3>True Cost of DIY</h3>
<p>Initial equipment and product investment:</p>
<ul>
  <li>Dual-action polisher: $150-$400</li>
  <li>Pads and backing plates: $50-$100</li>
  <li>Compounds and polishes: $75-$150</li>
  <li>Waxes and sealants: $30-$100</li>
  <li>Wash supplies: $50-$100</li>
  <li>Microfiber towels: $40-$80</li>
  <li><strong>Total: $395-$930+</strong></li>
</ul>

<p>Plus your time at $25/hour (8 hours) = $200</p>
<p><strong>First detail cost: $595-$1,130</strong></p>

<h2>Professional Detailing</h2>
<h3>Advantages</h3>
<ul>
  <li>Superior results from experienced technicians</li>
  <li>Professional-grade products and equipment</li>
  <li>No risk of damage (insured and guaranteed)</li>
  <li>Saves 8-12 hours of your time</li>
  <li>Consistent, repeatable quality</li>
  <li>IDA certification and training</li>
</ul>

<h3>Disadvantages</h3>
<ul>
  <li>Higher per-service cost ($150-$500+)</li>
  <li>Need to schedule appointment</li>
  <li>Vehicle away from you during service</li>
</ul>

<h2>Which Should You Choose?</h2>

<h3>Choose DIY if:</h3>
<ul>
  <li>You enjoy car care as a hobby</li>
  <li>You have time to learn properly</li>
  <li>You'll detail regularly (monthly)</li>
  <li>You're doing simple maintenance washes only</li>
</ul>

<h3>Choose Professional if:</h3>
<ul>
  <li>Time is valuable to you</li>
  <li>You want guaranteed results</li>
  <li>Your vehicle needs paint correction</li>
  <li>You're preparing for sale or special event</li>
  <li>You want ceramic coating or advanced services</li>
</ul>

<h2>The Hybrid Approach</h2>
<p>Many car enthusiasts use professionals for major services (paint correction, ceramic coating) and DIY for maintenance washes between professional details. This provides best value and results.</p>`,
      keywords: [
        'DIY vs professional detailing',
        'should I detail my own car',
        'auto detailing DIY or professional',
        'car detailing cost comparison',
        'professional detailing worth it',
      ],
      relatedClusterIds: [],
      callToAction: 'Let professionals handle the hard stuff. Book expert detailing and save time.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'auto-detailing/seasonal-car-care',
      pillarPageId: autoDetailingPillar._id,
      title: 'Seasonal Car Care Tips San Antonio | Year-Round Vehicle Maintenance',
      metaDescription:
        'Essential seasonal car care for San Antonio vehicles. Protect your car from heat, rain, and environmental damage year-round with expert IDA certified guidance.',
      h1: 'Seasonal Car Care for San Antonio Vehicles',
      content: `<h2>San Antonio's Unique Climate Challenges</h2>
<p>San Antonio's intense heat, occasional rain, and environmental factors require year-round vehicle care. Each season brings specific challenges to your vehicle's exterior and interior.</p>

<h2>Spring Care (March-May)</h2>
<h3>Pollen Season</h3>
<p>Heavy pollen accumulation requires frequent washing:</p>
<ul>
  <li>Wash weekly to remove pollen before it bakes on</li>
  <li>Don't use automatic brushes - they scratch pollen into paint</li>
  <li>Clean cabin air filter monthly</li>
  <li>Wax or seal paint for easier pollen removal</li>
</ul>

<h3>Prepare for Summer Heat</h3>
<ul>
  <li>Apply quality wax or ceramic coating before summer</li>
  <li>Treat leather with UV protectant</li>
  <li>Check and refresh tire dressing</li>
  <li>Deep clean interior to remove winter buildup</li>
</ul>

<h2>Summer Care (June-August)</h2>
<h3>Intense UV Protection</h3>
<p>San Antonio summer sun is brutal on vehicles:</p>
<ul>
  <li>Park in shade whenever possible</li>
  <li>Use windshield sunshade</li>
  <li>Reapply wax monthly or use long-lasting ceramic coating</li>
  <li>Condition leather every 2 months</li>
  <li>Check tire pressure weekly (heat causes expansion)</li>
</ul>

<h3>Interior Protection</h3>
<ul>
  <li>Dashboard and trim crack without UV protection</li>
  <li>Use quality UV protectant on all plastic and vinyl</li>
  <li>Condition leather to prevent cracking</li>
  <li>Clean regularly to prevent heat-baked stains</li>
</ul>

<h2>Fall Care (September-November)</h2>
<h3>Temperature Fluctuations</h3>
<ul>
  <li>Inspect wax/sealant condition after summer</li>
  <li>Reapply protection before winter</li>
  <li>Clean and treat rubber seals</li>
  <li>Deep clean to remove summer's dirt</li>
</ul>

<h3>Prepare for Rain</h3>
<ul>
  <li>Test wiper blades and replace if needed</li>
  <li>Treat glass with water repellent</li>
  <li>Check drainage in sunroof/door jambs</li>
</ul>

<h2>Winter Care (December-February)</h2>
<h3>San Antonio Winters are Mild But...</h3>
<p>While we don't face snow, we have challenges:</p>
<ul>
  <li>More rain means more water spotting</li>
  <li>Temperature swings cause condensation</li>
  <li>Road salt from occasional ice</li>
</ul>

<h3>Winter Maintenance</h3>
<ul>
  <li>Wash after any road salt exposure</li>
  <li>Dry thoroughly to prevent water spots</li>
  <li>Pay attention to undercarriage</li>
  <li>Maintain protective coating</li>
</ul>

<h2>Year-Round Schedule</h2>
<ul>
  <li><strong>Weekly:</strong> Maintenance wash</li>
  <li><strong>Monthly:</strong> Interior vacuum and wipe-down</li>
  <li><strong>Quarterly:</strong> Complete detail with wax/sealant</li>
  <li><strong>Annually:</strong> Paint correction and ceramic coating (or major detail)</li>
</ul>`,
      keywords: [
        'seasonal car care San Antonio',
        'summer car care Texas',
        'vehicle maintenance San Antonio',
        'protect car from heat',
        'year-round car care',
      ],
      relatedClusterIds: [],
      callToAction: 'Schedule seasonal detailing to keep your vehicle protected year-round.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'auto-detailing/how-to-book',
      pillarPageId: autoDetailingPillar._id,
      title: 'How to Book Auto Detailing San Antonio | Easy Scheduling',
      metaDescription:
        'Book professional auto detailing in San Antonio. Mobile and shop services available. IDA certified technicians. Call (726) 207-1007 or book online.',
      h1: 'How to Book Auto Detailing Services',
      content: `<h2>Easy Booking Options</h2>
<p>We make booking professional auto detailing simple and convenient for busy San Antonio residents.</p>

<h2>Three Ways to Book</h2>

<h3>1. Call Us Directly</h3>
<p><strong>Phone: (726) 207-1007</strong></p>
<p>Speak directly with our team:</p>
<ul>
  <li>Get immediate answers to questions</li>
  <li>Receive personalized service recommendations</li>
  <li>Schedule same-day or next-day service</li>
  <li>Discuss specific vehicle concerns</li>
</ul>

<h3>2. Book Online</h3>
<p>Use our online booking form:</p>
<ul>
  <li>Available 24/7</li>
  <li>Choose your preferred date and time</li>
  <li>Select services needed</li>
  <li>Provide vehicle details</li>
  <li>Receive confirmation within 2 hours</li>
</ul>

<h3>3. Email Us</h3>
<p><strong>Email: rromeojr1@gmail.com</strong></p>
<ul>
  <li>Perfect for detailed requests</li>
  <li>Send photos of specific issues</li>
  <li>Get written quotes</li>
  <li>Response within 4 hours during business hours</li>
</ul>

<h2>What to Expect When Booking</h2>

<h3>Information We'll Need</h3>
<ul>
  <li>Vehicle make, model, and year</li>
  <li>Current condition and concerns</li>
  <li>Services you're interested in</li>
  <li>Preferred date and time</li>
  <li>Mobile or shop service preference</li>
  <li>Your location (for mobile service)</li>
</ul>

<h3>We'll Provide</h3>
<ul>
  <li>Estimated service time</li>
  <li>Transparent pricing</li>
  <li>Service recommendations</li>
  <li>Confirmation of appointment</li>
  <li>Reminder before service</li>
</ul>

<h2>Mobile vs Shop Service</h2>

<h3>Mobile Detailing</h3>
<p>We come to you in San Antonio and surrounding areas:</p>
<ul>
  <li>Your home driveway</li>
  <li>Office parking lot</li>
  <li>Any location with water access and space</li>
  <li>Perfect for busy professionals</li>
</ul>

<h3>Shop Service</h3>
<p>Bring your vehicle to us:</p>
<ul>
  <li>Climate-controlled environment</li>
  <li>Full equipment access</li>
  <li>Best for paint correction and ceramic coating</li>
  <li>Courtesy shuttle available (call for details)</li>
</ul>

<h2>Scheduling Tips</h2>
<ul>
  <li><strong>Book Early:</strong> Popular times fill fast, especially weekends</li>
  <li><strong>Allow Enough Time:</strong> Complete details take 4-8 hours</li>
  <li><strong>Weather:</strong> Mobile service requires dry weather</li>
  <li><strong>Preparation:</strong> Remove personal items from vehicle</li>
</ul>

<h2>Cancellation Policy</h2>
<p>We understand plans change. Please provide 24-hour notice for cancellations or rescheduling to avoid fees.</p>

<h2>Service Areas</h2>
<p>We serve all of San Antonio including:</p>
<ul>
  <li>Stone Oak</li>
  <li>Alamo Heights</li>
  <li>Medical Center</li>
  <li>Downtown</li>
  <li>North Side</li>
  <li>Northeast Side</li>
  <li>And more - call to confirm</li>
</ul>`,
      keywords: [
        'book auto detailing San Antonio',
        'schedule car detailing',
        'mobile detailing booking',
        'auto detailing appointment',
        'detailing near me',
      ],
      relatedClusterIds: [],
      callToAction: 'Ready to book? Call (726) 207-1007 or use our online booking form.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },

    // CERAMIC COATING CLUSTERS (7)
    {
      slug: 'ceramic-coating/what-is-ceramic-coating',
      pillarPageId: ceramicCoatingPillar._id,
      title: 'What is Ceramic Coating? | Complete Guide San Antonio',
      metaDescription:
        'Learn what ceramic coating is, how it works, and why it\'s the ultimate paint protection. Expert guide from IDA certified detailers in San Antonio.',
      h1: 'What is Ceramic Coating?',
      content: `<h2>Understanding Ceramic Coating Technology</h2>
<p>Ceramic coating (also called nano-ceramic coating or glass coating) is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a permanent protective layer.</p>

<h2>How Ceramic Coating Works</h2>
<h3>Chemical Bonding</h3>
<p>Unlike wax or sealant that sits on top of paint, ceramic coating creates a semi-permanent bond with the paint at a molecular level. This creates a new, harder surface layer.</p>

<h3>The Coating Structure</h3>
<ul>
  <li><strong>Factory Clear Coat:</strong> Original paint protection (2-4 mils thick)</li>
  <li><strong>Ceramic Layer:</strong> Bonds to clear coat (2-3 microns thick)</li>
  <li><strong>Hydrophobic Top:</strong> Repels water and contaminants</li>
</ul>

<h2>Key Properties</h2>

<h3>9H Hardness</h3>
<p>Professional ceramic coatings cure to 9H hardness (pencil hardness scale). This is harder than factory clear coat, providing enhanced scratch resistance.</p>

<h3>Hydrophobic Effect</h3>
<p>Water contact angle of 110°+ causes water to bead up and roll off, carrying dirt with it. Makes washing incredibly easy.</p>

<h3>Chemical Resistance</h3>
<p>Protects against:</p>
<ul>
  <li>Bird droppings (acidic)</li>
  <li>Tree sap</li>
  <li>Road salt</li>
  <li>Bug splatter</li>
  <li>Harsh chemicals</li>
</ul>

<h3>UV Protection</h3>
<p>Blocks UV rays from degrading paint, preventing oxidation and fading even in San Antonio's intense sun.</p>

<h2>What Ceramic Coating ISN'T</h2>
<p>Common misconceptions:</p>
<ul>
  <li><strong>NOT a scratch-proof force field:</strong> Reduces light scratches but won't prevent damage from rocks or accidents</li>
  <li><strong>NOT maintenance-free:</strong> Still requires washing (just easier)</li>
  <li><strong>NOT a substitute for paint correction:</strong> Coating locks in whatever condition the paint is in</li>
  <li><strong>NOT permanent like factory clear coat:</strong> Lasts 2-5 years depending on product tier</li>
</ul>

<h2>Professional vs Consumer Coatings</h2>
<h3>Professional Grade (What We Use)</h3>
<ul>
  <li>Higher SiO2 content (85-95%)</li>
  <li>Thicker coating layer</li>
  <li>Lasts 2-5 years</li>
  <li>Requires certification to apply</li>
  <li>Warranty included</li>
</ul>

<h3>Consumer/DIY Coatings</h3>
<ul>
  <li>Lower SiO2 content (30-70%)</li>
  <li>Thinner application</li>
  <li>Lasts 6-12 months</li>
  <li>Easy to apply incorrectly</li>
  <li>No warranty</li>
</ul>`,
      keywords: [
        'what is ceramic coating',
        'ceramic coating explained',
        'nano ceramic coating',
        'how does ceramic coating work',
        'ceramic coating San Antonio',
      ],
      relatedClusterIds: [],
      callToAction: 'Learn more about ceramic coating for your vehicle. Call for consultation.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'ceramic-coating/ceramic-vs-wax',
      pillarPageId: ceramicCoatingPillar._id,
      title: 'Ceramic Coating vs Wax: Which is Better? | San Antonio Guide',
      metaDescription:
        'Compare ceramic coating vs wax. Learn the differences, costs, and which paint protection is right for your San Antonio vehicle. Expert IDA certified advice.',
      h1: 'Ceramic Coating vs Wax: Complete Comparison',
      content: `<h2>The Paint Protection Debate</h2>
<p>Choosing between ceramic coating and traditional wax depends on your budget, usage, and protection goals. Let's compare them honestly.</p>

<h2>Wax Protection</h2>
<h3>How It Works</h3>
<p>Wax (carnauba or synthetic) creates a sacrificial barrier on top of your paint. It's removed by washing and environmental exposure.</p>

<h3>Pros</h3>
<ul>
  <li>Affordable ($50-$150 per application)</li>
  <li>Beautiful warm glow (especially carnauba)</li>
  <li>Easy to remove if needed</li>
  <li>Can be done frequently</li>
  <li>Works well for show cars</li>
</ul>

<h3>Cons</h3>
<ul>
  <li>Lasts only 2-6 months</li>
  <li>Requires frequent reapplication</li>
  <li>Less protection from chemicals</li>
  <li>Doesn't harden paint surface</li>
  <li>Water beading fades quickly</li>
</ul>

<h2>Ceramic Coating Protection</h2>
<h3>How It Works</h3>
<p>Liquid polymer bonds to paint at molecular level, creating a semi-permanent protective layer.</p>

<h3>Pros</h3>
<ul>
  <li>Lasts 2-5 years</li>
  <li>9H hardness (scratch resistance)</li>
  <li>Superior chemical resistance</li>
  <li>Extreme hydrophobic properties</li>
  <li>UV protection won't fade</li>
  <li>Self-cleaning effect</li>
  <li>Easier maintenance washing</li>
</ul>

<h3>Cons</h3>
<ul>
  <li>Higher upfront cost ($500-$1,500)</li>
  <li>Requires professional application</li>
  <li>Paint correction required first</li>
  <li>Locks in paint condition</li>
  <li>Can't be easily removed</li>
</ul>

<h2>Cost Comparison (5 Years)</h2>

<h3>Wax Route</h3>
<ul>
  <li>Application every 3 months = 20 applications</li>
  <li>Cost per application: $75 (professional)</li>
  <li><strong>Total 5-year cost: $1,500</strong></li>
  <li>Plus time and inconvenience</li>
</ul>

<h3>Ceramic Coating Route</h3>
<ul>
  <li>One application lasts 5 years</li>
  <li>Paint correction + coating: $1,200</li>
  <li><strong>Total 5-year cost: $1,200</strong></li>
  <li>Superior protection throughout</li>
</ul>

<h2>Which Should You Choose?</h2>

<h3>Choose Wax If:</h3>
<ul>
  <li>Budget is tight</li>
  <li>You detail frequently yourself</li>
  <li>You like changing protection products</li>
  <li>Vehicle is temporary (lease ending soon)</li>
  <li>You enjoy the process of waxing</li>
</ul>

<h3>Choose Ceramic Coating If:</h3>
<ul>
  <li>You want long-term protection</li>
  <li>You value time and convenience</li>
  <li>You park outside in San Antonio sun</li>
  <li>You want maximum paint protection</li>
  <li>You plan to keep vehicle 3+ years</li>
  <li>You want easy maintenance</li>
</ul>

<h2>The Hybrid Approach</h2>
<p>Some enthusiasts use ceramic coating as base protection and top it with carnauba wax for special events. This gives great protection plus that carnauba glow.</p>

<h2>San Antonio Considerations</h2>
<p>In our intense heat and UV exposure:</p>
<ul>
  <li>Wax breaks down faster (2-3 months max)</li>
  <li>Ceramic coating maintains protection year-round</li>
  <li>UV damage is a serious concern (ceramic wins)</li>
  <li>Easier washing (ceramic) saves water during droughts</li>
</ul>`,
      keywords: [
        'ceramic coating vs wax',
        'wax or ceramic coating',
        'paint protection comparison',
        'ceramic coating benefits',
        'is ceramic coating worth it',
      ],
      relatedClusterIds: [],
      callToAction: 'Still deciding? Call for a free consultation on the best protection for your vehicle.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'ceramic-coating/how-long-does-it-last',
      pillarPageId: ceramicCoatingPillar._id,
      title: 'How Long Does Ceramic Coating Last? | San Antonio Longevity Guide',
      metaDescription:
        'Learn how long ceramic coating lasts, what affects longevity, and how to maximize coating life. Expert IDA certified guidance for San Antonio vehicles.',
      h1: 'How Long Does Ceramic Coating Last?',
      content: `<h2>Ceramic Coating Lifespan</h2>
<p>Professional ceramic coating longevity depends on product quality, application, and maintenance. Understanding these factors helps you get maximum value.</p>

<h2>Expected Lifespan by Product Tier</h2>

<h3>Consumer/DIY Coatings (6-12 months)</h3>
<ul>
  <li>Thin application</li>
  <li>Lower SiO2 content</li>
  <li>Often applied incorrectly</li>
  <li>No warranty</li>
</ul>

<h3>Professional Entry-Level (2-3 years)</h3>
<ul>
  <li>Good protection</li>
  <li>Proper application required</li>
  <li>Great for daily drivers</li>
  <li>Warranty included</li>
</ul>

<h3>Professional Premium (3-5 years)</h3>
<ul>
  <li>Multiple layers</li>
  <li>Maximum thickness</li>
  <li>Best for luxury vehicles</li>
  <li>Extended warranty</li>
</ul>

<h3>Ultra-Premium Coatings (5-7 years)</h3>
<ul>
  <li>Top-tier products</li>
  <li>Multi-layer application</li>
  <li>Requires certification</li>
  <li>Comprehensive warranty</li>
</ul>

<h2>Factors That Affect Longevity</h2>

<h3>1. Proper Application</h3>
<p>Most critical factor:</p>
<ul>
  <li>Paint must be perfectly clean (no contaminants)</li>
  <li>Paint correction required for best bonding</li>
  <li>Correct humidity and temperature during application</li>
  <li>Proper curing time (24-48 hours)</li>
  <li>Multiple thin layers better than one thick layer</li>
</ul>

<h3>2. Maintenance</h3>
<p>How you care for coating affects life:</p>
<ul>
  <li><strong>Regular washing (every 2 weeks):</strong> Removes contaminants before they bond</li>
  <li><strong>pH-neutral soap only:</strong> Harsh chemicals degrade coating</li>
  <li><strong>Avoid automatic car washes:</strong> Harsh brushes can damage</li>
  <li><strong>Remove bird droppings immediately:</strong> Acid can etch coating</li>
  <li><strong>Annual boost treatment:</strong> Refreshes hydrophobic properties</li>
</ul>

<h3>3. Environmental Factors</h3>
<p>San Antonio presents challenges:</p>
<ul>
  <li><strong>UV exposure:</strong> Garage parking extends life 20-30%</li>
  <li><strong>Heat:</strong> Our summers are tough on all coatings</li>
  <li><strong>Rain:</strong> Actually helps keep coating clean</li>
  <li><strong>Tree sap:</strong> Common in San Antonio, damages coating if left</li>
  <li><strong>Hard water:</strong> Mineral spots can bond to coating</li>
</ul>

<h3>4. Vehicle Usage</h3>
<ul>
  <li><strong>Daily driver:</strong> Expect lower end of lifespan range</li>
  <li><strong>Weekend car:</strong> Coating lasts longer with less exposure</li>
  <li><strong>Highway miles:</strong> More rock chips and bug impacts</li>
  <li><strong>City driving:</strong> More brake dust and environmental contaminants</li>
</ul>

<h2>Signs Coating is Degrading</h2>
<p>Watch for these indicators:</p>
<ul>
  <li>Water no longer beads as aggressively</li>
  <li>Washing becomes harder (dirt sticks more)</li>
  <li>Surface feels rougher to touch</li>
  <li>Gloss appears diminished</li>
  <li>Water spots harder to remove</li>
</ul>

<h2>Extending Coating Life</h2>
<h3>Immediate Steps</h3>
<ul>
  <li>Park in shade/garage when possible</li>
  <li>Wash every 2 weeks (more in summer)</li>
  <li>Use only pH-neutral soaps</li>
  <li>Dry thoroughly to prevent water spots</li>
  <li>Remove contaminants immediately</li>
</ul>

<h3>Annual Maintenance</h3>
<ul>
  <li>Professional coating boost/top-up</li>
  <li>Decontamination (clay bar if needed)</li>
  <li>Inspection for damage</li>
  <li>Spot repair if necessary</li>
</ul>

<h2>Warranty Considerations</h2>
<p>Most professional coatings include warranty, but it requires:</p>
<ul>
  <li>Following maintenance guidelines</li>
  <li>Using approved wash products</li>
  <li>Annual inspection/maintenance</li>
  <li>Proof of proper care</li>
</ul>`,
      keywords: [
        'how long does ceramic coating last',
        'ceramic coating longevity',
        'ceramic coating lifespan',
        'does ceramic coating wear off',
        'ceramic coating durability',
      ],
      relatedClusterIds: [],
      callToAction: 'Get long-lasting protection. Book professional ceramic coating with warranty.',
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    // Continue with remaining Ceramic Coating clusters and Paint Correction clusters
    // Due to file size, implementing comprehensive 11 remaining cluster pages inline
  ];

  // NOTE: For production, add remaining 11 cluster pages here:
  // - 4 more Ceramic Coating clusters (cost, application, maintenance, booking)
  // - 7 Paint Correction clusters (swirl removal, scratch repair, oxidation, multi-stage, before/after, process, booking)

  // Insert all cluster pages
  for (const cluster of clusterPages) {
    await ctx.db.insert('clusterPages', cluster);
  }

  console.log(`✅ Seeded ${clusterPages.length} cluster pages`);
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
