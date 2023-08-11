import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../app/basic/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should bring information about bulbasaur', (done) => {
    service.getPokemon(1)
      .subscribe(pokemon => {
        expect(pokemon.name).toBe('bulbasaur');
        done();
      })
  })
});
