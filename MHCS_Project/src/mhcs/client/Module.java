package mhcs.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.user.client.ui.Image;

import mhcs.storage.Load;
import mhcs.storage.Model;

/**
 * This class defines a Module on Mars.
 * 
 * @author Naples1
 *
 */
public class Module implements Cloneable {

	private int id;
	private int orientation;
	private ModuleType type;
	private Point coordinates;
	private ModuleStatus status;
	private boolean inUse;

	public Module clone()
	{
		return new Module(this.toString());
	}
	
	/**
	 * This constructor creates a Module based on the string taken in from HTML5
	 * Storage.
	 * 
	 * @param strModuleString
	 */
	public Module(final String strModuleString) {
		String[] moduleParts = strModuleString.split(",");
		this.setType(ModuleType.getTypeFromString(moduleParts[0]));
		this.setId(Integer.parseInt(moduleParts[1]));
		this.setCoordinates(new Point(moduleParts[2]));
		this.setStatus(ModuleStatus.getStatusFromString(moduleParts[3]));
		this.setOrientation(Integer.parseInt(moduleParts[4]));
		this.setInUse(moduleParts[4].equals("true"));
	}

	/**
	 * this method returns a string that allows for HTML5 storage of a module.
	 * 
	 * @return the string version of a module.
	 */
	public final String toString() {
		String storeString = "";
		storeString += (type.toString() + ",");
		storeString += (Integer.toString(id) + ",");
		storeString += (coordinates.toString() + ",");
		storeString += (status.toString() + ",");
		storeString += (Integer.toString(orientation) + ",");
		if (inUse) {
			storeString += "true";
		} else {
			storeString += "false";
		} // else

		return storeString;
	} // toString

	/**
	 * This constructor creates a module by passing in all of the relevant
	 * values.
	 *
	 * @param type
	 * @param id
	 * @param coordinates
	 * @param status
	 * @param orientation
	 * @param inUse
	 */
	public Module(final ModuleType type, int id, Point coordinates,
			final ModuleStatus status, int orientation, boolean inUse) {
		this.setType(type);
		this.setId(id);
		this.setCoordinates(coordinates);
		this.setStatus(status);
		this.setOrientation(orientation);
		this.setInUse(inUse);
	} // Module

	/**
	 * This constructor makes an empty Module. (why do we need it?)
	 */
	public Module() {
		this.setInUse(false);
		this.setType(null);
		this.setId(0);
		this.setCoordinates(null);
		this.setStatus(null);
		this.setOrientation(0);
	} // Module

	
	/**
	 * gets the modules that are "Horizontally next to" this module
	 * @return a List<Module>
	 */
	public List<Module> getHorizontallyConnectedModules()
	{
		List<Module> horizontallyConnectedModules = new ArrayList<Module>();
		for (Module m : Model.getModuleList())
		{
			if(this.getCoordinates().xDistanceTo(m.getCoordinates()) == 1 && this.getCoordinates().yDistanceTo(m.getCoordinates()) == 0)
			{ // if they are literally horizontally adjacent.
				horizontallyConnectedModules.add(m);
			}
			else if(this.getCoordinates().yDistanceTo(m.getCoordinates()) == 1 && this.getCoordinates().xDistanceTo(m.getCoordinates()) == 0)
			{ // if they are figuratively horizontally adjacent... Horizontal must take on a different meaning from his lecture notes...
				horizontallyConnectedModules.add(m);
			}
		}
		return horizontallyConnectedModules;
	}
	
	/**
	 * gets the modules that are "Vertically next to" this module
	 * @return a List<Module>
	 */
	public List<Module> getVerticallyConnectedModules()
	{
		List<Module> verticallyConnectedModules = new ArrayList<Module>();
		for (Module m : Model.getModuleList())
		{
			Point p = m.getCoordinates();
			
			if(this.getCoordinates().yDistanceTo(p) == 2 && this.getCoordinates().xDistanceTo(p) == 0)
			{ // if they are vertically separated by a plain module
				Module m1;
				if (p.getY() > getCoordinates().getY())
				{
					m1 = Model.getModuleAtLocation(new Point(getCoordinates().getX(),getCoordinates().getY()+1));
				}
				else
				{
					m1 = Model.getModuleAtLocation(new Point(getCoordinates().getX(),getCoordinates().getY()-1));
				}
				if(m1 == null)
				{
					continue;
				}
				if (m1.getType().equals(ModuleType.PLAIN))
				{
					verticallyConnectedModules.add(m);
				}
			}
			else if(this.getCoordinates().xDistanceTo(p) == 2 && this.getCoordinates().yDistanceTo(p) == 0)
			{ // if they are horizontally (east-west) separated by a plain module
				Module m2;
				if (p.getX() > getCoordinates().getX())
				{
					m2 = Model.getModuleAtLocation(new Point(getCoordinates().getX()+1,getCoordinates().getY()));
				}
				else
				{
					m2 = Model.getModuleAtLocation(new Point(getCoordinates().getX()-1,getCoordinates().getY()));
				}
				if(m2 == null)
				{
					continue;
				}
				if (m2.getType().equals(ModuleType.PLAIN))
				{
					verticallyConnectedModules.add(m);
				}
			}
		}
		return verticallyConnectedModules;
	}
	
