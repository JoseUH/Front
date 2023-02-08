import { MediaInterface } from './../../models/mediaInterface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
@Input() public videogames!: MediaInterface
}
