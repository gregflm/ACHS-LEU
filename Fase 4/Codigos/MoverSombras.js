#pragma strict

public var Sombra1 : GameObject;
public var Sombra2 : GameObject;
public var Sombra3 : GameObject;
public var Sombra4 : GameObject;

public var Velocidad : float = 0.5;
function Start () {

}

function Update () {

Sombra1.transform.position.x+=Velocidad;
Sombra2.transform.position.x+=Velocidad;
Sombra3.transform.position.x+=Velocidad;
Sombra4.transform.position.x+=Velocidad;

if(Sombra1.transform.position.x>=18.6)
 Sombra1.transform.position.x=-19.2;
 
if(Sombra2.transform.position.x>=18.6)
 Sombra2.transform.position.x=-19.2;
 
if(Sombra3.transform.position.x>=18.6)
 Sombra3.transform.position.x=-19.2;   
 
if(Sombra4.transform.position.x>=18.6)
Sombra4.transform.position.x=-19.2;  
}