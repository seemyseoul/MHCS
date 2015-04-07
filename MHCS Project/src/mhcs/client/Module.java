package mhcs.client;


public class Module {
	
	private int id, orientation;
	private String type;
	private Point coordinates;
	private boolean condition;
	
	public Module(String type, int id, Point coordinates, boolean condition, int orientation)  //takes in Type, ID, Coordinates, Condition, Orientation 
	{
		this.type = type;
		this.id = id;
		this.coordinates = coordinates;
		this.condition = condition;
		this.orientation = orientation;
	}
}
