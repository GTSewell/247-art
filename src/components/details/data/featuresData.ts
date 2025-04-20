interface Feature {
  name: string;
  studioArtist: boolean | string;
  featureArtist: boolean | string;
  signatureArtist?: boolean | string;
  description?: string;
  hasDiscount?: boolean;
  hidden?: boolean;
}

export const features: Feature[] = [
  { 
    name: "💥 Signature Artist", 
    studioArtist: "$995", 
    featureArtist: "$1495", 
    signatureArtist: "$1295",
    description: "A once-in-a-lifetime 'ALL-INCLUSIVE' opportunity to become part of the first 100 artists in the 247 movement. Your one-time payment unlocks full access to the 247 ecosystem: we handle the logistics, sales, and customer service so you can focus on your art.<br /><br /> We print, pack, post, manage payments, and even solve problems. You just create—we handle the hustle.<br /><br /> As a Signature Artist, you’ll have your original works exhibited, your own in-house production team for prints and merch all taken care of and stocked in our very own retail space. It's the smartest way to show, sell, and scale your practice—all in one place.",
    hasDiscount: true
  },
  { 
    name: "🔐 Limited Spaces Available", 
    studioArtist: "50 Artists", 
    featureArtist: "50 Artists", 
    signatureArtist: "Only 100 spots available", 
    description: "We’re keeping it tight to give every artist the attention they deserve. A tight, curated group of emerging and established talent. Quality over quantity—always."
  },
  { 
    name: "⏳ Time To Shine", 
    studioArtist: "~100 Days\n(3 months)", 
    featureArtist: "~100 Days\n(3 months)", 
    signatureArtist: "~100 Days\n(3 months)",
    description: "Forget short-term pop-ups. Your work deserves a real stage and real time to be seen, collected, and remembered. We give your work a real platform with a 3+ month feature in our flagship gallery. More eyeballs, more sales, more impact."
  },
  { 
    name: "💸 Commissions cutting too deep?", 
    studioArtist: "25% to 0%", 
    featureArtist: "10% to 0%", 
    signatureArtist: "How about 0%?",
    description: "We reward hustle. For every STP Collector pack you sell (See below) we remove 1% from the gallery commission rate.<br /><br /> Start at 25%, drop to 0%. The more you engage collectors through STP Collector Packs, the less commission you pay.<br /><br />Sell 25 packs on day 1? That's 0% commission on your all of your original artwork sold for the next 3 months! You keep 100%."
  },
  { 
    name: "📦 Custom Artist STP collector packs?", 
    studioArtist: "25", 
    featureArtist: "10", 
    signatureArtist: "Your way to 0% commission!",
    description: "We produce your Stickers, T-Shirt & Print into your very own retail ready collectible editioned set, including customised packaging with your art on it. Retailing at $124.95 with ~$50 profit per pack to you. Each STP Pack you sell to a new wave of collectors reduces your gallery commission by 1%!"
  },
  { 
    name: "💰 Hands-off revenue streams sound good?", 
    studioArtist: "100%", 
    featureArtist: "We'll take care of it, you take the cash!", 
    signatureArtist: "",
    description: "Not only do we produce all the retail merch at a premium quality we are known for, we give you and the collector options to choose from. Oh, and you keep 100% of the retail profits after production."
  },
  { 
    name: "🧱 Need a dedicated space?", 
    studioArtist: "0.75 sqm area", 
    featureArtist: "1 sqm area", 
    signatureArtist: "Earlybird gets the SQM",
    description: "The first 50 artists to sign up will recieve larger wall space up to 1 sqm, after that it will be 0.75 sqm.<br /><br />Your wall space is calculated by the size of your artwork, it's your dedicated wall space in our gallery for displaying your artwork. Example: An artwork that is 75cm (0.75m) x 122cm (1.22m) = 0.9 sqm. This fits with the 1 sqm space. See our artwork calculator below.<br /><br />If you require a larger space for your artwork, you can purchase 2x Signature artist spots, though, we will be limiting this. Please reach out to us beforehand to see if we can accomodate."
  },
  { 
    name: "🎨 Full Control on Exhibited Works", 
    studioArtist: "Up to 2", 
    featureArtist: "Up to 4", 
    signatureArtist: "Display up to 4 works in your space",
    description: "Rotate your works, update stockroom pieces, swap out styles—your space is alive and flexible. Keeping it fresh and dynamic. "
  },
  { 
    name: "👕 Unsure how to turn your art into great merch?", 
    studioArtist: "Full Range", 
    featureArtist: "Full Range", 
    signatureArtist: "We design and produce for you",
    description: "Not only will you have your very own STP Collector pack, we will also produce individual retail items (Stickers/T-shirts/Prints etc) for sale and stock in our retail space. From shirts, hoodies, totes to stickers and more, we handle the production and even help you design for what works in retail. The apparel game is a different beast, and we know how to make the best of it!"
  },
  { 
    name: "🔄 Want to keep things fresh without starting over?", 
    studioArtist: "1 per Month", 
    featureArtist: "Up to 2 per month", 
    signatureArtist: "Change your artwork up to twice a month",
    description: "Sold a piece? We’ll replace it instantly with your stockroom work, and you can keep the cycle going. Fresh work, new momentum, no stress.<br /><br /> Maybe you just created a dope new piece, on a timely matter that's poppin off, then bring it in and let's change it up ASAP! After all, this IS your gallery."
  },
  { 
    name: "📖 Want to be remembered by collectors?", 
    studioArtist: "Single Page", 
    featureArtist: "Double Page spread", 
    signatureArtist: "Double-Page spread in The ATLAS coffee table book",
    description: "You will be featured in our Limited Edition 200+ page '247 ATLAS' exhibition coffee table book for collectors and art enthusiasts to enjoy for years to come. #legacy"
  },
  { 
    name: "🎯 Want better gallery placement?", 
    studioArtist: "true", 
    featureArtist: "true", 
    signatureArtist: "First 50 artists get priority wall positions",
    description: "Your artwork will be given priority placement during gallery rotations in the exhibition."
  },
  { 
    name: "📊 Feel out of the loop after you sell?", 
    studioArtist: "true", 
    featureArtist: "true", 
    signatureArtist: "Real-time dashboard with sales, insights & collector info",
    description: "Log in anytime to track your sales, merch, collectors, and artist trades. Even generate 1-click invoices for payments. Think of it like your art career’s command center.!"
  },
  { 
    name: "Artist Care Package", 
    studioArtist: "Single Page", 
    featureArtist: "Double Page spread", 
    signatureArtist: true,
    description: "Each artist will receive 1x 'AP' (Artist Proof) STP Collector pack of their work, 1x 247 ATLAS Limited Edition Artist book.",
    hidden: true
  },
  { 
    name: "📽 Art should be seen around the clock?", 
    studioArtist: "1 rotation every 3", 
    featureArtist: "2 rotations every 3", 
    signatureArtist: "Your work projected 24/7 on our video wall and MASSIVE projection space. All day. Every day.",
    description: "Art Never Sleeps! Your artwork will be featured night and day, 24/7 on our HUGE Video Wall & Projection Space throughout the gallery."
  },
  { 
    name: "🧳 Want to rotate your work easily?", 
    studioArtist: true, 
    featureArtist: true, 
    signatureArtist: "Store 2 extra artworks in our on-site stockroom",
    description: "Store additional artwork in our upstairs stockroom. You never know when 'the right' collector wants to take it all.<br /><br /> Note: If you only have 1 artwork available for the Feature Gallery, that's fine. You can always send us extra stockroom works at a later date if you wish."
  },
  { 
    name: "⏰ Need help building hype?", 
    studioArtist: true, 
    featureArtist: true, 
    signatureArtist: "Join our exclusive 24-hour drops",
    description: "Fast, limited, and collector-focused. A great way to spark new interest and test demand ... as nerve-wracking as it is exciting!"
  },
  { 
    name: "🌐 How's that website coming along?", 
    studioArtist: true, 
    featureArtist: true, 
    signatureArtist: "Your own custom 247 artist URL",
    description: "Think BIO + portfolio + shop + collector packs—all on a clean, custom page: yourname.247.art.<br /><br /> Ps, There's a few little surprises that will come with it later 😉 "
  },
  { 
    name: "🗿 Work in 3D? We’ve got a space for that too.", 
    studioArtist: false, 
    featureArtist: true, 
    signatureArtist: "Limited sculptural display available",
    description: "We support more than just 2D artworks. Spots are limited, so reach out early!"
  },
  { 
    name: "🚦 Want real foot traffic exposure?", 
    studioArtist: false, 
    featureArtist: true, 
    signatureArtist: "50,000+ people a day",
    description: "Not only will we feature 7 artists weekly on our shopfront—your artwork front and center, the gallery will have a high-resolution 3D lidar scan for our interstate, and, international friends to view and directly interact with your artwork."
  },
];

export default features;
export type { Feature };
