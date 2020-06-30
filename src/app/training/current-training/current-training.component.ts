import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer: any;

  @Output()
  trainingStopped = new EventEmitter<void>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    const stopResult = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });
    clearInterval(this.timer);

    stopResult.afterClosed().subscribe(result => {
      if (result) {
        this.trainingStopped.emit()
      } else {
        this.startTimer();
      }
    });
  }

}
