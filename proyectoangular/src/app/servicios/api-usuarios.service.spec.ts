import { TestBed } from '@angular/core/testing';

import { APIUsuariosService } from './api-usuarios.service';

describe('APIUsuariosService', () => {
  let service: APIUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
