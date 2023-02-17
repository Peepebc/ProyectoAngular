import { TestBed } from '@angular/core/testing';

import { APIFavoritosService } from './apifavoritos.service';

describe('APIFavoritosService', () => {
  let service: APIFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
