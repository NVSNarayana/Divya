import { KeyValuePair } from "./key-value-pair";

export class ApiResponseModel {
    segments: KeyValuePair[];//properties are based on data.json keys
    level3: KeyValuePair[];
    shipToCountry: KeyValuePair[];
    lob: KeyValuePair[];
}
