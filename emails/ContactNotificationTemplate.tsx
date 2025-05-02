import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Head,
  Img,
  Link,
  Heading,
  Hr,
  Tailwind,
  Section,
  Row,
  Column,
} from "@react-email/components";

interface Props {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
}

const ContactNotificationTemplate = ({
  fullName,
  email,
  subject,
  phone,
  company,
  message,
  consent,
}: Props) => {
  return (
    <Html>
      <Head>
        <title>{`New Contact: ${fullName} | SDG Venturing`}</title>
      </Head>
      <Preview>{`New contact form submission from ${fullName} - ${subject}`}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          {/* Header with Branding */}
          <Container className="bg-gradient-to-r from-[#2c7a7b] to-[#3aa6a8] py-5 px-8">
            <Img
              src="https://res.cloudinary.com/ddssmhpjq/image/upload/v1745220901/vg1oqvr2s4dval9rx8rc.png"
              width="170"
              height="50"
              alt="SDG Venturing Logo"
              className="mx-auto"
            />
          </Container>

          {/* Main Content */}
          <Container className="mx-auto my-0 max-w-2xl bg-white p-10 rounded-b-lg shadow-sm">
            {/* Priority Alert */}
            <Section className="bg-green-50/80 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
              <Heading className="text-xl font-bold text-gray-800 mb-2">
                ✨ New Contact Request
              </Heading>
              <Text className="text-gray-700">
                Please respond within <strong>24 hours</strong> for best
                customer experience.
              </Text>
            </Section>

            {/* Contact Card */}
            <Section className="border border-gray-200 rounded-lg p-6 mb-8">
              <Heading className="text-2xl font-bold text-gray-800 mb-4">
                {subject}
              </Heading>

              <Row className="mb-4">
                <Column className="w-1/3">
                  <Text className="text-sm font-semibold text-gray-500">
                    From
                  </Text>
                </Column>
                <Column className="w-2/3">
                  <Text className="text-base font-medium text-gray-800">
                    {fullName}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-4">
                <Column className="w-1/3">
                  <Text className="text-sm font-semibold text-gray-500">
                    Phone Number
                  </Text>
                </Column>
                <Column className="w-2/3">
                  <Text className="text-base text-gray-800">
                    {phone || "Not specified"}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-4">
                <Column className="w-1/3">
                  <Text className="text-sm font-semibold text-gray-500">
                    Company
                  </Text>
                </Column>
                <Column className="w-2/3">
                  <Text className="text-base text-gray-800">
                    {company || "Not specified"}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-4">
                <Column className="w-1/3">
                  <Text className="text-sm font-semibold text-gray-500">
                    Email
                  </Text>
                </Column>
                <Column className="w-2/3">
                  <Link
                    href={`mailto:${email}`}
                    className="text-base text-blue-600 hover:underline"
                  >
                    {email}
                  </Link>
                </Column>
              </Row>

              <Row>
                <Column className="w-1/3">
                  <Text className="text-sm font-semibold text-gray-500">
                    Consent
                  </Text>
                </Column>
                <Column className="w-2/3">
                  <Text
                    className={`text-base ${consent ? "text-green-600" : "text-amber-600"}`}
                  >
                    {consent ? "✓ Granted" : "✗ Not granted"}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Message Content */}
            <Section className="mb-8">
              <Heading className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
                Message
              </Heading>
              <Text className="text-gray-800 bg-gray-50 p-4 rounded whitespace-pre-wrap">
                {message}
              </Text>
            </Section>

            {/* Quick Actions */}
            <Section className="text-center mb-8">
              <Row className="flex justify-center">
                <Column>
                  <Link
                    href={`mailto:${email}?subject=Re: ${subject}`}
                    className="inline-block bg-[#00332c] hover:bg-[#3aa6a8] text-white font-medium py-2 px-6 mr-4 rounded-lg text-sm transition-all duration-200"
                  >
                    Reply Directly
                  </Link>
                </Column>
                <Column>
                  <Link
                    href="https://sdgventuring.com/dashboard"
                    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg text-sm transition-all duration-200"
                  >
                    Go to Dashboard
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr className="border-gray-200 my-6" />

            {/* Footer */}
            <Section className="text-center text-gray-500 text-xs">
              <Text className="mb-1">
                This message was generated automatically from the SDG Venturing
                contact form.
              </Text>
              <Text>
                Received at{" "}
                {`${new Date().getDate()} ${new Date().toLocaleString("en-US", {
                  month: "short",
                })} ${new Date().getFullYear()}, ${new Date().toLocaleTimeString(
                  "nl-NL",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}`}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactNotificationTemplate;
