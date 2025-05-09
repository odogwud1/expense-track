import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ExpenseAddEditComponent } from './expense-add-edit/expense-add-edit.component';
import { ExpenseGridComponent } from './expense-grid/expense-grid.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';



export const routes: Routes = [
    {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
    {path: 'dashboard', component: ExpenseGridComponent},
    {path: 'add-expense', component: ExpenseAddEditComponent},
    {path: 'list', component: ExpenseListComponent},
    {path: 'edit/:id', component: ExpenseAddEditComponent},
    {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
    {path: '**', redirectTo: 'dashboard'}
    
];