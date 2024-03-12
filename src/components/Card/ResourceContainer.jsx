import ResourceCard from './ResourceCard';
import PaginationControls from '../PaginationControls';
import categories from '@/data/categories.json';
/**
 * Renders a container for the resources.
 * @param {Object} props - The component props.
 * @param {string} props.category - The category to filter the resources by.
 * @param {string} props.page - The current page number.
 * @param {string} props.per_page - The number of resources per page.
 * @returns {JSX.Element} The rendered component.
 */
export default function ResourceContainer({ category, page, per_page }) {
  /**
   * Filters the resources by the given category.
   */
  const filteredResources = categories.filter((resource) => {
    if (!category) return true;
    return resource.fields.category === category;
  });
  /**
   * Slices the filtered resources by the given page number and per page count.
   */
  const paging = filteredResources.slice(
    (Number(page) - 1) * Number(per_page),
    Number(page) * Number(per_page)
  );
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {paging.map((resource, index) => {
          return <ResourceCard key={index} resource={resource} />;
        })}
      </div>
      <PaginationControls
        hasNextPage={paging.length === Number(per_page)}
        hasPrevPage={Number(page) > 1}
        total={filteredResources.length}
      />
    </>
  );
}
