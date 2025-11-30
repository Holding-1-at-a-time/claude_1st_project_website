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
    {
      slug: 'interior-deep-cleansing',
      serviceName: 'Interior Deep Cleansing',
      serviceType: 'AutoRepair',
      title: 'Interior Deep Cleansing San Antonio | Professional Car Interior Detailing',
      metaDescription:
        'Deep interior car cleaning in San Antonio. Steam cleaning, stain removal, odor elimination. IDA certified. Transform your vehicle interior. Call (726) 207-1007.',
      h1: 'Professional Interior Deep Cleansing Services in San Antonio',
      introContent: `<p>Restore your vehicle's interior to pristine condition with our comprehensive deep cleansing service. We use professional steam cleaning, specialized cleaners, and proven techniques to remove stains, eliminate odors, and sanitize every surface.</p>`,
      mainContent: `<h2>Complete Interior Deep Cleansing</h2>
<p>Our interior deep cleansing goes far beyond a basic vacuum. We meticulously clean, treat, and protect every interior surface using professional-grade equipment and products.</p>

<h2>What's Included</h2>
<h3>Seats & Upholstery</h3>
<ul>
  <li>Deep steam cleaning of fabric seats</li>
  <li>Leather cleaning and conditioning</li>
  <li>Stain removal (food, drinks, pet accidents)</li>
  <li>Extraction cleaning for embedded dirt</li>
</ul>

<h3>Carpets & Floor Mats</h3>
<ul>
  <li>High-powered vacuum extraction</li>
  <li>Hot water extraction shampooing</li>
  <li>Stain treatment and removal</li>
  <li>Odor neutralization</li>
</ul>

<h3>Dashboard & Console</h3>
<ul>
  <li>Detailed cleaning of all controls</li>
  <li>UV protectant application</li>
  <li>Vent cleaning and deodorizing</li>
  <li>Screen and display cleaning</li>
</ul>

<h3>Door Panels & Trim</h3>
<ul>
  <li>Complete cleaning of all panels</li>
  <li>Door jamb cleaning</li>
  <li>Window and mirror cleaning</li>
  <li>Protective dressing application</li>
</ul>

<h2>Professional Steam Cleaning</h2>
<p>We use industrial-grade steam cleaners that sanitize and deep clean without harsh chemicals. Steam cleaning kills 99.9% of bacteria and germs while being safe for all interior surfaces.</p>

<h2>Pet Hair & Odor Removal</h2>
<p>Specialized tools and techniques for complete pet hair removal from carpets, seats, and hard-to-reach areas. Our enzyme-based odor eliminators permanently neutralize pet odors.</p>`,
      keywords: [
        'interior deep cleaning San Antonio',
        'car interior detailing',
        'steam cleaning car interior',
        'stain removal car seats',
        'interior car cleaning near me',
        'auto interior detailing',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'North Side'],
      faqs: [
        {
          question: 'How long does interior deep cleansing take?',
          answer:
            'A thorough interior deep cleansing typically takes 3-5 hours depending on vehicle size and condition. Heavily soiled interiors may require additional time.',
        },
        {
          question: 'Can you remove pet hair and odors?',
          answer:
            'Yes! We specialize in pet hair removal using professional tools and techniques. Our enzyme-based cleaners permanently eliminate pet odors rather than masking them.',
        },
        {
          question: 'Will steam cleaning damage my interior?',
          answer:
            'No, professional steam cleaning is safe for all interior surfaces including leather, fabric, vinyl, and plastics. We adjust temperature and pressure for each surface type.',
        },
        {
          question: 'Do you remove tough stains?',
          answer:
            'We can remove most stains including coffee, soda, food, makeup, and ink. Some very old or set-in stains may require multiple treatments or may be permanent.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'exterior-hand-wash-sealant',
      serviceName: 'Exterior Hand Wash & Sealant',
      serviceType: 'AutoRepair',
      title: 'Exterior Hand Wash & Sealant San Antonio | Premium Car Wash',
      metaDescription:
        'Premium hand wash and paint sealant in San Antonio. pH-neutral soap, clay bar, paint sealant. Safe for ceramic coatings. IDA certified. Call (726) 207-1007.',
      h1: 'Professional Exterior Hand Wash & Sealant Service',
      introContent: `<p>Experience the difference of a true hand wash. Our meticulous process safely removes dirt, grime, and contaminants while applying a protective sealant that keeps your vehicle looking great for months.</p>`,
      mainContent: `<h2>Premium Hand Wash Process</h2>
<p>Unlike automatic car washes that can scratch your paint, our hand wash process is completely safe and far more effective at removing contamination.</p>

<h2>Our Hand Wash Includes</h2>
<h3>Pre-Wash Treatment</h3>
<ul>
  <li>Wheel and tire cleaning with dedicated brushes</li>
  <li>Wheel well cleaning and degreasing</li>
  <li>Bug and tar removal from front end</li>
  <li>Pre-soak with pH-neutral foam</li>
</ul>

<h3>Two-Bucket Hand Wash</h3>
<ul>
  <li>Separate wash and rinse buckets with grit guards</li>
  <li>Premium pH-neutral car shampoo</li>
  <li>Microfiber wash mitts (never sponges)</li>
  <li>Top-to-bottom washing technique</li>
</ul>

<h3>Clay Bar Treatment</h3>
<ul>
  <li>Removes embedded contaminants</li>
  <li>Creates smooth-as-glass paint surface</li>
  <li>Prepares paint for sealant</li>
  <li>Safe for all paint types</li>
</ul>

<h3>Paint Sealant Application</h3>
<ul>
  <li>Synthetic polymer sealant</li>
  <li>3-6 month protection</li>
  <li>Hydrophobic water beading</li>
  <li>UV protection</li>
  <li>Enhanced gloss and shine</li>
</ul>

<h3>Final Details</h3>
<ul>
  <li>Tire dressing application</li>
  <li>Window and glass cleaning (exterior)</li>
  <li>Chrome and trim polishing</li>
  <li>Final inspection</li>
</ul>

<h2>Safe for Ceramic Coatings</h2>
<p>Our hand wash process is completely safe for ceramic-coated vehicles. We use pH-neutral soaps that won't strip or damage coatings.</p>

<h2>Maintenance Wash Programs</h2>
<p>Keep your vehicle looking its best with our maintenance wash programs. Regular washing every 2 weeks maintains protection and prevents contamination buildup.</p>`,
      keywords: [
        'hand wash San Antonio',
        'exterior car wash',
        'paint sealant',
        'premium car wash',
        'safe car wash',
        'hand car wash near me',
      ],
      neighborhoods: ['Stone Oak', 'Northeast Side', 'North Side', 'Medical Center'],
      faqs: [
        {
          question: 'How is hand washing better than automatic car washes?',
          answer:
            'Hand washing allows us to carefully clean each panel without the harsh brushes and chemicals used in automatic washes. We can address specific contaminants and never risk scratching your paint.',
        },
        {
          question: 'How long does the sealant protection last?',
          answer:
            'Our synthetic paint sealant provides 3-6 months of protection depending on environmental factors and maintenance. Regular washing helps extend sealant life.',
        },
        {
          question: 'Can you hand wash at my location?',
          answer:
            'Yes! We offer mobile hand wash services throughout San Antonio. We bring all necessary water, equipment, and supplies to your location.',
        },
        {
          question: 'Is this safe for new or freshly painted vehicles?',
          answer:
            'Absolutely. Our pH-neutral products and microfiber towels are completely safe for new paint. We recommend waiting 30 days after repainting before applying sealant.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'headlight-restoration',
      serviceName: 'Headlight Restoration',
      serviceType: 'AutoRepair',
      title: 'Headlight Restoration San Antonio | Clear Foggy Headlights',
      metaDescription:
        'Professional headlight restoration in San Antonio. Remove oxidation, yellowing, haze. Restore clarity and brightness. UV protection. Call (726) 207-1007.',
      h1: 'Professional Headlight Restoration in San Antonio, TX',
      introContent: `<p>Restore clarity and safety to your vehicle with professional headlight restoration. Our multi-stage process removes oxidation, yellowing, and haze while applying UV protection to prevent future damage.</p>`,
      mainContent: `<h2>Why Restore Your Headlights?</h2>
<h3>Safety</h3>
<p>Foggy or yellowed headlights can reduce visibility by up to 80%, creating a serious safety hazard for night driving. Restoration restores full brightness and beam pattern.</p>

<h3>Appearance</h3>
<p>Cloudy headlights make even new vehicles look old and neglected. Crystal-clear headlights dramatically improve your vehicle's appearance.</p>

<h3>Cost-Effective</h3>
<p>Headlight restoration costs a fraction of replacement. New headlight assemblies can cost $200-$1000+ per side, while restoration is much more affordable.</p>

<h2>Our Restoration Process</h2>
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
        'headlight restoration San Antonio',
        'clear foggy headlights',
        'headlight cleaning',
        'yellow headlight repair',
        'headlight polishing',
        'restore headlights near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Northwest Side', 'North Side'],
      faqs: [
        {
          question: 'How long does headlight restoration take?',
          answer:
            'Both headlights typically take 1-2 hours to fully restore depending on the level of oxidation and damage.',
        },
        {
          question: 'How long will the restoration last?',
          answer:
            'With our UV protective coating, restoration typically lasts 1-3 years. Longevity depends on UV exposure and maintenance. Reapplication of UV sealant extends life.',
        },
        {
          question: 'Can severely damaged headlights be restored?',
          answer:
            'Most plastic headlights can be restored unless they have deep cracks or internal damage. We assess each headlight and provide honest recommendations.',
        },
        {
          question: 'Will restoration work on glass headlights?',
          answer:
            'Glass headlights don\'t oxidize like plastic, but we can polish them if scratched. Most modern vehicles have plastic/polycarbonate headlights which respond excellently to restoration.',
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
      title: 'Engine Detailing San Antonio | Engine Bay Cleaning & Detailing',
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
      slug: 'window-tinting',
      serviceName: 'Window Tinting',
      serviceType: 'AutoRepair',
      title: 'Window Tinting San Antonio | Professional Auto Window Tint',
      metaDescription:
        'Professional window tinting in San Antonio. Ceramic, carbon, dyed films. UV protection, heat rejection. Lifetime warranty. Legal compliance. Call (726) 207-1007.',
      h1: 'Professional Auto Window Tinting in San Antonio, TX',
      introContent: `<p>Protect your vehicle and passengers with professional window tinting. Our premium films block UV rays, reduce heat, enhance privacy, and improve your vehicle's appearance while maintaining Texas legal compliance.</p>`,
      mainContent: `<h2>Window Tinting Benefits</h2>
<h3>UV Protection</h3>
<p>Quality window tint blocks 99% of harmful UV rays, protecting your skin and preventing interior fading and cracking.</p>

<h3>Heat Rejection</h3>
<p>Reduce interior temperature by up to 60% with ceramic tint. Less AC usage means better fuel economy and comfort.</p>

<h3>Privacy & Security</h3>
<p>Darker tint provides privacy and makes it harder for thieves to see valuables inside your vehicle.</p>

<h3>Glare Reduction</h3>
<p>Significantly reduce eye strain from sun glare while driving, improving safety and comfort.</p>

<h3>Shatter Protection</h3>
<p>Tint film holds glass together in an accident, reducing injury from flying glass shards.</p>

<h2>Tint Film Options</h2>
<h3>Ceramic Tint (Premium)</h3>
<ul>
  <li>Superior heat rejection (up to 60%)</li>
  <li>No signal interference (GPS, radio, cell)</li>
  <li>Color-stable - won't purple or fade</li>
  <li>Lifetime warranty</li>
  <li>Best optical clarity</li>
</ul>

<h3>Carbon Tint (Mid-Tier)</h3>
<ul>
  <li>Good heat rejection (up to 40%)</li>
  <li>Matte finish appearance</li>
  <li>Color-stable</li>
  <li>Lifetime warranty</li>
  <li>No metallic content</li>
</ul>

<h3>Dyed Tint (Economy)</h3>
<ul>
  <li>Basic heat rejection (up to 20%)</li>
  <li>Dark appearance for privacy</li>
  <li>Budget-friendly option</li>
  <li>5-year warranty</li>
  <li>May fade over time</li>
</ul>

<h2>Texas Tint Laws</h2>
<p>We ensure compliance with Texas window tint regulations:</p>
<ul>
  <li><strong>Front Windshield:</strong> 5" from top or AS-1 line</li>
  <li><strong>Front Side Windows:</strong> Must allow 25%+ light transmission</li>
  <li><strong>Back Side & Rear:</strong> Any darkness permitted</li>
</ul>

<h2>Professional Installation</h2>
<p>Our installation process ensures bubble-free, perfect results:</p>
<ol>
  <li>Window deep cleaning</li>
  <li>Precise computer-cut patterns</li>
  <li>Clean room installation environment</li>
  <li>Heat shrinking for perfect fit</li>
  <li>Final inspection and cleaning</li>
</ol>

<h2>Lifetime Warranty</h2>
<p>Our ceramic and carbon tints come with a lifetime warranty covering peeling, bubbling, discoloration, and adhesion failure.</p>`,
      keywords: [
        'window tinting San Antonio',
        'car window tint',
        'ceramic tint',
        'auto tint near me',
        'window tint shop',
        'professional window tinting',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northwest Side'],
      faqs: [
        {
          question: 'How long does window tinting take?',
          answer:
            'Most vehicles take 2-4 hours for complete installation. Larger vehicles or vehicles with many windows may take longer.',
        },
        {
          question: 'When can I roll down windows after tinting?',
          answer:
            'Wait 3-5 days before rolling down windows to allow film to fully cure and adhere. We\'ll provide specific instructions based on weather conditions.',
        },
        {
          question: 'Will tint affect my GPS or radio?',
          answer:
            'Ceramic and carbon tints have no metallic content and won\'t interfere with signals. Older metallic tints can cause interference, which is why we don\'t use them.',
        },
        {
          question: 'What if my tint bubbles or peels?',
          answer:
            'Quality tint installed properly should never bubble or peel. Our lifetime warranty covers any defects or installation issues - we\'ll replace it free of charge.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'odor-removal',
      serviceName: 'Odor Removal',
      serviceType: 'AutoRepair',
      title: 'Odor Removal San Antonio | Car Odor Elimination & Deodorizing',
      metaDescription:
        'Professional odor removal in San Antonio. Eliminate smoke, pet, mold, food odors. Ozone treatment, enzyme cleaners. Permanent results. Call (726) 207-1007.',
      h1: 'Professional Vehicle Odor Removal in San Antonio',
      introContent: `<p>Eliminate stubborn odors permanently with our professional odor removal service. Using ozone generators, enzyme treatments, and deep cleaning, we neutralize odors at the source rather than masking them.</p>`,
      mainContent: `<h2>Common Vehicle Odors We Eliminate</h2>
<ul>
  <li>Cigarette and cigar smoke</li>
  <li>Pet odors and accidents</li>
  <li>Mold and mildew</li>
  <li>Food and drink spills</li>
  <li>Vomit and biological odors</li>
  <li>Musty or stale smells</li>
  <li>Chemical or fuel odors</li>
</ul>

<h2>Our Odor Removal Process</h2>
<h3>1. Odor Source Identification</h3>
<p>We locate the source of odors, which may be in carpets, seats, headliner, HVAC system, or trunk areas.</p>

<h3>2. Deep Cleaning</h3>
<p>Thorough cleaning of affected areas using appropriate methods:</p>
<ul>
  <li>Steam cleaning for fabric and carpet</li>
  <li>Enzyme treatments for organic odors</li>
  <li>HVAC system cleaning and deodorizing</li>
  <li>Extraction cleaning for deep-set odors</li>
</ul>

<h3>3. Ozone Treatment</h3>
<p>For severe odors, we use professional ozone generators that permanently oxidize odor-causing molecules.</p>

<h3>4. Ventilation & Air Purification</h3>
<p>HVAC system treatment and air purification ensure fresh, clean air circulation.</p>

<h3>5. Prevention Treatment</h3>
<p>Application of antimicrobial treatments to prevent future odor development.</p>

<h2>Ozone Treatment Explained</h2>
<p>Ozone (O₃) is a powerful oxidizing agent that destroys odor molecules at the molecular level. Unlike air fresheners that mask odors, ozone permanently eliminates them.</p>

<h3>What Ozone Removes:</h3>
<ul>
  <li>Smoke and tar particles</li>
  <li>Bacterial odors</li>
  <li>Mold and mildew spores</li>
  <li>Organic decomposition odors</li>
  <li>Chemical smells</li>
</ul>

<h2>Smoke Odor Removal</h2>
<p>Cigarette smoke is one of the most difficult odors to remove. Our comprehensive process includes:</p>
<ul>
  <li>Complete interior cleaning to remove tar residue</li>
  <li>Headliner shampooing (smoke rises and settles on ceiling)</li>
  <li>HVAC system decontamination</li>
  <li>Ozone treatment to oxidize remaining smoke particles</li>
  <li>Air filter replacement</li>
</ul>

<h2>Pet Odor Removal</h2>
<p>Pet accidents and odors require enzyme-based cleaners that break down organic compounds:</p>
<ul>
  <li>UV light inspection to locate all affected areas</li>
  <li>Enzyme treatment to break down urine crystals</li>
  <li>Deep extraction to remove waste products</li>
  <li>Antimicrobial treatment to prevent bacteria growth</li>
</ul>

<h2>Guaranteed Results</h2>
<p>We guarantee odor elimination or we'll retreat the vehicle at no charge. Most odors are completely eliminated in one treatment.</p>`,
      keywords: [
        'odor removal San Antonio',
        'car odor elimination',
        'smoke odor removal',
        'pet odor removal car',
        'ozone treatment',
        'car deodorizing near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'Northeast Side'],
      faqs: [
        {
          question: 'How long does odor removal take?',
          answer:
            'Most odor removal takes 4-8 hours including cleaning and ozone treatment. Severe cases may require overnight ozone treatment for best results.',
        },
        {
          question: 'Is ozone treatment safe?',
          answer:
            'Yes, when performed by professionals. The vehicle is unoccupied during treatment and thoroughly ventilated before return. Ozone naturally converts back to oxygen.',
        },
        {
          question: 'Will the odor come back?',
          answer:
            'No, if we\'ve eliminated the source. Ozone permanently destroys odor molecules. If the source (like hidden mold) isn\'t removed, odors can return, which is why we locate and treat the source.',
        },
        {
          question: 'Can you remove smoke smell from a car?',
          answer:
            'Yes! Smoke odor is one of our specialties. Our combination of deep cleaning, tar removal, and ozone treatment permanently eliminates smoke smell.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'scratch-swirl-removal',
      serviceName: 'Scratch & Swirl Removal',
      serviceType: 'AutoRepair',
      title: 'Scratch & Swirl Removal San Antonio | Paint Defect Correction',
      metaDescription:
        'Expert scratch and swirl removal in San Antonio. Machine polishing, wet sanding, paint correction. Remove defects permanently. IDA certified. Call (726) 207-1007.',
      h1: 'Professional Scratch & Swirl Removal in San Antonio, TX',
      introContent: `<p>Remove scratches, swirl marks, and paint defects with our expert correction services. Using professional machine polishing and proven techniques, we permanently remove defects to restore your paint's clarity and depth.</p>`,
      mainContent: `<h2>Paint Defects We Correct</h2>
<h3>Swirl Marks</h3>
<p>Circular scratches caused by improper washing techniques, automatic car washes, or dirty towels. Most visible on dark-colored vehicles in direct sunlight.</p>

<h3>Scratches</h3>
<ul>
  <li>Light surface scratches (in clear coat only)</li>
  <li>Key scratches and vandalism marks</li>
  <li>Parking lot scratches</li>
  <li>Automatic car wash scratches</li>
  <li>Branch and bush scratches</li>
</ul>

<h3>Other Defects</h3>
<ul>
  <li>Water spots and etching</li>
  <li>Bird dropping etching</li>
  <li>Hologramming from previous poor polishing</li>
  <li>Buffer trails</li>
  <li>Orange peel texture</li>
  <li>Paint oxidation</li>
</ul>

<h2>Our Correction Process</h2>
<h3>Paint Inspection</h3>
<p>We assess your paint under high-intensity LED lighting to identify all defects. Paint thickness is measured to ensure safe correction.</p>

<h3>Decontamination</h3>
<p>Clay bar treatment removes embedded contaminants that would cause new scratches during polishing.</p>

<h3>Machine Polishing</h3>
<p>Multi-stage polishing removes defects:</p>
<ul>
  <li><strong>Compounding:</strong> Aggressive cut to remove deeper scratches</li>
  <li><strong>Polishing:</strong> Medium cut to refine and remove haze</li>
  <li><strong>Finishing:</strong> Ultra-fine polish for maximum gloss</li>
</ul>

<h3>Paint Protection</h3>
<p>After correction, we recommend ceramic coating or quality sealant to protect your newly perfected paint.</p>

<h2>Scratch Types & What We Can Fix</h2>
<h3>Clear Coat Scratches (✓ Can Remove)</h3>
<p>Most scratches only affect the clear coat layer. These can be completely removed through polishing without compromising paint integrity.</p>

<h3>Base Coat Scratches (~ Partial Improvement)</h3>
<p>Deeper scratches reaching the color layer can be minimized but not fully removed. May require wet sanding or touch-up paint.</p>

<h3>Primer/Metal Scratches (✗ Need Repainting)</h3>
<p>Very deep scratches exposing primer or metal require professional repainting. We can polish surrounding areas to blend repairs.</p>

<h2>Tools & Products We Use</h2>
<ul>
  <li>Dual-action and rotary polishers</li>
  <li>Professional-grade compounds and polishes</li>
  <li>Lake Country and Meguiar's pads</li>
  <li>Paint depth gauge for safe correction</li>
  <li>LED inspection lights</li>
</ul>

<h2>Maintenance After Correction</h2>
<p>Protect your investment:</p>
<ul>
  <li>Use proper two-bucket wash method</li>
  <li>Never use automatic car washes</li>
  <li>Dry with quality microfiber towels</li>
  <li>Apply ceramic coating or wax protection</li>
  <li>Park in shade when possible</li>
</ul>`,
      keywords: [
        'scratch removal San Antonio',
        'swirl removal',
        'remove swirls',
        'scratch repair car',
        'paint correction San Antonio',
        'remove scratches car',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Downtown', 'North Side'],
      faqs: [
        {
          question: 'Can all scratches be removed?',
          answer:
            'We can remove scratches that are in the clear coat only. Deeper scratches that reach the base coat, primer, or metal may require touch-up paint or repainting.',
        },
        {
          question: 'How do you determine if a scratch can be removed?',
          answer:
            'We use the fingernail test and paint depth gauges. If your fingernail doesn\'t catch in the scratch, it can likely be polished out. We measure clear coat thickness to ensure safe removal.',
        },
        {
          question: 'Will polishing thin my clear coat too much?',
          answer:
            'No. We measure paint thickness before and during correction. Modern clear coats are typically 40-60 microns thick. We typically remove only 1-3 microns per stage, leaving plenty of clear coat.',
        },
        {
          question: 'How long do results last?',
          answer:
            'Correction results are permanent - the scratches are physically removed. However, new scratches can occur from washing or environmental factors. Ceramic coating helps prevent new defects.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'leather-conditioning',
      serviceName: 'Leather Conditioning',
      serviceType: 'AutoRepair',
      title: 'Leather Conditioning San Antonio | Auto Leather Care & Restoration',
      metaDescription:
        'Professional leather conditioning in San Antonio. Clean, condition, protect leather seats. Restore softness and prevent cracking. IDA certified. Call (726) 207-1007.',
      h1: 'Professional Leather Conditioning & Care in San Antonio',
      introContent: `<p>Restore and protect your leather interior with professional conditioning services. Our multi-step process cleans, conditions, and protects leather while restoring its natural softness and preventing cracking and fading.</p>`,
      mainContent: `<h2>Why Leather Needs Conditioning</h2>
<p>Leather is natural animal hide that requires moisture to stay supple. Without regular conditioning, leather will:</p>
<ul>
  <li>Dry out and become stiff</li>
  <li>Develop cracks and tears</li>
  <li>Fade from UV exposure</li>
  <li>Lose its soft, luxurious feel</li>
  <li>Absorb stains more easily</li>
</ul>

<h2>Our Leather Care Process</h2>
<h3>1. Leather Inspection</h3>
<p>We identify leather type, condition, and any damage requiring special treatment. Different leathers require different care products.</p>

<h3>2. Deep Cleaning</h3>
<p>pH-balanced leather cleaner removes:</p>
<ul>
  <li>Body oils and perspiration</li>
  <li>Dirt and grime in grain texture</li>
  <li>Dye transfer from clothing</li>
  <li>Food and drink stains</li>
</ul>

<h3>3. Conditioning Treatment</h3>
<p>Premium leather conditioner is massaged into the leather to:</p>
<ul>
  <li>Restore natural oils and moisture</li>
  <li>Improve flexibility and softness</li>
  <li>Prevent cracking and tearing</li>
  <li>Enhance natural color depth</li>
</ul>

<h3>4. UV Protection</h3>
<p>UV inhibitors protect against sun damage and fading, especially important in San Antonio's intense sunlight.</p>

<h3>5. Finishing</h3>
<p>Gentle buffing for even absorption and a natural, non-greasy finish.</p>

<h2>Types of Leather We Service</h2>
<h3>Aniline Leather (Premium/Exotic)</h3>
<p>High-end leather with minimal finish. Requires gentle cleaning and special conditioners. Found in luxury vehicles.</p>

<h3>Semi-Aniline Leather</h3>
<p>Light protective coating with natural feel. Most common in luxury vehicles. Responds well to conditioning.</p>

<h3>Pigmented/Protected Leather</h3>
<p>Heavy protective coating on surface. Found in most vehicles. More resistant to stains but still needs conditioning.</p>

<h3>Nappa Leather</h3>
<p>Extremely soft, supple leather requiring specialized care. Common in high-end European vehicles.</p>

<h2>Leather Restoration Services</h2>
<p>For damaged leather, we offer:</p>
<ul>
  <li>Color restoration for faded leather</li>
  <li>Crack and tear repair</li>
  <li>Dye transfer removal</li>
  <li>Scratch and scuff repair</li>
  <li>Texture restoration</li>
</ul>

<h2>Maintenance Schedule</h2>
<ul>
  <li><strong>Cleaning:</strong> Monthly with pH-neutral cleaner</li>
  <li><strong>Conditioning:</strong> Every 3-6 months</li>
  <li><strong>Protection:</strong> Every 6 months (UV protectant)</li>
  <li><strong>Professional Detail:</strong> Annually for deep treatment</li>
</ul>

<h2>Premium Products</h2>
<p>We use only pH-balanced, leather-specific products that won't damage or discolor leather. Never harsh chemicals or petroleum-based products that dry out leather.</p>`,
      keywords: [
        'leather conditioning San Antonio',
        'leather seats cleaning',
        'car leather care',
        'leather restoration',
        'condition leather seats',
        'leather treatment near me',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Medical Center', 'North Side'],
      faqs: [
        {
          question: 'How often should leather be conditioned?',
          answer:
            'Every 3-6 months depending on climate and usage. San Antonio\'s hot, sunny climate can dry leather quickly, so we recommend conditioning every 3-4 months.',
        },
        {
          question: 'Can you repair cracks in leather seats?',
          answer:
            'Small cracks can often be minimized with conditioning. Larger cracks require leather repair services including filler, dye matching, and texture restoration. We offer both services.',
        },
        {
          question: 'Will conditioning make my seats slippery or greasy?',
          answer:
            'No. Quality leather conditioners absorb into the leather and shouldn\'t leave a greasy surface. We buff seats after conditioning to ensure a natural, dry finish.',
        },
        {
          question: 'Is leather conditioning safe for perforated seats?',
          answer:
            'Yes, but requires careful application to avoid product buildup in perforations. Our technicians are experienced with perforated leather and use appropriate application methods.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'wheel-tire-detailing',
      serviceName: 'Wheel & Tire Detailing',
      serviceType: 'AutoRepair',
      title: 'Wheel & Tire Detailing San Antonio | Professional Wheel Cleaning',
      metaDescription:
        'Professional wheel and tire detailing in San Antonio. Remove brake dust, clean wheel wells, tire dressing. IDA certified. Call (726) 207-1007.',
      h1: 'Professional Wheel & Tire Detailing in San Antonio',
      introContent: `<p>Give your wheels the attention they deserve with our comprehensive wheel and tire detailing service. We remove brake dust, clean wheel wells, and apply protective dressings for a showroom finish.</p>`,
      mainContent: `<h2>Complete Wheel & Tire Service</h2>
<p>Wheels and tires are often the dirtiest parts of your vehicle, accumulating brake dust, road grime, and tar. Our detailed process ensures every surface is spotless.</p>

<h2>What's Included</h2>
<h3>Wheel Cleaning</h3>
<ul>
  <li>Brake dust removal with pH-appropriate cleaners</li>
  <li>Spoke and barrel cleaning with detail brushes</li>
  <li>Lug nut cleaning and detailing</li>
  <li>Wheel face polishing (for polished/chrome wheels)</li>
  <li>Protective sealant application</li>
</ul>

<h3>Tire Cleaning & Dressing</h3>
<ul>
  <li>Degreasing to remove browning and old dressing</li>
  <li>Scrubbing with dedicated tire brushes</li>
  <li>Tire lettering cleaning (white letters/raised lettering)</li>
  <li>Premium water-based tire dressing</li>
  <li>Natural satin or high-gloss finish options</li>
</ul>

<h3>Wheel Well Detailing</h3>
<ul>
  <li>Degreasing of wheel wells and fender liners</li>
  <li>High-pressure cleaning to remove caked dirt</li>
  <li>Brush cleaning of textured surfaces</li>
  <li>Dressing application for protected finish</li>
</ul>

<h3>Brake Component Cleaning</h3>
<ul>
  <li>Visible brake caliper cleaning</li>
  <li>Brake rotor edge cleaning</li>
  <li>Lug bolt/stud cleaning</li>
</ul>

<h2>Wheel-Specific Care</h2>
<h3>Chrome Wheels</h3>
<p>Gentle cleaning and polishing to restore mirror shine. Chrome sealant prevents pitting and corrosion.</p>

<h3>Polished Aluminum</h3>
<p>Metal polish removes oxidation and restores bright finish. Protective sealant maintains shine.</p>

<h3>Powder-Coated Wheels</h3>
<p>pH-neutral cleaning preserves powder coating. Sealant protects against brake dust etching.</p>

<h3>Painted Wheels</h3>
<p>Safe cleaning products that won't damage wheel finish. Wax or sealant for protection.</p>

<h3>Matte/Satin Wheels</h3>
<p>Special care to preserve matte finish. No glossy products used.</p>

<h2>Brake Dust Removal</h2>
<p>Brake dust is metallic and corrosive, bonding to wheel surfaces. Our iron-removing cleaners dissolve brake dust without aggressive scrubbing that can scratch wheels.</p>

<h2>Tire Dressing Options</h2>
<h3>Satin Finish (Recommended)</h3>
<p>Natural-looking finish that doesn't sling onto paint. Water-based formula lasts 2-4 weeks.</p>

<h3>High-Gloss Finish</h3>
<p>Wet-look shine for show vehicles. May require reapplication after rain or washing.</p>

<h2>Maintenance Tips</h2>
<ul>
  <li>Rinse wheels first during washing to loosen brake dust</li>
  <li>Use dedicated wheel brushes (never the same as paint)</li>
  <li>Clean wheels every 2 weeks to prevent buildup</li>
  <li>Apply tire dressing sparingly for longer life</li>
  <li>Consider ceramic coating for easy maintenance</li>
</ul>`,
      keywords: [
        'wheel detailing San Antonio',
        'tire cleaning',
        'brake dust removal',
        'wheel cleaning near me',
        'tire dressing',
        'wheel well cleaning',
      ],
      neighborhoods: ['Stone Oak', 'Alamo Heights', 'Northeast Side', 'North Side'],
      faqs: [
        {
          question: 'How do you prevent scratching wheels?',
          answer:
            'We use soft brushes designed for wheels and pH-appropriate cleaners that dissolve brake dust without aggressive scrubbing. Different brush types for different wheel finishes.',
        },
        {
          question: 'Will tire dressing sling onto my paint?',
          answer:
            'Our water-based satin dressing is formulated not to sling. We apply sparingly and allow proper dwell time before driving. High-gloss dressings have more potential for slinging.',
        },
        {
          question: 'Can you clean chrome wheels without pitting them?',
          answer:
            'Yes. We use pH-neutral cleaners safe for chrome and avoid acidic wheel cleaners that can cause pitting. Chrome sealant provides additional protection.',
        },
        {
          question: 'How often should wheels be detailed?',
          answer:
            'Every 2 weeks minimum to prevent brake dust from bonding permanently. Monthly professional detailing keeps wheels in excellent condition.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'rv-boat-detailing',
      serviceName: 'RV/Boat Detailing',
      serviceType: 'AutoRepair',
      title: 'RV & Boat Detailing San Antonio | Mobile RV Boat Cleaning',
      metaDescription:
        'Professional RV and boat detailing in San Antonio. Mobile service, oxidation removal, waxing, interior cleaning. IDA certified. Call (726) 207-1007.',
      h1: 'Professional RV & Boat Detailing in San Antonio, TX',
      introContent: `<p>Protect and maintain your RV or boat with our specialized detailing services. We come to you with professional equipment and products designed for large recreational vehicles and watercraft.</p>`,
      mainContent: `<h2>Mobile RV & Boat Detailing</h2>
<p>We bring full-service detailing to your location. No need to move your RV or boat - we service you at home, storage facility, or marina.</p>

<h2>RV Detailing Services</h2>
<h3>Exterior Detailing</h3>
<ul>
  <li>Full hand wash of entire RV (roof to ground)</li>
  <li>Oxidation removal and restoration</li>
  <li>Decal cleaning and protection</li>
  <li>Rubber roof cleaning and treatment</li>
  <li>Fiberglass polishing and waxing</li>
  <li>Aluminum siding restoration</li>
  <li>Slide-out cleaning and lubrication</li>
  <li>Window and windshield cleaning</li>
  <li>Tire cleaning and dressing</li>
  <li>Chrome polishing</li>
</ul>

<h3>Interior Detailing</h3>
<ul>
  <li>Vacuuming throughout (including slideouts)</li>
  <li>Dashboard and console cleaning</li>
  <li>Upholstery cleaning (fabric or leather)</li>
  <li>Kitchen and bathroom cleaning</li>
  <li>Cabinet cleaning and conditioning</li>
  <li>Floor cleaning (carpet, vinyl, hardwood)</li>
  <li>Window cleaning (interior)</li>
  <li>Vent and fan cleaning</li>
</ul>

<h2>Boat Detailing Services</h2>
<h3>Hull & Exterior</h3>
<ul>
  <li>Hull washing and scrubbing</li>
  <li>Waterline stain removal</li>
  <li>Oxidation removal on gelcoat</li>
  <li>Compounding and polishing</li>
  <li>Marine wax application</li>
  <li>Metal polishing (stainless, aluminum)</li>
  <li>Canvas and upholstery cleaning</li>
  <li>Non-skid surface cleaning</li>
</ul>

<h3>Interior & Cabin</h3>
<ul>
  <li>Cabin cleaning and vacuuming</li>
  <li>Teak cleaning and oiling</li>
  <li>Vinyl and leather conditioning</li>
  <li>Head (bathroom) cleaning and sanitizing</li>
  <li>Galley (kitchen) cleaning</li>
  <li>Instrument panel cleaning</li>
  <li>Window and hatch cleaning</li>
</ul>

<h2>Specialized Treatments</h2>
<h3>Oxidation Removal</h3>
<p>RVs and boats suffer from severe oxidation due to constant UV exposure. We use marine-grade compounds to remove chalking and restore color.</p>

<h3>Gelcoat Restoration</h3>
<p>Multi-stage wet sanding and polishing brings faded gelcoat back to life. Removes scratches, stains, and weathering.</p>

<h3>Teak Care</h3>
<p>Proper cleaning and oiling of teak wood. Options for natural weathered look or restored golden finish.</p>

<h3>Canvas & Vinyl</h3>
<p>Specialized cleaners for marine canvas, vinyl, and upholstery. UV protectant treatment included.</p>

<h2>Protective Coatings</h2>
<h3>Marine Wax</h3>
<p>UV-resistant marine wax provides 3-6 months of protection against sun, salt, and water.</p>

<h3>Ceramic Coating</h3>
<p>Long-term protection (2-5 years) with superior UV resistance and easy cleaning. Ideal for boats stored outdoors.</p>

<h2>Preparation Services</h2>
<ul>
  <li>Pre-season detailing (ready for summer)</li>
  <li>Post-season detailing (winterization prep)</li>
  <li>Pre-sale detailing (maximize resale value)</li>
  <li>After-purchase detailing (start fresh)</li>
</ul>

<h2>Why RVs & Boats Need Professional Detailing</h2>
<ul>
  <li>Larger surface area collects more dirt and oxidation</li>
  <li>Constant UV exposure accelerates fading</li>
  <li>Water exposure requires marine-grade products</li>
  <li>Regular maintenance preserves value</li>
  <li>Prevents costly repair from neglect</li>
</ul>`,
      keywords: [
        'RV detailing San Antonio',
        'boat detailing',
        'mobile RV cleaning',
        'boat waxing',
        'RV washing near me',
        'marine detailing',
      ],
      neighborhoods: ['Stone Oak', 'Northeast Side', 'Northwest Side', 'North Side'],
      faqs: [
        {
          question: 'Do you come to my location for RV/boat detailing?',
          answer:
            'Yes! We provide mobile service throughout San Antonio. We bring all necessary water, power, and equipment to your home, storage facility, or marina.',
        },
        {
          question: 'How long does RV or boat detailing take?',
          answer:
            'RV detailing typically takes 6-12 hours depending on size and condition. Boat detailing takes 4-10 hours. We can split work over multiple days if needed.',
        },
        {
          question: 'Can you remove oxidation from my RV or boat?',
          answer:
            'Yes! Oxidation removal is one of our specialties. We use marine-grade compounds to remove chalking and restore color to fiberglass, gelcoat, and painted surfaces.',
        },
        {
          question: 'How often should I have my RV or boat detailed?',
          answer:
            'At minimum, annual detailing before season starts. For maximum protection, detail in spring (pre-season) and fall (winterization). Monthly maintenance washes recommended during use.',
        },
      ],
      published: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      slug: 'fleet-services',
      serviceName: 'Fleet Services',
      serviceType: 'AutoRepair',
      title: 'Fleet Detailing Services San Antonio | Commercial Vehicle Detailing',
      metaDescription:
        'Professional fleet detailing in San Antonio. Commercial vehicle cleaning, scheduled maintenance, volume pricing. Keep your fleet looking professional. Call (726) 207-1007.',
      h1: 'Professional Fleet Detailing Services in San Antonio',
      introContent: `<p>Maintain a professional image with our comprehensive fleet detailing services. We offer scheduled maintenance, volume pricing, and flexible scheduling to keep your entire fleet looking pristine with minimal downtime.</p>`,
      mainContent: `<h2>Fleet Detailing Solutions</h2>
<p>Whether you have 3 vehicles or 300, we provide customized detailing programs that maintain your fleet's appearance while maximizing vehicle uptime.</p>

<h2>Services for Fleet Vehicles</h2>
<h3>Regular Maintenance Packages</h3>
<ul>
  <li>Exterior hand wash and dry</li>
  <li>Interior vacuum and wipe-down</li>
  <li>Window cleaning (inside and out)</li>
  <li>Tire cleaning and dressing</li>
  <li>Dashboard and console dusting</li>
</ul>

<h3>Deep Cleaning Services</h3>
<ul>
  <li>Complete interior shampooing</li>
  <li>Stain and odor removal</li>
  <li>Engine bay cleaning</li>
  <li>Paint correction and buffing</li>
  <li>Headlight restoration</li>
  <li>Protective coating application</li>
</ul>

<h3>Specialized Fleet Services</h3>
<ul>
  <li>Delivery vehicle interior sanitization</li>
  <li>Company decal cleaning and maintenance</li>
  <li>Fleet graphics protection</li>
  <li>DOT compliance cleaning</li>
  <li>Pre-sale detailing for trade-ins</li>
</ul>

<h2>Fleet Types We Service</h2>
<h3>Sales Fleets</h3>
<p>Dealership vehicles, rental cars, and lease returns. Quick turnaround to maximize lot appeal and sales.</p>

<h3>Delivery Fleets</h3>
<p>Vans, box trucks, and delivery vehicles. Interior sanitization and exterior maintenance for professional appearance.</p>

<h3>Service Fleets</h3>
<p>Contractor vehicles, utility trucks, service vans. Heavy-duty cleaning for work vehicles exposed to harsh conditions.</p>

<h3>Executive Fleets</h3>
<p>Corporate sedans, limousines, executive vehicles. Premium detailing to maintain luxury appearance.</p>

<h3>Municipal Fleets</h3>
<p>Government vehicles, police cars, fire trucks. Specialized cleaning for emergency and municipal vehicles.</p>

<h2>Fleet Program Benefits</h2>
<h3>Scheduled Service</h3>
<p>Set up recurring appointments that fit your schedule. Weekly, bi-weekly, or monthly service available.</p>

<h3>Volume Pricing</h3>
<p>Significant discounts based on fleet size and service frequency. The more vehicles, the better the rate.</p>

<h3>Flexible Scheduling</h3>
<ul>
  <li>After-hours service to avoid business disruption</li>
  <li>Weekend availability</li>
  <li>Rotating schedules to maintain vehicle uptime</li>
  <li>Emergency detailing available</li>
</ul>

<h3>On-Site Service</h3>
<p>We come to your facility with all equipment and supplies. No need to take vehicles off-site.</p>

<h3>Detailed Reporting</h3>
<p>Track service history, costs, and condition notes for each vehicle. Helpful for maintenance records and resale documentation.</p>

<h2>Custom Fleet Programs</h2>
<p>Every fleet has unique needs. We create customized programs that include:</p>
<ul>
  <li>Specific service intervals based on usage</li>
  <li>Priority vehicle identification</li>
  <li>Specialized cleaning for vehicle type</li>
  <li>Budget-conscious service tiers</li>
  <li>Seasonal adjustment options</li>
</ul>

<h2>Why Fleet Detailing Matters</h2>
<h3>Brand Image</h3>
<p>Your vehicles are mobile billboards. Clean, well-maintained vehicles project professionalism and attention to detail.</p>

<h3>Employee Morale</h3>
<p>Drivers appreciate clean vehicles. A professional environment shows you value your team.</p>

<h3>Resale Value</h3>
<p>Regular detailing maintains vehicle condition, maximizing trade-in and resale values.</p>

<h3>Safety</h3>
<p>Clean windows and lights improve visibility. Interior cleaning reduces allergens and creates healthier work environment.</p>

<h2>Fleet Detailing Pricing</h2>
<p>Pricing based on:</p>
<ul>
  <li>Fleet size (3+ vehicles)</li>
  <li>Service frequency</li>
  <li>Vehicle types and sizes</li>
  <li>Service level required</li>
  <li>On-site vs. drop-off</li>
</ul>

<p>Contact us for a custom fleet quote. We'll assess your needs and provide transparent, competitive pricing.</p>`,
      keywords: [
        'fleet detailing San Antonio',
        'commercial vehicle detailing',
        'fleet cleaning services',
        'business vehicle detailing',
        'mobile fleet detailing',
        'fleet washing San Antonio',
      ],
      neighborhoods: ['Stone Oak', 'Medical Center', 'Northwest Side', 'Northeast Side'],
      faqs: [
        {
          question: 'What is the minimum fleet size for fleet pricing?',
          answer:
            'We offer fleet pricing for 3+ vehicles. Larger fleets receive more substantial discounts. Contact us for a custom quote based on your fleet size.',
        },
        {
          question: 'Can you detail our fleet on-site?',
          answer:
            'Yes! We provide mobile fleet detailing at your business location. We bring all water, power, and equipment needed. This minimizes vehicle downtime and transportation costs.',
        },
        {
          question: 'How do you handle scheduling for large fleets?',
          answer:
            'We create a rotating schedule that ensures all vehicles are serviced regularly while maintaining your operational needs. We can detail vehicles after hours or on weekends to avoid disrupting business.',
        },
        {
          question: 'Do you provide reporting for fleet services?',
          answer:
            'Yes. We maintain detailed service records for each vehicle including date, services performed, condition notes, and costs. Perfect for maintenance tracking and budget management.',
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
