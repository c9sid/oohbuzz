export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 text-gray-800">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

            <p className="mb-4 text-sm sm:text-base">
                <strong>Effective Date:</strong> June 21, 2025<br />
                <strong>Last Updated:</strong> June 21, 2025
            </p>

            <p className="mb-6 text-sm sm:text-base">
                Welcome to <strong>OOHBUZZ</strong> ("we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website
                <a href="https://www.oohbuzz.com/" className="text-blue-600 underline mx-1" target="_blank" rel="noopener noreferrer">https://www.oohbuzz.com/</a>
                (the "Site"). Please read this policy carefully to understand our views and practices regarding your personal data.
            </p>

            <Section title="1. Information We Collect">
                <SubSection title="a. Information You Provide Directly">
                    <List items={[
                        "Name",
                        "Email address",
                        "Phone number",
                        "Business information",
                        "Any other information you voluntarily submit through contact forms or service inquiries"
                    ]} />
                </SubSection>
                <SubSection title="b. Automatically Collected Information">
                    <p className="mb-2">When you visit our website, we may automatically collect:</p>
                    <List items={[
                        "IP address",
                        "Browser type",
                        "Device type",
                        "Pages visited",
                        "Date and time of visit",
                        "Referring URL"
                    ]} />
                    <p>This information is collected using cookies and similar tracking technologies.</p>
                </SubSection>
            </Section>

            <Section title="2. How We Use Your Information">
                <p>We may use the information we collect to:</p>
                <List items={[
                    "Respond to your inquiries and requests",
                    "Send you service-related communications",
                    "Improve the content, functionality, and usability of our website",
                    "Analyze trends and site usage",
                    "Comply with legal obligations"
                ]} />
            </Section>

            <Section title="3. Cookies and Tracking Technologies">
                <p className="mb-2">We use cookies to enhance your experience on our site. Cookies are small text files stored on your device that help us understand user behavior and improve our services.</p>
                <p>You can choose to disable cookies through your browser settings, but some features of the website may not function properly.</p>
            </Section>

            <Section title="4. Sharing Your Information">
                <p>We do <strong>not sell</strong> or rent your personal data. However, we may share your information in the following circumstances:</p>
                <List items={[
                    "With trusted third-party service providers who help us operate our website",
                    "To comply with legal obligations or respond to lawful requests",
                    "To protect our rights, safety, or property"
                ]} />
            </Section>

            <Section title="5. Data Security">
                <p>We take reasonable administrative, technical, and physical precautions to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
            </Section>

            <Section title="6. Your Rights">
                <p>Depending on your location, you may have rights under applicable data protection laws, including:</p>
                <List items={[
                    "The right to access the personal data we hold about you",
                    "The right to request correction or deletion of your data",
                    "The right to object to or restrict certain data processing activities"
                ]} />
                <p>To exercise these rights, please contact us at
                    <a href="mailto:info@oohbuzz.com" className="text-blue-600 underline ml-1">info@oohbuzz.com</a>.
                </p>
            </Section>

            <Section title="7. Third-Party Links">
                <p>Our website may contain links to other websites. We are not responsible for the privacy practices or the content of those third-party sites.</p>
            </Section>

            <Section title="8. Children's Privacy">
                <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
            </Section>

            <Section title="9. Changes to This Privacy Policy">
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Last Updated” date. Your continued use of the Site after any changes means you agree to the revised policy.</p>
            </Section>

            <Section title="10. Contact Us">
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                <p className="mt-2">
                    📧 Email: <a href="mailto:info@oohbuzz.com" className="text-blue-600 underline">info@oohbuzz.com</a><br />
                    🌐 Website: <a href="https://www.oohbuzz.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.oohbuzz.com/</a>
                </p>
            </Section>
        </div>
    );
}

// Helper components
function Section({ title, children }) {
    return (
        <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
            <div className="text-sm sm:text-base">{children}</div>
        </section>
    );
}

function SubSection({ title, children }) {
    return (
        <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-medium mb-2">{title}</h3>
            <div>{children}</div>
        </div>
    );
}

function List({ items }) {
    return (
        <ul className="list-disc pl-5 space-y-1 mb-4">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}
