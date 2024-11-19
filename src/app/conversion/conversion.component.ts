import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss',
})
export class ConversionComponent {
  result!: string;
  phrase!: string;
  casParticuliers: { [key: string]: string } = {
    'Société Nationale du Chemin de Fer Français': 'S.N.C.F.',
    'World Wide Web Consortium': 'W.3.C.',
  };
  motsAIgnorer: string[] = ['de', 'du', 'la', 'des', 'le', 'les'];

  constructor() {
    console.log(this.conversion('Wild Code School'));
    console.log(this.conversion('Société Nationale du Chemin de Fer Français'));
    console.log(this.conversion('Electricité de France'));
    console.log(this.conversion('World Wide Web Consortium'));
  }

  onClick(phrase: string): void {
    this.result = this.conversion(phrase);
  }

  reset(): void {
    this.phrase = '';
    this.result = '';
  }

  conversion(phrase: string): string {
    if (this.casParticuliers[phrase]) {
      return this.casParticuliers[phrase];
    }

    // Liste des mots à ignorer

    return phrase.split(' ').reduce((acc, word) => {
      if (this.motsAIgnorer.includes(word.toLowerCase())) {
        return acc;
      }
      return acc + word[0].toUpperCase() + '.';
    }, '');
  }
}
