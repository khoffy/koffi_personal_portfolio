import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DoItYourselfComponent } from './do-it-yourself/do-it-yourself.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    TestimonialsComponent,
    DoItYourselfComponent,
    ResumeComponent,
    SocialMediaLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "about-me", component: AboutMeComponent},
      {path: "resume", component: ResumeComponent},
      {path: "portfolio", component: PortfolioComponent},
      {path: "blog", component: BlogComponent},
      {path: "contact", component: ContactComponent},
      {path: "testimonials", component: TestimonialsComponent},
      {path: "social-media-links", component: SocialMediaLinksComponent},
      {path: "do-it-yourself", component: DoItYourselfComponent},
      {path: "**", redirectTo: "/home"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
