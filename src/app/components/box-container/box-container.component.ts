import { Component, OnInit } from "@angular/core";
import Box from "./../../models/Box";
import KeyBoardToggle from './../../models/Toggle';

@Component({
  selector: "box-container",
  templateUrl: "./box-container.component.html",
  styleUrls: ["./box-container.component.scss"],
})
export class BoxContainerComponent implements OnInit {
  toggle = KeyBoardToggle.Off;
  boxes: Box[] = [
    {
      id: 1,
      isSelected: false,
      isDisabled : false
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleToggle(): void {
    if (this.toggle === KeyBoardToggle.Off) {
      this.toggle = KeyBoardToggle.On;
    } else if (this.toggle === KeyBoardToggle.On) {
      this.toggle = KeyBoardToggle.Off;
    }
  }

  handleAddBox(): void {
    const id = this.boxes.length + 1;
    const box = new Box(false, id, false);
    this.boxes = [...this.boxes, box];
  }

  trackById(index: number, item: Box): number {
    return item.id;
  }

  handleSelect(id: number) {
    this.boxes = this.boxes.map((box) => {
      box.isSelected = box.id === id;
      return box;
    });
  }
}
