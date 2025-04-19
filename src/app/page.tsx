"use client";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useHome } from "@/hooks/useHome";
import { Fragment } from "react";

export default function Home() {
  const {
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProducts,
  } = useHome();

  return (
    <Fragment>
      <h2 className="text-2xl font-bold mb-4">
        Nuestros Productos Financieros
      </h2>
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
}
