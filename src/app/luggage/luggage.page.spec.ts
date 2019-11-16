import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuggagePage } from './luggage.page';

describe('LuggagePage', () => {
  let component: LuggagePage;
  let fixture: ComponentFixture<LuggagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuggagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuggagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
