import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormPageComponent } from './pages/basic-form-page/basic-form-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic-form' },
  { path: 'basic-form', component: BasicFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule { }
