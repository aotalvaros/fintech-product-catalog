import { vi } from "vitest";
import RouteLoader from "../../../src/components/RouteLoader/RouteLoader";
import { act, render, screen } from "@testing-library/react";

describe("Pruebas para el componente RouteLoader", () => {

  beforeEach(() => {
    vi.mock("next/navigation", () => ({
      usePathname: () => "/",
    }));
  });

  it("Deberia renderizar el componente correctamente", () => {
    render(<RouteLoader />);
    const loader = screen.getByTestId("route-loader");
    expect(loader).toBeInTheDocument();
  });

  it("Deberia mostrar el spinner de carga", () => {
    render(<RouteLoader />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("Deberia ocultar el loader después de 500ms", async() => {
    vi.useFakeTimers(); 
    render(<RouteLoader />);
    const loader = screen.getByTestId("route-loader");
    expect(loader).toBeInTheDocument();
    await act(async () => {
      vi.advanceTimersByTime(500); 
    })
    expect(loader).not.toBeInTheDocument();
  });
})

