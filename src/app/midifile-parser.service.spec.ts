import { TestBed } from '@angular/core/testing';

import { MIDIFileParserService } from './midifile-parser.service';

describe('MIDIFileParserService', () => {
  let service: MIDIFileParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MIDIFileParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
