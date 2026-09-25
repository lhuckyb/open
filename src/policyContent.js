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
      {
        heading: '8. Updates to These Terms',
        blocks: [
          {
            text: 'Defi-Mart may update or amend these Terms of Service from time to time to reflect changes to our platform, services, operations, or applicable requirements.',
          },
          {
            text: 'Where appropriate, updated terms will be made available on the platform. Your continued access to or use of Defi-Mart after updated terms are published means that you agree to be bound by the revised Terms of Service.',
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
  'refund-policy': {
    title: 'Return & Refund Policy',
    summary:
      'Defi-Mart is committed to ensuring that customers receive the products they order in good condition and as described on the platform. This policy explains when a product may be returned, the conditions that apply, and how customers should report problems with their orders.',
    updated: policyLastUpdated,
    sections: [
      {
        heading: '1. General Return Rule',
        blocks: [
          { text: 'Customers are required to inspect their products immediately after receiving their orders.' },
          { text: 'Where a product is defective, damaged, incorrect, incomplete, or does not function as reasonably expected, the customer must report the issue to Defi-Mart within the applicable reporting period stated for that product category.' },
          { text: 'A return will only be accepted where the reported issue falls within the conditions of this policy.' },
        ],
      },
      {
        heading: '2. Electronics & Electronic Devices',
        blocks: [
          { text: 'For electronics and electronic devices, customers have 24 hours from the time of delivery to report any defect, malfunction, damage, missing component, or other issue with the product.' },
          {
            bullets: [
              { label: 'Inspect', text: 'Inspect the product immediately after delivery.' },
              { label: 'Test', text: 'Test the product where reasonably possible.' },
              { label: 'Report', text: 'Report any problem to Defi-Mart within 24 hours.' },
              { label: 'Provide evidence', text: 'Provide photographs or videos of the issue where requested.' },
              { label: 'Keep components', text: 'Keep the product, packaging, accessories, manuals, and other components in reasonable condition until the return process is completed.' },
            ],
          },
          { text: '24-Hour Rule: If no issue is reported within the 24-hour period, the order will be considered accepted by the customer, subject to any applicable manufacturer warranty or other rights that may apply.' },
          { text: 'After the 24-hour reporting period, Defi-Mart may decline a return or refund for a product based solely on a defect or issue that could reasonably have been identified during the inspection period.' },
        ],
      },
      {
        heading: '3. Damaged or Incorrect Products',
        blocks: [
          { text: 'If a customer receives any of the following, they should contact Defi-Mart within the applicable reporting period:' },
          {
            bullets: [
              { label: 'Different product', text: 'A completely different product from what was ordered.' },
              { label: 'Visible damage', text: 'A visibly damaged product.' },
              { label: 'Missing parts', text: 'A product with missing essential parts.' },
              { label: 'Material difference', text: 'A product that is materially different from its description.' },
              { label: 'Defective on arrival', text: 'A product that is defective upon arrival.' },
            ],
          },
          { text: 'Defi-Mart may request photographs, videos, order information, or other evidence to verify the complaint.' },
          { text: 'Where the complaint is confirmed, Defi-Mart may provide an appropriate resolution, which may include replacement, repair where appropriate, exchange, refund, or another resolution agreed upon by Defi-Mart and the customer.' },
        ],
      },
      {
        heading: '4. Products That Cannot Be Returned',
        blocks: [
          { text: 'Certain products may not be eligible for return because of their nature, hygiene requirements, perishability, safety considerations, or other reasonable restrictions.' },
          {
            bullets: [
              { label: 'Examples', text: 'Groceries and perishable food items; prepared food; opened or used personal-care products; certain hygiene-related products; products specifically identified as non-returnable on the product listing; products substantially used, damaged, altered, or misused by the customer; and products that cannot reasonably be resold after being opened or used.' },
            ],
          },
          { text: 'Where a product is non-returnable, this should be clearly indicated on the relevant product listing where reasonably possible.' },
        ],
      },
      {
        heading: '5. Change of Mind',
        blocks: [
          { text: 'Defi-Mart does not automatically accept returns simply because a customer changes their mind after purchasing a product.' },
          { text: 'A return based solely on a change of mind may only be accepted where Defi-Mart or the relevant vendor expressly allows it and the product meets the applicable return conditions.' },
          { text: 'The customer may be responsible for applicable return or delivery costs in such cases.' },
        ],
      },
      {
        heading: '6. Condition of Returned Products',
        blocks: [
          { text: 'Where a return is approved, the product should generally be returned:' },
          {
            bullets: [
              { label: 'Original condition', text: 'In its original condition.' },
              { label: 'Packaging', text: 'With its original packaging where applicable.' },
              { label: 'Accessories', text: 'With all accessories and components.' },
              { label: 'Documentation', text: 'With manuals, documentation, or other included items where applicable.' },
              { label: 'No customer damage', text: 'Without damage caused by the customer.' },
            ],
          },
          { text: 'Defi-Mart may refuse a return where the product has been damaged, altered, misused, or materially changed after delivery, except where the damage itself is the issue reported under this policy.' },
        ],
      },
      {
        heading: '7. Return Process',
        blocks: [
          { text: 'Customers requesting a return should contact Defi-Mart through the officially designated customer-service channel and provide:' },
          {
            bullets: [
              { label: '1', text: 'Order number.' },
              { label: '2', text: 'Customer name and contact details.' },
              { label: '3', text: 'Product name.' },
              { label: '4', text: 'Date and time of delivery.' },
              { label: '5', text: 'Description of the problem.' },
              { label: '6', text: 'Photographs or videos where necessary.' },
            ],
          },
          { text: 'Customers should not send products back independently without receiving return instructions from Defi-Mart.' },
          { text: 'Defi-Mart will review the request and inform the customer of the next steps.' },
        ],
      },
      {
        heading: '8. Inspection of Returned Products',
        blocks: [
          { text: 'A returned product may be inspected by Defi-Mart, the vendor, or an authorized representative before a final decision is made.' },
          { text: 'Submitting a return request does not automatically guarantee approval.' },
          {
            bullets: [
              { label: 'Decision factors', text: 'The reason for the return, when the problem was reported, the condition of the product, evidence provided, the applicable product category, the vendor’s applicable warranty or return conditions, and the terms applicable to the specific order.' },
            ],
          },
        ],
      },
      {
        heading: '9. Refunds',
        blocks: [
          { text: 'Where a refund is approved, the refund method and processing time may depend on the original payment method and the circumstances of the return.' },
          { text: 'Defi-Mart may process the refund after the returned product has been received and inspected where an inspection is required.' },
          { text: 'Delivery charges may not automatically be refundable, particularly where the return is caused by a customer’s change of mind or another reason not attributable to Defi-Mart or the vendor.' },
        ],
      },
      {
        heading: '10. Products With Manufacturer Warranties',
        blocks: [
          { text: 'Some electronic and other products may carry a manufacturer’s or vendor’s warranty.' },
          { text: 'Where an issue occurs outside Defi-Mart’s applicable return period but falls within a valid warranty, the customer may be directed to the relevant manufacturer, vendor, or authorized service provider.' },
          { text: 'The existence of a manufacturer’s warranty does not automatically extend Defi-Mart’s 24-hour return-reporting period.' },
        ],
      },
      {
        heading: '11. Customer Responsibility',
        blocks: [
          { text: 'Customers are responsible for providing accurate information when submitting a return request. A customer must not:' },
          {
            bullets: [
              { label: 'False claims', text: 'Falsely claim that a product was defective.' },
              { label: 'Wrong product', text: 'Return a different product from the one purchased.' },
              { label: 'Intentional damage', text: 'Intentionally damage a product and request a refund.' },
              { label: 'Removed components', text: 'Remove or replace essential components and return the product.' },
              { label: 'Fraudulent evidence', text: 'Submit fraudulent evidence.' },
              { label: 'System abuse', text: 'Abuse the return system.' },
            ],
          },
          { text: 'Defi-Mart reserves the right to reject fraudulent or abusive return requests and take appropriate action where necessary.' },
        ],
      },
      {
        heading: '12. Vendor Responsibility',
        blocks: [
          { text: 'Where a product is supplied by a Defi-Mart vendor, the vendor is expected to provide products that match the information, description, specifications, and condition represented on the Defi-Mart platform.' },
          { text: 'Where a verified product defect, incorrect product, or other vendor-related issue results in an approved return, Defi-Mart may coordinate with the vendor to resolve the matter.' },
          { text: 'Vendor obligations may also be governed by a separate Defi-Mart Vendor Agreement.' },
        ],
      },
      {
        heading: '13. Return Periods May Differ by Product Category',
        blocks: [
          { text: 'The 24-hour reporting period applies specifically to categories designated by Defi-Mart, including electronics where stated.' },
          { text: 'Defi-Mart may establish different return or complaint periods for different product categories based on the nature of the product.' },
          { text: 'The applicable return conditions displayed on the product listing or communicated at the time of purchase may therefore apply.' },
        ],
      },
      {
        heading: '14. Policy Abuse and Exceptions',
        blocks: [
          { text: 'Defi-Mart reserves the right to investigate unusual or repeated return requests.' },
          { text: 'In exceptional circumstances, Defi-Mart may review a case outside the normal return period where there is a reasonable basis for doing so.' },
          { text: 'Any such exception does not automatically create a permanent entitlement to an extended return period.' },
        ],
      },
      {
        heading: '15. Policy Changes',
        blocks: [
          { text: 'Defi-Mart may update this Return & Refund Policy when necessary to reflect changes in its operations, products, services, or applicable requirements.' },
          { text: 'Customers will be subject to the return terms applicable to their order at the relevant time, subject to applicable law.' },
        ],
      },
      {
        heading: '16. Important Notice',
        blocks: [
          { text: 'Customers are encouraged to inspect and test their products immediately after delivery.' },
          { text: 'For electronics and other products subject to the 24-hour rule, failure to report an identifiable problem within the applicable 24-hour period may result in the product no longer being eligible for return through Defi-Mart’s standard return process.' },
        ],
      },
    ],
    footnote: 'DEFI-MART RETURN & REFUND POLICY.',
  },
  'seller-policy': {
    title: 'Vendor Rules',
    summary: 'By creating and operating a shop on Defi-Mart, every vendor agrees to follow these rules.',
    updated: policyLastUpdated,
    sections: [
      {
        heading: '1. Accurate Products',
        blocks: [{ text: 'Vendors must provide correct information about every product they upload, including the name, price, description, images, and available quantity.' }],
      },
      {
        heading: '2. Product Quality',
        blocks: [{ text: 'Vendors must ensure that products sent to customers are in good condition and match what was advertised. Used, damaged, counterfeit, or misleading products must not be listed as new or genuine.' }],
      },
      {
        heading: '3. Order Fulfillment',
        blocks: [{ text: 'Once a customer places an order, vendors are expected to prepare and provide the correct product on time. Vendors should not accept orders for products they cannot supply.' }],
      },
      {
        heading: '4. Pricing & Stock',
        blocks: [{ text: 'Vendors are responsible for keeping their prices and stock information updated. If a product is unavailable, the vendor should update or remove the listing.' }],
      },
      {
        heading: '5. Returns & Complaints',
        blocks: [{ text: 'Vendors must cooperate with Defi-Mart when a customer reports a wrong, damaged, defective, or incorrectly described product. Approved returns and refunds must be handled according to Defi-Mart’s Return Policy.' }],
      },
      {
        heading: '6. Customer Conduct',
        blocks: [{ text: 'Vendors must treat customers and Defi-Mart representatives respectfully and professionally. Fraud, harassment, deception, or abusive behaviour is not permitted.' }],
      },
      {
        heading: '7. Defi-Mart Platform',
        blocks: [{ text: 'Vendors must not use their Defi-Mart shop to mislead customers, conduct fraudulent transactions, or deliberately bypass Defi-Mart’s platform systems and applicable charges.' }],
      },
      {
        heading: '8. Prohibited Products',
        blocks: [{ text: 'Vendors may not list products that are illegal, counterfeit, stolen, unsafe, or prohibited by Defi-Mart or applicable law.' }],
      },
      {
        heading: '9. Vendor Account',
        blocks: [{ text: 'Each vendor is responsible for their shop and account. Vendors must keep their account information secure and must not allow unauthorized persons to operate their shop.' }],
      },
      {
        heading: '10. Violation of Rules',
        blocks: [{ text: 'Defi-Mart may remove products, restrict a shop, suspend an account, or terminate a vendor’s access where a vendor seriously or repeatedly violates these rules.' }],
      },
      {
        heading: 'Agreement',
        blocks: [{ text: 'By creating a vendor shop on Defi-Mart, the vendor confirms that they understand and agree to follow these rules.' }],
      },
    ],
    footnote: 'DEFI-MART VENDOR RULES.',
  },
};
