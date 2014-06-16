#pragma strict
var SemaforoA : Transform;
var SemaforoA_Rojo : Transform;
var SemaforoA_Amarillo : Transform;
var SemaforoA_Verde : Transform;
var SemaforoB : Transform;
var SemaforoB_Rojo : Transform;
var SemaforoB_Amarillo : Transform;
var SemaforoB_Verde : Transform;

var TiempoCambio : float = 5;
private var ConteoTiempo: float = 0;
private var Intercambio: boolean = true;
private var InterAmarillo: boolean =true;
function Start () {
SemaforoA_Rojo.gameObject.renderer.material.color=Color.red;
SemaforoB_Verde.gameObject.renderer.material.color=Color.green;
}

function Update () {

ConteoTiempo+= Time.deltaTime*1;

if(ConteoTiempo>=(TiempoCambio*0.8) && InterAmarillo)
 if(!Intercambio){
  InterAmarillo=false;
  SemaforoA_Amarillo.gameObject.renderer.material.color=Color.yellow;
  SemaforoA_Verde.gameObject.renderer.material.color=Color.grey;
                }
 else{
  InterAmarillo=false;
 SemaforoB_Amarillo.gameObject.renderer.material.color=Color.yellow;
  SemaforoB_Verde.gameObject.renderer.material.color=Color.grey;
     }

if(ConteoTiempo >= TiempoCambio)
{
  if(Intercambio){
  
   Intercambio=false;
   
   SemaforoB_Verde.gameObject.renderer.material.color=Color.grey;
   SemaforoB_Amarillo.gameObject.renderer.material.color=Color.grey;
   SemaforoB_Rojo.gameObject.renderer.material.color=Color.red;
   SemaforoB.gameObject.animation.Play("Bloquear_B");
   
   SemaforoA_Verde.gameObject.renderer.material.color=Color.green;
   SemaforoA_Amarillo.gameObject.renderer.material.color=Color.grey;
   SemaforoA_Rojo.gameObject.renderer.material.color=Color.grey;
   SemaforoA.gameObject.animation.Play("Desbloquear_A");

  }else
  {
   Intercambio=true;
   
   SemaforoB_Verde.gameObject.renderer.material.color=Color.green;
   SemaforoB_Amarillo.gameObject.renderer.material.color=Color.grey;
   SemaforoB_Rojo.gameObject.renderer.material.color=Color.grey;
   SemaforoB.gameObject.animation.Play("Desbloquear_B");
  
   SemaforoA_Verde.gameObject.renderer.material.color=Color.grey;
   SemaforoA_Amarillo.gameObject.renderer.material.color=Color.grey;
   SemaforoA_Rojo.gameObject.renderer.material.color=Color.red;
   SemaforoA.gameObject.animation.Play("Bloquear_A");
   
  }

ConteoTiempo=0;
InterAmarillo=true;
}

}