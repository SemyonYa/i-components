import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'i-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements AfterViewInit {
  @Output() onChange = new EventEmitter<string>();
  @ViewChild('search') searchElem: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.searchElem.nativeElement, 'input')
      .pipe(
        debounceTime(1000)
      )
      .subscribe(
        (e: InputEvent) => {
          const value: string = (e.target['value'] as string).trim();
          this.onChange.emit(value);
        }
      );

  }
}
