import { legalMetadata } from '@/utils/metadata';
import InfoComponent from '@/components/InfoComponent';

export const metadata = legalMetadata; // metadata for SEO
/**
 * Renders the legal info page.
 * @returns {JSX.Element} The rendered component.
 */
function About() {
  const infoData = {
    title: {
      main: 'Legal',
      sub: 'Info'
    },
    description: [
      'This website use Google Analytics to analyze traffic and the usage to improve its performance and user experience. No personal information is collected.',
      'All trademarks, logos, brand and company names are the property of their respective owners.',
      'Some are affiliate links. I receive a small commission when you purchase or sign up through the links, at no extra cost for you.'
    ]
  };
  return <InfoComponent infoData={infoData} />;
}

export default About;
