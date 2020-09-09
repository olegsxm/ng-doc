import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceholdersComponent } from './components/placeholders/placeholders.component';
import { QuestionBoxComponent } from './components/question-box/question-box.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { FormBarComponent } from './components/form-bar/form-bar.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholdersComponent,
    QuestionBoxComponent,
    PlaceholderComponent,
    FormBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
