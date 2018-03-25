import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContainerComponent } from '../container/container.component';
import { Container1Component } from './container1/container1.component';
import { MenuSlideBarComponent } from './menu-slide-bar/menu-slide-bar.component';
import { ClassBoardComponent } from './class-board/class-board.component';
import { HeaderComponent } from './header/header.component';
import { MenuControlComponent } from './menu-control/menu-control.component';
import { ContentComponent } from './content/content.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    Container1Component,
    MenuSlideBarComponent,
    ClassBoardComponent,
    HeaderComponent,
    MenuControlComponent,
    ContentComponent,
    FileComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
