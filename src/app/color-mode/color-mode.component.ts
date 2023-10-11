import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-color-mode',
  templateUrl: './color-mode.component.html',
  styleUrls: ['./color-mode.component.scss']
})
export class ColorModeComponent {
  colorMode = "dark"

  constructor(private renderer: Renderer2) {
    
  }

  toggleTheme() {
    if (this.colorMode === 'light'){
      this.renderer.setAttribute(document.querySelector('html'), 'data-bs-theme', 'dark')
      this.colorMode = "dark"
    }
    else {
      this.renderer.setAttribute(document.querySelector('html'), 'data-bs-theme', 'light')
      this.colorMode = 'light'
    }
  }

}
