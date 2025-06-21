export default function TermsOfUse() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 text-gray-800">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Terms of Use</h1>

            <p className="mb-4 text-sm sm:text-base">
                <strong>Effective Date:</strong> June 21, 2025<br />
                <strong>Last Updated:</strong> June 21, 2025
            </p>

            <Section title="1. Acceptance of Terms">
                <p>
                    By accessing or using the website <a href="https://www.oohbuzz.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.oohbuzz.com</a> (the “Site”), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must not use this website.
                </p>
            </Section>

            <Section title="2. Use of the Website">
                <List items={[
                    "You must be at least 18 years old or visiting under the supervision of a parent or guardian.",
                    "You agree not to use the site for any unlawful purpose or to violate any laws in your jurisdiction.",
                    "You may not use the Site to transmit any viruses or malicious code.",
                    "You agree not to copy, reproduce, or redistribute any part of the website without written permission from OOHBUZZ."
                ]} />
            </Section>

            <Section title="3. Intellectual Property">
                <p>
                    All content on this Site—including text, graphics, logos, images, and software—is the property of OOHBUZZ or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from this Site without our prior written consent.
                </p>
            </Section>

            <Section title="4. Third-Party Links">
                <p>
                    This website may contain links to third-party websites that are not owned or controlled by OOHBUZZ. We are not responsible for the content, policies, or practices of any third-party sites.
                </p>
            </Section>

            <Section title="5. Disclaimer of Warranties">
                <p>
                    The Site and its content are provided “as is” and “as available” without any warranties of any kind, express or implied. We do not guarantee that the Site will be error-free, secure, or continuously available.
                </p>
            </Section>

            <Section title="6. Limitation of Liability">
                <p>
                    To the fullest extent permitted by law, OOHBUZZ shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Site.
                </p>
            </Section>

            <Section title="7. Indemnification">
                <p>
                    You agree to indemnify, defend, and hold harmless OOHBUZZ and its affiliates from any claims, liabilities, damages, losses, or expenses arising out of your use of the Site or violation of these Terms.
                </p>
            </Section>

            <Section title="8. Modifications to Terms">
                <p>
                    We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page, and your continued use of the Site constitutes acceptance of the updated terms.
                </p>
            </Section>

            <Section title="9. Governing Law">
                <p>
                    These Terms are governed by and construed in accordance with the laws of India, and you consent to the exclusive jurisdiction of the courts in India.
                </p>
            </Section>

            <Section title="10. Contact Us">
                <p>
                    If you have any questions about these Terms of Use, please contact us at:
                </p>
                <p className="mt-2">
                    📧 Email: <a href="mailto:info@oohbuzz.com" className="text-blue-600 underline">info@oohbuzz.com</a><br />
                    🌐 Website: <a href="https://www.oohbuzz.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.oohbuzz.com</a>
                </p>
            </Section>
        </div>
    );
}

// Reusable Components
function Section({ title, children }) {
    return (
        <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
            <div className="text-sm sm:text-base">{children}</div>
        </section>
    );
}

function List({ items }) {
    return (
        <ul className="list-disc pl-5 space-y-1 mb-4 text-sm sm:text-base">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}
