#pragma strict 
 //Vector de Objetos -> Lo usaremos para poder sacar la posicion del objeto
private var WayPoint : Transform[];
 //Ruta
private var Ruta : GameObject;
 //Velocidad de movimiento de punto a punto 
public var Velocidad : float = 3; 
 // Volver a iniciar la ruta
public  var Loop : boolean = true;
 // Do you want to keep repeating the Waypoints 
public var TiempoRotacion = 6.0; 
 // How long to pause at a Waypoint
public var SeguirEsfera : int = 0;
 //Distancia para tomar nueva ruta
public var Distancia : float = 1;
 //Nombre Ruta
public  var NombreRuta : String;

private var character : CharacterController;
private var Altura : float ; 
 
 function Awake(){
 
 Ruta=GameObject.FindGameObjectWithTag(NombreRuta);
 WayPoint = new Transform[Ruta.transform.childCount];
 Altura=transform.position.y;
 for(var i : int = 0 ; i < Ruta.transform.childCount; i++)
 {WayPoint[i]= Ruta.transform.GetChild(i);
  WayPoint[i].renderer.enabled=false;
 }
 }
 
 function Update(){
 
  var hit:RaycastHit;
  var Aux = transform.position;
      Aux.y=1;
  
  if(SeguirEsfera < WayPoint.length && 
     !(Physics.Raycast(Aux,transform.forward,hit,10) && 
     (hit.collider.gameObject.tag==this.gameObject.tag || hit.collider.gameObject.tag!=this.gameObject.tag )))
     PuntoaPunto();
  else
   if(Loop && !(SeguirEsfera < WayPoint.length)){
    transform.position=WayPoint[0].position;
    transform.position.y=Altura;
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
  //  character.Move(transform.forward * Velocidad * Time.deltaTime);
   // transform.Translate ( Vector3.forward*Velocidad * Time.deltaTime ); 
      } 
       }
       
       
       
                              