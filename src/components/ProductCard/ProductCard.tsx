import { IProduct } from "@/types/product";
import Link from "next/link";
import RiskBadge from "../RiskBadge/RiskBadge";
import Image from "next/image";

interface Props {
  readonly product: IProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border border-[#d8d8d8] rounded-lg shadow-md transition duration-300 hover:shadow-xl flex flex-col justify-between h-full p-4 bg-white">
      <div>
        <div className="w-full h-40 mb-3 overflow-hidden rounded-md">
          <Image
            src={product.imagenes}
            width={500}
            height={500}
            alt={`Imagen de ${product.name}`}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-lg font-semibold">{product.name}</h2>
        </div>

        <p className="text-sm text-gray-600 mb-1">
          <strong>Tipo:</strong> {product.type}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Categoría:</strong> {product.category}
        </p>

        {product.riskLevel && (
          <div className="mt-2">
            <RiskBadge level={product.riskLevel} />
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          href={`/product/${product.id}`}
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          Saber más →
        </Link>
      </div>
    </div>
  );
}
