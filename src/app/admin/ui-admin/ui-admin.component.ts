import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-admin',
  templateUrl: './ui-admin.component.html',
  styleUrls: ['./ui-admin.component.scss']
})
export class UiAdminComponent implements OnInit {
  @Input() key: any;
  constructor() { }

  ngOnInit(): void {
  }

}
