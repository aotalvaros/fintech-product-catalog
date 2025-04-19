import Header from "../../../src/components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Pruebas en el componente Header", () => {

  test("Deberia mostrar el logo de la empresa", () => {
    render(<Header />);
    const logo = screen.getByText(/fintech xyz/i);
    expect(logo).toBeInTheDocument();
  });

  test("Deberia mostrar el icono de dolar", () => {
    render(<Header />);
    const icon = screen.getByTestId("lucide-dollar-sign");
    expect(icon).toBeInTheDocument();
  });

  test("Deberia mostrar los enlaces de navegación", () => {
    render(<Header />);
    const homeLink = screen.getByTestId("home-link");
    const aboutLink = screen.getByTestId("about-link");
    const contactLink = screen.getByTestId("contact-link");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

})