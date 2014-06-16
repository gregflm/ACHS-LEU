#pragma strict

function Start () {

}

function Update () {

if(Input.GetKey("s") || Input.GetKey("down")){
GetComponent(Animator).SetBool("Abajo",true);
return;
}

if(Input.GetKey("w") || Input.GetKey("up"))
{GetComponent(Animator).SetBool("Arriba",true);
return;
}

}