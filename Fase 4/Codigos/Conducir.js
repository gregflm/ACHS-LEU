var leftwheel:WheelCollider;
var RightWheel:WheelCollider;
var MaxTorque = 260;
var GuiSpeed: GUIText;
var TireRL: Transform;
var TireRR: Transform;
var TireFR: Transform;
var TireFL: Transform;
var TextX: float;
var TextY: float;
var TextZ: float;
var PosicionActual: Vector3;


public var Iniciar: boolean = false;
 var scriptalgo2; //variable del script a desactivar

function Start()
{
	rigidbody.centerOfMass.y=0;

   //scriptalgo2 = GameObject.Find("FirstPerson").GetComponent("LadoAuto");
}


function FixedUpdate(){
	currentSpeed = (Mathf.PI * 2 * leftwheel.radius) *leftwheel.rpm * 60/1000;
	currentSpeed = Mathf.Round(currentSpeed);
	leftwheel.motorTorque = MaxTorque* Input.GetAxis("Vertical");
	RightWheel.motorTorque = MaxTorque* Input.GetAxis("Vertical");
	
	leftwheel.steerAngle= 15* Input.GetAxis("Horizontal");
    RightWheel.steerAngle= 15* Input.GetAxis("Horizontal");
    
//    GuiSpeed.text = currentSpeed.ToString();



}

function Update() {
RotateWheels();
SteelWheels();
/*if(Iniciar)
{
	Stop();
}*/

}

function RotateWheels(){
TireFL.Rotate(leftwheel.rpm / 60 * 360 * Time.deltaTime,0,0); 
TireRR.Rotate(leftwheel.rpm / 60 * 360 * Time.deltaTime,0,0); 
TireFR.Rotate(leftwheel.rpm / 60 * 360 * Time.deltaTime,0,0); 
TireRL.Rotate(leftwheel.rpm / 60 * 360 * Time.deltaTime,0,0); 
	//como rotar los neumaticos
	
	//pero lo pedimos desde update
}

function SteelWheels() {

TireFR.localEulerAngles.y = RightWheel.steerAngle - TireFL.localEulerAngles.z;
TireFL.localEulerAngles.y = leftwheel.steerAngle - TireFL.localEulerAngles.z;
TextX = TireFL.localEulerAngles.x;
TextZ = TireFL.localEulerAngles.x;
TextY= TireFL.localEulerAngles.y;



}

/*function Stop () {
						print("Entro a Stop");
			     PosicionActual = transform.position;
			     print(PosicionActual);
			     //scriptalgo2.enabled = true;
							     //PosicionActual = GameObject.Find("DoorL").transform.position;

				//GameObject.Find("FirstPerson").LadoAuto.PosicionActual2 = PosicionActual;
								GameObject.Find("FirstPerson").transform.position.x = PosicionActual.x+3;
								GameObject.Find("FirstPerson").transform.position.y = PosicionActual.y+3;

								GameObject.Find("FirstPerson").transform.position.z = PosicionActual.z+3;


//rigidbody.position
			rigidbody.velocity = Vector3(0,0,0);
				

			//GetComponent(LadoAuto).PosicionActual2 = PosicionActual;
			print("envio");

}*/