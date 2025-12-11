'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import DeputadoCard from '@/components/DeputadoCard';
import FilterMenu from '@/components/FilterMenu';
import { Deputado, FiltroVoto } from '@/types/deputado';
import deputadosData from '@/data/deputados.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FiltroVoto>('Todos');

  const deputados = deputadosData as Deputado[];

  const filteredDeputados = useMemo(() => {
    let filtered = deputados;

    // Apply vote filter
    if (activeFilter !== 'Todos') {
      filtered = filtered.filter((deputado) => deputado.voto === activeFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (deputado) =>
          deputado.nome.toLowerCase().includes(searchLower) ||
          deputado.partido.toLowerCase().includes(searchLower) ||
          deputado.uf.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [deputados, activeFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        {filteredDeputados.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Nenhum deputado encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDeputados.map((deputado) => (
              <DeputadoCard key={deputado.id} deputado={deputado} />
            ))}
          </div>
        )}
      </main>

      <FilterMenu
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultCount={filteredDeputados.length}
      />
    </div>
  );
}
