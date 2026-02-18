import { TestBed } from '@angular/core/testing';

import { CalsService } from './cals.service';
import { ShareserviceService } from './shareservice.service';


describe('CalsService', () => {
  
  let service: CalsService;
  let shrsrc: ShareserviceService;
  beforeEach(() => {
    shrsrc=jasmine.createSpyObj('ShareserviceService',['myfunction']);
    TestBed.configureTestingModule({
      providers: [ShareserviceService,{
        provide:ShareserviceService,useValue:shrsrc
      }]
    });
    service = TestBed.inject(CalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return correct multiplication', () => {
    const result = service.multiply(2, 3);
    expect(result).toBe(6);
  });
  it('should call myfunction of ShareserviceService', () => {
    service.multiply(2, 3);
    expect(shrsrc.myfunction).toHaveBeenCalled();
  });
});
