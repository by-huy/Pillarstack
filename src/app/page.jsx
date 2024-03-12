import Skeleton from '@/components/Card/Skeleton';
import MainPage from '@/components/MainPage';
import TabButtons from '@/components/TabNavigation/TabButton';
import TabButtonsMobile from '@/components/TabNavigation/TabButtonMobile';
import ResourceContainer from '@/components/Card/ResourceContainer';
import { Suspense } from 'react';

/**
 * Renders the home page.
 * @param {Object} props - The component props.
 * @param {Object} props.searchParams - The search parameters.
 * @returns {JSX.Element} The rendered component.
 */
export default async function Home({ searchParams }) {
  const { category } = searchParams;
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '20';
  return (
    <>
      <MainPage />
      <section>
        <TabButtonsMobile />
        <TabButtons />
        <Suspense fallback={<Skeleton />}>
          <ResourceContainer
            category={category}
            page={page}
            per_page={per_page}
          />
        </Suspense>
      </section>
    </>
  );
}
