import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OptionListSearch} from '../../../interfaceGeneral';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-input-filter-v1',
  templateUrl: './input-filter-v1.component.html',
  styleUrls: ['./input-filter-v1.component.scss']
})
export class InputFilterV1Component implements OnInit {
  @Input() listOptions: OptionListSearch[] | any;
  @Input() fg: FormGroup| any;
  @Input() placeholder = 'Placeholder';
  @Input() label = 'Label'
  @Input() controlName = 'dropdown'
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>()
  control: FormControl | any;
  filteredOptions: Observable<any>[]| any;


  ngOnInit(): void {
    this.control = this.fg?.get(this.controlName) as FormControl;
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith<string | any>(''),
      map((value: any) => {
        return typeof value === 'string' ? value : value.name;
      }),
      map((name: any) => {
        return name ? this._filter(name) : this.listOptions.slice();
      })
    );
  }

  onChangeSelection(){
    this.dataEmitter.emit(this.control?.value)
  }
  checkBlur(){
    let value = this.fg?.get(this.controlName).value;
    let code;
    this.listOptions.forEach((item: any) => {
      if(item?.viewValue === value){
        code = item.value
      }
    })
    if(!code){
      this.fg?.get(this.controlName).patchValue('');
    }
  }
  _filter(name: string): any[] {
    return this.listOptions.filter(
      (option:any) =>
        this.removeVietnameseTones(option.viewValue.toLowerCase()).includes(this.removeVietnameseTones(name))
    );
  }

  removeVietnameseTones(str: string) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    return str;
  }
}
