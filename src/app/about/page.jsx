import { aboutMetadata } from '@/utils/metadata';
import InfoComponent from '@/components/InfoComponent';

export const metadata = aboutMetadata; // metadata for SEO
/**
 * Renders the about page.
 * @returns {JSX.Element} The rendered component.
 */
function About() {
  const infoData = {
    title: {
      main: 'About',
      sub: 'Pillarstack'
    },
    description: [
      `I created Pillarstack to address the frustrations I encountered when
       I started out in frontend development and web design. Hunting for
       resources and tools consumed a lot valuable time that could have
       been better spent honing my skills. `,

      `Now Pillarstack exists to support those that have similar issues.
            These resources are handpicked and curated by me and other amazing
            contributors.
      `
    ]
  };
  return <InfoComponent infoData={infoData} />;
}

export default About;
