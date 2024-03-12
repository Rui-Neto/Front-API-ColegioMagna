import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaProfessoresComponent } from './atualiza-professores.component';

describe('AtualizaProfessoresComponent', () => {
  let component: AtualizaProfessoresComponent;
  let fixture: ComponentFixture<AtualizaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaProfessoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
