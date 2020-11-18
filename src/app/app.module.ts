import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';



import { AgmCoreModule } from '@agm/core';

import { DishService } from './services/dish.service';
import { TeamService } from './services/team.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DishComponent } from './dish/dish.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DishComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatListModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot(),
    CarouselModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyBTpkWs6TJZhfaPwiVBOx-dtHzj5jsSgwI",
      libraries:["places","geometry"]
    })
    ],
    entryComponents:[
      LoginComponent
    ],
  providers: [DishService,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
