import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoVinhoComponent } from './detalhamento-vinho.component';

describe('DetalhamentoVinhoComponent', () => {
  let component: DetalhamentoVinhoComponent;
  let fixture: ComponentFixture<DetalhamentoVinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoVinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoVinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
