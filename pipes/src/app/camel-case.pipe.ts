import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value
            .split(' ')
            .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ')
    }

}
