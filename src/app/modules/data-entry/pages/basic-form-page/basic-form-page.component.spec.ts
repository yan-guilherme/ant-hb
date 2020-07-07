import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicFormPageComponent } from './basic-form-page.component';

describe('BasicFormPageComponent', () => {
  let component: BasicFormPageComponent;
  let fixture: ComponentFixture<BasicFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
