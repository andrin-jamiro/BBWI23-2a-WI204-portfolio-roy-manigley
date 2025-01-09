import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    const router = (component as any).router as Router;
    routerSpy = spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.formGroup?.setValue({username: 'admin', password: '1234'});
    component.login()
    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });

  it('should not login', () => {
    component.formGroup?.setValue({username: 'admin', password: 'aaaaa'});
    component.login()
    expect(routerSpy).not.toHaveBeenCalledWith(['/']);
  });
});
