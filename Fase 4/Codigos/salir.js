function OnMouseDown () {
Debug.Log("bye");
Application.Quit();
}


function Update () {
 if(Input.GetKeyDown("escape") )
	{
	
	 Application.Quit();
		
	}
	
}