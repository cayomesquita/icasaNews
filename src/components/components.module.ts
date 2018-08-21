import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NewsCardComponent } from "./news-card/news-card.component";
import { AvatarUpdaterComponent } from './avatar-updater/avatar-updater';
@NgModule({
	declarations: [UserInfoComponent,
    UserMenuComponent,
    NewsCardComponent,
    AvatarUpdaterComponent],
	imports: [],
	exports: [UserInfoComponent,
    UserMenuComponent,
    NewsCardComponent,
    AvatarUpdaterComponent]
})
export class ComponentsModule {}
