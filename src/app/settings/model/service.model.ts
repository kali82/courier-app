export interface Service {
  CoD?: boolean; // Wybór usługi opłata za pobraniem.
  CoDValue?: number; // Kwota pobrania w PLN, z dokładnością do groszy, maksymalnie 11000,00 zł. Wymagana gdy CoD == true.
  insurance?: boolean; // Wybór usługi ubezpieczenie.
  insuranceValue?: number; // Wartość przesyłki do ubezpieczenia, z dokładnością do groszy, maksymalnie ????? zł. Wymagana gdy insurance == true.
}
