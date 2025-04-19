import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import RouteLoader from "@/components/RouteLoader/RouteLoader";

vi.mock("@/components/Header/Header", () => ({
  __esModule: true,
  default: () => <div data-testid="header">Header</div>,
}));

vi.mock("@/components/RouteLoader/RouteLoader", () => ({
  __esModule: true,
  default: () => <div data-testid="route-loader">RouteLoader</div>,
}));

function TestLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <RouteLoader />
        <main>{children}</main>
      </body>
    </html>
  );
}

describe("RootLayout", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería renderizar Header y RouteLoader correctamente", () => {
    render(<TestLayout><div>Contenido de prueba</div></TestLayout>);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("route-loader")).toBeInTheDocument();
    expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
  });
});