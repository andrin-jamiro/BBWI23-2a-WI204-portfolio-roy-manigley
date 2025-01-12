import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { AboutMeService } from '../../services/about-me.service';
=======
import { AboutMeService } from '../../services/about-me.service';
import { of } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
>>>>>>> 8f4937d944945e2ba22f5a506f5d6d6c581f7de1

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
<<<<<<< HEAD
  let aboutMeServiceMock: jasmine.SpyObj<AboutMeService>;

  beforeEach(async () => {
    // Mock für AboutMeService
    aboutMeServiceMock = jasmine.createSpyObj('AboutMeService', ['getAboutMe', 'updateAboutMe']);
    aboutMeServiceMock.getAboutMe.and.returnValue(of({ name: 'Test User' }));
    aboutMeServiceMock.updateAboutMe.and.returnValue(of({ name: 'Updated User' }));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [AboutMeComponent],
      providers: [
        { provide: AboutMeService, useValue: aboutMeServiceMock }
      ]
    }).compileComponents();

=======
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
>>>>>>> 8f4937d944945e2ba22f5a506f5d6d6c581f7de1
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
  it('should fetch and set aboutMe data on initialization', () => {
    // Überprüfen, ob die Daten bei der Initialisierung korrekt geladen werden
    component.ngOnInit();

    expect(aboutMeServiceMock.getAboutMe).toHaveBeenCalled();
    expect(component.aboutMe).toEqual({ name: 'Test User' });
  });


  it('should validate the form as valid when the name is valid', () => {
    // Mock das Formular mit einem validen Wert
    const form: NgForm = {
      valid: true,
      value: { name: 'Valid Name' },
      reset: jasmine.createSpy('reset'),
      controls: {}
    } as unknown as NgForm;

    component.submit(form);

    expect(aboutMeServiceMock.updateAboutMe).toHaveBeenCalledWith('Valid Name');
    expect(component.aboutMe?.name).toBe('Updated User');
  });

  it('should alert when the form is invalid', () => {
    // Mock das Formular mit einem ungültigen Wert
    const form: NgForm = {
      valid: false,
      value: { name: '' },
      reset: jasmine.createSpy('reset'),
      controls: {}
    } as unknown as NgForm;

    spyOn(window, 'alert');
    component.submit(form);

    expect(window.alert).toHaveBeenCalledWith('The name is not valid');
    expect(aboutMeServiceMock.updateAboutMe).not.toHaveBeenCalled();
  });

=======
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
>>>>>>> 8f4937d944945e2ba22f5a506f5d6d6c581f7de1
});
