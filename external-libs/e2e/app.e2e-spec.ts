import { ExternalLibsPage } from './app.po';

describe('external-libs App', () => {
  let page: ExternalLibsPage;

  beforeEach(() => {
    page = new ExternalLibsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
