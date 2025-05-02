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
import { getFirstName } from "@/lib/utils";

const ContactTemplate = ({ fullName }: { fullName: string }) => {
  return (
    <Html lang="nl">
      <Head>
        <title>Bedankt voor je bericht | SDG Venturing</title>
      </Head>
      <Preview>
        We hebben je bericht ontvangen en nemen snel contact met je op
      </Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          {/* Header with gradient */}
          <Container className="bg-gradient-to-r from-[#2c7a7b] to-[#3aa6a8] py-6 px-8">
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
            <Heading className="text-3xl font-bold text-gray-800 mb-6">
              Beste {getFirstName(fullName) || ""},
            </Heading>

            <Text className="text-gray-700 text-lg leading-relaxed mb-6">
              Bedankt voor je bericht! Het is fijn dat je interesse toont in SDG
              Venturing en onze missie om sociale ondernemingen te ondersteunen
              en mee te bouwen aan een inclusieve economie.
            </Text>

            <Section className="bg-green-50/80 border-l-4 border-blue-300 p-4 mb-8 rounded-r">
              <Text className="text-gray-700 text-base leading-relaxed">
                Ons team zal je bericht binnen <strong>1-2 werkdagen</strong>{" "}
                beantwoorden. We nemen zo snel mogelijk contact met je op.
              </Text>
            </Section>

            <Text className="text-gray-700 text-lg leading-relaxed mb-8">
              In de tussentijd nodigen we je uit om meer te ontdekken over hoe
              wij sociale ondernemingen ondersteunen met innovatieve oplossingen
              voor groei en positieve impact.
            </Text>

            <Container className="text-center mb-10">
              <Link
                href="https://sdgventuring.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block bg-[#00332c] text-white font-medium py-2 px-6 rounded-lg text-lg transition-all duration-200"
              >
                Bezoek Onze Website
              </Link>
            </Container>

            <Hr className="border-gray-200 my-8" />

            {/* Social Links */}
            <Section className="text-center mb-8">
              <Text className="text-gray-600 text-sm mb-4">
                Volg ons voor updates en inspiratie:
              </Text>
              <Row className="flex justify-center gap-4">
                <Column>
                  <Link href="https://www.linkedin.com/in/ewoud-mogendorff-4b979">
                    <Img
                      src="https://res.cloudinary.com/ddssmhpjq/image/upload/v1745223457/nmfzfwwyx3gyryle0chd.svg"
                      width="28"
                      height="28"
                      alt="LinkedIn"
                    />
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section className="text-center text-gray-500 text-xs">
              <Text className="mb-2">SDG Venturing | Den Haag, Nederland</Text>
              <Text className="mb-2">
                <Link
                  href="mailto:contact@sdgventuring.com"
                  aria-label="Send email to contact@sdgventuring.com"
                  className="text-blue-600"
                >
                  contact@sdgventuring.com
                </Link>{" "}
                {/* |
                <Link href="tel:+31201234567" className="text-blue-600 ml-2">
                  +31 20 123 45 67
                </Link> */}
              </Text>
              <Text>
                © {new Date().getFullYear()} SDG Venturing. Alle rechten
                voorbehouden.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactTemplate;
