import {LOCALE_ID} from '@angular/core';

export function getTranslationProviders(): Promise<Object[]> {
    // Get the locale id from the global
    const locale = document['locale'] as string;
    // return no providers if fail to get translation file for locale
    const noProviders: Object[] = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en-US') {
        return Promise.resolve(noProviders);
    }
    return Promise.resolve([
        {
            provide: LOCALE_ID,
            useValue: locale
        }
    ]);
}