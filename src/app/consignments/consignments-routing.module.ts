import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsignmentListComponent } from './consignment-list/consignment-list.component';
import { ConsignmentCreateComponent } from './consignment-create/consignment-create.component';
import { ConsignmentShowComponent } from './consignment-show/consignment-show.component';

const routes: Routes = [
  { path: '', component: ConsignmentListComponent },
  { path: 'create', component: ConsignmentCreateComponent },
  { path: ':consignmentId', component: ConsignmentShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsignmentsRoutingModule {}
