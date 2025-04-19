import { products } from '@/data/products';
import{ useMemo, useState,  } from 'react'

export const useHome = () => {

  const [selectedCategory, setSelectedCategory] = useState("Todos");
 
   const categories = useMemo(() => {
     const unique = new Set(products.map((p) => p.category));
     return Array.from(unique);
   }, []);
 
   const filteredProducts = useMemo(() => {
     if (selectedCategory === "Todos") return products;
     return products.filter((p) => p.category === selectedCategory);
   }, [selectedCategory]);

    return {
        selectedCategory,
        setSelectedCategory,
        categories,
        filteredProducts
    }
}
