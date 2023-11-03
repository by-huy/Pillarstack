import ResourceCard from "@/components/Card/ResourceCard";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between">
      <section className="mx-auto text-center max-w-3xl space-y-5 my-20">
        <h1 className=" text-display text-center text-accent">
          Assorted resources{" "}
          <span className=" text-light-gray">
            for frontend developers and web designers.
          </span>
        </h1>
        <p className="text-text font-medium max-w-lg mx-auto text-base">
        Collection of resources and tools that can help you improve your workflow and grow as a developer and designer.
        </p>
      </section>
      <section>
        <ResourceCard />
      </section>
    </main>
  );
}
