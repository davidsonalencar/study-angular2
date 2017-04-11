import {Pipe} from '@angular/core';

import {FilterArrayPipe} from '../pipe-pure/filter-array.pipe';

@Pipe({
    name: 'filterArrayImpure',
    pure: false
})
export class FilterArrayImpurePipe extends FilterArrayPipe {
}
