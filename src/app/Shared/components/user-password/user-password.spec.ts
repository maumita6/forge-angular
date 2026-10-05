import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPassword } from './user-password';

describe('UserPassword', () => {
  let component: UserPassword;
  let fixture: ComponentFixture<UserPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
