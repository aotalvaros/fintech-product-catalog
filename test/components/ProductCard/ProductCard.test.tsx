
import { render, screen } from '@testing-library/react';
import ProductCard from '../../../src/components/ProductCard/ProductCard';
import { IProduct } from '../../../src/types/product';
import { vi } from 'vitest';

const mockProduct: IProduct = {
  id: '1',
  name: 'Cuenta Ahorro',
  type: 'Cuenta',
  category: 'Ahorro',
  riskLevel: 'Bajo',
  description: 'Una cuenta segura.',
  imagenes: "https://example.com/image.jpg",
};

vi.mock('../../../src/components/RiskBadge/RiskBadge', () => ({
  __esMudule: true,
  default: vi.fn(({ level }) => {
    return <div data-testid="mock-risk-badge">Riesgo: {level}</div>;
  })
}));

describe('Pruebas para el componente ProductCard', () => {

  it('Deberia mostrar el nombre, tipo y categoría', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(/Cuenta Ahorro/)).toBeInTheDocument();
    expect(screen.getByText(/Tipo:/)).toBeInTheDocument();
    expect(screen.getByText(/Categoría:/)).toBeInTheDocument();
    expect(screen.getByText(/Saber más/)).toBeInTheDocument();
  });

  it('Deberia mostrar la imagen del producto', () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText(/Imagen de Cuenta Ahorro/);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.imagenes);
  });

  it('Deberia mostrar el badge de riesgo', () => {
    render(<ProductCard product={mockProduct} />);

    const riskBadge = screen.getByTestId('mock-risk-badge');
    expect(riskBadge).toBeInTheDocument();
  });

  it('Deberia mostrar el enlace a la página del producto', () => {
    render(<ProductCard product={mockProduct} />);

    const link = screen.getByText(/Saber más/);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/product/${mockProduct.id}`);
  });

  it('No Deberia mostrar el badge de riesgo si no hay nivel de riesgo', () => {
    const productWithoutRisk: IProduct = { ...mockProduct, riskLevel: undefined };
    render(<ProductCard product={productWithoutRisk} />);

    const riskBadge = screen.queryByTestId('mock-risk-badge');
    expect(riskBadge).not.toBeInTheDocument();
  });
});
