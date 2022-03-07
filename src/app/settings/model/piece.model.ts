export interface Piece {
  type: string; // Jedna z wartości: "ENVELOPE", "PACKAGE", "PALLET".
  weight?: number; // Waga w kilogramach, wymagana gdy typ inny niż "ENVELOPE".
  width?: number; // Szerokość w centymetrach, wymagana gdy typ inny niż "ENVELOPE".
  length?: number; // Długość w centymetrach, wymagana gdy typ inny niż "ENVELOPE".
  height?: number; // Wysokość w centymetrach, wymagana gdy typ inny niż "ENVELOPE".
  quantity: number; // Liczba paczek.
  nonStandard?: boolean; // Czy paczka jest niestandardowa (wg definicji z cennika).
}
