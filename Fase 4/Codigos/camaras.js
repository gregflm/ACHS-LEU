// Creamos las variables de las cámaras

var cam1 : GameObject;
var cam2 : GameObject;
var cam3 : GameObject;
var cam4 : GameObject;
var cam5 : GameObject;
var cam6 : GameObject;
static var current: Camera;

//Luego asignalas en el inspector, arrastra las respectivas cámaras



var scriptalgo; //variable del script a desactivar
function Start(){ // se busca el script dentro del mismo objeto
   //scriptalgo = GetComponent("Conducir");
	   
        
        
       
        //cam4.SetActive(false);
           //cam5.SetActive(false);
        //cam6.SetActive(false);

}

function Update(){
     //Al pulsar 1 las camaras 2 y 3 se desactivan
   
     if( Input.GetKeyDown (KeyCode.Alpha1)){
               	       // GameObject.Find("FirstPerson").renderer.enabled = false;
				//GameObject.Find("FirstPerson").SetActive(false); 
		//GameObject.Find("FirstPerson").transform.position.y = -100;
		
     				//if(scriptalgo != null)
					//scriptalgo.enabled = true; // Desactivar Script 
        cam1.SetActive (true);
        cam2.SetActive (false);
        cam3.SetActive (false);
        cam4.SetActive(false);
           cam5.SetActive(false);
        //cam6.SetActive(false);
        Debug.Log(current);
        
     }
     
     if( Input.GetKeyDown (KeyCode.Alpha2)){
			
          	        //GameObject.Find("FirstPerson").renderer.enabled = false;
		//GameObject.Find("FirstPerson").SetActive(false); 
				//GameObject.Find("FirstPerson").transform.position.y = -100;
			//if(scriptalgo != null)
			//scriptalgo.enabled = true;
        cam1.SetActive (false);
        cam2.SetActive (true);
        cam3.SetActive (false);
         cam4.SetActive(false);
          // cam5.SetActive(false);
        //cam6.SetActive(false);
        
     }
     if( Input.GetKeyDown (KeyCode.Alpha3)){
     		//GameObject.Find("FirstPerson").SetActive(true); 
			
          	//if(scriptalgo != null)
			//scriptalgo.enabled = false;
        cam1.SetActive (false);
        cam2.SetActive (false);
        cam3.SetActive (true);
        cam4.SetActive(false);
           cam5.SetActive(false);
        /*cam6.SetActive(false);*/
       
        Debug.Log("prueba");
        //GetComponent(Conducir).Stop();
     }
     
     if( Input.GetKeyDown (KeyCode.Alpha4)){
     		//GameObject.Find("FirstPerson").SetActive(true); 
			
          	//if(scriptalgo != null)
			//scriptalgo.enabled = false;
			
        cam1.SetActive (false);
        cam2.SetActive (false);
        cam3.SetActive (false);
        cam4.SetActive (true);
        cam5.SetActive(false);
        //cam6.SetActive(false);
       
        Debug.Log("camara aerea");
        //GetComponent(Conducir).Stop();
     }
     
         if( Input.GetKeyDown (KeyCode.Alpha5)){
     		//GameObject.Find("FirstPerson").SetActive(true); 
			
          	//if(scriptalgo != null)
			//scriptalgo.enabled = false;
			
        cam1.SetActive (false);
        cam2.SetActive (false);
        cam3.SetActive (false);
        cam4.SetActive (false);
        cam5.SetActive(true);
        //cam6.SetActive(false);
       
        Debug.Log("camara interseccion");
        //GetComponent(Conducir).Stop();
     }
     
     /* if( Input.GetKeyDown (KeyCode.Alpha6)){
               	       // GameObject.Find("FirstPerson").renderer.enabled = false;
				//GameObject.Find("FirstPerson").SetActive(false); 
		//GameObject.Find("FirstPerson").transform.position.y = -100;
		
     				//if(scriptalgo != null)
					//scriptalgo.enabled = true; // Desactivar Script 
        cam1.SetActive (false);
        cam2.SetActive (false);
        cam3.SetActive (false);
        cam4.SetActive(false);
        cam5.SetActive(false);
        cam6.SetActive(true);
        
     }*/
     
}