import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSalvosComponent } from './posts-salvos.component';

describe('PostsSalvosComponent', () => {
  let component: PostsSalvosComponent;
  let fixture: ComponentFixture<PostsSalvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsSalvosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsSalvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
