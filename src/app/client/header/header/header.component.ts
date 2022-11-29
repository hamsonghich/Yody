import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FirebaseService} from '../../../services/firebase.service';
import {OptionListSearch} from '../../../interfaceGeneral';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public linkLogo = '';
  bannerDes = '';
  bannerMb = '';
  formSearch: FormGroup | any;
  public filteredOptions: OptionListSearch[] = [
    {viewValue: 'Nam', value: 'nam'},
    {viewValue: 'Nữ', value: 'nu'},
    {viewValue: 'Trẻ em', value: 'tre em'},
    {viewValue: 'Bộ sưu tập', value: 'bo suu tap'},
    {viewValue: 'Tin tức', value: 'tin tuc'},
    {viewValue: 'Polo yody', value: 'polo yody'},
    {viewValue: 'Đồng phục', value: 'dong phuc'},
  ];


  constructor(public firebaseServices: FirebaseService, public fb: FormBuilder) {
    this.formSearch = this.fb.group({
      'searchControlName': ['', Validators.required]
    })
  }

  ngOnInit(): void {

    this.firebaseServices.readFunctionalityObject('/logo').subscribe((res: any) => {
      this.linkLogo = res;
    })
    this.firebaseServices.readFunctionalityObject('/banner/banner-mb').subscribe((res: any) => {
      this.bannerMb = res;
    })
    this.firebaseServices.readFunctionalityObject('/banner/banner-des').subscribe((res: any) => {
      this.bannerDes = res;
    })
  }

  getValueSearch(event: any){
    console.log(event);
  }


}
