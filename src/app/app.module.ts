import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EmployeesComponent } from './employees/employees.component';
import { DreamsComponent } from './dreams/dreams.component';
import { UsersComponent } from './users/users.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { AddNewPurchasesComponent } from './purchases/add-new-purchases/add-new-purchases.component';
import { UpdatePurchaseComponent } from './purchases/update-purchase/update-purchase.component'
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth'
// import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StatisticsComponent,
    EmployeesComponent,
    DreamsComponent,
    UsersComponent,
    PurchasesComponent,
    LoginComponent,
    EditEmployeeComponent,
    AddNewPurchasesComponent,
    UpdatePurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /// https://api2.fsrhilmak.com
  public static API_ENDPOINT = "https://api2.fsrhilmak.com";
}
