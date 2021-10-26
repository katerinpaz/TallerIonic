import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {


  usuario= "daniel";
  contrasena="1234";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {



  }

  login(){
    
      if(this.usuario==='daniel' && this.contrasena==='1234'){

      
        
        this.navCtrl.navigateRoot(['tabs/tab2']);

      }else{

        this.presentAlert();


      }


  }

  async presentAlert() {
    let alert = await this.alertCtrl.create({
     
  
      buttons: ['aceptar']
    });
    alert.present();
  }

}


