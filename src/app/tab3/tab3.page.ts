import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}
  crearAccount(){
    this.presentAlert();
    this.navCtrl.navigateRoot(['tabs/tab1']);
  
  }
  async presentAlert() {
    let alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: 'El usuario fue creado satisfactoriamente',
      buttons: ['Aceptar']
      
  
    });
    alert.present();
  }

}
export class FormsPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
}


