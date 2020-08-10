import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  showBtn: boolean = false;
  defPrompt;
  constructor(public navCtrl: NavController) {
     
  }
 
  ionViewWillEnter() {
    window.addEventListener('beforeinstallprompt', (e) => {
      
      e.preventDefault();
      
      this.defPrompt = e;
       
      this.showBtn = true;
    
    });
            
    window.addEventListener('appinstalled', (event) => {
     alert('instalado');
    });
 
  }
 
  add_to_home(){

    //Mostra o prompt
    this.defPrompt.prompt();
    // Espera o usuario responder o prompt
    this.defPrompt.choiceResult
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('Usuario aceitou instalar');
        } else {
          alert('Usuario rejeitou instalar');
        }
        this.defPrompt = null;
      });
  };
 
}
