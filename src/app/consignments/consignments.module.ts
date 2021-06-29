import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsignmentsComponent } from './consignments.component';
import { ConsignmentsRoutingModule } from './consignments-routing.module';
import { AngularMaterialModule } from '../material.module';
import { ConsignmentCreateComponent } from './consignment-create/consignment-create.component';
import { ConsignmentListComponent } from './consignment-list/consignment-list.component';
import { CdkDetailRowDirective } from './consignment-list/cdk-detail-row.directive';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPolishPaginatorIntl } from './consignment-list/polish-paginator-intl';
import { ConsignmentShowComponent } from './consignment-show/consignment-show.component';

@NgModule({
  declarations: [
    ConsignmentsComponent,
    ConsignmentCreateComponent,
    ConsignmentListComponent,
    CdkDetailRowDirective,
    ConsignmentShowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ConsignmentsRoutingModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPolishPaginatorIntl() },
  ],
})
export class ConsignmentsModule {}
