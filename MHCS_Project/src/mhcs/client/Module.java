package mhcs.client;

import mhcs.storage.Load;

/**
 * This class defines a Module on Mars.
 * 
 * @author Naples1
 *
 */
public class Module {

	private int id;
	private int orientation;
	private ModuleType type;
	private Point coordinates;
	private ModuleStatus status;
	private boolean inUse;

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

	// /**
	// * this method finds
	// * @param p
	// * @return
	// */
	// public static Module getModuleAtCoordinates(Point p) {
	// Load loader = new Load();
	// Module[] modules = loader.getModules();
	// for (Module m : modules) {
	// if (m.isInUse() && m.configCoordinates.equals(p)) {
	// return m;
	// }
	// }
	// return null;
	// }

	// public boolean isNextTo(Module m) {
	// int x1 = m.getConfigCoordinates().getX();
	// int x2 = getConfigCoordinates().getX();
	// int y1 = m.getConfigCoordinates().getY();
	// int y2 = getConfigCoordinates().getY();
	// if (x2 - x1 == 1 || y2 - y1 == 1) // modules are "horizontally next to"
	// // each other
	// {
	//
	// }
	// // modules are "vertically next to" each other
	// else if ((Math.abs(x2 - x1) == 2 && y2 == y1)
	// && getModuleAtCoordinates(new Point(Math.min(x2, x1) + 1, y1))
	// .getType().equals("plain")) {
	// return true;
	// } else if ((Math.abs(y2 - y1) == 2 && x2 == x1)
	// && getModuleAtCoordinates(new Point(Math.min(y2, y1) + 1, x1))
	// .getType().equals("plain")) {
	// return true;
	// } else if ((Math.abs(x2 - x1) == 2 && Math.abs(y2 - y1) == 1)
	// && (getModuleAtCoordinates(
	// new Point(Math.min(x2, x1) + 1, Math.min(y2, y1)))
	// .getType().equals("plain"))
	// && (getModuleAtCoordinates(
	// new Point(Math.min(x2, x1) + 1, Math.min(y2, y1) + 1))
	// .getType().equals("plain"))) {
	// return true;
	// } else if ((Math.abs(y2 - y1) == 2 && Math.abs(x2 - x1) == 1)
	// && (getModuleAtCoordinates(
	// new Point(Math.min(y2, y1) + 1, Math.min(x2, x1)))
	// .getType().equals("plain"))
	// && (getModuleAtCoordinates(
	// new Point(Math.min(y2, y1) + 1, Math.min(x2, x1) + 1))
	// .getType().equals("plain"))) {
	// return true;
	// }
	//
	// return false;
	// }

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

	// /**
	// * Enum to use in loops for GUI.
	// * @author Amanda
	// *
	// */
	// public static enum var {
	// radAirLock,
	// radPlain,
	// radDorm,
	// radSanitation,
	// radFoodAndWater,
	// radGymAndRelax,
	// radCanteen,
	// radPower,
	// radControl,
	// radMedical,
	// radNone,
	// radAll
	// } // moduleNames

	static String[] moduleStrings = { "Air Lock", "Plain", "Dormitory",
			"Sanitation", "Food & Water", "Gym & Relaxation", "Canteen",
			"Power", "Control", "Medical" };

} // class Module