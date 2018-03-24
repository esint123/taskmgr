import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatCardModule, MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule,
  MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule,
} from '@angular/material';

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
  ],
  declarations: []
})
export class SharedModule {
}
