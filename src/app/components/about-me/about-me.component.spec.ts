import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { AboutMeService } from '../../services/about-me.service';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
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

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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

});
