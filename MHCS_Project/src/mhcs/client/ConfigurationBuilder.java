package mhcs.client;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import mhcs.storage.Model;
import mhcs.storage.Load;
import mhcs.storage.Save;

/**
 * Class designed to build configurations.
 * 
 * @author Naples
 *
 */
public class ConfigurationBuilder {

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * Check whether or not a minimum configuration is possible given the stored
	 * modules.
	 *
	 * @return boolean value representing whether or not a minimum configuration
	 *         can be found.
	 */
	public static boolean minConfigPossible() {
		// Load loader = new Load();
		// Module[] modules = loader.getModules();
		Module[] modules = (Module[]) Model.getModuleList().toArray();
		int numAirlock = 0; // 1
		int numControl = 0; // 1
		int numPower = 0; // 1
		int numFoodWater = 0; // 1
		int numDormitory = 0; // 1
		int numCanteen = 0; // 1
		int numSanitation = 0; // 1
		int numPlain = 0; // 3

		for (Module m : modules) {
			if (m.getType().equals(ModuleType.PLAIN)) {
				numAirlock++;
			}
			if (m.getType().equals("control")) {
				numControl++;
			}
			if (m.getType().equals("power")) {
				numPower++;
			}
			if (m.getType().equals("foodWater")) {
				numFoodWater++;
			}
			if (m.getType().equals("dormitory")) {
				numDormitory++;
			}
			if (m.getType().equals("canteen")) {
				numCanteen++;
			}
			if (m.getType().equals("sanitation")) {
				numSanitation++;
			}
			if (m.getType().equals("plain")) {
				numPlain++;
			}
		}
		return (numAirlock >= 1 && numControl >= 1 && numPower >= 1
				&& numFoodWater >= 1 && numDormitory >= 1 && numCanteen >= 1
				&& numSanitation >= 1 && numPlain >= 3);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * This method will generate configurations.
	 *
	 * @return an array of ALL Configurations.
	 */
	public final List<Configuration> generateConfigurations() {
		
		int numPlainModules = Model.getUnusedUsableModulesOfType(ModuleType.PLAIN).size();
		
		List<Configuration> hConfigs = generateHConfigurations(numPlainModules);
		List<Configuration> plusConfigs = generatePlusConfigurations(numPlainModules);
		List<Configuration> lConfigs = generateLConfigurations(numPlainModules);
		
		List<Configuration> configurations = new ArrayList<Configuration>();
		for (Configuration c : hConfigs) {
			configurations.add(c);
		}
		for (Configuration c : plusConfigs) {
			configurations.add(c);
		}
		for (Configuration c : lConfigs) {
			configurations.add(c);
		}
		
		return configurations;
	}

	/**
	 * Generates configurations in an H-Shape
	 * @return List<Configuration> list of configurations with an H-shape
	 */
	public final List<Configuration> generateHConfigurations(int numPlainModules)
	{
		
		/*
		 * These generate(Something)Configurations functions will work in the following way:
		 * 
		 * 1.) create a bare-bones structure using "numPlainModules" plain modules 
		 * 2.) find the adjacent empty spaces that aren't part of the configuration yet.
		 * 3.) fill in those spaces with modules.
		 *     (HOW?!) (Randomly in all possible ways and then sort using Configuration.getQuality()?)
		 *     (Or perhaps by doing it intelligently to begin with so as to not have to make a bajillion configurations and 100ish*a bajillion modules)
		 *     ...idk
		 * 4.) move the entire configuration so it fits on the map and isn't in only the usable Points.
		 * 5.) move modules in the way of the newly constructed configuration.
		 * 
		 */
		
		
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		Configuration baseConfig = new Configuration();
		
		Module centerModule = Model.getUnusedUsableModuleClosestTo(Model.getCenterOfMass(),ModuleType.PLAIN);
		if(centerModule != null)
		{
			centerModule.setInUse(true);
			centerModule.setCoordinates(Model.getCenterOfMass());
			baseConfig.addModule(centerModule);
		}
		
		Point center = centerModule.getCoordinates();
		for (int i=1;i<=(numPlainModules / 6);i++)
		{  // this for loop places the horizontal part of the H Configuration
			Module closestRightPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+i,center.getY()),ModuleType.PLAIN);
			if (closestRightPlain != null)
			{
				closestRightPlain.setInUse(true);
				closestRightPlain.setCoordinates(new Point(center.getX()+i,center.getY()));
				baseConfig.addModule(closestRightPlain);
			}
			Module closestLeftPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-i,center.getY()),ModuleType.PLAIN);
			if (closestLeftPlain != null)
			{
				closestLeftPlain.setInUse(true);
				closestLeftPlain.setCoordinates(new Point(center.getX()-i,center.getY()));
				baseConfig.addModule(closestLeftPlain);
			}
		}
		
		for (int j=1;j<=(numPlainModules / 6);j++)
		{   // this loop should place the vertical parts of the H Configuration.
			// Upper Right part of H config
			Module closestUpRightPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+(numPlainModules/6),center.getY()+j),ModuleType.PLAIN);
			if (closestUpRightPlain != null)
			{
				closestUpRightPlain.setInUse(true);
				closestUpRightPlain.setCoordinates(new Point(center.getX()+(numPlainModules/6),center.getY()+j));
				baseConfig.addModule(closestUpRightPlain);
			}
			// Upper Left part of H config
			Module closestUpLeftPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-(numPlainModules/6),center.getY()+j),ModuleType.PLAIN);
			if (closestUpLeftPlain != null)
			{
				closestUpLeftPlain.setInUse(true);
				closestUpLeftPlain.setCoordinates(new Point(center.getX()-(numPlainModules/6),center.getY()+j));
				baseConfig.addModule(closestUpLeftPlain);
			}
			// Lower Right part of H config
			Module closestDownRightPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+(numPlainModules/6),center.getY()-j),ModuleType.PLAIN);
			if (closestDownRightPlain != null)
			{
				closestDownRightPlain.setInUse(true);
				closestDownRightPlain.setCoordinates(new Point(center.getX()+(numPlainModules/6),center.getY()-j));
				baseConfig.addModule(closestDownRightPlain);
			}
			// Lower Left part of H config
			Module closestDownLeftPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-(numPlainModules/6),center.getY()-j),ModuleType.PLAIN);
			if (closestDownLeftPlain != null)
			{
				closestDownLeftPlain.setInUse(true);
				closestDownLeftPlain.setCoordinates(new Point(center.getX()-(numPlainModules/6),center.getY()-j));
				baseConfig.addModule(closestDownLeftPlain);
			}
		}
		
		for (int x=0;x < (numPlainModules % 6);x++)
		{   // do something with leftover plain modules.  Add them to the right of the center.
			for (Module m : baseConfig.getModules())
			{
				if(m.getCoordinates().getX() > center.getX())
				{
					m.setCoordinates(new Point(m.getCoordinates().getX()+1,m.getCoordinates().getY()));
				}
			}
			Module leftOverPlain = Model.getUnusedModuleClosestTo(center,ModuleType.PLAIN);
			if (leftOverPlain != null)
			{
				leftOverPlain.setInUse(true);
				leftOverPlain.setCoordinates(new Point(center.getX()+1,center.getY()));
				baseConfig.addModule(leftOverPlain);
			}
		}
		
		
		/**
		 * go through the list of points and place modules there
		 */
		
		// TOUGH PART STILL LEFT TO DO...
		
		
		return configs;
	}
	
	/**
	 * Generates configurations in a Plus shape
	 * @return List<Configuration> list of configurations with a plus shape
	 */
	public final List<Configuration> generatePlusConfigurations(int numPlainModules)
	{
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		
		return configs;
	}
	
	/**
	 * Generates configurations in a L-shape
	 * @return List<Configuration> list of configurations with an L-shape
	 */
	public final List<Configuration> generateLConfigurations(int numPlainModules)
	{
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		
		return configs;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * This method will return a minimum configuration.
	 *
	 * @return preset minimum configuration.
	 */
	public final Configuration generateMinConfiguration() {
		if (!minConfigPossible()) {
			return null;
		}

		Point centerOfMass = Model.getCenterOfMass();

		/*
		 * pretty good minimum config hardcoded...
		 * 
		 * 			Food	Dorm	Power 
		 * Airlock Plain 	Plain 	Plain 	Sanitation
		 * 		   Canteen 			Control
		 */

		Module centerPlain = Model.getUnusedModuleClosestTo(centerOfMass,
				ModuleType.PLAIN);
		centerPlain.setInUse(true);
		centerPlain.setCoordinates(centerOfMass);

		Point rightPlainPos = new Point(centerOfMass.getX() + 1,
				centerOfMass.getY());
		Module rightPlain = Model.getUnusedModuleClosestTo(rightPlainPos,
				ModuleType.PLAIN);
		rightPlain.setInUse(true);
		rightPlain.setCoordinates(rightPlainPos);

		Point leftPlainPos = new Point(centerOfMass.getX() - 1,
				centerOfMass.getY());
		Module leftPlain = Model.getUnusedModuleClosestTo(leftPlainPos,
				ModuleType.PLAIN);
		leftPlain.setInUse(true);
		leftPlain.setCoordinates(leftPlainPos);

		Point airlockPos = new Point(leftPlainPos.getX() - 1,
				leftPlainPos.getY());
		Module airlock = Model
				.getUnusedModuleClosestTo(airlockPos, ModuleType.AIRLOCK);
		airlock.setInUse(true);
		airlock.setCoordinates(airlockPos);

		Point foodWaterPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() + 1);
		Module foodWater = Model.getUnusedModuleClosestTo(foodWaterPos,
				ModuleType.FOODWATERSTORAGE);
		foodWater.setInUse(true);
		foodWater.setCoordinates(foodWaterPos);

		Point canteenPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() - 1);
		Module canteen = Model
				.getUnusedModuleClosestTo(canteenPos, ModuleType.CANTEEN);
		canteen.setInUse(true);
		canteen.setCoordinates(canteenPos);

		Point dormPos = new Point(centerOfMass.getX(), centerOfMass.getY() + 1);
		Module dorm = Model.getUnusedModuleClosestTo(dormPos, ModuleType.DORMITORY);
		dorm.setInUse(true);
		dorm.setCoordinates(dormPos);

		Point powerPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() + 1);
		Module power = Model.getUnusedModuleClosestTo(powerPos, ModuleType.POWER);
		power.setInUse(true);
		power.setCoordinates(powerPos);

		Point controlPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() - 1);
		Module control = Model
				.getUnusedModuleClosestTo(controlPos, ModuleType.CONTROL);
		control.setInUse(true);
		control.setCoordinates(controlPos);

		Point sanitationPos = new Point(rightPlainPos.getX() + 1,
				rightPlainPos.getY());
		Module sanitation = Model.getUnusedModuleClosestTo(sanitationPos,
				ModuleType.SANITATION);
		sanitation.setInUse(true);
		sanitation.setCoordinates(sanitationPos);

		Configuration newConfiguration = new Configuration();
		List<Module> moduleList = new ArrayList<Module>();
	
		moduleList.add(leftPlain);
		moduleList.add(centerPlain);
		moduleList.add(rightPlain);
		moduleList.add(airlock);
		moduleList.add(foodWater);
		moduleList.add(canteen);
		moduleList.add(dorm);
		moduleList.add(power);
		moduleList.add(control);
		moduleList.add(sanitation);
		
		newConfiguration.setModules(moduleList);
		return newConfiguration;
	}

}
