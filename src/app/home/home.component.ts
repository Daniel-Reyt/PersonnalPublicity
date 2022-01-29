import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plateformes = [
    {
      icon: '../../assets/images/plateformes/steam.png',
      nom : 'Steam',
      pseudo: 'DanielRXT'
    },
    {
      icon: '../../assets/images/plateformes/origin.png',
      nom : 'Origin',
      pseudo: 'DanielRXT321'
    },
    {
      icon: '../../assets/images/plateformes/battle-net.png',
      nom : 'Battle.Net',
      pseudo: 'Lightning321'
    },
    {
      icon: '../../assets/images/plateformes/discord.png',
      nom : 'Discord',
      pseudo: 'LightYagami321#1952'
    }
  ]

  jeux = [
    {
      image: '../../assets/images/jeux/apex.png',
      nom: 'Apex Legends',
      plateform: 'Origin'
    },
    {
      image: '../../assets/images/jeux/cold-war.png',
      nom: 'Call Of Duty Cold War',
      plateform: 'Battle.Net'
    },
    {
      image: '../../assets/images/jeux/warzone.png',
      nom: 'Call Of Duty Warzone',
      plateform: 'Battle.Net'
    },
    {
      image: '../../assets/images/jeux/adofai.png',
      nom: 'A dance of fire and ice',
      plateform: 'Steam'
    },
    {
      image: '../../assets/images/jeux/csgo.png',
      nom: 'CSGO',
      plateform: 'Steam'
    },
    {
      image: '../../assets/images/jeux/fortnite.png',
      nom: 'Fortnite Sauver le monde / Battle royal',
      plateform: 'PS4'
    },    
    {
      image: '../../assets/images/jeux/minecraft.png',
      nom: 'Minecraft',
      plateform: 'PC (psuedo: Lightning46) / Windows 10'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
