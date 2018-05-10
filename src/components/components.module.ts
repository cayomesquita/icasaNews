import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
@NgModule({
	declarations: [UserInfoComponent,
    UserMenuComponent],
	imports: [],
	exports: [UserInfoComponent,
    UserMenuComponent]
})
export class ComponentsModule {}
