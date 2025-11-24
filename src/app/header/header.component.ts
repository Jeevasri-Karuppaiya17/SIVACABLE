import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = offset > 100; 
  }

  ngOnInit(): void {
    this.onWindowScroll();
    const dcnBasePackLink = document.getElementById('baseplan');
    if (dcnBasePackLink) {
      dcnBasePackLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        this.openExcelFile0();
      });
    }

    const dcnGoldPackLink = document.getElementById('basicplan');
    if (dcnGoldPackLink) {
      dcnGoldPackLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        this.openExcelFile();
      });
    }

    const dcnFamilyPackLink = document.getElementById('telugulite');
    if (dcnFamilyPackLink) {
      dcnFamilyPackLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        this.openExcelFile1();
      });
    }
    // const dcnHindiPackLink = document.getElementById('dcnHindiPack');
    // if (dcnHindiPackLink) {
    //   dcnHindiPackLink.addEventListener('click', (event) => {
    //     event.preventDefault(); 
    //     this.openExcelFile2();
    //   });
    // }
  }

  openExcelFile0() {
    const fileUrl0 = '/assets/file/SDCN Base1.pdf'; 
    window.open(fileUrl0, '_blank'); 
  }
  openExcelFile() {
    const fileUrl = '/assets/file/SDCN Basic2.pdf'; 
    window.open(fileUrl, '_blank'); 
  }
  openExcelFile1() {
    const fileUrl1 = '/assets/file/SDCN Telugu Lite3.pdf'; 
    window.open(fileUrl1, '_blank'); 
  }
  // openExcelFile2() {
  //   const fileUrl2 = '/assets/file/DCN Hindi Packages.pdf'; 
  //   window.open(fileUrl2, '_blank'); 
  // }
}
document.addEventListener('DOMContentLoaded', function() {
  const menuTrigger = document.querySelector('.mobile-menu-trigger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu .close-btn');

  if (menuTrigger && mobileMenu && closeBtn) {
      menuTrigger.addEventListener('click', function() {
          mobileMenu.classList.add('active');
      });

      closeBtn.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const menuToggler = document.querySelector('.mobile-nav-toggler');
  const hiddenBarWrapper = document.querySelector('.hidden-bar-wrapper')!;
  const closeBtn = document.querySelector('.close-btn');

  if (menuToggler && hiddenBarWrapper && closeBtn) {
      function showMobileMenu() {
          hiddenBarWrapper.classList.add('mobile-menu-visible');
      }

      function hideMobileMenu() {
          hiddenBarWrapper.classList.remove('mobile-menu-visible');
      }

      menuToggler.addEventListener('click', function() {
          showMobileMenu();
      });

      closeBtn.addEventListener('click', function() {
          hideMobileMenu();
      });

      document.querySelector('.menu-backdrop')?.addEventListener('click', function() {
          hideMobileMenu();
      });
  } else {
      console.error('Required elements are not found in the DOM.');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
          const dropdown = (btn.previousElementSibling as HTMLElement);

          if (dropdown.style.display === 'block') {
              dropdown.style.display = 'none';
              btn.classList.remove('open'); 
          } else {
              dropdown.style.display = 'block';
              btn.classList.add('open'); 
          }
      });
  });
});





