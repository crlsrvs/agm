import { AgmPage } from './app.po';

describe('agm App', function() {
  let page: AgmPage;

  beforeEach(() => {
    page = new AgmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
