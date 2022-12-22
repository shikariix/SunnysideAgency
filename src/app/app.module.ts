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
import { FooterComponent } from './organism/footer/footer.component';
import { PageHeaderComponent } from './molecule/page-header/page-header.component';
import { ArrowIconComponent } from './atom/arrow-icon/arrow-icon.component';
import { LearnMoreComponent } from './organism/learn-more/learn-more.component';
import { TextOnImageComponent } from './organism/text-on-image/text-on-image.component';
import { LearnMoreParagraphComponent } from './molecule/learn-more-paragraph/learn-more-paragraph.component';
import { LearnMoreButtonComponent } from './atom/learn-more-button/learn-more-button.component';
import { TestimonialsComponent } from './organism/testimonials/testimonials.component';
import { TestimonialComponent } from './molecule/testimonial/testimonial.component';

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
    FooterComponent,
    PageHeaderComponent,
    ArrowIconComponent,
    LearnMoreComponent,
    TextOnImageComponent,
    LearnMoreParagraphComponent,
    LearnMoreButtonComponent,
    TestimonialsComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
