import { Injectable } from '@angular/core';
import { CV } from '../models/cv';
@Injectable({
  providedIn: 'root'
})
export class CVService {
  constructor() { }
  getCVs(): CV[] {
    return [
      new CV('Nasa', 2000, 2004),
      new CV('FBI', 2004, 2010),
      new CV('Eutima', 2004),
    ]
  }
}
