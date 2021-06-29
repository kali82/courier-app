export interface ShipperAddress {
  name: string; // 60 Nazwa firmy lub imię i nazwisko.
  postalCode: string; // 10 Kod pocztowy, bez myślnika.
  city: string; // 17 Nazwa miejscowości.
  street: string; // 35 Ulica.
  houseNumber: string; // 10 Numer domu.
  apartmentNumber?: string; // 10 Numer mieszkania.
  contactPerson?: string; // 60 Imię i nazwisko osoby kontaktowej.
  contactPhone?: string; // 20 Kontaktowy numer telefonu.
  contactEmail?: string; // 60 Kontaktowy adres email.
}
