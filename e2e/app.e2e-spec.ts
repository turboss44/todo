import { ToDoProjectPage } from './app.po';

describe('to-do-project App', function() {
  let page: ToDoProjectPage;

  beforeEach(() => {
    page = new ToDoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