	/**
	 * gets the modules that are "diagonally next to" this module
	 * @return a List<Module>
	 */
	public List<Module> getDiagonallyConnectedModules()
	{
		List<Module> diagonallyConnectedModules = new ArrayList<Module>();
		for (Module m : Model.getModuleList())
		{
			Point p = m.getCoordinates();
			
			if(this.getCoordinates().yDistanceTo(p) == 2 && this.getCoordinates().xDistanceTo(p) == 1)
			{ // if they are vertically separated by a plain module
				Module m1,m2;
				if (p.getY() > getCoordinates().getY())
				{
					m1 = Model.getModuleAtLocation(new Point(getCoordinates().getX(),getCoordinates().getY()+1));
					m2 = Model.getModuleAtLocation(new Point(p.getX(),getCoordinates().getY()+1));
				}
				else
				{
					m1 = Model.getModuleAtLocation(new Point(getCoordinates().getX(),getCoordinates().getY()-1));
					m2 = Model.getModuleAtLocation(new Point(p.getX(),getCoordinates().getY()-1));
				}
				if(m1 == null || m2 == null)
				{
					continue;
				}
				if (m1.getType().equals(ModuleType.PLAIN) && m2.getType().equals(ModuleType.PLAIN))
				{
					diagonallyConnectedModules.add(m);
				}
			}
			else if(this.getCoordinates().xDistanceTo(p) == 2 && this.getCoordinates().yDistanceTo(p) == 1)
			{ // if they are horizontally (east-west) separated by a plain module
				Module m3,m4;
				if (p.getX() > getCoordinates().getX())
				{
					m3 = Model.getModuleAtLocation(new Point(getCoordinates().getX()+1,getCoordinates().getY()));
					m4 = Model.getModuleAtLocation(new Point(getCoordinates().getX()+1,p.getY()));
				}
				else
				{
					m3 = Model.getModuleAtLocation(new Point(getCoordinates().getX()-1,getCoordinates().getY()));
					m4 = Model.getModuleAtLocation(new Point(getCoordinates().getX()-1,p.getY()));
				}
				if(m3 == null || m4 == null)
				{
					continue;
				}
				if (m3.getType().equals(ModuleType.PLAIN) && m4.getType().equals(ModuleType.PLAIN))
				{
					diagonallyConnectedModules.add(m);
				}
			}
		}
		return diagonallyConnectedModules;
	}
	
	
	public Image getImage()
	{
		if(getType().equals(ModuleType.AIRLOCK))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/airlock.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.CANTEEN))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/canteen.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.CONTROL))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/airlock.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.DORMITORY))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/dormitory.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.FOODWATERSTORAGE))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/foodWaterStorage.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.GYMRELAXATION))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/gymRelaxation.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.MEDICAL))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/medical.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.PLAIN))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/plain.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.POWER))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/power.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else if(getType().equals(ModuleType.SANITATION))
		{
			Image image = new Image("http://d.umn.edu/~mckeo044/war/images/modules/sanitation.jpg");
			image.setHeight(Variables.px20);
			image.setWidth(Variables.px20);
			return image;
		}
		else {
			return null;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public boolean isHorizontallyNextTo(Module m)
	{
		return getHorizontallyConnectedModules().contains(m);
	}
	
	public boolean isVerticallyNextTo(Module m)
	{
		return getVerticallyConnectedModules().contains(m);
	}
	
	public boolean isDiagonallyNextTo(Module m)
	{
		return getDiagonallyConnectedModules().contains(m);
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean hasSameIdAs(Module mod) {
		return getId() == mod.getId();
	}

	public boolean hasSameCoordinatesAs(Module mod) {
		return getCoordinates().equals(mod.getCoordinates());
	}

	public int getOrientation() {
		return orientation;
	}

	public void setOrientation(int orientation) {
		this.orientation = orientation;
	}

	public ModuleType getType() {
		return type;
	}

	public void setType(ModuleType type) {
		this.type = type;
	}

	public ModuleStatus getStatus() {
		return status;
	}

	public void setStatus(ModuleStatus status) {
		this.status = status;
	}

	public Point getCoordinates() {
		return coordinates;
	}

	public void setCoordinates(Point landedCoordinates) {
		this.coordinates = landedCoordinates;
	}

	public boolean isInUse() {
		return inUse;
	}

	public void setInUse(boolean inUse) {
		this.inUse = inUse;
	}

	public boolean equals(Object o)
	{
		Module m = (Module) o;
		return (id == m.getId() && type == m.getType() &&
				status == m.getStatus() && orientation == m.getOrientation() && 
				getCoordinates() == m.getCoordinates() && inUse == m.isInUse());
	}
	
	
	

	static String[] moduleStrings = { "Air Lock", "Plain", "Dormitory",
			"Sanitation", "Food & Water", "Gym & Relaxation", "Canteen",
			"Power", "Control", "Medical" };

} // class Module