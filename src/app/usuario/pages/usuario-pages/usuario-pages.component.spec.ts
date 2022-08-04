import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPagesComponent } from './usuario-pages.component';

describe('UsuarioPagesComponent', () => {
  let component: UsuarioPagesComponent;
  let fixture: ComponentFixture<UsuarioPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
