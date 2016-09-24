import { ViewChild, ViewChildren, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ValidateFormComponent} from "../components/ValidateForm/ValidateForm.component";

console.log('`Demo` component loaded asynchronously');

@Component({
  selector: 'demo',
  directives: [ValidateFormComponent],
  templateUrl: './demo.template.html'
})
export class Demo {
  //@ViewChild查询 ValidateFormComponent子组件
  // @ViewChild(ValidateFormComponent)
  localState;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('hello `Demo` component');
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Demo` component');
  }
  asyncDataWithWebpack() {
  }

}
