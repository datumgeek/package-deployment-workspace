import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylibATwoComponent } from '@mylib/a-two';
import { MyotherlibAThreeComponent } from '@myotherlib/a-three';

@Component({
  selector: 'package-deployment-workspace-mylib-a-one',
  standalone: true,
  imports: [CommonModule, MylibATwoComponent, MyotherlibAThreeComponent],
  templateUrl: './mylib-a-one.component.html',
  styleUrls: ['./mylib-a-one.component.css'],
})
export class MylibAOneComponent {}
