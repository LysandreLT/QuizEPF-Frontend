import { Component } from '@angular/core';


@Component({
  selector: 'create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {
  panels: any[] = [];

  addPanel() {
    this.panels.push({ showContent: 0, checkBoxes: [] });
  }

  toggleContent(panel: any, contentNumber: number) {
    panel.showContent = contentNumber;
  }

  deletePanel(index: number) {
    this.panels.splice(index, 1);
  }

  addCheckBox(panel: any) {
    panel.checkBoxes.push({ checked: false, text: '' });
  }

  deleteCheckBox(panel: any, index: number) {
    panel.checkBoxes.splice(index, 1);
  }


}