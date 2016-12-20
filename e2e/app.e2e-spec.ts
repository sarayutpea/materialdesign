import { MaterialdesignPage } from './app.po';

describe('materialdesign App', function() {
  let page: MaterialdesignPage;

  beforeEach(() => {
    page = new MaterialdesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
