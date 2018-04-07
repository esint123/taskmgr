import {NgModule, SkipSelf, Optional} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatIconRegistry} from '@angular/material';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg.util';
import {SharedModule} from '../shared/shared.module';
import 'hammerjs';
import 'rxjs/add/operator/take';
import {AppRoutingModule} from '../app-routing.module';
import {ServicesModule} from '../services/services.module';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServicesModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResources(ir, ds);
  }
}
