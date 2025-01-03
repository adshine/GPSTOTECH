import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Content Section */}
      <div className="max-w-[998px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2 mt-[200px]">PRIVACY NOTICE</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
              We know privacy is important to you, and it is to us as well. This Privacy Policy outlines how we collect, use, and protect your personal information when you use GPSTOTECH services.
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-gray-600">
              This privacy notice explains how GPSTOTECH ("we," "us," or "our") handles your personal information and data. We value your privacy and are committed to protecting your personal information. This policy outlines:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                What information we collect and why we collect it
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                How we use and protect your information
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Your rights regarding your personal information
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                How to contact us about privacy concerns
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              Understanding how we handle your information is important because using our services means you trust us with your information.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Information We Collect</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  When you create an account with GPSTOTECH, we collect personal information necessary to provide you with our services. This includes your name, email address, and contact details. We also collect information about your professional background, including your work history, skills, and experience. Additionally, we gather information about your career goals, aspirations, and preferences to help us provide personalized career guidance and recommendations.
                </p>
                <p className="text-gray-600">
                  As you use our platform, we automatically collect certain technical information about your device and how you interact with our services. This includes information about your device type, operating system, and browser. We also collect data about your usage patterns, such as the features you use, the time you spend on different pages, and your interaction with various elements of our platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">2. How We Use Your Information</h2>
              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  The information we collect is essential for providing you with a personalized and effective career development experience. We use your information to create and maintain your account, generate tailored career assessments, and provide guidance based on your specific goals and background. This personalization allows us to offer relevant recommendations and insights that align with your career objectives.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  We continuously analyze how our platform is used to improve our services and develop new features that better serve our users' needs. This includes studying usage patterns, identifying areas for improvement, and understanding which features are most valuable to our community. Your information helps us make data-driven decisions about platform enhancements and new functionality.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  To keep you informed and engaged, we use your contact information to send important updates about our services, including changes to our platform, new features, and relevant career opportunities. We also use your information to respond to your inquiries and provide customer support when needed.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Protecting your information and maintaining the security of our platform is a top priority. We use the data we collect to monitor for suspicious activity, prevent unauthorized access, and ensure the overall safety of our services. This includes implementing security measures and fraud prevention systems to protect both our users and our platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">3. Your Rights and Controls</h2>
              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  You have complete control over your personal information and how it is used on our platform. At any time, you can access your account settings to view, update, or modify your personal information. This includes the ability to update your contact details, professional information, and career preferences to ensure your profile remains accurate and up-to-date.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  If you wish to have your information removed from our system, you can request the deletion of your account and associated data. We will process your request in accordance with applicable data protection laws, though we may need to retain certain information for legal or administrative purposes.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  We respect your communication preferences and give you control over the messages you receive from us. You can choose to opt out of marketing communications while still receiving essential service-related updates. These preferences can be managed through your account settings or by following the instructions in our communications.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Our platform uses cookies and similar technologies to enhance your experience. You have the right to control these through your browser settings. You can choose to accept or decline non-essential cookies, though some features of our platform may be affected by these choices.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">4. Contact Information</h2>
              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  We are committed to transparency and are here to address any questions or concerns you may have about your privacy and data protection. If you need clarification about this Privacy Policy, want to exercise your data rights, or have any other privacy-related inquiries, please don't hesitate to contact our dedicated privacy team.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  You can reach our privacy team at any time by emailing{' '}
                  <a 
                    href="mailto:privacy@gpstotech.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    privacy@gpstotech.com
                  </a>
                  . We strive to respond to all privacy-related requests promptly and will work with you to address your concerns in accordance with applicable data protection laws.
                </p>
              </div>
            </section>
          </div>

          {/* Action Button */}
          <div className="flex mt-12 pt-8 border-t">
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Go back to home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 