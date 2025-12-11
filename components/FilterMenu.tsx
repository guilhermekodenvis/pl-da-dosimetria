import { FiltroVoto } from '@/types/deputado';

interface FilterMenuProps {
  activeFilter: FiltroVoto;
  onFilterChange: (filter: FiltroVoto) => void;
  resultCount: number;
}

const filters: FiltroVoto[] = ['Todos', 'Sim', 'Não', 'Abstenção', 'Ausente'];

const filterColors: Record<FiltroVoto, string> = {
  'Todos': 'bg-gray-600 hover:bg-gray-700',
  'Sim': 'bg-green-600 hover:bg-green-700',
  'Não': 'bg-red-600 hover:bg-red-700',
  'Abstenção': 'bg-yellow-600 hover:bg-yellow-700',
  'Ausente': 'bg-gray-500 hover:bg-gray-600',
};

export default function FilterMenu({ activeFilter, onFilterChange, resultCount }: FilterMenuProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="mb-3 text-center">
          <p className="text-sm font-semibold text-gray-700">
            {resultCount} {resultCount === 1 ? 'deputado encontrado' : 'deputados encontrados'}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const baseColors = filterColors[filter];
            
            return (
              <button
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`
                  px-4 py-2 rounded-lg font-semibold text-white text-sm
                  transition-all duration-200
                  ${isActive 
                    ? `${baseColors} scale-105 shadow-lg ring-2 ring-offset-2 ring-blue-800` 
                    : `${baseColors} opacity-75`
                  }
                `}
                aria-pressed={isActive}
                aria-label={`Filtrar por ${filter}`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
