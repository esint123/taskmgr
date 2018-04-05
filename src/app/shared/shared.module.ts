import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatCardModule, MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule,
  MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatTooltipModule,
  MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    DirectiveModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    DirectiveModule,
  ],
  declarations: [
    ConfirmDialogComponent
  ],

  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {
}
