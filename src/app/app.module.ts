import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './atom/button/button.component';
import { SiteTitleComponent } from './atom/site-title/site-title.component';
import { ParagraphTitleComponent } from './atom/paragraph-title/paragraph-title.component';
import { ParagraphComponent } from './atom/paragraph/paragraph.component';
import { PageTitleComponent } from './atom/page-title/page-title.component';
import { ImageComponent } from './atom/image/image.component';
import { HeaderComponent } from './organism/header/header.component';
import { NavigationComponent } from './molecule/navigation/navigation.component';
import { MainComponent } from './page/main/main.component';
import { BodyComponent } from './organism/body/body.component';
import { FooterComponent } from './organism/footer/footer.component';
import { PageHeaderComponent } from './molecule/page-header/page-header/page-header.component';
import { ArrowIconComponent } from './atom/arrow-icon/arrow-icon/arrow-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SiteTitleComponent,
    ParagraphTitleComponent,
    ParagraphComponent,
    PageTitleComponent,
    ImageComponent,
    HeaderComponent,
    NavigationComponent,
    MainComponent,
    BodyComponent,
    FooterComponent,
    PageHeaderComponent,
    ArrowIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
