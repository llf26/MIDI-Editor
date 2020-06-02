import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-editor',
  templateUrl: './track-editor.component.html',
  styleUrls: ['./track-editor.component.css']
})
export class TrackEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _midiFile: File;

  @Input() midiFile: File;

}
