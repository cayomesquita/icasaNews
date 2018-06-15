import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NewsCardComponent } from "./news-card/news-card.omponent";
@NgModule({
	declarations: [UserInfoComponent,
    UserMenuComponent,
    NewsCardComponent],
	imports: [],
	exports: [UserInfoComponent,
    UserMenuComponent,
    NewsCardComponent]
})
export class ComponentsModule {}
