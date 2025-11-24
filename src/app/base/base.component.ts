import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  showScrollUpButton: boolean = false;
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when scrolled down 100px, else hide it
    this.showScrollUpButton = window.scrollY > 100;

    // this.isSticky = window.scrollY > 100; 
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
