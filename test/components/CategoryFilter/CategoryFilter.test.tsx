import { vi } from "vitest";
import CategoryFilter from "../../../src/components/CategoryFilter/CategoryFilter";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pruebas para el componente CategoryFilter", () => {

  const categories = ["Category 1", "Category 2", "Category 3"];
  const selected = "Category 1";
  const onSelect = vi.fn();

  beforeEach(() => {
    render(
      <CategoryFilter
        categories={categories}
        selected={selected}
        onSelect={onSelect}
      />
    );
  });

  test("Renderiza correctamente el componente", () => {
    expect(screen.getByText("Todos")).toBeInTheDocument();
    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  test("El botón 'Todos' tiene la clase correcta cuando está seleccionado", () => {
    const todosButton = screen.getByTestId("category-filter-todos");
    expect(todosButton).toHaveClass(" px-4 py-2 rounded-full text-sm font-semibold border transition cursor-pointer bg-white text-blue-700 border-blue-700");
  });

  test("El botón 'Todos' tiene la clase correcta cuando no está seleccionado", () => {
    const todosButton = screen.getByTestId("category-filter-todos");
    fireEvent.click(todosButton);
    expect(todosButton).toHaveClass("bg-white text-blue-700 border-blue-700");
  });

  test("Llama a la función onSelect con el valor correcto al hacer clic en un botón de categoría", () => {
    const categoryButton = screen.getByTestId("category-filter-Category 2");
    fireEvent.click(categoryButton);
    expect(onSelect).toHaveBeenCalledWith("Category 2");
  });

})