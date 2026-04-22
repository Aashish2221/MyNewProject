export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  emoji: string;
  content: Section[];
}

interface Section {
  type: "intro" | "h2" | "h3" | "p" | "list" | "tip" | "quote";
  text?: string;
  items?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "bridal-makeup-secrets",
    category: "Bridal Tips",
    title: "10 Makeup Secrets Every Bride Must Know Before Her Wedding Day",
    excerpt:
      "From choosing the right foundation undertone to ensuring 16-hour wear, here are the pro secrets that make bridal makeup truly last.",
    date: "March 15, 2025",
    readTime: "6 min read",
    gradient: "from-rose-800 to-pink-900",
    emoji: "👰",
    content: [
      {
        type: "intro",
        text: "Your wedding day is arguably the most photographed day of your life. As a professional makeup artist who has worked on hundreds of brides across Maharashtra — from Mumbai to Pune, Nashik to Nagpur — I've learned that the difference between a look that lasts 6 hours and one that lasts 16 hours is almost entirely in the preparation — not the products.",
      },
      {
        type: "h2",
        text: "1. Book Your Trial at Least 6 Weeks Before the Wedding",
      },
      {
        type: "p",
        text: "A trial is not optional — it's essential. It lets us test how products react to your specific skin type, how the look photographs, and whether you love it enough to commit. Many brides discover during trials that they want something slightly different, and we have time to adjust.",
      },
      {
        type: "h2",
        text: "2. Know Your Undertone Before You Arrive",
      },
      {
        type: "p",
        text: "Foundation shade is crucial for bridal makeup. Check the veins on your inner wrist — blue/purple means cool undertone, green means warm, and blue-green means neutral. Sharing this with your artist ahead of time speeds up the process significantly.",
      },
      {
        type: "h2",
        text: "3. Prep Your Skin for 30 Days Before",
      },
      {
        type: "list",
        items: [
          "Hydrate — drink 8+ glasses of water daily",
          "Add a vitamin C serum to your morning routine",
          "Get a professional facial 10 days before (not the day before!)",
          "Use a retinol serum at night from week 4 (stop 1 week before)",
          "Sleep 7–8 hours — it genuinely shows on your skin",
        ],
      },
      {
        type: "h2",
        text: "4. Airbrush Is Worth It for Brides",
      },
      {
        type: "p",
        text: "Airbrush makeup is applied as a fine mist, creating a poreless finish that is also waterproof. When you inevitably tear up during the vows, it won't budge. It's my top recommendation for every bride, especially for outdoor or summer weddings.",
      },
      {
        type: "tip",
        text: "Pro Tip: Always do a sweat test during your trial. Dance a little, go outside in the heat, and check how the makeup holds up after 30 minutes of activity.",
      },
      {
        type: "h2",
        text: "5. Communicate Your Photo Style to Your Makeup Artist",
      },
      {
        type: "p",
        text: "If your photographer shoots with bright, airy tones you'll want a lighter, dewy base. If they shoot dark and moody, a matte, dramatic look photographs better. Share your photographer's Instagram with your makeup artist before the trial.",
      },
      {
        type: "h2",
        text: "6. Don't Try New Skincare Products the Week Before",
      },
      {
        type: "p",
        text: "New products can cause unexpected breakouts or reactions. Stick to your existing routine the entire week before the wedding. This is not the time to experiment.",
      },
      {
        type: "h2",
        text: "7. Eat Strategically on the Wedding Morning",
      },
      {
        type: "p",
        text: "Avoid salty foods the night before (puffiness!) and eat a proper protein-rich breakfast on the day. Low blood sugar makes skin look dull and you'll be too tired to glow.",
      },
      {
        type: "h2",
        text: "8. Factor in Lighting at Your Venue",
      },
      {
        type: "p",
        text: "Warm indoor lighting washes out cool-toned makeup. Bright outdoor light can make heavy contouring look unnatural. I always ask for venue photos when planning a bridal look — don't skip this conversation.",
      },
      {
        type: "h2",
        text: "9. Build a Touch-Up Kit",
      },
      {
        type: "list",
        items: [
          "Setting spray (travel size)",
          "Pressed powder in your shade",
          "Lipstick or lip pencil in your chosen shade",
          "Blotting papers",
          "Cotton swabs for smudges",
          "Clear mascara for brow touch-ups",
        ],
      },
      {
        type: "h2",
        text: "10. Trust Your Artist on the Day",
      },
      {
        type: "p",
        text: "You've done the trial, you've communicated your vision — now let go and trust the process. Wedding morning nerves are real, and second-guessing every step adds unnecessary stress. We've got you.",
      },
      {
        type: "quote",
        text: "The most beautiful thing a bride can wear is confidence. Everything else is just enhancement.",
      },
    ],
  },
  {
    slug: "pre-wedding-skincare",
    category: "Skin Care",
    title: "The Perfect Pre-Wedding Skincare Routine to Start 3 Months Before",
    excerpt:
      "Healthy skin is the best canvas. Build a skincare routine that gives your makeup artist the perfect base to work with.",
    date: "February 28, 2025",
    readTime: "8 min read",
    gradient: "from-purple-800 to-violet-900",
    emoji: "✨",
    content: [
      {
        type: "intro",
        text: "As a makeup artist, I can tell you with complete honesty: great makeup starts with great skin. The best foundation in the world cannot fully compensate for dry patches, uneven texture, or dehydrated skin. Starting your skincare journey 3 months before your wedding gives your skin enough time to genuinely transform.",
      },
      {
        type: "h2",
        text: "Month 3: The Foundation Phase",
      },
      {
        type: "p",
        text: "Start with the basics. This month is about establishing consistency and identifying your skin's real needs — not what you think they are.",
      },
      {
        type: "list",
        items: [
          "Morning: Gentle cleanser → Vitamin C serum → Moisturiser → SPF 50",
          "Evening: Oil cleanser → Foaming cleanser → Toner → Moisturiser",
          "Book a dermatologist appointment if you have acne or hyperpigmentation",
          "Start drinking 3 litres of water daily — seriously track it",
          "Cut out alcohol and reduce sugar intake",
        ],
      },
      {
        type: "h2",
        text: "Month 2: The Treatment Phase",
      },
      {
        type: "p",
        text: "Now that your skin is accustomed to a routine, introduce actives carefully. Never introduce more than one new active at a time.",
      },
      {
        type: "list",
        items: [
          "Add retinol 2–3 nights per week (builds collagen, smooths texture)",
          "Add niacinamide serum for pore refinement and brightness",
          "Weekly clay mask for deep cleansing",
          "Introduce a hyaluronic acid serum for plumpness",
          "Book a hydrafacial or chemical peel with your dermatologist",
        ],
      },
      {
        type: "tip",
        text: "Pro Tip: Always apply retinol at night and follow with SPF religiously the next morning. Retinol makes skin more sun-sensitive.",
      },
      {
        type: "h2",
        text: "Month 1: The Glow Phase",
      },
      {
        type: "p",
        text: "The home stretch. Your skin should already be showing improvement. This month is about amplifying the glow and protecting results.",
      },
      {
        type: "list",
        items: [
          "Book a brightening facial in week 1",
          "STOP retinol at Day 7 before the wedding",
          "Focus on hydration: sheet masks every other day",
          "No new products after Week 2",
          "Book a gentle face massage treatment 5 days before",
          "Sleep on a silk pillowcase to prevent morning puffiness",
        ],
      },
      {
        type: "h2",
        text: "The Week Before: Do Less, Not More",
      },
      {
        type: "p",
        text: "Counterintuitive advice: do LESS the week before your wedding. Your skin is already prepped. Stick to your cleanser, moisturiser, and SPF only. No exfoliating, no new masks, no actives. Let your skin rest and glow naturally.",
      },
      {
        type: "h2",
        text: "Body Skincare — Don't Forget Below the Neck",
      },
      {
        type: "list",
        items: [
          "Dry brush before showering for circulation and smoothness",
          "Body scrub 2x per week",
          "Apply body oil immediately after showering on damp skin",
          "Use SPF on exposed areas daily — uneven tan lines are hard to cover",
        ],
      },
      {
        type: "quote",
        text: "Makeup enhances beauty. Skincare creates it. Start early, stay consistent.",
      },
    ],
  },
  {
    slug: "choose-your-makeup-artist",
    category: "Makeup Tips",
    title: "How to Choose Your Makeup Artist: 7 Questions to Ask",
    excerpt:
      "Don't just scroll Instagram — here's what to actually look for when hiring a makeup artist for your big occasion.",
    date: "January 20, 2025",
    readTime: "5 min read",
    gradient: "from-amber-800 to-orange-900",
    emoji: "💄",
    content: [
      {
        type: "intro",
        text: "Choosing a makeup artist is one of the most important decisions you'll make for your wedding or special event — yet most people spend more time researching a hotel than they do vetting their artist. Here's what actually matters, from someone who does this for a living.",
      },
      {
        type: "h2",
        text: "Question 1: Do You Have a Portfolio Showing My Skin Tone?",
      },
      {
        type: "p",
        text: "An artist might have a stunning portfolio — but if every client has a fair complexion and you have a deeper skin tone, proceed carefully. Ask specifically to see work on clients who share your skin tone and undertone. Foundation matching on darker skin is a distinct skill.",
      },
      {
        type: "h2",
        text: "Question 2: What Products Do You Use and Why?",
      },
      {
        type: "p",
        text: "A confident, professional artist can tell you exactly what's in their kit and why they use each product. Be cautious if an artist cannot name the brands they work with or explain their product choices. Ask about longevity, skin-friendliness, and whether they customise by skin type.",
      },
      {
        type: "tip",
        text: "Red Flag: An artist who refuses to share product names or says 'I only use high-end brands' without specifics may be hiding a subpar kit.",
      },
      {
        type: "h2",
        text: "Question 3: Is a Trial Included — and Is It Mandatory?",
      },
      {
        type: "p",
        text: "For bridal bookings, a trial should always be offered. An artist who skips trials is prioritising speed over quality. Trials are where we solve problems — foundation shade, lash comfort, lip colour — before they matter.",
      },
      {
        type: "h2",
        text: "Question 4: Can I See Unedited, Real-Day Photos?",
      },
      {
        type: "p",
        text: "Instagram is filtered and curated. Ask to see photos taken by wedding photographers — not studio shoots with perfect lighting. Real-day candid photos show how the makeup actually holds up after hours of dancing, crying, and sweating.",
      },
      {
        type: "h2",
        text: "Question 5: What Is Your Cancellation and Backup Policy?",
      },
      {
        type: "p",
        text: "What happens if the artist falls ill on your wedding day? A professional will have a clear contract with cancellation terms and a backup artist they can refer you to. If this question makes an artist uncomfortable, that's a red flag.",
      },
      {
        type: "h2",
        text: "Question 6: How Many Appointments Do You Take on the Same Day?",
      },
      {
        type: "p",
        text: "Some artists double-book or have a team. Know exactly who will be doing your makeup and how much dedicated time you get. You deserve an artist who isn't rushing because they have four other clients.",
      },
      {
        type: "h2",
        text: "Question 7: Do You Have Experience with My Type of Event?",
      },
      {
        type: "p",
        text: "A bridal specialist and an editorial artist require different skill sets. If you're a bride, ask how many weddings they've done. If it's a photo shoot, ask about their on-set experience. Specialisation matters.",
      },
      {
        type: "list",
        items: [
          "Check Google and WeddingWire reviews — not just Instagram comments",
          "Meet in person or via video before booking",
          "Get everything in writing — scope, timing, products, price",
          "Trust your gut — you need to feel comfortable with this person",
        ],
      },
      {
        type: "quote",
        text: "The right makeup artist doesn't just do your makeup. They make you feel safe, beautiful, and completely yourself.",
      },
    ],
  },
  {
    slug: "bridal-makeup-trends-2025",
    category: "Trends",
    title: "2025 Bridal Makeup Trends: From Glass Skin to Bold Eyes",
    excerpt:
      "The most requested looks this wedding season — editorial-inspired, romantic, and timelessly classic all in one rundown.",
    date: "January 5, 2025",
    readTime: "7 min read",
    gradient: "from-teal-800 to-cyan-900",
    emoji: "🌸",
    content: [
      {
        type: "intro",
        text: "Wedding season 2025 has brought some of the most exciting and diverse bridal beauty requests I've seen in years. Brides are more confident, more experimental, and more informed than ever before. Here's what's dominating my booking calendar and why each trend works.",
      },
      {
        type: "h2",
        text: "Trend 1: Glass Skin Base",
      },
      {
        type: "p",
        text: "The glass skin phenomenon that swept K-beauty has officially entered bridal makeup. Brides are requesting luminous, almost wet-looking complexions that catch light beautifully. This is achieved through intensive skin prep, a sheer-to-medium coverage foundation, and strategic placement of liquid highlighter under a skin-like setting.",
      },
      {
        type: "list",
        items: [
          "Requires exceptional skincare foundation (start 3 months before)",
          "Works best with dewy-finish foundations like Armani Luminous Silk",
          "Strategic highlighter placement: inner corners, brow bone, cupid's bow",
          "Avoid powder — use a setting spray instead for longevity",
        ],
      },
      {
        type: "h2",
        text: "Trend 2: Soft Liner & Floating Lashes",
      },
      {
        type: "p",
        text: "The dramatic kohl-liner bridal look is making way for a softer, more editorial approach. Think smudged brown liner, individually applied lash clusters rather than a full strip, and an emphasis on lifting the outer corner of the eye. The result reads 'effortlessly gorgeous' rather than 'heavily made up.'",
      },
      {
        type: "tip",
        text: "Pro Tip: Individually applied lash clusters look more natural in photos than full strip lashes and are far more comfortable for a 12-hour day.",
      },
      {
        type: "h2",
        text: "Trend 3: Monochromatic Makeup",
      },
      {
        type: "p",
        text: "Using one colour family across eyes, cheeks, and lips creates a cohesive, editorial look that photographs beautifully. Terracotta tones, dusty roses, and warm bronzes are the most popular choices. The key is blending between zones so the look flows rather than appears segmented.",
      },
      {
        type: "h2",
        text: "Trend 4: Bold Graphic Liner (For the Daring Bride)",
      },
      {
        type: "p",
        text: "A growing segment of 2025 brides are stepping away from 'expected' and requesting graphic liner details — floating liner above the crease, white liner on the waterline, or an architectural flick in midnight blue or forest green. These brides are saying: this is MY day and MY face.",
      },
      {
        type: "h2",
        text: "Trend 5: The Barely-There Lip",
      },
      {
        type: "p",
        text: "After years of bold lip dominance, 2025 brides are increasingly choosing a blurred, my-lips-but-better look. Lip liner in a nude close to the natural lip shade, blended inward with a sheer gloss or a satin nude lipstick. It makes the eyes and skin the star.",
      },
      {
        type: "h2",
        text: "Trend 6: Traditional Looks, Reimagined",
      },
      {
        type: "p",
        text: "Perhaps the most meaningful trend: Maharashtra brides are reclaiming traditional Marathi bridal aesthetics — the red-and-green nauvari saree look, the kajal-rimmed eye, the gold nath, the sindoor-ready hairline — but with modern techniques. Better skin prep, longer-lasting formulas, and refined blending mean the classic Maharashtrian look has never been more stunning.",
      },
      {
        type: "h2",
        text: "What To Avoid in 2025",
      },
      {
        type: "list",
        items: [
          "Heavy, cakey full-coverage foundation that looks mask-like in photos",
          "Over-drawn, unnatural brows",
          "Heavy shimmer eyeshadow panned over the entire lid without blending",
          "Mismatched foundation shade (too light or too dark for the neck)",
          "Skipping primer — it makes everything last longer",
        ],
      },
      {
        type: "quote",
        text: "The best bridal trend is the one that makes you look like the most beautiful version of yourself — not a trend.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
