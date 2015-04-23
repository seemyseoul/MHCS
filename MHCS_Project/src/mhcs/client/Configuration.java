package mhcs.client;

import java.util.ArrayList;
import java.util.List;

/**
 * This class defines a configuration as an array of modules.
 * 
 * @author user
 *
 */
public final class Configuration implements Cloneable{
	private List<Module> modules = new ArrayList<Module>();
	private int id = -1;

	public Configuration clone()
	{
		return new Configuration(this.toString());
	}
	
	
	
	/**
	 * Gets the modules that make up a configuration.
	 * 
	 * @return an array of Module.
	 */
	public List<Module> getModules() {
		return modules;
	}

	/**
	 * Sets the modules of a configuration.
	 * 
	 * @param modules
	 */
	public void setModules(List<Module> modules) {
		this.modules = modules;
	}

	/**
	 * Gets the ID of a configuration.
	 * 
	 * @return id number of the configuration.
	 */
	public int getId() {
		return id;
	}

	/**
	 * Sets the configuration id.
	 * 
	 * @param id
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * Construct an empty Configuration from an id.
	 * 
	 * @param id
	 */
	public Configuration(final int id) {
		this.id = id;
	}

	/**
	 * empty constructor.
	 */
	public Configuration() {
	}

	/**
	 * Constructor for creating a Configuration from the string stored in HTML5
	 * LocalStorage.
	 *
	 * @param configString
	 */
	public Configuration(String configString) {
		String[] moduleStrings = configString.split(";");
		this.id = Integer.parseInt(moduleStrings[0]);

		for (int i = 1; i < moduleStrings.length; i++) {
			modules.add(new Module(moduleStrings[i]));
		}
	}

	/**
	 * Converts a configuration to a string.
	 * 
	 * @return string version of a configuration. Modules are separated by ";"
	 *         and fields within modules are separated by ",".
	 */
	public String toString() {
		String configString = Integer.toString(id) + ";";
		for (Module m : modules) {
			configString += m.toString();
			configString += ";";
		}
		return configString.substring(0, configString.length() - 2);
	}

	/**
	 * Add a module to the configuration.
	 * 
	 * @param m
	 */
	public void addModule(final Module m) {
		modules.add(m);
	}
	
	/**
	 * this method returns the rover path as a Point[].
	 *
	 * @param m
	 *            the array of modules that need to be placed.
	 * @return Point[] path
	 */
	public final Point[] getRoverPath(final Module[] m) {
		return null;
	}

	static String[] configCheckBoxVars = { "radAirLock", "radPlain", "radDorm",
			"radSanitation", "radFoodAndWater", "radGymAndRelax", "radCanteen",
			"radPower", "radControl", "radMedical", "radNone", "radAll" };

	static String[] configCheckBoxes = { "Air Lock", "Plain", "Dormitory",
			"Sanitation", "Food & Water", "Gym & Relaxation", "Canteen",
			"Power", "Control", "Medical", "Select All", "Delect All" };
}
