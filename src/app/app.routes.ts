import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ExpenseAddEditComponent } from './expense-add-edit/expense-add-edit.component';
import { ExpenseGridComponent } from './expense-grid/expense-grid.component';
import { ExpenseDashboardComponent } from './expense-dashboard/expense-dashboard.component';
<<<<<<< HEAD
=======

>>>>>>> 876c57d621b672c68815de8c1d8d3309417dcb81


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ExpenseDashboardComponent },
  { path: 'add-expense', component: ExpenseAddEditComponent },
  { path: 'list', component: ExpenseGridComponent },
  { path: 'edit/:id', component: ExpenseAddEditComponent },
  { path: '**', redirectTo: 'dashboard' },
];
