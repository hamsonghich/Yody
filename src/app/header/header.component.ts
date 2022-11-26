import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public firebaseServices: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseServices.readFunctionalityObject('/logo').subscribe((res: any) => {
      console.log(res);
    })
  }

}
