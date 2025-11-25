import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [ FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',

})
export class DataBinding {
message = 'Data-Binding Demonstration';
imageUrl = "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/08/06/12/baby-doll.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000";
w = 50;
h = 50;
isHighlighted = true;
altText ='cute';
textColor = 'blue';
yourName = 'Dave';

count = 0;
increment() {
  this.count++;
}
decrement() {
  this.count--;

}
// Interpolation
studentName = "Mark Dave camus";
score = 95;

// Property binding
imageUrls = "https://picsum.photos/200";
isDisabled = true;

// Attribute binding
colSpanValue = 3;

// Class binding
isPassing = true;

// Style binding
boxColor = "purple";
boxSize = "150px";

}
