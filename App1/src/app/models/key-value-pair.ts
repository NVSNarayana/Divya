export class KeyValuePair {
    key: string;
    value: string;
    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }
}
export class SelectedKeyValuePair extends KeyValuePair {
    isSelected: boolean;
    constructor(key: string, value: string, isSelected: boolean = false) {
        super(key, value);
        this.isSelected = isSelected;
    }
}