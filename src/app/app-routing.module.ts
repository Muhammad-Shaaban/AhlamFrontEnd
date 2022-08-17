import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamsComponent } from './dreams/dreams.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component'
import { AddNewPurchasesComponent } from './purchases/add-new-purchases/add-new-purchases.component';
import { UpdatePurchaseComponent } from './purchases/update-purchase/update-purchase.component';
import { AlldreamslistsComponent } from './alldreamslists/alldreamslists.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: StatisticsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'editEmployee/:id', component: EditEmployeeComponent},
  {path: 'dreams', component: DreamsComponent},
  {path: 'allDreams', component: AlldreamslistsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'purchases', component: PurchasesComponent},
  {path: 'addNewPurchase', component: AddNewPurchasesComponent, pathMatch: 'full'},
  {path: 'updatePurchase/:id', component: UpdatePurchaseComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
