import { TestBed } from '@angular/core/testing';

import { APIComentariosService } from './api-comentarios.service';

describe('APIComentariosService', () => {
  let service: APIComentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIComentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
