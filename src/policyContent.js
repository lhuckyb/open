// Official Defimart policy documents.
// Content copied from the main Defimart app sources:
//   src/app/privacy/page.tsx  ->  privacy
//   src/app/terms/page.tsx    ->  terms
// Keep this file in sync whenever the official policy wording changes in the app.

export const policyLastUpdated = 'July 26, 2026';

export const policyMap = {
  terms: {
    title: 'Terms of Service',
    summary:
      'Welcome to DEFIMART. By using our website, you agree to these terms. These terms apply to all buyers and independent vendors.',
    updated: policyLastUpdated,
    sections: [
      {
        heading: '1. Our Marketplace',
        blocks: [
          {
            text: 'DEFIMART is a multi-vendor platform. You can buy items from the DEFIMART Official Store or from independent vendors. When you buy from an independent vendor, your contract is directly with them.',
          },
          {
            text: 'You must provide accurate information when creating an account. Providing false information may lead to account suspension.',
          },
        ],
      },
      {
        heading: '2. Payment Method',
        blocks: [
          {
            text: 'DEFIMART is a Pay on Pickup store. We do not process online payments. You pay in person with cash or mobile money when you collect your items.',
          },
          {
            text: 'If you choose delivery, you pay the delivery person after you have inspected the items.',
          },
        ],
      },
      {
        heading: '3. Vendors & Products',
        blocks: [
          {
            text: 'Independent vendors are responsible for their own products, stock levels, and descriptions. DEFIMART provides the platform for them to sell, but we do not own their items.',
          },
          {
            text: 'We reserve the right to remove any shop that does not meet our quality standards.',
          },
        ],
      },
      {
        heading: '4. Delivery & Pickup',
        blocks: [
          {
            text: 'Orders should be picked up according to the schedule (usually Wednesdays and Saturdays). Independent vendors may have their own delivery times which will be shown in their shop info.',
          },
        ],
      },
      {
        heading: '5. Inspection and Returns',
        blocks: [
          {
            text: 'Since you pay in person, you must inspect your items before paying. Once payment is made and you have the items, DEFIMART and the vendors are not responsible for any later damages. Returns must be discussed directly with the seller.',
          },
        ],
      },
      {
        heading: '6. Liability',
        blocks: [
          {
            text: 'DEFIMART is not responsible for any issues that arise during the physical exchange of items between buyers and independent vendors. We provide the marketplace software but are not part of the final payment and handover.',
          },
        ],
      },
      {
        heading: '7. Contact',
        blocks: [
          {
            text: 'If you have any questions, please visit our Contact Page.',
            link: { label: 'Contact Page', to: '/contact' },
          },
        ],
      },
    ],
    footnote: 'DEFIMART TERMS OF SERVICE.',
  },
  privacy: {
    title: 'Privacy Policy',
    summary:
      'DEFIMART ("the Platform") respects the privacy of its users. This policy outlines how we handle information in our marketplace environment.',
    updated: policyLastUpdated,
    sections: [
      {
        heading: '1. Information We Collect',
        blocks: [
          { text: 'We collect essential data to facilitate marketplace activity. This includes:' },
          {
            bullets: [
              { label: 'Identity', text: 'Email address, Full name, and Profile images.' },
              {
                label: 'Communication',
                text: 'Your phone number is required to send order updates and coordinate pickups.',
              },
              {
                label: 'Activity',
                text: 'We store your order history, wishlist items, and reviews to personalize your experience.',
              },
            ],
          },
        ],
      },
      {
        heading: '2. Information Sharing',
        blocks: [
          {
            text: 'When you place an order with an independent vendor, we share your display name, phone number, and delivery location with that vendor. This is necessary for the vendor to verify your order and coordinate collection or delivery.',
          },
          {
            text: 'Vendors are prohibited from using this information for any purpose other than order fulfillment. DEFIMART does not share your email address with independent vendors.',
          },
        ],
      },
      {
        heading: '3. Communication',
        blocks: [
          {
            text: 'We use your phone number to deliver order-critical updates. This includes SMS notifications when an order is "Ready for Pickup" or when a vendor has accepted your delivery request. By using the platform, you consent to receive these transactional messages.',
          },
        ],
      },
      {
        heading: '4. Security',
        blocks: [
          {
            text: "Your data is stored in a secure cloud environment. We do not sell, rent, or lease your personal information to third-party marketing firms. Your information is used strictly within the Defimart marketplace to improve our service and security.",
          },
        ],
      },
      {
        heading: '5. Public Content',
        blocks: [
          {
            text: 'Reviews, comments on feeds, and public shop ratings are visible to other users of the platform. Please exercise discretion when sharing personal details in these public fields.',
          },
        ],
      },
      {
        heading: '6. Your Rights',
        blocks: [
          {
            text: 'You have the right to access, modify, or delete your account data. You can update your profile details in the settings at any time. For full account deletion, please contact our support team.',
          },
        ],
      },
      {
        heading: '7. Contact',
        blocks: [
          {
            text: 'Questions regarding our privacy practices should be directed to our Support Team.',
            link: { label: 'Support Team', to: '/contact' },
          },
        ],
      },
    ],
    footnote: 'DEFIMART PRIVACY POLICY.',
  },
};
