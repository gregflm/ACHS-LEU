#pragma strict

public var Velocidad : float = 5;

function Start () {

}

function Update () {

transform.Rotate(0,0,Velocidad*Time.deltaTime);

}