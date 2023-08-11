import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from '../../../../src/app/basic/charizard/charizard.component';
import { PokemonService } from '../../../../src/app/basic/services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  })

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('shoul be match with snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  })

  test('shoul display a loading at init', () => {
    const h3 = compiled.querySelector('h3');

    expect(h3?.textContent).toContain('Loading')
  })

  test('shoul charge charizard inmediatly', () => {

    const dummyPokemon = {
      name: 'charizardo',
      sprites: {
        front_default: 'https//charizard.com/sprite.png'
      }
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);

    fixture.detectChanges();
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLowerCase()).toContain(dummyPokemon.name.toLowerCase());
    expect(img?.src).toBe(`http://localhost/${dummyPokemon.sprites.front_default}`);
    expect(img?.alt).toBe(dummyPokemon.name);
  })
});
