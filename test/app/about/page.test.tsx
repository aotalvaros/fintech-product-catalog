import AboutPage from "../../../src/app/about/page";
import { render, screen } from "@testing-library/react";

describe("Pruebas en la página de About", () => {

  test("Deberia mostrar el título y la descripción correctamente", () => {
    render(<AboutPage />);

    const title = screen.getByText(/Sobre Nosotros/i);
    const description = screen.getByText(
      /Somos Fintech XYZ, una empresa ficticia dedicada a ofrecer soluciones financieras digitales seguras y accesibles./i
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("Deberia tener la clase de estilo correcta", () => {
    render(<AboutPage />);

    const title = screen.getByText(/Sobre Nosotros/i);
    const description = screen.getByText(
      /Somos Fintech XYZ, una empresa ficticia dedicada a ofrecer soluciones financieras digitales seguras y accesibles./i
    );

    expect(title).toHaveClass("text-2xl font-bold mb-4");
    expect(description).toHaveClass("text-gray-700");
  });

})
