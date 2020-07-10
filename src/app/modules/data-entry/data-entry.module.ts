import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryRoutingModule } from './data-entry.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { BasicLoginPageComponent } from './pages/basic-login-page/basic-login-page.component';


@NgModule({
  declarations: [BasicLoginPageComponent],
  imports: [
    CommonModule,
    DataEntryRoutingModule,
    ReactiveFormsModule,

    // ant design
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule
  ]
})
export class DataEntryModule { }
