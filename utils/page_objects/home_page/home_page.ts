import { BasePage } from '../base_page/base_page';

export class HomePage extends BasePage{
    static URL = 'https://www.epam.com/';
    url: string;
    constructor() {
    super();
    this.url = "https://www.epam.com/";
  }
  open() {
    return super.open(this.url);
  }
}