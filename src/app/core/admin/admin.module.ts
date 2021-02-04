import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { AnnouncementCallsComponent } from './announcement-calls/announcement-calls.component';
import { ApplicantMatchupComponent } from './applicant-matchup/applicant-matchup.component';
import { ProposalManagementComponent } from './proposal-management/proposal-management.component';
import { GrantContractManagementComponent } from './grant-contract-management/grant-contract-management.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { GrandMonitoringComponent } from './grand-monitoring/grand-monitoring.component';
import { ExtensionClosureComponent } from './extension-closure/extension-closure.component';
import { UserControlComponent } from './user-control/user-control.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    AnnouncementCallsComponent,
    ApplicantMatchupComponent,
    ProposalManagementComponent,
    GrantContractManagementComponent,
    AccountManagementComponent,
    GrandMonitoringComponent,
    ExtensionClosureComponent,
    UserControlComponent,
    AuditTrailsComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
