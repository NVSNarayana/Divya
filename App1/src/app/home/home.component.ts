import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../services/static-data.service';
import { KeyValuePair, SelectedKeyValuePair } from '../models/key-value-pair';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  validationTypes: string[];
  categories: string[];
  validationOn: string[];
  emeaApj: string[];
  bu: KeyValuePair[];
  segments: KeyValuePair[];
  level3: KeyValuePair[];
  shipToCountry: KeyValuePair[];
  lob: SelectedKeyValuePair[];

  selectedValidationType: string = "";
  selectedCategory: string = "";
  selectedValidationOn: string = "";
  selectedEmeaApj: string;
  selectedBu: string = "";
  isApiDataVisible: boolean = false;

  constructor(private _staticDataSvc: StaticDataService, private _homeSvc: HomeService) {
  }

  ngOnInit() {
    this.validationTypes = this._staticDataSvc.validationTypesData;
    this.categories = this._staticDataSvc.categoriesData;
    this.validationOn = this._staticDataSvc.validationOnData;
    this.emeaApj = this._staticDataSvc.emeaApjData;
    this.bu = this._staticDataSvc.buData;
  }

  handleSelectionChange() {
    if (!this.selectedBu) {
      this.isApiDataVisible = false;
    }
    else {
      this._homeSvc.getApiData().subscribe(v => {
        //console.log(v);
        this.isApiDataVisible = true;
        this.segments = v.segments;
        this.level3 = v.level3;
        this.shipToCountry = v.shipToCountry;
        this.lob = v.lob.map(v => new SelectedKeyValuePair(v.key, v.value));
      },
        (err) => { console.log("Error : " + err) });
    }

  }

  get selectedLobs(): SelectedKeyValuePair[] {
    var arr = this.lob.filter(v => v.isSelected);
    return arr;
  }

}
