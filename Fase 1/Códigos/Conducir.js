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


function Start()
{
	rigidbody.centerOfMass.y=0;
}


function FixedUpdate(){
	currentSpeed = (Mathf.PI * 2 * leftwheel.radius) *leftwheel.rpm * 60/1000;
	currentSpeed = Mathf.Round(currentSpeed);
	leftwheel.motorTorque = MaxTorque* Input.GetAxis("Vertical");
	RightWheel.motorTorque = MaxTorque* Input.GetAxis("Vertical");
	
	leftwheel.steerAngle= 10* Input.GetAxis("Horizontal");
    RightWheel.steerAngle= 10* Input.GetAxis("Horizontal");
    
    GuiSpeed.text = currentSpeed.ToString();



}

function Update() {
RotateWheels();
SteelWheels();


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