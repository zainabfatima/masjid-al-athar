import { LegalPageLayout, LegalSection } from "@/components/legal/LegalPageLayout";
import { CONTACT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms of Service for Masjid Al-Athar website and services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms and Conditions" lastUpdated="March 14, 2024">
      <p className="text-base leading-relaxed text-muted-foreground">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the services
        provided by Masjid Al-Athar (&ldquo;us,&rdquo; &ldquo;we,&rdquo; or
        &ldquo;our&rdquo;) and your access to our website. By using our services and
        accessing our website, you agree to comply with and be bound by these Terms. If
        you do not agree to these Terms, please do not use our services or access our
        website.
      </p>

      <LegalSection title="1. Services">
        <p>
          We offer web design, development, and related services. The specifics of the
          services provided will be outlined in a separate agreement or proposal between
          you and us.
        </p>
      </LegalSection>

      <LegalSection title="2. User Responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide accurate and complete information when using our services.</li>
          <li>Abide by all applicable laws and regulations.</li>
          <li>
            Not engage in any activity that may disrupt or interfere with our services or
            website.
          </li>
          <li>Maintain the confidentiality of any login credentials provided to you.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Fees and Payment">
        <p>
          The fees for our services will be outlined in the agreement or proposal between
          you and us. Payment terms and methods will also be specified in that agreement.
          Failure to pay fees as agreed may result in the suspension or termination of
          services.
        </p>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <p>
          Unless otherwise specified in writing, we retain all rights to any intellectual
          property created or used in the course of providing our services, including but
          not limited to website designs, code, and graphics.
        </p>
      </LegalSection>

      <LegalSection title="5. Confidentiality">
        <p>
          Any information shared with us in the course of providing services will be
          treated as confidential and will not be disclosed to third parties except as
          required by law.
        </p>
      </LegalSection>

      <LegalSection title="6. Termination">
        <p>
          We reserve the right to terminate or suspend your access to our services and
          website at our discretion and without notice if you violate these Terms or for
          any other reason.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          Our liability is limited to the extent permitted by law. We are not liable for
          any indirect, incidental, or consequential damages, including but not limited
          to lost profits or data, arising from your use of our services or website.
        </p>
      </LegalSection>

      <LegalSection title="8. Indemnification">
        <p>
          You agree to indemnify and hold us harmless from any claims, damages, or losses
          arising out of your use of our services or website, including any claims
          related to your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to Terms">
        <p>
          We may update these Terms from time to time. Any changes will be posted on our
          website, and the revised Terms will apply to your use of our services from the
          date of publication.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws of
          Georgia, and any disputes will be subject to the exclusive jurisdiction of the
          courts in Georgia.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <p>
          If you have any questions or concerns about these Terms of Service, please
          contact us at{" "}
          <a
            href={`mailto:${CONTACT.zelleEmail}`}
            className="font-semibold text-primary hover:underline"
          >
            {CONTACT.zelleEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
