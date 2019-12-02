import { NgModule } from '@angular/core';
import { AnglrLoaderComponent } from './anglr-loader.component';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [AnglrLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [AnglrLoaderComponent]
})
export class AnglrLoaderModule { }
