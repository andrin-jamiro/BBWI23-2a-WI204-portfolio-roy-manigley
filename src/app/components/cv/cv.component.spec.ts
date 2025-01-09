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
            data: of(
              {
                'records': [
                  new CV('Alpha', 1, 1), 
                  new CV('Bravo', 1, 2), 
                  new CV('Charlie', 1, 3), 
                  new CV('Delta', 1, 4), 
                  new CV('Echo', 1, 5),
                ]
              }
          ),
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

  it('should sort the CVs by end DESC', () => {
    component.loadCVs()
    expect(component.cvs[0].employer).toBe('Echo');
    expect(component.cvs[1].employer).toBe('Delta');
    expect(component.cvs[2].employer).toBe('Charlie');
    expect(component.cvs[3].employer).toBe('Bravo');
    expect(component.cvs[4].employer).toBe('Alpha');
  });
});
