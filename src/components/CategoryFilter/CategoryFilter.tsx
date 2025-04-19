interface Props {
    readonly categories: readonly string[];
    readonly selected: string;
    readonly onSelect: (category: string) => void;
  }
  
  export default function CategoryFilter({ categories, selected, onSelect }: Props) {
    return (
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition cursor-pointer ${
            selected === 'Todos' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border-blue-700'
          }`}
          onClick={() => onSelect('Todos')}
          data-testid="category-filter-todos"
        >
          Todos
        </button>
  
        {
        categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition cursor-pointer ${
              selected === cat ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border-blue-700'
            }`}
            onClick={() => onSelect(cat)}
            data-testid={`category-filter-${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }
  