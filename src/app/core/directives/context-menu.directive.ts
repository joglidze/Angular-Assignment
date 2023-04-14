import {
  Directive,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appContextMenu]",
})
export class ContextMenuDirective implements OnDestroy {
  @Input() appContextMenu!: TemplateRef<any>;
  private view: any;
  test: any;
  @HostListener("contextmenu", ["$event"])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();

    let elements = document.querySelectorAll(".test");
    elements.forEach((el) => {
      el.parentNode?.removeChild(el);
    });

    if (this.view) {
      this.view.destroy();
    }

    this.view = this.viewContainerRef.createEmbeddedView(this.appContextMenu);

    this.test = this.view.rootNodes[0];

    this.view.rootNodes[0].style.position = "absolute";
    this.view.rootNodes[0].style.left = `${
      (event.clientX / window.innerWidth) * 100
    }%`;
    this.view.rootNodes[0].style.top = `${
      (event.clientY / window.innerHeight) * 100
    }%`;

    document.addEventListener("click", this.onClick);
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  onClick = (event: MouseEvent) => {
    if (this.view && !this.view.rootNodes[0].contains(event.target as Node)) {
      this.view.destroy();

      document.removeEventListener("click", this.onClick);
    }
  };
  ngOnDestroy() {
    if (this.view) {
      this.view.destroy();
    }
    document.removeEventListener("click", this.onClick);
  }
}
