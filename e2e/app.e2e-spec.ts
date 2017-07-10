import { Ng2wsPage } from './app.po';

describe('ng2ws App', () => {
  let page: Ng2wsPage;

  beforeEach(() => {
    page = new Ng2wsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
