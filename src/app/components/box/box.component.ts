import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import Box from "src/app/models/Box";
import KeyboardToggle from "src/app/models/Toggle";

@Component({
  selector: "box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"],
})
export class BoxComponent implements OnInit {
  @Input() box: Box;
  @Output() tapped = new EventEmitter<number>();
  @Input() isSelected = false;
  @Input() status: KeyboardToggle;
  defaultMoveAmount = 3;
  styleExp = {};
  constructor() {}

  ngOnInit(): void {
    this.styleExp = {
      "z-index": this.box.id,
      left: "0px",
      top: "0px",
      position: "absolute",
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isSelected && changes.isSelected.firstChange) {
      window.addEventListener("keydown", (ev) => {
        if (this.status === KeyboardToggle.Off) {
          ev.preventDefault();
          return;
        }
        if (this.isSelected) {
          const elem: HTMLDivElement = document.querySelector(
            "#shape-" + this.box.id
          );
          elem.style.position = "absolute";
          switch (ev.which) {
            case 37:
            case 65: // left
              elem.style.left =
                parseInt(elem.style.left, 10) - this.defaultMoveAmount + "px";
              break;
            case 38:
            case 87: // top
              elem.style.top =
                parseInt(elem.style.top, 10) - this.defaultMoveAmount + "px";
              break;
            case 39:
            case 68: // right
              elem.style.left =
                parseInt(elem.style.left, 10) + this.defaultMoveAmount + "px";
              break;
            case 40:
            case 83: // bottom
              elem.style.top =
                parseInt(elem.style.top, 10) + this.defaultMoveAmount + "px";
              break;
          }
        }
      });
    }
  }

  handleClick() {
    this.tapped.emit(this.box.id);
  }
}
