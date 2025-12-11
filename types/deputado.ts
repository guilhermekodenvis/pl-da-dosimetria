export type Voto = 'Sim' | 'Não' | 'Abstenção' | 'Ausente';

export type EspectroIdeologico = 'Direita' | 'Centro' | 'Esquerda';

export interface Deputado {
  id: string;
  nome: string;
  partido: string;
  uf: string;
  foto: string;
  voto: Voto;
  espectro: EspectroIdeologico;
}

export type FiltroVoto = 'Todos' | Voto;
