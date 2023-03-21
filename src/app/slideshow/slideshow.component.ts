import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
    title = "TEST";
    images = ['code.jpg', 'notebook.jpg', 'tum.jpg'];
    headlines = [
      'Bring engeneering to the next level!',
      'Follow me on my Coding journey!',
      'Born to code'
      ];
  
    currentImage = 0;
    showImage = true;
  
    ngOnInit(){
      this.updateImage();
    }
  
    updateImage() {
      setInterval(() => {
        this.currentImage++;
        this.currentImage = this.currentImage % this.images.length;
        this.showImage = false;
  
        setTimeout(()=> {
          this.showImage = true;
        }, 1)
      }, 5000)
    }
}
