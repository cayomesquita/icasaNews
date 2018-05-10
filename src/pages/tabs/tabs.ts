import { Component } from '@angular/core';

import { StaffPage } from './../staff/staff';
import { TeamPage } from './../team/team';
import { NewsPage } from './../news/news';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1News = NewsPage;
  tab2Team = TeamPage;
  tab3Staff = StaffPage;

  constructor() {

  }
}
