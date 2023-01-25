export interface Characters {
  info: PageInfo;
  results: Character[];
}

interface PageInfo {
  next?: number;
  pages?: number;
  prev?: number;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  species?: string;
  gender?: string;
}
