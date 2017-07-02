import { SkillsPortalWebPage } from './app.po';

describe('skills-portal-web App', () => {
  let page: SkillsPortalWebPage;

  beforeEach(() => {
    page = new SkillsPortalWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
