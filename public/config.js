var SITE_KEY = 'kapab-quiz';
var SUPABASE_URL = 'https://xwbgqkbwutjuodzhknhr.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Ymdxa2J3dXRqdW9kemhrbmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjAxNTUsImV4cCI6MjA4ODI5NjE1NX0.YLx9GUU52AcJcZfC2Tg9jtrPo4urPa-n-hVvd5YM-O0';

// CONFIG alias for script.js compatibility
var CONFIG = { SITE_KEY: SITE_KEY, SUPABASE_URL: SUPABASE_URL, SUPABASE_ANON_KEY: SUPABASE_ANON_KEY };

var SCHEMA = [
  {
    id: 'nav',
    label: 'Navigation',
    fields: [
      { id: 'logo', label: 'Logo Text', type: 'text', placeholder: 'CULTURE-MARKET FIT' }
    ]
  },
  {
    id: 'hero',
    label: 'Hero Section',
    fields: [
      { id: 'label', label: 'Label', type: 'text', placeholder: 'FREE 2-MINUTE DIAGNOSTIC' },
      { id: 'headline', label: 'Headline', type: 'text', placeholder: "THINK YOUR STRATEGY'S WORKING?" },
      { id: 'subheadline', label: 'Subheadline', type: 'textarea', placeholder: 'Take the 10-question test to uncover what\'s blocking your growth.' },
      { id: 'cta', label: 'CTA Button', type: 'text', placeholder: 'TAKE THE QUIZ NOW' },
      { id: 'meta', label: 'Meta Text', type: 'text', placeholder: 'No sign-up required · Instant results' }
    ]
  },
  {
    id: 'works',
    label: 'How It Works',
    fields: [
      { id: 'heading', label: 'Heading', type: 'text', placeholder: 'HOW IT WORKS' },
      { id: 'subheading', label: 'Subheading', type: 'text', placeholder: 'Three brutal steps to a clearer growth path.' },
      { id: 'step1_title', label: 'Step 1 Title', type: 'text', placeholder: 'ANSWER 10 QUESTIONS' },
      { id: 'step1_desc', label: 'Step 1 Description', type: 'textarea', placeholder: 'Targeted diagnostics that cut through the noise.' },
      { id: 'step2_title', label: 'Step 2 Title', type: 'text', placeholder: 'GET YOUR SCORE' },
      { id: 'step2_desc', label: 'Step 2 Description', type: 'textarea', placeholder: 'Instant results showing exactly where your culture misaligns.' },
      { id: 'step3_title', label: 'Step 3 Title', type: 'text', placeholder: 'TAKE ACTION' },
      { id: 'step3_desc', label: 'Step 3 Description', type: 'textarea', placeholder: 'Personalised recommendations to start attracting the right customers.' }
    ]
  },
  {
    id: 'about',
    label: 'About Section',
    fields: [
      { id: 'heading', label: 'Heading', type: 'text', placeholder: 'WHAT IS CULTURE-MARKET FIT?' },
      { id: 'body1', label: 'Body Paragraph 1', type: 'textarea', placeholder: 'Most businesses assume their strategy is the problem...' },
      { id: 'body2', label: 'Body Paragraph 2', type: 'textarea', placeholder: 'Culture-Market Fit is the gap nobody talks about.' },
      { id: 'cta', label: 'CTA Button', type: 'text', placeholder: 'FIND YOUR GAP NOW' }
    ]
  },
  {
    id: 'results',
    label: 'Results Section',
    fields: [
      { id: 'heading', label: 'Heading', type: 'text', placeholder: 'WHAT YOUR RESULTS REVEAL' },
      { id: 'subheading', label: 'Subheading', type: 'text', placeholder: 'No vague feedback. No generic advice.' },
      { id: 'item1_title', label: 'Result 1 Title', type: 'text', placeholder: 'YOUR ALIGNMENT SCORE' },
      { id: 'item1_desc', label: 'Result 1 Description', type: 'textarea', placeholder: 'A clear numerical score showing how well your culture matches your market.' },
      { id: 'item2_title', label: 'Result 2 Title', type: 'text', placeholder: 'YOUR TOP 3 BLOCKERS' },
      { id: 'item2_desc', label: 'Result 2 Description', type: 'textarea', placeholder: 'The specific gaps actively preventing you from attracting the right customers.' },
      { id: 'item3_title', label: 'Result 3 Title', type: 'text', placeholder: 'YOUR ACTION PLAN' },
      { id: 'item3_desc', label: 'Result 3 Description', type: 'textarea', placeholder: 'Concrete next steps tailored to your score.' },
      { id: 'item4_title', label: 'Result 4 Title', type: 'text', placeholder: 'BENCHMARK COMPARISON' },
      { id: 'item4_desc', label: 'Result 4 Description', type: 'textarea', placeholder: 'See how your score compares to businesses in your sector.' },
      { id: 'cta', label: 'CTA Button', type: 'text', placeholder: 'START YOUR FREE ASSESSMENT' }
    ]
  },
  {
    id: 'gallery',
    label: 'Gallery Section',
    fields: [
      { id: 'heading', label: 'Heading', type: 'text', placeholder: 'THE COST OF MISALIGNMENT' },
      { id: 'caption1', label: 'Caption 1', type: 'text', placeholder: 'Stalled Revenue' },
      { id: 'caption2', label: 'Caption 2', type: 'text', placeholder: 'Wrong Customers' },
      { id: 'caption3', label: 'Caption 3', type: 'text', placeholder: 'High Churn Rates' },
      { id: 'caption4', label: 'Caption 4', type: 'text', placeholder: 'Wasted Marketing Spend' }
    ]
  },
  {
    id: 'contact',
    label: 'Contact Section',
    fields: [
      { id: 'heading', label: 'Heading', type: 'text', placeholder: 'READY TO GET YOUR SCORE?' },
      { id: 'body', label: 'Body', type: 'textarea', placeholder: 'Stop guessing. Take the 2-minute quiz.' },
      { id: 'cta', label: 'CTA Button', type: 'text', placeholder: 'TAKE THE FREE QUIZ' },
      { id: 'email', label: 'Email', type: 'text', placeholder: 'hello@kapab.co' },
      { id: 'location', label: 'Location', type: 'text', placeholder: 'Available worldwide · Online assessment' }
    ]
  },
  {
    id: 'footer',
    label: 'Footer',
    fields: [
      { id: 'brand', label: 'Brand Name', type: 'text', placeholder: 'CULTURE-MARKET FIT QUIZ' },
      { id: 'copy', label: 'Copyright', type: 'text', placeholder: '© 2026 KAPAB. All rights reserved.' }
    ]
  }
];
