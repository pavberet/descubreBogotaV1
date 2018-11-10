import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuareasPage } from '../menuareas/menuareas';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  lista1 = [];
  constructor(public navCtrl: NavController) {
    this.lista1 = [
      {
        'title': 'Biología',
        'icon': 'ios-flask-outline',
        'description': 'La Biología es la ciencia de la vida, su nombre se esta conformado por las raíces griegas bios (vida) y logos (estudio o tratado). La biología se dedica al estudio de los seres vivos y todo lo que con ellos se relaciona.  https://conceptodefinicion.de/biologia/',
        'color': '#222'
      },
      {
        'title': 'Bacteriología',
        'icon': 'ios-flask-outline',
        'description': 'La Bacteriología es la ciencia que estudia las bacterias, el origen etimológico del término es latín en el que “Bacterios” quiere decir “Animales Pequeños” y “Logos” “Estudio”. La bacteriología es una ciencia muy extensa, su estudio es casi infinito debido a los millones de tipos de bacterias que aún no se han descubierto o que no se han manifestado en los organismos multicelulares. Sin embargo, la bacteriología, como parte de los estudios de microbiología que se desarrollan en los institutos médicos y científicos, está abocado a temas de trascendencia social que describiremos a continuación. https://conceptodefinicion.de/bacteriologia/',
        'color': '#0CA9EA'
      },
      {
        'title': 'Ingeniería de sistemas',
        'icon': 'ios-flask-outline',
        'description': 'La ingeniería de sistemas es una carrera universitaria que se encarga del diseño, la programación, la implantación y el mantenimiento de sistemas. A diferencia de otras ramas de la ingeniería, esta disciplina no se ocupa de productos tangibles (los ingenieros civiles, por ejemplo, construyen edificios), sino de productos lógicos. https://definicion.de/ingenieria-de-sistemas/',
        'color': '#F46529'
      },
      {
        'title': 'Ingeniería química',
        'icon': 'ios-flask-outline',
        'description': 'Ingeniería Química es la rama de la Ingeniería que se dedica al estudio, síntesis, desarrollo, diseño, operación y optimización de todos aquellos procesos industriales que producen cambios físicos, químicos y/o bioquímicos en los materiales. http://www.ingenieriaquimica.org/ingenieria_quimica',
        'color': '#FFD439'
      },
     
    ]
    
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(MenuareasPage, { item: item });
  }
}
