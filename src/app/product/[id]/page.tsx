import RiskChart from "@/components/RiskChart/RiskChart";
import { products } from "@/data/products";
import { IProduct } from "@/types/product";
import { generateRiskData } from "@/utils/generateRiskData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  readonly params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product: IProduct | undefined = products.find(p => p.id === params.id);
  const riskData = generateRiskData(product?.id ?? "0");

  if (!product) notFound();

  
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Tipo:</strong> {product?.type}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Categoría:</strong> {product?.category}
      </p>
      {product?.interestRate && (
        <p className="text-gray-700 mb-2">
          <strong>Tasa de interés:</strong> {product.interestRate}%
        </p>
      )}
      {product?.riskLevel && (
        <p className="text-gray-700 mb-2">
          <strong>Riesgo:</strong> {product.riskLevel}
        </p>
      )}
      <p className="mt-4 text-gray-800">{product?.description}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Histórico de riesgo</h3>
        <RiskChart data={riskData}/>
      </div>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
        >
          ← Volver al catálogo
        </Link>
      </div>
    </main>
  );
}
