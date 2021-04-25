import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  members: {
    name: string;
    description: string;
    picture: string
  }[] = [
    {
      name: "Randy Larzabal",
      description: "Je retourne me lamenter définitivement sur l'académicien.Napoléon assomme une alliance pendant le mois de Ramadan.J'ai envie de ne pas languir ! ",
      picture: "randy"
    },
    {
      name: "Steven Lator",
      description: "En l'an 2119, où grelottez-vous en catimini ? Ce gendarme impatient boudait. La marseillaise ne veut plus élever des souffles. Arlette Laguiller déclinait.",
      picture: "steven"
    },
    {
      name: "Thomas Faure",
      description: "Les mimes essuient les ardoises dansantes. Lebron James se gave de cris à toute vitesse. Des dizaines de candidats ne percent pas les tubas.",
      picture: "thomas"
    },
    {
      name: "Ugo Boccassini",
      description: "Le policier tintinnabule en tricotant des lignes efficaces. L'émissaire débattra de quatre fromages.",
      picture: "ugo"
    },
  ]

  visible: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  handleImageClick(number: number): void {
    this.visible = number
  }

}

