package mhcs.client;

import java.util.ArrayList;
import java.util.List;

import mhcs.storage.Model;

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
	 * @return a List of Module.
	 */
	public List<Module> getModules() {
		return modules;
	}
	
	/**
	 * Gets the modules with ModuleType type
	 * @param type
	 * @return a list of modules
	 */
	public List<Module> getModules(ModuleType type)
	{
		List<Module> modulesOfType = new ArrayList<Module>();
		for (Module m : getModules())
		{
			if(m.getType().equals(type))
			{
				modulesOfType.add(m);
			}
		}
		return modulesOfType;
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
	
	
	public float getQuality()
	{
		/**
		 *  start with 100 points for perfect configuration.
		 *
		 * subtract n points for violations of layout rules.
		 * 1.) Sanitation not next to Canteen
		 * 2.) Sanitation not next to Food & Water Storage
		 * 3.) Airlock not next to Dormitory
		 * 4.) At least one part of the habitat viewable from another part of the habitat.
		 * 5.) Wings of the habitat should not be so close together that modules are hard up against
			   one another denying any kind of view from a window.
		 * 6.) Airlocks should be located on all sides of the Habitat. 
		 * 7.) Dormitory modules should be located in recognisable dormitory wings of the Habitat.
		 * 8.) A Gym & Relaxation module should be HORIZONTALLY next to a Sanitation module.
		 * 9.) One Medical module should be “diagonally next to” one Airlock module
		 * 10.) Food & Water storage modules should be located <=3 modules away from Canteen modules.
		 * 11.) Dormitory wings should have Sanitation modules in the ratio of 1 Sanitation module for
				every 2 Dormitory modules.
		 * 12.) Special module types (types for which there are only 4 modules e.g. Medical) should be
				located throughout the Habitat and not located altogether in one part
		 * 
		 *  Yikes!    Yikes!    Yikes!    Yikes!    Yikes!    Yikes!    Yikes!    Yikes!    Yikes!    Yikes!    Yikes!
		 */
		
		int configPoints = 100;
		
		//TODO
		
		return ((float) configPoints) / ((float) 100);
	}
	
	/**
	 * Expand the configuration in all possible ways.
	 * (make this more intelligent to save on space and runtime)
	 * @return a list of expanded configurations.
	 */
	public final List<Configuration> expand()
	{
		List<Configuration> expandedConfigs = new ArrayList<Configuration>();
		
		
		return expandedConfigs;
	}
	
	
	/**
	 * this function returns the unfilled spaces around the plain modules of a configuration.
	 * @return List<Point> a list of unallocated spaces around plain modules in the config.
	 */
	public final List<Point> getOpenSpaces()
	{
		List<Point> placesAdjToPlain = new ArrayList<Point>(); // list of points at which other modules could be placed.
		
		for (Module m : this.getModules(ModuleType.PLAIN)) // populates placesAdjToPlain
		{
			Point p = m.getCoordinates();
			Module above = Model.getModuleAtLocation(new Point(p.getX(),p.getY()+1));
			Module below = Model.getModuleAtLocation(new Point(p.getX(),p.getY()-1));
			Module left = Model.getModuleAtLocation(new Point(p.getX()-1,p.getY()));
			Module right = Model.getModuleAtLocation(new Point(p.getX()+1,p.getY()));
			
			if(above == null || !this.getModules().contains(above))
			{
				placesAdjToPlain.add(new Point(p.getX(),p.getY()+1));
			}
			if(below == null || !this.getModules().contains(below))
			{
				placesAdjToPlain.add(new Point(p.getX(),p.getY()-1));
			}
			if(right == null || !this.getModules().contains(right))
			{
				placesAdjToPlain.add(new Point(p.getX()+1,p.getY()));
			}
			if(left == null || !this.getModules().contains(left))
			{
				placesAdjToPlain.add(new Point(p.getX()-1,p.getY()));
			}
		}
		return placesAdjToPlain;
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
