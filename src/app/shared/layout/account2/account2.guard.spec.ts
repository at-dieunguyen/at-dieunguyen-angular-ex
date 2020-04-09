import { TestBed } from '@angular/core/testing';

import { Account2Guard } from './account2.guard';

describe('Account2Guard', () => {
  let guard: Account2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Account2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
