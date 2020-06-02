import { Injectable } from '@angular/core';
import { parseArrayBuffer } from 'midi-json-parser'

@Injectable({
  providedIn: 'root'
})
export class MIDIFileParserService {

  constructor() { }

  public getJSONFromMIDIFile(midiFile: File) {
    midiFile.arrayBuffer().then(buffer=>{
      parseArrayBuffer(buffer).then(json=>{
        return json;
      })
    })      
  }
}
