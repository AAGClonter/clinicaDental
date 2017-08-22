import { SixthAppPage } from './app.po';

describe('sixth-app App', () => {
  let page: SixthAppPage;

  beforeEach(() => {
    page = new SixthAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
