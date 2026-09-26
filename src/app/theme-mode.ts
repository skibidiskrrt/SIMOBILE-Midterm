import { Service } from '@angular/core';

@Service()
export class ThemeMode {
    darkMode: boolean = false;
    backgroundColor: string = '#ffffff';
    textColor: string = '#000000';
    itemColor: string = '#ffffff';

    constructor() {

    }

    changeTheme() {
        if(this.darkMode == true) {
            this.backgroundColor = '#1e1e1e';
            this.textColor = '#ffffff';
            this.itemColor = '#2b2b2b';
        } 
        else {
            this.backgroundColor = '#ffffff';
            this.textColor = '#000000';
            this.itemColor = '#ffffff';
        }
    }
}
