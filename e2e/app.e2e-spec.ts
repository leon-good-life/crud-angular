import { NgCRUDPage } from './app.po';

describe('ng-crud App', function() {
  let page: NgCRUDPage;

  beforeEach(() => {
    page = new NgCRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
