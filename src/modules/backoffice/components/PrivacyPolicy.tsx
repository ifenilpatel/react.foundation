const PrivacyPolicy = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-gray-800">Privacy Policy</h1>
      <hr className="border-1" />
      <p className="text-sm text-gray-700">
        At our company, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and
        safeguard your data when you interact with our services.
      </p>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">1. General Information</h2>
        <p className="text-sm text-gray-700">
          The Privacy Policy outlines how an organization collects, uses, and protects user data when they access or use a service. It ensures transparency
          regarding how personal information is handled, ensuring users are informed about their rights and the measures taken to protect their data. A
          well-crafted Privacy Policy is important not only for regulatory compliance but also to build trust with users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">2. Data Collection</h2>
        <p className="text-sm text-gray-700">
          We may collect various types of data, including personal identification information (name, email address, etc.) and non-personal data (IP address,
          browser type, etc.) when you use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">3. Data Usage</h2>
        <p className="text-sm text-gray-700">
          The data we collect is used to improve your experience on our platform, to respond to your inquiries, and to enhance our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">4. Data Security</h2>
        <p className="text-sm text-gray-700">We implement various security measures to ensure that your personal data is protected and kept confidential.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">5. Cookies</h2>
        <p className="text-sm text-gray-700">
          We use cookies to enhance your experience on our website. Cookies help us improve site functionality, remember preferences, and gather analytical data
          to improve our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">6. Third-Party Services</h2>
        <p className="text-sm text-gray-700">
          We may use third-party services to help us provide our services. These third parties may have access to your personal information, but they are
          obligated to protect it in accordance with their privacy policies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">7. Your Rights</h2>
        <p className="text-sm text-gray-700">
          You have the right to access, update, and delete your personal data. If you wish to exercise these rights, please contact us using the information
          provided below.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">8. Changes to the Privacy Policy</h2>
        <p className="text-sm text-gray-700">
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review
          it periodically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">9. Contact Us</h2>
        <p className="text-sm text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="text-sm text-gray-700">
          Email:{" "}
          <a href="mailto:fens98@gmail.com" className="text-blue-500 hover:underline">
            fens98@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-700">
          Phone: <span className="text-blue-500">+91 96388-18137</span>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
