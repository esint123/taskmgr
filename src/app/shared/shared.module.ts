import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatCardModule, MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule,
  MatDialogModule,
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
  ],
  declarations: []
})
export class SharedModule {
}
