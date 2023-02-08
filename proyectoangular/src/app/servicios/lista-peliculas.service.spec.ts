import { TestBed } from '@angular/core/testing';

import { ListaPeliculasService } from './lista-peliculas.service';

describe('ListaPeliculasService', () => {
  let service: ListaPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
