const TermsOfService = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-gray-800">Terms of Service</h1>
      <hr className="border-1" />
      <p className="text-sm text-gray-700">
        Welcome to our platform! By accessing or using our services, you agree to comply with the following Terms of Service. Please read them carefully. If you
        do not agree to these terms, you must refrain from using our services.
      </p>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-sm text-gray-700">
          By using our website, services, and products (collectively referred to as the "Services"), you agree to be bound by these Terms of Service and any
          other policies or guidelines that may be posted on our site. If you do not agree to these terms, you may not use our Services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">2. Changes to the Terms</h2>
        <p className="text-sm text-gray-700">
          We reserve the right to update, amend, or modify these Terms of Service at any time. Any changes will take effect immediately upon posting on this
          page. We recommend that you review this page periodically to stay informed about any updates.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">3. User Responsibilities</h2>
        <p className="text-sm text-gray-700">As a user of our Services, you agree to the following responsibilities:</p>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          <li>Provide accurate, current, and complete information when using our Services.</li>
          <li>Maintain the confidentiality of your account and password.</li>
          <li>Comply with all applicable laws and regulations while using the Services.</li>
          <li>Refrain from engaging in activities that may harm or disrupt our platform or users.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">4. Termination and Suspension of Services</h2>
        <p className="text-sm text-gray-700">
          We reserve the right to suspend or terminate your access to our Services if we believe you have violated these Terms of Service or engaged in
          activities that could harm our platform or its users. Termination may result in the permanent loss of access to your account and data.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">5. Prohibited Activities</h2>
        <p className="text-sm text-gray-700">You are prohibited from using the Services for the following activities:</p>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          <li>Engaging in illegal activities or activities that violate any laws.</li>
          <li>Distributing harmful software, viruses, or malicious code.</li>
          <li>Attempting unauthorized access to the Services or systems.</li>
          <li>Harassing, abusing, or harming other users.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">6. Disclaimer of Warranties</h2>
        <p className="text-sm text-gray-700">
          Our Services are provided "as is" and without warranties of any kind, either express or implied. We do not guarantee that the Services will be
          uninterrupted, error-free, or secure. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose,
          and non-infringement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">7. Limitation of Liability</h2>
        <p className="text-sm text-gray-700">
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages, or any loss of
          profits, revenues, data, or goodwill resulting from your use or inability to use the Services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">8. Indemnification</h2>
        <p className="text-sm text-gray-700">
          You agree to indemnify and hold harmless our company, affiliates, employees, and agents from any claims, damages, liabilities, or expenses (including
          attorney's fees) arising from your use of the Services or violation of these Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">9. Governing Law</h2>
        <p className="text-sm text-gray-700">
          These Terms of Service will be governed by the laws of the jurisdiction in which our company is located. Any disputes shall be resolved in the courts
          of that jurisdiction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-gray-800">10. Contact Information</h2>
        <p className="text-sm text-gray-700">If you have any questions regarding these Terms of Service, please contact us at:</p>
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

export default TermsOfService;
