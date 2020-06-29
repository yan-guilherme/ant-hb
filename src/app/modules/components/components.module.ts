import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormPageComponent } from './pages/basic-form-page/basic-form-page.component';
import { ComponentsRoutingModule } from './components.routes';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [BasicFormPageComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,

    // ant design
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule
  ]
})
export class ComponentsModule { }
