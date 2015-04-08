package mhcs.client;


public class Module {
	
	private int id, orientation;
	private String type;
	private Point coordinates;
	private boolean condition;
	
	public Module(String type, int id, Point coordinates, boolean condition, int orientation)  //takes in Type, ID, Coordinates, Condition, Orientation 
	{
		this.setType(type);
		this.setId(id);
		this.setCoordinates(coordinates);
		this.setCondition(condition);
		this.setOrientation(orientation);
	}
	
	public Module(){
	}

	public Point getCoordinates() {
		return coordinates;
	}

	public void setCoordinates(Point coordinates) {
		this.coordinates = coordinates;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getOrientation() {
		return orientation;
	}

	public void setOrientation(int orientation) {
		this.orientation = orientation;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean getCondition() {
		return condition;
	}

	public void setCondition(boolean condition) {
		this.condition = condition;
	}
}
