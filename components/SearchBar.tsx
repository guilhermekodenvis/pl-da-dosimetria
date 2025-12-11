interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-md py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome, partido ou estado..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-800 transition-colors text-gray-800"
            aria-label="Buscar deputados"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
