import { Component, OnInit, Input } from '@angular/core';
import ITheme from 'src/app/model/Theme';


@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnInit {

  @Input() theme!: ITheme
  constructor() { }

  ngOnInit(): void {
  }

}
