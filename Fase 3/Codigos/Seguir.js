#pragma strict 
 //Vector de Objetos -> Lo usaremos para poder sacar la posicion del objeto
 var WayPoint : Transform[];
 //Velocidad de movimiento de punto a punto 
 var Velocidad : float = 3; 
 // Volver a iniciar la ruta
  var Loop : boolean = true;
 // Do you want to keep repeating the Waypoints 
 var TiempoRotacion = 6.0; 
 // How long to pause at a Waypoint
 var SeguirEsfera : int = 0;
 //Distancia para tomar nueva ruta
 var Distancia : float = 1;
 private var character : CharacterController;
 
 function Start(){
 character = GetComponent(CharacterController); 
 
           } 
 
 function Update(){
 
  var hit:RaycastHit;
  if(hit!=null)
  
  Debug.DrawRay(transform.position,transform.TransformDirection(Vector3.forward)*10,Color.green);
  
  var Aux = transform.position;
      Aux.y+=1;
    
  if(SeguirEsfera < WayPoint.length && 
     !(Physics.Raycast(Aux,transform.forward,hit,10) && 
     (hit.collider.gameObject.tag==this.gameObject.tag || hit.collider.gameObject.tag!=this.gameObject.tag )))
     PuntoaPunto();
  else
   if(Loop && !(SeguirEsfera < WayPoint.length)){
    transform.position=WayPoint[0].position;
    SeguirEsfera=0;
    }
                   } 
                   
 function PuntoaPunto(){
 
 var target : Vector3 = WayPoint[SeguirEsfera].position; 
 //Mantener Valor de eje Y
 target.y = transform.position.y; 
 
 // Mantener Ruta a la altura del personaje
 var moveDirection : Vector3 = target - transform.position; 
 //Calcular distancia al Objetivo
 if(moveDirection.magnitude < Distancia)
  SeguirEsfera++;
   else{
    var rotation = Quaternion.LookRotation((target - transform.position)); 
    //Ejercer Rotacion haciar el objetivo
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * TiempoRotacion);
    //Seguir ruta hacia adelante
     character.Move(transform.forward * Velocidad * Time.deltaTime);
      } 
       }
                              