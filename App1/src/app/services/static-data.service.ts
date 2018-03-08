import { Injectable } from '@angular/core';
import { KeyValuePair } from '../models/key-value-pair';

@Injectable()
export class StaticDataService {

  constructor() { }

  validationTypesData: string[] = ["SKU selection alert-SKU1", "Customer missing SKU-CSKU1", "SKU selected for wrong customer-CSKU2"];
  categoriesData: string[] = ["Shortage", "GCP", "Retail"];
  validationOnData: string[] = ["Config", "SAQ", "SAO", "LOAD"];
  emeaApjData: string[] = ["EMEA", "APJ"];
  buData: KeyValuePair[] = [
    { key: "AT", value: "Austria" },
    { key: "BE", value: "Belgium" },
    { key: "B9", value: "Belgium (B9)" },
    { key: "CP", value: "CPF" },
    { key: "CZ", value: "Czech Republic" },
    { key: "DK", value: "Denmark" },
    { key: "ED", value: "EDB" }
  ];
}
