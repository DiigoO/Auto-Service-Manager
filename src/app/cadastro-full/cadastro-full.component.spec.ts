import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFullComponent } from './cadastro-full.component';

describe('CadastroFullComponent', () => {
  let component: CadastroFullComponent;
  let fixture: ComponentFixture<CadastroFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
