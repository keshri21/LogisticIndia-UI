import { Routes } from '@angular/router';

import { DoRunningComponent } from './do/do-running/do-running.component';
import { DoCompletedComponent } from './do/do-completed/do-completed.component';
import { DoCreateComponent } from './do/do-create/do-create.component';
import { RegistrationTruckComponent } from './registration-truck/registration-truck.component';
import { TruckSearchResultsComponent } from './registration-truck/truck-search-results/truck-search-results.component';
import { TruckUpdateDetailsComponent } from './registration-truck/truck-update-details/truck-update-details.component';
import { BuiltyReceiptComponent } from './builty/builty-receipt/builty-receipt.component';
import { BuiltyCreateComponent } from './builty/builty-create/builty-create.component';
import { BuiltyApproveComponent } from './builty/builty-approve/builty-approve.component';
import { BillGenerateComponent } from './billing/raise-bill/bill-generate/bill-generate.component';
import { TruckOwnerReportComponent } from './registration-truck/truck-owner-report/truck-owner-report.component';
import { FieldReportSelfComponent } from './reporting/field-report-self/field-report-self.component';
import { DispatchReportCustomerComponent } from './reporting/dispatch-report-customer/dispatch-report-customer.component';
import { FieldCashBalanceComponent } from './reporting/field-cash-balance/field-cash-balance.component';
import { TruckOwnerDetailsComponent } from './registration-truck/truck-owner-details/truck-owner-details.component';
import { FreightReportTruckownerComponent } from './reporting/freight-report-truckowner/freight-report-truckowner.component';
import { DailyReportPassiveComponent } from './reporting/daily-report-passive/daily-report-passive.component';
import { DailyReportOwnerComponent } from './reporting/daily-report-owner/daily-report-owner.component';
import { DoRunningListComponent } from './do/do-running/do-running-list/do-running-list.component';
import { RaiseBillComponent } from './billing/raise-bill/raise-bill.component';
import { FieldEntryApproveComponent } from './reporting/field-entry-approve/field-entry-approve.component';
import { UserComponent} from './user/user.component'

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'createdo',
        pathMatch: 'full',
    },
    {
        path: "runningdo",
        component: DoRunningComponent
    },
    {
        path: "completedo",
        component: DoCompletedComponent
    },
    {
        path: "createdo",
        component: DoCreateComponent
    },
    {
        path: "register_truck",
        component: RegistrationTruckComponent
    },
    {
        path: "search_truck",
        component: TruckSearchResultsComponent
    },
    {
        path: "truckupdate",
        component: TruckUpdateDetailsComponent
    },
    {
        path: "builtyreceipt",
        component: BuiltyReceiptComponent
    },
    {
        path: "builtycreate",
        component: BuiltyCreateComponent
    },
    {
        path: "builtyapprove",
        component: BuiltyApproveComponent
    },
    {
        path: "billgenerate",
        component: BillGenerateComponent
    },
    {
        path: "truckownerreport",
        component: TruckOwnerReportComponent
    },
    {
        path: "fieldreport",
        component: FieldReportSelfComponent
    },
    {
        path: "dispatchreport",
        component: DispatchReportCustomerComponent
    },
    {
        path: "cashbalance",
        component: FieldCashBalanceComponent
    },
    {
        path: "truckownerdetails",
        component: TruckOwnerDetailsComponent
    },
    {
        path: "freightreport",
        component: FreightReportTruckownerComponent
    },
    {
        path: "reportpassive",
        component: DailyReportPassiveComponent
    },
    {
        path: "reportowner",
        component: DailyReportOwnerComponent
    },
    {
        path: "runningdolist",
        component: DoRunningListComponent
    },
    {
        path: "raisebill",
        component: RaiseBillComponent
    },
    {
        path: 'fieldentry',
        component: FieldEntryApproveComponent
    },
    {
        path: 'adduser',
        component: UserComponent
    }
]
