import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVComponent } from './cv.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CV } from '../../models/cv';

describe('CVComponent', () => {
  let component: CVComponent;
  let fixture: ComponentFixture<CVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CVComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({'records': [
              new CV(), new CV(), new CV(), new CV(), new CV(),
            ]}),
          },
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the values by the route', () => {
    component.loadCVs()
    expect(component.cvs.length).toBe(5);
  });
});
