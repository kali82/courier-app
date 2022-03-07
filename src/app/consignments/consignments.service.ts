import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { ToastService } from '../shared/toast.service';
import { Consignment } from './model/consignment.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiURL + 'consignments/';

@Injectable({ providedIn: 'root' })
export class ConsignmentsService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  async createConsignment(consignment: Consignment): Promise<any> {
    try {
      const response = await this.http
        .post<{ message: string; consignmentId: number; }>(
          BACKEND_URL + 'create',
          consignment
        )
        .toPromise();
        console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  listConsignments(): Promise<any> {
    const userId = this.authService.getUserId();

    return this.http
      .post<{ message: string; consignments: [] }>(BACKEND_URL, {
        userId: userId,
      })
      .toPromise()
      .then(
        response => {
          if (!response.consignments) {
            this.toastService.showToast(response.message);
          }
          console.log(response)
          return response;
        },
        error => {
          return error;
        }
      );
  }

  getConsignment(consignmentId) {
    return this.http
      .get<{
        message: string;
        login: string;
        consignmentId: number;
        creationDate: string;
        status: string;
        trackAndTraceInfo: [
          {
            status: string;
            description: string;
            timestamp: string;
          }
        ];
        shipper: {
          name: string;
          postalCode: string;
          city: string;
          street: string;
          houseNumber: string;
          apartmentNumber: string;
          contactPerson: string;
          contactPhone: string;
          contactEmail: string;
        };
        receiver: {
          country: string;
          name: string;
          postalCode: string;
          city: string;
          street: string;
          houseNumber: string;
          apartmentNumber: string;
          contactPerson: string;
          contactPhone: string;
          contactEmail: string;
        };
        piece: {
          type: string;
          weight: number;
          width: number;
          length: number;
          height: number;
          quantity: number;
          nonStandard: boolean;
        };
        payerType: string;
        service: {
          CoD: boolean;
          CoDValue: number;
          insurance: boolean;
          insuranceValue: number;
        };
        shipmentDate: string;
        settled: boolean;
        comment: string;
        content: string;
        labelPath: string;
        letterPath: string;
      }>(BACKEND_URL + consignmentId)
      .toPromise()
      .then(
        response => {
          return response;
        },
        error => {
          this.router.navigate(['/consignments']);

          return error;
        }
      );
  }

  deleteConsignments(userName: any, selectedConsignments: {userName: any, consignmentId: any}[]): Promise<any> {
    const userId = this.authService.getUserId();
    console.log(userName);
    console.log(userId);
    return this.http
      .patch<{ message: string; consignmentList: number[] }>(BACKEND_URL, {
        userName,
        selectedConsignments,
        userId,
      })
      .toPromise()
      .then(
        response => {
          this.toastService.showToast(response.message);

          return response;
        },
        error => {
          console.log("delete COnsignemnts error ")
          return error;
        }
      );
  }
  settleConsignments(userName: any, selectedConsignments: {userName: any, consignmentId: any}[]): Promise<any> {
    const userId = this.authService.getUserId();
    this.listConsignments()
    return this.http
      .patch<{ message: string; consignmentList: number[] }>(BACKEND_URL+ 'settle', {
        userName,
        selectedConsignments,
        userId,
      })
      .toPromise()
      .then(
        response => {
          this.toastService.showToast(response.message);
          this.authService.refresh();
          this.listConsignments()
          
          return response;
        },
        error => {
          console.log("settle Consignemnts error ")
          return error;
        }
      );
  }
}
