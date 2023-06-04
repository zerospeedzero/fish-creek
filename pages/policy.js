import Head from 'next/head';
import Footer from '../components/Footer';

export default function forecast() {
  return (
    <>
      <Head>
        <title>City Hiker</title>
        <meta name='description' content="Fish Creek national park" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div className='flex items-center justify-center bg-fixed bg-center bg-cover custom-image'>
        {/* Overlay */}
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'/>
        <div className='text-white pt-24 p-4 z-[2] w-4/5'>
          <h4 id='term'className="text-2xl font-bold mb-4">Terms of Service</h4>
          <p className="mb-4">Effective Date: May 1, 2023</p>
          <p className="mb-4">Acceptance of Terms: By using our Page, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from accessing or using our Page.</p>
          <p className="mb-4">Use of Content: All content on our Page, including text, images, videos, and any other materials, is the intellectual property of our organization or its licensors. You may access and view the content for personal, non-commercial use only. You are prohibited from modifying, reproducing, distributing, or exploiting the content without prior written consent.</p>
          <p className="mb-4">Prohibited Activities: When using our Page, you agree not to:</p>
          <div className="ml-8 mb-4">
            - Violate any applicable laws or regulations.
            - Infringe upon the intellectual property rights of others.
            - Post or share content that is defamatory, obscene, hateful, or discriminatory.
            - Engage in spamming, phishing, or other malicious activities.
            - Impersonate any person or entity or falsely represent your affiliation with any entity.
            - Interfere with the proper functioning of our Page or disrupt the experiences of other users.
            - Collect or store personal information of other users without their consent.
            - Use our Page for any commercial or promotional purposes without our prior written consent.
          </div>
          <p className="mb-4">Third-Party Content and Links: Our Page may contain links to third-party websites or content that is not controlled or owned by us. We do not endorse or assume any responsibility for the accuracy, legality, or authenticity of such content. Your interactions with third-party websites or resources are solely at your own risk.</p>
          <p className="mb-4">Limitation of Liability: To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our Page. This includes any errors, omissions, or inaccuracies in the content provided on our Page.</p>
          <p className="mb-4">Indemnification: You agree to indemnify and hold us harmless from any claims, damages, liabilities, or expenses arising out of your violation of these Terms of Service or your misuse of our Page.</p>
          <p className="mb-4">Modification and Termination: We reserve the right to modify or terminate our Page, including these Terms of Service, at any time without prior notice. We may also restrict or terminate your access to our Page if we believe you have violated these Terms of Service or applicable laws.</p>
          <p>Governing Law and Jurisdiction: These Terms of Service shall be governed</p>
          <h4 id="privacy" className="text-2xl font-bold mb-4">Privacy Policy</h4>
          <p className="mb-4">Effective Date: May 1, 2023</p>
          <p className="mb-4">Information Collection and Use: We collect certain information when you use our Page. This may include:</p>
          <div className="ml-8 mb-4">
            - Personal information such as your name, email address, and contact details.
            - Log data, including your IP address, browser type, and access times.
            - Cookies and similar technologies to track your preferences and improve our services.
          </div>
          <p className="mb-4">Information Sharing and Disclosure: We may share your information with third parties in the following circumstances:</p>
          <div className="ml-8 mb-4">
            - With your consent or at your direction.
            - To comply with legal obligations or respond to lawful requests.
            - To protect and defend our rights and property.
            - In connection with a merger, acquisition, or sale of assets.
          </div>
          <p className="mb-4">Data Security: We take appropriate measures to safeguard your information and protect it from unauthorized access or disclosure.</p>
          <p className="mb-4">Third-Party Links: Our Page may contain links to third-party websites. We do not control or endorse the content or practices of these websites and are not responsible for their privacy policies.</p>
          <p className="mb-4">Children Privacy: Our Page is not intended for children under the age of 13. We do not knowingly collect personal information from children without parental consent.</p>
          <p className="mb-4">Changes to This Privacy Policy: We may update our Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.</p>
          <p className="mb-4">Contact Us: If you have any questions or concerns about our Privacy Policy, please contact us using the information provided below.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}
