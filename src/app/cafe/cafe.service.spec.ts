import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeComponent } from './cafe.component';
import { CafeService } from './cafe.service';
import { of } from 'rxjs';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let cafeService: CafeService;
  let mockCafeService;

  beforeEach(() => {
    // Crear un servicio mock con un listado de cafés
    mockCafeService = {
      getCafe: jasmine.createSpy('getCafe').and.returnValue(of([
        { id: 1, nombre: 'Café 1', tipo: 'Blend', region: 'Región 1' },
        { id: 2, nombre: 'Café 2', tipo: 'Café de Origen', region: 'Región 2' },
        { id: 3, nombre: 'Café 3', tipo: 'Blend', region: 'Región 3' }
      ]))
    };

    TestBed.configureTestingModule({
      declarations: [ CafeComponent ],
      // Proveer el mock service en lugar del servicio real
      providers: [ { provide: CafeService, useValue: mockCafeService } ]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    // Obtener la instancia del servicio inyectado en el componente
    cafeService = TestBed.inject(CafeService);
    fixture.detectChanges(); // Llamar a la detección de cambios para iniciar ngOnInit
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });

  it('debe llenar la tabla con tres filas de cafés', () => {
    // Verificar que el servicio se llamó una vez
    expect(cafeService.getCafe).toHaveBeenCalled();

    // Verificar que la tabla tiene tres filas más el encabezado
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });

});
