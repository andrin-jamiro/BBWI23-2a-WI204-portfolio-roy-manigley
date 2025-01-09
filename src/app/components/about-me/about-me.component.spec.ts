import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { AboutMeService } from '../../services/about-me.service';
import { of } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let aboutMeServiceSpy: jasmine.SpyObj<AboutMeService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AboutMeService', ['getAboutMe', 'updateAboutMe']);

    await TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      imports: [FormsModule],
      providers: [
        { provide: AboutMeService, useValue: spy }
      ]
    }).compileComponents();

    aboutMeServiceSpy = TestBed.inject(AboutMeService) as jasmine.SpyObj<AboutMeService>;
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and fetch aboutMe data', () => {
    const mockAboutMe = { name: 'John Doe' };
    aboutMeServiceSpy.getAboutMe.and.returnValue(of(mockAboutMe));

    fixture.detectChanges(); // Triggers ngOnInit

    expect(aboutMeServiceSpy.getAboutMe).toHaveBeenCalled();
    expect(component.aboutMe).toEqual(mockAboutMe);
  });

  it('should update aboutMe on valid form submission', () => {
    component.aboutMe = { name: 'Not John Doe' };
    const mockUpdatedAboutMe = { name: 'Jane Doe' };
    aboutMeServiceSpy.updateAboutMe.and.returnValue(of(mockUpdatedAboutMe));

    // Mock a valid form
    const mockForm = {
      valid: true,
      value: { name: 'Jane Doe' }
    } as NgForm;

    component.submit(mockForm);
    
    expect(aboutMeServiceSpy.updateAboutMe).toHaveBeenCalledWith('Jane Doe');
    expect(component.aboutMe!.name).toBe('Jane Doe');
  });

  it('should alert on invalid form submission', () => {
    spyOn(window, 'alert');

    component.aboutMe = { name: 'Not John Doe' };
    
    // Mock an invalid form
    const mockForm = {
      valid: false,
      value: {}
    } as NgForm;

    component.submit(mockForm);

    expect(window.alert).toHaveBeenCalledWith('The name is not valid');
    expect(aboutMeServiceSpy.updateAboutMe).not.toHaveBeenCalled();
  });
});
