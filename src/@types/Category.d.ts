export type CategoryName = 'Programação' | 'Educação' | 'Ficção' | 'Aventura' | 'Geek' | 'Alegoria' | 'Fábula' | 'Romance' | 'Suspense' | 'Autoajuda' | 'Arquitetura' | 'Terror'

export interface Category {
  id: string;
  name: CategoryName;
}
