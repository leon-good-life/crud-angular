import { CrudAngularPage } from './app.po';

describe('crud-angular App', () => {
  let page: CrudAngularPage;

  beforeEach(() => {
    page = new CrudAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
