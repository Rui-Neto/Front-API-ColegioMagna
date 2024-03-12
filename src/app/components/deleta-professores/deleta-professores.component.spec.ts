import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaProfessoresComponent } from './deleta-professores.component';

describe('DeletaProfessoresComponent', () => {
  let component: DeletaProfessoresComponent;
  let fixture: ComponentFixture<DeletaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaProfessoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
