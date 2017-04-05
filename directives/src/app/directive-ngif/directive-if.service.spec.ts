import {TestBed, inject} from '@angular/core/testing';

import {DirectiveIfService} from './directive-if.service';

describe('DirectiveIfService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DirectiveIfService]
        });
    });

    it('should ...', inject([DirectiveIfService], (service: DirectiveIfService) => {
        expect(service).toBeTruthy();
    }));
});
