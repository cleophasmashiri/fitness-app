import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  workouts = ['Pushups', 'Mountain Climping', 'Jumps'];

  @Output()
  startNewTraining = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartNewTraining() {
    this.startNewTraining.emit();
  }

}
