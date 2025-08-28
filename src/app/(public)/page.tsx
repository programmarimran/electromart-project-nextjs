import ProductsSection from "@/components/homepage/ProductSectoin";
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <div>
      <section className="">
        <Hero />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl text-center font-bold mb-4">
          Featured Products
        </h2>
        <ProductsSection />
      </section>
    </div>
  );
}
