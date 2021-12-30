import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective implements OnInit {
  @Input() showPassword: any;
  private _shown = false;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.showPassword === true) {
      this.setup();
    }
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = `<i class="fa fa-eye-slash" aria-hidden="true"></i>`;
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.right = '25px';
    span.style.top = '35px';
    span.style.width = '30px';
    span.style.height = '30px';
    span.style.color = '#94b1d9';
    span.style.fontSize = '20px';
    span.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}
