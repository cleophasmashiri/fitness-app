import { Component, OnInit,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver,
  OnChanges, SimpleChange, Input } from '@angular/core';

import { TasklistComponent } from './tasklist/tasklist.component';
import * as TrafficProcess from './forms/trafficProcess/traffic-process.module';
@Component({
  selector: 'generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: []
})
export class GenericForm implements OnChanges {
  @ViewChild('dynamic', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef

  @Input() formKey:String = null;
  @Input() taskId:String = null;
  private rootViewContainer = null;
  private myAddonModule = null;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      console.log(propName);
      if (propName === 'formKey' && changes[propName].currentValue != null) {
        this.loadForm(changes[propName].currentValue);
      }
    }
  }

  loadForm(formKey: String): void {
    console.log(this.viewContainerRef);
    console.log(formKey);
    this.setRootViewContainerRef(this.viewContainerRef);
    this.addDynamicComponent(formKey);
  }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  public addDynamicComponent(formKey: String) {
    console.log(TrafficProcess)
    console.log(formKey)
    const factory = this.factoryResolver.resolveComponentFactory(TrafficProcess[formKey+'Component'])
    const component = factory.create(this.rootViewContainer.parentInjector)

    this.rootViewContainer.insert(component.hostView)
  }
}