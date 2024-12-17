import { Component } from '@angular/core';

interface TemperatureData {
  city: string;
  year: number;
  avgTemperature: number;
}

@Component({
  selector: 'app-average-temperature',
  standalone: true,
  imports: [],
  templateUrl: './average-temperature.component.html',
  styleUrl: './average-temperature.component.scss',
})
export class AverageTemperatureComponent {
  temperatureData: TemperatureData[] = [
    { city: 'Paris', year: 2020, avgTemperature: 17.7 },
    { city: 'Paris', year: 2021, avgTemperature: 18.1 },
    { city: 'Paris', year: 2022, avgTemperature: 16.6 },
    { city: 'Lyon', year: 2020, avgTemperature: 15.1 },
    { city: 'Lyon', year: 2021, avgTemperature: 18.6 },
    { city: 'Lyon', year: 2022, avgTemperature: 14.7 },
    { city: 'Marseille', year: 2020, avgTemperature: 13.5 },
    { city: 'Marseille', year: 2021, avgTemperature: 17.0 },
    { city: 'Marseille', year: 2022, avgTemperature: 11.4 },
    { city: 'Toulouse', year: 2020, avgTemperature: 13.6 },
    { city: 'Toulouse', year: 2021, avgTemperature: 15.7 },
    { city: 'Toulouse', year: 2022, avgTemperature: 17.5 },
    { city: 'Nice', year: 2020, avgTemperature: 11.5 },
    { city: 'Nice', year: 2021, avgTemperature: 19.4 },
    { city: 'Nice', year: 2022, avgTemperature: 11.8 },
  ];

  getCityWithHighestAverageTemperature(): string {
    // On crée un objet pour stocker les températures moyennes par ville
    const tempByCity: { [key: string]: { temperature: number; year: number } } = {
      Paris: { temperature: 0, year: 0 },
      Lyon: { temperature: 0, year: 0 },
      Marseille: { temperature: 0, year: 0 },
      Toulouse: { temperature: 0, year: 0 },
      Nice: { temperature: 0, year: 0 },
    };
    // On parcourt le tableau de données pour calculer la température moyenne par ville
    this.temperatureData.forEach((data) => {
      tempByCity[data.city].temperature += data.avgTemperature;
      tempByCity[data.city].year++;
   console.log(
     'somme des temp de ' + data.city + "pour année " + tempByCity[data.city].year,
     tempByCity[data.city].temperature
   );
    });
    
    // On divise par 3 pour obtenir la moyenne
    for (const city in tempByCity) {
      tempByCity[city].temperature /= tempByCity[city].year;
      console.log('moyenne des temp de ' + city, tempByCity);
    }
    // On récupère la ville avec la température moyenne la plus élevée
    let result = '';
    let highestAverageTemperature = 0;
    for (const city in tempByCity) {
      if (tempByCity[city].temperature > highestAverageTemperature) {
        highestAverageTemperature = tempByCity[city].temperature;
        result = city;
      }
    }
    // On retourne le nom de la ville
    return result;
  }
}
