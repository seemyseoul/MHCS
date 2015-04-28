package mhcs.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.user.client.Random;

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

	public List<Module> getNonPlainModules()
	{
		List<Module> modules = new ArrayList<Module>();
		for (Module m : getModules())
		{
			if (!m.getType().equals(ModuleType.PLAIN))
			{
				modules.add(m);
			}
		}
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
	 * gets a value to determine how flawed a configuration is.
	 * (this should be minimized)
	 * @return a float that indicates how flawed the config is. (arbitrary non-existant scale)
	 */
	public float getFlawRating()
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
		 * 7.) Dormitory modules should be located in recognizable dormitory wings of the Habitat.
		 * 8.) A Gym & Relaxation module should be HORIZONTALLY next to a Sanitation module.
		 * 9.) One Medical module should be “diagonally next to” one Airlock module
		 * 10.) Food & Water storage modules should be located <=3 modules away from Canteen modules.
		 * 11.) Dormitory wings should have Sanitation modules in the ratio of 1 Sanitation module for
				every 2 Dormitory modules.
		 * 12.) Special module types (types for which there are only 4 modules e.g. Medical) should be
				located throughout the Habitat and not located altogether in one part
		 */
		float rule1Weight = 1;
		float rule2Weight = 1;
		float rule3Weight = 1;
		float rule4Weight = 1;
		float rule5Weight = 1;
		float rule6Weight = 1;
		float rule7Weight = 1;
		float rule8Weight = 1;
		float rule9Weight = 1;
		float rule10Weight = 1;
		float rule11Weight = 1;
		float rule12Weight = 1;
		
		
		int flawRating = 0;
		flawRating += sanitationNextToCanteen() * rule1Weight;
		flawRating += sanitationNextToFoodWaterStorage() * rule2Weight;
		flawRating += airlockNextToDormitory() * rule3Weight;
		flawRating += habitatInvisible() * rule4Weight;
		flawRating += modulesEnclosed() * rule5Weight;
		flawRating += airlockOnAllSides() * rule6Weight;
		flawRating += dormsInWings() * rule7Weight;
		flawRating += gymNextToSanitation() * rule8Weight;
		flawRating += medicalNextToAirlock() * rule9Weight;
		flawRating += foodWaterNextToCanteen() * rule10Weight;
		flawRating += dormSanitationRatio() * rule11Weight;
		flawRating += specialModuleSpread() * rule12Weight;
		
		return flawRating;
	}
	
	/**
	 * Here to check if any sanitation modules are next to any canteen modules.
	 * @return int - number of violations to this layout rule
	 */
	public int sanitationNextToCanteen()
	{
		int numViolations = 0;
		for (Module m : getModules(ModuleType.SANITATION))
		{
			for (Module n : m.getHorizontallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.CANTEEN))
				{
					numViolations++;
				}
			}
			for (Module n : m.getVerticallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.CANTEEN))
				{
					numViolations++;
				}
			}
			for (Module n : m.getDiagonallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.CANTEEN))
				{
					numViolations++;
				}
			}
		}
		return numViolations;
	}
	
	/**
	 * says whether or not sanitation modules are next to food and water storage modules
	 * @return int - number of violations to this layout rule
	 */
	public int sanitationNextToFoodWaterStorage()
	{
		int numViolations = 0;
		for (Module m : getModules(ModuleType.SANITATION))
		{
			for (Module n : m.getHorizontallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.FOODWATERSTORAGE))
				{
					numViolations++;
				}
			}
			for (Module n : m.getVerticallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.FOODWATERSTORAGE))
				{
					numViolations++;
				}
			}
			for (Module n : m.getDiagonallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.FOODWATERSTORAGE))
				{
					numViolations++;
				}
			}
		}
		return numViolations;
	}
	
	/**
	 * says whether or not their are airlock modules next to dormitory modules
	 * @return true or false
	 */
	public int airlockNextToDormitory()
	{
		int numViolations = 0;
		for (Module m : getModules(ModuleType.AIRLOCK))
		{
			for (Module n : m.getHorizontallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.DORMITORY))
				{
					numViolations++;
				}
			}
			for (Module n : m.getVerticallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.DORMITORY))
				{
					numViolations++;
				}
			}
			for (Module n : m.getDiagonallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.DORMITORY))
				{
					numViolations++;
				}
			}
		}
		return numViolations;
	}

	/**
	 * whether or not the habitat is viewable from another part of the habitat...
	 * @return
	 */
	public int habitatInvisible()
	{
		return 0; //will always be true with how we make configurations from frames of plain modules.
	}
	
	public int modulesEnclosed()
	{
		return 0; // will never happen as long as getOpenSpaces() does its job.  (WHICH IT CURRENTLY ISN'T) //TODO
	}
	
	/**
	 * This method returns the smallest distance between two airlocks in the configuration.
	 * (this should be maximized)
	 * @return distance between airlocks.
	 */
	public int airlockOnAllSides()
	{
		int distanceBetweenAirlocks = 0;
		List<Module> airlockModules = getModules(ModuleType.AIRLOCK);
		for (int i=0;i<airlockModules.size();i++)
		{
			Module currentAirlock = airlockModules.get(i);
			for (int j=i+1;j<airlockModules.size();j++)
			{
				distanceBetweenAirlocks = Math.min(distanceBetweenAirlocks
						, currentAirlock.getCoordinates().distanceTo(airlockModules.get(j).getCoordinates()));
			}
		}
		return distanceBetweenAirlocks;
	}
	
	/**
	 * This method returns the largest distance between two dormitories in the configuration.
	 * ( this is to be minimized in getFlawRating() )
	 * @return the maximum distance between two dorms.
	 */
	public int dormsInWings()
	{
		int distanceBetweenDorms = 0;
		List<Module> dormModules = getModules(ModuleType.DORMITORY);
		for (int i=0;i<dormModules.size();i++)
		{
			Module currentDorm = dormModules.get(i);
			for (int j=i+1;j<dormModules.size();j++)
			{
				distanceBetweenDorms = Math.max(distanceBetweenDorms
						, currentDorm.getCoordinates().distanceTo(dormModules.get(j).getCoordinates()));
			}
		}
		return distanceBetweenDorms;
	}
	
	/**
	 * This method will give a 0 if there is no Gym next to a Sanitation and a 1 if there is.
	 * (This should be maximized)
	 * @return 0 or 1 ( would be boolean if not used in getFlawRating() )
	 */
	public int gymNextToSanitation()
	{
		for (Module m : getModules(ModuleType.GYMRELAXATION))
		{
			for (Module n : m.getHorizontallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.SANITATION))
				{
					return 1;
				}
			}
		}
		return 0;
	}
	
	/**
	 * This method will give a 0 if there is no Medical next to an Airlock and a 1 if there is.
	 * (this should be maximized)
	 * @return 0 or 1 ( would be boolean if not used in getFlawRating() )
	 */
	public int medicalNextToAirlock()
	{
		for (Module m : getModules(ModuleType.MEDICAL))
		{
			for (Module n : m.getDiagonallyConnectedModules())
			{
				if (n.getType().equals(ModuleType.AIRLOCK))
				{
					return 1;
				}
			}
		}
		return 0;
	}
	
	/**
	 * This method will give the number of 
	 * Food and water storage modules that are greater
	 * than a distance of 3 away from the nearest canteen module.
	 * @return number of FOODWATERSTORAGE modules >3 from nearest CANTEEN module
	 */
	public int foodWaterNextToCanteen()
	{
		int numViolations = 0;
		boolean ruleViolated = false;
		for (Module a : this.getModules(ModuleType.FOODWATERSTORAGE))
		{
			ruleViolated = true;
			for (Module b : this.getModules(ModuleType.CANTEEN))
			{
				if(a.getCoordinates().distanceTo(b.getCoordinates()) <= 3) // <= 3 plain modules away isn't really this.
				{
					ruleViolated = false;
				}
			}
			if(ruleViolated)
			{
				numViolations++;
			}
		}
		return numViolations;
	}
	
	/**
	 * checks the Dormitory to Sanitation ratio
	 * @return
	 */
	public int dormSanitationRatio()
	{
		return 0;  //TODO
	}
	
	/**
	 * Makes sure that special modules are spread throughout config.
	 * special modules include: GYM,CANTEEN,POWER,CONTROL,AIRLOCK,MEDICAL
	 * ( this should be maximized )
	 * @return int ( used for getFlawRating() )
	 */
	public int specialModuleSpread()
	{
		int totalSpread = 0;
		totalSpread += moduleSpread(ModuleType.GYMRELAXATION);
		totalSpread += moduleSpread(ModuleType.CANTEEN);
		totalSpread += moduleSpread(ModuleType.POWER);
		totalSpread += moduleSpread(ModuleType.CONTROL);
		totalSpread += moduleSpread(ModuleType.AIRLOCK);
		totalSpread += moduleSpread(ModuleType.MEDICAL);
		return totalSpread;
	}
	
	/**
	 * this gets the minimum distance between modules of type mt
	 * @param mt
	 * @return int ( used for getFlawRating() )
	 */
	public int moduleSpread(ModuleType mt)
	{
		int distanceBetweenModules = 0;
		List<Module> mtModules = getModules(mt);
		for (int i=0;i<mtModules.size();i++)
		{
			Module currentModule = mtModules.get(i);
			for (int j=i+1;j<mtModules.size();j++)
			{
				distanceBetweenModules = Math.min(distanceBetweenModules
						, currentModule.getCoordinates().distanceTo(mtModules.get(j).getCoordinates()));
			}
		}
		return distanceBetweenModules;
	}
	
	
	

	
	
	public void makeGood()
	{
		while(getFlawRating() > 50) //...Magic Number...
		{
			improve();
		}
	}
	
	
	
	/**
	 * this function will randomly swap modules from the configuration
	 * and will hopefully improve the configuration by doing so.
	 */
	public void improve()
	{
		List<Module> modulesToSwap = getNonPlainModules();
		int a = (int) Math.random()*(modulesToSwap.size());
		int b = (int) Math.random()*(modulesToSwap.size());
		Module modA = modulesToSwap.get(a);
		Module modB = modulesToSwap.get(b);
		float oldFlawRating = getFlawRating();
		swapCoordinates(modA,modB);
		float newFlawRating = getFlawRating();
		if (newFlawRating >= oldFlawRating)
		{
			swapCoordinates(modA,modB);
		}
	}
	
	public void randomlyFill()
	{
		//TODO
		/*
		 * Randomly fill the configuration with modules from Model
		 */
	}
	
	/**
	 * Swaps the coordinates of two modules.
	 * @param a
	 * @param b
	 */
	public void swapCoordinates(Module a, Module b)
	{
		Point temp = a.getCoordinates();
		a.setCoordinates(b.getCoordinates());
		b.setCoordinates(temp);
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
	public final List<Point> getOpenSpaces() //TODO
	{
		List<Point> placesAdjToPlain = new ArrayList<Point>(); // list of points at which other modules could be placed.
		
		for (Module m : this.getModules(ModuleType.PLAIN)) // populates placesAdjToPlain
		{
			Point p = m.getCoordinates();
			Module north = Model.getModuleAtLocation(new Point(p.getX(),p.getY()+1));
			Module northEast = Model.getModuleAtLocation(new Point(p.getX()+1,p.getY()+1));
			Module northWest = Model.getModuleAtLocation(new Point(p.getX()-1,p.getY()+1));
			Module south = Model.getModuleAtLocation(new Point(p.getX(),p.getY()-1));
			Module southEast = Model.getModuleAtLocation(new Point(p.getX()+1,p.getY()-1));
			Module southWest = Model.getModuleAtLocation(new Point(p.getX()-1,p.getY()-1));
			Module west = Model.getModuleAtLocation(new Point(p.getX()-1,p.getY()));
			Module east = Model.getModuleAtLocation(new Point(p.getX()+1,p.getY()));
			
			if(north == null || !this.getModules().contains(north))
			{
				placesAdjToPlain.add(new Point(p.getX(),p.getY()+1));
			}
			if(south == null || !this.getModules().contains(south))
			{
				placesAdjToPlain.add(new Point(p.getX(),p.getY()-1));
			}
			if(east == null || !this.getModules().contains(east))
			{
				placesAdjToPlain.add(new Point(p.getX()+1,p.getY()));
			}
			if(west == null || !this.getModules().contains(west))
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
		return null; //TODO
	}

	static String[] configCheckBoxVars = { "radAirLock", "radPlain", "radDorm",
			"radSanitation", "radFoodAndWater", "radGymAndRelax", "radCanteen",
			"radPower", "radControl", "radMedical", "radNone", "radAll" };

	static String[] configCheckBoxes = { "Air Lock", "Plain", "Dormitory",
			"Sanitation", "Food & Water", "Gym & Relaxation", "Canteen",
			"Power", "Control", "Medical", "Select All", "Delect All" };
}
