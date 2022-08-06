import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGitComponent } from './login-git.component';

describe('LoginGitComponent', () => {
  let component: LoginGitComponent;
  let fixture: ComponentFixture<LoginGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
