import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLoginPageComponent } from './pages/basic-login-page/basic-login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic-form' },
  { path: 'basic-login', component: BasicLoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule { }
