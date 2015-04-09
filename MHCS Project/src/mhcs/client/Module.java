package mhcs.client;

import mhcs.storage.Load;


public class Module {
	
	private int id, orientation;
	private String type;
	private Point landedCoordinates;
	private Point configCoordinates;
	private boolean condition;
	private boolean inUse;
	
	
	//takes in Type, ID, landedCoordinates, configCoordinates, Condition, Orientation, inUse
	public Module(String type, int id, Point landedCoordinates,Point configCoordinates, boolean condition, int orientation, boolean inUse)
	{
		this.setType(type);
		this.setId(id);
		this.setLandedCoordinates(landedCoordinates);
		this.setConfigCoordinates(configCoordinates);
		this.setCondition(condition);
		this.setOrientation(orientation);
		this.setInUse(inUse);
	}
	
	public Module(){
		this.setInUse(false);
		this.setType(null);
		this.setId(0);
		this.setLandedCoordinates(null);
		this.setConfigCoordinates(null);
		this.setCondition(false);
		this.setOrientation(0);
	}

	public static Module getModuleAtCoordinates(Point p)
	{
		Load loader = new Load();
		Module[] modules = loader.getModules();
		for(Module m:modules)
		{
			if(m.isInUse() && m.configCoordinates.equals(p))
			{
				return m;
			}
		}
		return null;
	}
	
	
	public boolean isNextTo(Module m)
	{
		int x1 = m.getConfigCoordinates().getX();
		int x2 = getConfigCoordinates().getX();
		int y1 = m.getConfigCoordinates().getY();
		int y2 = getConfigCoordinates().getY();
		if( (Math.abs(x2-x1) == 2 && y2 == y1) && getModuleAtCoordinates(new Point(Math.min(x2, x1)+1,y1)).getType().equals("plain") )
		{
			
		}
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

	public Point getLandedCoordinates() {
		return landedCoordinates;
	}

	public void setLandedCoordinates(Point landedCoordinates) {
		this.landedCoordinates = landedCoordinates;
	}

	public Point getConfigCoordinates() {
		return configCoordinates;
	}

	public void setConfigCoordinates(Point configCoordinates) {
		this.configCoordinates = configCoordinates;
	}

	public boolean isInUse() {
		return inUse;
	}

	public void setInUse(boolean inUse) {
		this.inUse = inUse;
	}
	
	
}