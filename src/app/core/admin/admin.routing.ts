import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementCallsComponent } from './announcement-calls/announcement-calls.component';
import { ApplicantMatchupComponent } from './applicant-matchup/applicant-matchup.component';
import { ProposalManagementComponent } from './proposal-management/proposal-management.component';
import { GrantContractManagementComponent } from './grant-contract-management/grant-contract-management.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { GrandMonitoringComponent } from './grand-monitoring/grand-monitoring.component';
import { ExtensionClosureComponent } from './extension-closure/extension-closure.component';
import { ReportComponent } from './report/report.component';
import { UserControlComponent } from './user-control/user-control.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pre-award',
                children: [
                    {
                        path: 'announcement-calls',
                        component: AnnouncementCallsComponent
                    },
                    {
                        path: 'applicant-match-up',
                        component: ApplicantMatchupComponent
                    },
                    {
                        path: 'proposal-management',
                        component: ProposalManagementComponent
                    },
                    {
                        path: 'grant-contract-management',
                        component: GrantContractManagementComponent
                    },
                    {
                        path: 'account-management',
                        component: AccountManagementComponent
                    },
                    
                ]
            },
            {
                path: 'post-award',
                children: [
                    {
                        path: 'grant-monitoring',
                        component: GrandMonitoringComponent
                    },
                    {
                        path: 'extension-closure',
                        component: ExtensionClosureComponent
                    },
                    {
                        path: 'report',
                        component: ReportComponent
                    },
                ]
            },
            {
                path: 'system-management',
                children: [
                    {
                        path: 'user-control',
                        component: ManagementUserComponent
                    },
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                ]
            },
        ]
    }
]