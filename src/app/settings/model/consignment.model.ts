import { Service } from './service.model';
import { ShipperAddress } from './shipper-address.model';
import { ReceiverAddress } from './receiver-address.model';
import { Piece } from './piece.model';
import { TrackAndTraceInfo } from './trackAndTraceInfo.model';

export interface Consignment {
  userId?: string;
  login: string;
  consignmentId?: number; // Tylko odpowiedź. Identyfikator przesyłki (jeśli przesyłka jest już utworzona, w przeciwnym wypadku pole puste).
  creationDate?: string; // Tylko odpowiedź. Data utworzenia przesyłki, w formacie RRRR-MM-DD (jeśli przesyłka jest już utworzona, w przeciwnym wypadku pole puste).
  status?: string; // Tylko odpowiedź. Informacja czy do tej przesyłki jest zamówiony kurier.
  shipper: ShipperAddress; // Dane nadawcy przekazywane w strukturze adresowej.
  receiver: ReceiverAddress; // Dane odbiorcy przekazywane w strukturze adresowej.
  piece: Piece; // Dane dotyczące paczek, lista elementów typu PieceDefinition.
  payerType: string; // Wartość słownikowa: RECEIVER - płatnik odbiorca (dla paymentMethod == CASH), SHIPPER - płatnik nadawca (dla paymentMethod == BANK_TRANSFER), USER - płatnik trzecia strona (dla paymentMethod == BANK_TRANSFER).
  service: Service; // Dane dotyczące wybranej usługi przewozowej i usług dodatkowych.
  shipmentDate: string; // Data nadania (widoczna na liście przewozowym) - w formacie RRRR-MM-DD.
  comment?: string; // 100 Dodatkowy komentarz (widoczny na liście przewozowym).
  content: string; // 30 Zawartość przesyłki.
  shipmentDateTime?: string;
  labelPath?: string;
  letterPath?: string;
  trackAndTraceInfo?: [TrackAndTraceInfo];
  settled?: boolean;
}
