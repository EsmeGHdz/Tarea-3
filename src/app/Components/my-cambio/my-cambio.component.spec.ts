import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCambioComponent } from './my-cambio.component';

describe('MyCambioComponent', () => {
  let component: MyCambioComponent;
  let fixture: ComponentFixture<MyCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCambioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
