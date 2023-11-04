import ResourceCard from "@/components/Card/ResourceCard";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  return (
    <main>
      {/* <Modal /> */}
      <section className="mx-auto text-center max-w-3xl space-y-5 my-20">
        <h1 className=" text-display text-center text-accent">
          Assorted resources{" "}
          <span className=" text-light-gray">
            for frontend developers and web designers.
          </span>
        </h1>
        <p className="text-text font-medium max-w-lg mx-auto text-base">
        Explore curated and handpicked goodies that enhance your workflow and cultivate your growth as a developer and designer.
        </p>
      </section>
      <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        </div>
      </section>

    </main>
  );
}
