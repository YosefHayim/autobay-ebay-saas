import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-600">This privacy policy is part of the terms of use of the Quickly website.</p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold">1. General</h2>
        <p>
          When using the services of this website, information about you is collected. Some of this data personally identifies you, such as your name, mobile
          number, and email address. Business owners may be required to provide additional business-related information, such as the name, type, operating
          hours, services, etc. (hereinafter: "Additional Information"). Some of this information is provided explicitly by you during registration. Other
          information may include the IP address you use to access the site and more.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-2 text-xl font-semibold">2. Registration for Services</h2>
        <p>Some services require registration. Completing actions on the site may not be possible without providing the required personal information.</p>
      </section>

      <section>
        <h2 className="mt-6 mb-2 text-xl font-semibold">3. Database</h2>
        <p>
          By providing personal information, you consent to its inclusion in Quickly's database, maintained under the Privacy Protection Law 5741-1981, and
          agree to its use as described in this policy.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-2 text-xl font-semibold">4. Use of Information</h2>
        <p>4.1 Quickly may collect and store information about the services you use on the site.</p>
        <p>
          4.2 We use this data to operate and improve the site. Businesses on the platform may gain access to customer information after a booking or
          registration (e.g., name, email, phone).
        </p>
        <p>
          4.3 <strong>Cookies:</strong> Cookies are used to track your preferences, activities, and session data to enhance site functionality. You can disable
          cookies via your browser settings, but doing so may affect some site functionalities.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-2 text-xl font-semibold">5. Direct Mailing and Telemarketing</h2>
        <p>5.1 Quickly may send updates, offers, and marketing messages via email, SMS, or other methods if you've consented or as permitted by law.</p>
        <p>5.2 You may request to remove your data from our direct marketing database by contacting us in writing.</p>
        <p>5.3 Marketing messages may be sent on behalf of third parties, but your details will not be shared with them without your explicit consent.</p>
      </section>

      <section>
        <h2 className="mt-6 mb-2 text-xl font-semibold">6. Right to Review Information</h2>
        <p>You may access and correct your personal information stored in our database by contacting Quickly at the address provided in our contact section.</p>
      </section>

      <section>
        <h2 className="mt-6 mb-2 text-xl font-semibold">7. Sharing Information with Third Parties</h2>
        <p>Quickly does not share personally identifiable information unless:</p>
        <ul className="ml-4 list-inside list-disc">
          <li>We have your consent.</li>
          <li>You're participating in joint activities with third parties displayed on our site.</li>
          <li>
            You use integrations like Facebook's Like/Share. We do not provide personal information to Facebook, but interactions may be cross-referenced by
            Facebook.
          </li>
        </ul>
        <p>
          This site uses Google Analytics for anonymous usage tracking. Refer to
          <a href="https://www.facebook.com/about/privacy" className="ml-1 text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            Facebook's Privacy Policy
          </a>{" "}
          and Google's terms for more information.
        </p>
      </section>

      <footer className="mt-10 text-sm text-gray-600">
        <p>
          For data deletion or privacy inquiries, please contact us at:{" "}
          <a href="mailto:support@quickly.com" className="text-blue-600 underline">
            support@quickly.com
          </a>
        </p>
        <p>
          You can also submit a deletion request at:{" "}
          <a href="/delete-data" className="text-blue-600 underline">
            quickly.com/delete-data
          </a>
        </p>
      </footer>
    </main>
  );
};

export default PrivacyPolicy;
