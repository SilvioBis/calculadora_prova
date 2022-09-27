import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  valor1='';
  valor2='';
  resultado='';
  
  soma = 0;
  sub = 0;
  div = 0;
  mult =0;
  
  constructor(private alertController: AlertController) {} 
  
  async somar() {
    this.soma = ( parseFloat(this.valor1) + parseFloat(this.valor2) );
  //sub = this.valor1 - this.valor2;
  //div = this.valor1 / this.valor2;
  //mult = this.valor1 * this.valor2;
    const alert = await this.alertController.create({
      message: '<p><b>Resultado</b></p>'+
      '<p>Valor 1 :   ' + this.valor1 + '</p>' +
      '<p>Valor 2 :   ' + this.valor2 + '</p>' +
      '<p>Resultado :   ' + (this.soma) +'</p>' ,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async subi() {
    this.sub = ( parseFloat(this.valor1) - parseFloat(this.valor2) );
  //sub = this.valor1 - this.valor2;
  //div = this.valor1 / this.valor2;
  //mult = this.valor1 * this.valor2;
    const alert = await this.alertController.create({
      message: '<p><b>Resultado</b></p>'+
      '<p>Valor 1 :   ' + this.valor1 + '</p>' +
      '<p>Valor 2 :   ' + this.valor2 + '</p>' +
      '<p>Resultado :   ' + (this.sub) + '</p>' ,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async multi() {
    this.mult = ( parseFloat(this.valor1) * parseFloat(this.valor2) );
  //sub = this.valor1 - this.valor2;
  //div = this.valor1 / this.valor2;
  //mult = this.valor1 * this.valor2;
    const alert = await this.alertController.create({
      message: '<p><b>Resultado</b></p>'+
      '<p>Valor 1 :   ' + this.valor1 + '</p>' +
      '<p>Valor 2 :   ' + this.valor2 + '</p>' +
      '<p>Resultado :   ' + (this.mult) + '</p>' ,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async divi() {
    this.div = ( parseFloat(this.valor1) / parseFloat(this.valor2) );
  //sub = this.valor1 - this.valor2;
  //div = this.valor1 / this.valor2;
  //mult = this.valor1 * this.valor2;
    const alert = await this.alertController.create({
      message: '<p><b>Resultado</b></p>'+
      '<p>Valor 1 :   ' + this.valor1 + '</p>' +
      '<p>Valor 2 :   ' + this.valor2 + '</p>' +
      '<p>Resultado :   ' + (this.div) + '</p>' ,
      buttons: ['OK'],
    });

    await alert.present();
  }  


  async maior() {
    if( parseFloat(this.valor1) > parseFloat(this.valor2) )
    {
      this.resultado = this.valor1;
    }
    else
    {
      this.resultado = this.valor2;
    }
  }

  async menor() {
    if( parseFloat(this.valor1) < parseFloat(this.valor2) )
    {
      this.resultado = this.valor1;
    }
    else
    {
      this.resultado = this.valor2;
    }
  }

  async limpar() {
    this.valor1='';
    this.valor2='';
    this.resultado='';
    this.soma = 0;
    this.sub = 0;
    this.div = 0;
    this.mult =0;
  
  }

}
