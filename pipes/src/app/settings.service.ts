import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {

    constructor() {
    }

    public getLocate() {
        return 'pt-BR';
    }

}
