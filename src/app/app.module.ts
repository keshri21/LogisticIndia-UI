import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule } from '@ngui/map';
import { ToastrModule } from 'ngx-toastr';

import { NotificationsComponent } from './notifications/notifications.component';

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
import { RaiseBillComponent } from './billing/raise-bill/raise-bill.component';
import { BuiltyReceiptUpdateComponent } from './builty/builty-receipt/builty-receipt-update/builty-receipt-update.component';
import { DoRunningListComponent } from './do/do-running/do-running-list/do-running-list.component';
import { FieldEntryApproveComponent } from './reporting/field-entry-approve/field-entry-approve.component'
import { UserComponent } from './user/user.component'
import { UserListComponent } from './user/user-list/user-list.component'
import { LoginComponent } from './authorization/login/login.component'
import { AuthGuard } from './authorization/auth.guards'

import { TruckPanService } from './services/truck.pan.services'
import { BuiltyService } from './services/builty.service'
import { BillingService } from './services/billing.service'
import { DoService } from './services/do.service'
import { UserService } from './services/user.service'
import { ReportService } from './services/report.service'
import { LoginService } from './services/login.service'
import { ErrorPageComponent } from './error/error.page.component'



@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,

    DoRunningComponent,
    DoCompletedComponent,
    DoCreateComponent,
    RegistrationTruckComponent,
    TruckSearchResultsComponent,
    TruckUpdateDetailsComponent,
    BuiltyReceiptComponent,
    BuiltyCreateComponent,
    BuiltyApproveComponent,
    BillGenerateComponent,
    TruckOwnerReportComponent,
    FieldReportSelfComponent,
    DispatchReportCustomerComponent,
    FieldCashBalanceComponent,
    TruckOwnerDetailsComponent,
    FreightReportTruckownerComponent,
    DailyReportPassiveComponent,
    DailyReportOwnerComponent,
    RaiseBillComponent,
    BuiltyReceiptUpdateComponent,
    DoRunningListComponent,
    FieldEntryApproveComponent,
    UserComponent,
    UserListComponent,
    LoginComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' }),

    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    }), // ToastrModule added
    
  ],
  providers: [
    TruckPanService,
    BuiltyService,
    BillingService,
    DoService,
    UserService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
