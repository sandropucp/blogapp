import { BlogappPage } from './app.po';

describe('blogapp App', function() {
  let page: BlogappPage;

  beforeEach(() => {
    page = new BlogappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
