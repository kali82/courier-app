import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { ConsignmentsService } from '../consignments.service';
import { Consignment } from '../model/consignment.model';
import { environment } from '../../../environments/environment';

const SERVER_URL = environment.serverUrl;

@Component({
  templateUrl: './consignment-show.component.html',
  styleUrls: ['./consignment-show.component.css'],
})
export class ConsignmentShowComponent implements OnInit, OnDestroy {
  isLoading = true;
  consignment: Consignment;
  private authStatusSub: Subscription;

  constructor(
    public consignmentsService: ConsignmentsService,
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(() => {
        this.isLoading = false;
      });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('consignmentId')) {
        const consignmentId = paramMap.get('consignmentId');
        this.isLoading = true;
        this.getConsignment(consignmentId);
      } else {
        this.router.navigate(['/consignments']);
      }
    });
  }

  getConsignment(consignmentId: string) {
    this.consignmentsService.getConsignment(consignmentId).then(
      data => {
        this.isLoading = false;
        this.consignment = {
          login: data.login,
          consignmentId: data.consignmentId,
          creationDate: data.creationDate,
          status: data.status,
          shipper: data.shipper,
          receiver: data.receiver,
          piece: data.piece,
          payerType: data.payerType,
          service: data.service,
          shipmentDate: data.shipmentDate,
          comment: data.comment,
          content: data.content,
          labelPath: SERVER_URL + data.labelPath,
          letterPath: SERVER_URL + data.letterPath,
          trackAndTraceInfo: data.trackAndTraceInfo,
        };
      },
      error => {}
    );
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + '-' + month + '-' + year;
  }

  open(filePath) {
    window.open(filePath, '_blank');
  }

  onDelete() {
    const consignmentId = [{userName: this.consignment.login, consignmentId: this.consignment.consignmentId}];
    const userName = [this.consignment.login];
    this.consignmentsService.deleteConsignments(userName, consignmentId).then(
      () => {
        this.router.navigate(['/consignments']);
      },
      error => {}
    );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
