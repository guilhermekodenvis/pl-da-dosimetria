import { Deputado } from '@/types/deputado';

interface DeputadoCardProps {
  deputado: Deputado;
}

const votoColors = {
  'Sim': 'bg-green-100 text-green-800 border-green-300',
  'Não': 'bg-red-100 text-red-800 border-red-300',
  'Abstenção': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Ausente': 'bg-gray-100 text-gray-800 border-gray-300',
};

const espectroColors = {
  'Direita': 'text-blue-700',
  'Centro': 'text-purple-700',
  'Esquerda': 'text-red-700',
};

function getInitials(name: string): string {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return parts[0][0] + parts[parts.length - 1][0];
  }
  return parts[0].substring(0, 2);
}

export default function DeputadoCard({ deputado }: DeputadoCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {getInitials(deputado.nome)}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-lg text-gray-900 mb-1 truncate">
              {deputado.nome}
            </h2>
            
            <div className="flex flex-wrap gap-2 text-sm mb-2">
              <span className="font-semibold text-blue-900">
                {deputado.partido}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-700">{deputado.uf}</span>
            </div>
            
            <p className={`text-sm font-medium mb-2 ${espectroColors[deputado.espectro]}`}>
              {deputado.espectro}
            </p>
            
            <div
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border-2 ${
                votoColors[deputado.voto]
              }`}
            >
              {deputado.voto}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
