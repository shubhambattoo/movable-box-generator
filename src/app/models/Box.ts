class Box {
  isSelected: boolean;
  id: number;
  isDisabled?: boolean;
  constructor(isSelected, id, isDisabled = false) {
    this.isSelected = isSelected;
    this.id = id;
    this.isDisabled = isDisabled;
  }
}

export default Box;
