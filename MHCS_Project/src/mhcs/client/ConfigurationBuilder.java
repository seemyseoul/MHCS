package mhcs.client;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gwt.user.client.Window;

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
		List<Module> modules = Model.getModuleList();
		int numAirlock = 0; // 1
		int numControl = 0; // 1
		int numPower = 0; // 1
		int numFoodWater = 0; // 1
		int numDormitory = 0; // 1
		int numCanteen = 0; // 1
		int numSanitation = 0; // 1
		int numPlain = 0; // 3
		
		for (Module m : modules) {
			if (m.getType().equals(ModuleType.AIRLOCK) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numAirlock++;
			}
			if (m.getType().equals(ModuleType.CONTROL) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numControl++;
			}
			if (m.getType().equals(ModuleType.POWER) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numPower++;
			}
			if (m.getType().equals(ModuleType.FOODWATERSTORAGE) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numFoodWater++;
			}
			if (m.getType().equals(ModuleType.DORMITORY) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numDormitory++;
			}
			if (m.getType().equals(ModuleType.CANTEEN) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numCanteen++;
			}
			if (m.getType().equals(ModuleType.SANITATION) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numSanitation++;
			}
			if (m.getType().equals(ModuleType.PLAIN) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				numPlain++;
			}
		}
		
//		String alertString = "";
//		alertString += "airlock: " + numAirlock + "\n";
//		alertString += "control: " + numAirlock + "\n";
//		alertString += "power: " + numAirlock + "\n";
//		alertString += "foodwaterstorage: " + numAirlock + "\n";
//		alertString += "dorm: " + numAirlock + "\n";
//		alertString += "canteen: " + numAirlock + "\n";
//		alertString += "sanitation: " + numAirlock + "\n";
//		alertString += "plain: " + numAirlock + "\n";
//		Window.alert(alertString);
		
		return (numAirlock >= 1 && numControl >= 1 && numPower >= 1
				&& numFoodWater >= 1 && numDormitory >= 1 && numCanteen >= 1
				&& numSanitation >= 1 && numPlain >= 3);
	}

	
	
	
	
	
	
	
	/**
	 * This method will generate configurations.
	 *
	 * @return an array of ALL Configurations.
	 */
	public static final List<Configuration> generateConfigurations() {
		if (!minConfigPossible())
		{
			return new ArrayList<Configuration>();
		}
		int numPlainModules = Model.getUnusedUsableModulesOfType(ModuleType.PLAIN).size();
		Window.alert(Integer.toString(numPlainModules));
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
		
		
		Configuration minConfig1 = generateMinConfiguration1();
		Configuration minConfig2 = generateMinConfiguration2();
		
		minConfig1.makeInBounds();
		minConfig2.makeInBounds();
		
		configurations.add(minConfig1);
		configurations.add(minConfig2);
		Model.setConfigList(configurations);
		return configurations;
	}

	/**
	 * Generates configurations in an H-Shape
	 * @return List<Configuration> list of configurations with an H-shape
	 */
	public static final List<Configuration> generateHConfigurations(int numPlainModules)
	{
		
		/*
		 * These generate(Something)Configurations functions will work in the following way:
		 * 
		 * 1.) create a bare-bones structure using "numPlainModules" plain modules 
		 * 2.) find the adjacent empty spaces that aren't part of the configuration yet.
		 * 3.) fill in those spaces with modules randomly.
		 * 4.) swap at random to minimize getFlawRating()
		 * 5.) move the entire configuration so it fits on the map and isn't in only the usable Points.
		 * 6.) move modules in the way of the newly constructed configuration.
		 * 
		 */
		
		
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		Configuration baseConfig = new Configuration();
		
		Module centerModule = Model.getUnusedUsableModuleClosestTo(Model.getCenterOfMass(),ModuleType.PLAIN,baseConfig);
		Point center;
		if(centerModule == null)
		{
			return null;
		}
		
		centerModule.setInUse(true);
		centerModule.setCoordinates(Model.getCenterOfMass());
		baseConfig.addModule(centerModule);
		center = centerModule.getCoordinates();
		
		for (int i=1;i<=(numPlainModules / 6);i++)
		{  // this for loop places the horizontal part of the H Configuration
			Window.alert("For Loop #1");
			Module closestRightPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+i,center.getY()),ModuleType.PLAIN,baseConfig);
			if (closestRightPlain != null)
			{
				closestRightPlain.setInUse(true);
				closestRightPlain.setCoordinates(new Point(center.getX()+i,center.getY()));
				baseConfig.addModule(closestRightPlain);
				Window.alert("closestRightPlain");
			}
			Module closestLeftPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-i,center.getY()),ModuleType.PLAIN,baseConfig);
			if (closestLeftPlain != null)
			{
				closestLeftPlain.setInUse(true);
				closestLeftPlain.setCoordinates(new Point(center.getX()-i,center.getY()));
				baseConfig.addModule(closestLeftPlain);
				Window.alert("closestLeftPlain");
			}
		}
		
		for (int j=1;j<=(numPlainModules / 6);j++)
		{   // this loop should place the vertical parts of the H Configuration.
			// Upper Right part of H config
			Window.alert("For Loop #2");
			Module closestUpRightPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+(numPlainModules/6),center.getY()+j),ModuleType.PLAIN,baseConfig);
			if (closestUpRightPlain != null)
			{
				closestUpRightPlain.setInUse(true);
				closestUpRightPlain.setCoordinates(new Point(center.getX()+(numPlainModules/6),center.getY()+j));
				baseConfig.addModule(closestUpRightPlain);
			}
			// Upper Left part of H config
			Module closestUpLeftPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-(numPlainModules/6),center.getY()+j),ModuleType.PLAIN,baseConfig);
			if (closestUpLeftPlain != null)
			{
				closestUpLeftPlain.setInUse(true);
				closestUpLeftPlain.setCoordinates(new Point(center.getX()-(numPlainModules/6),center.getY()+j));
				baseConfig.addModule(closestUpLeftPlain);
			}
			// Lower Right part of H config
			Module closestDownRightPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+(numPlainModules/6),center.getY()-j),ModuleType.PLAIN,baseConfig);
			if (closestDownRightPlain != null)
			{
				closestDownRightPlain.setInUse(true);
				closestDownRightPlain.setCoordinates(new Point(center.getX()+(numPlainModules/6),center.getY()-j));
				baseConfig.addModule(closestDownRightPlain);
			}
			// Lower Left part of H config
			Module closestDownLeftPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-(numPlainModules/6),center.getY()-j),ModuleType.PLAIN,baseConfig);
			if (closestDownLeftPlain != null)
			{
				closestDownLeftPlain.setInUse(true);
				closestDownLeftPlain.setCoordinates(new Point(center.getX()-(numPlainModules/6),center.getY()-j));
				baseConfig.addModule(closestDownLeftPlain);
			}
		}
		
		for (int x=0;x < (numPlainModules % 6);x++)
		{   // do something with leftover plain modules.  Add them to the right of the center.
			Module leftOverPlain = null;
			leftOverPlain = Model.getUnusedUsableModuleClosestTo(center,ModuleType.PLAIN,baseConfig);
			Window.alert("leftOverPlain");
			if (leftOverPlain != null)
			{
				for (Module m : baseConfig.getModules())
				{
					if(m.getCoordinates().getX() > center.getX())
					{
						m.setCoordinates(new Point(m.getCoordinates().getX()+1,m.getCoordinates().getY()));
					}
				}
				leftOverPlain.setInUse(true);
				leftOverPlain.setCoordinates(new Point(center.getX()+1,center.getY()));
				baseConfig.addModule(leftOverPlain);
			}
		}
		
		for(int i=0;i<5;i++) // generate 5 configurations of H-type
		{
			Configuration config = baseConfig.clone();
			config.randomlyFill();
			config.makeGood();
			config.makeInBounds();
			configs.add(config);
		}
		
		return configs;
	}
	
	/**
	 * Generates configurations in a Plus shape
	 * @return List<Configuration> list of configurations with a plus shape
	 */
	public static final List<Configuration> generatePlusConfigurations(int numPlainModules)
	{
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		Configuration baseConfig = new Configuration();
		
		Module centerModule = Model.getUnusedUsableModuleClosestTo(Model.getCenterOfMass(),ModuleType.PLAIN,baseConfig);
		
		if(centerModule == null)
		{
			return null;
		}
		
		centerModule.setInUse(true);
		centerModule.setCoordinates(Model.getCenterOfMass());
		baseConfig.addModule(centerModule);
		
		Point center = centerModule.getCoordinates();
		
		for (int i=1;i<=(numPlainModules / 4);i++)
		{  // this for loop places most plain modules of the + Configuration
			Module closestNorthPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX(),center.getY()+i),ModuleType.PLAIN,baseConfig);
			if(closestNorthPlain != null)
			{
				closestNorthPlain.setInUse(true);
				closestNorthPlain.setCoordinates(new Point(center.getX(),center.getY()+i));
				baseConfig.addModule(closestNorthPlain);
			}
			Module closestEastPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+i,center.getY()),ModuleType.PLAIN,baseConfig);
			if (closestEastPlain != null)
			{
				closestEastPlain.setInUse(true);
				closestEastPlain.setCoordinates(new Point(center.getX()+i,center.getY()));
				baseConfig.addModule(closestEastPlain);
			}
			Module closestSouthPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX(),center.getY()-i),ModuleType.PLAIN,baseConfig);
			if (closestSouthPlain != null)
			{
				closestSouthPlain.setInUse(true);
				closestSouthPlain.setCoordinates(new Point(center.getX(),center.getY()-i));
				baseConfig.addModule(closestSouthPlain);
			}
			Module closestWestPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()-i,center.getY()),ModuleType.PLAIN,baseConfig);
			if (closestWestPlain != null)
			{
				closestWestPlain.setInUse(true);
				closestWestPlain.setCoordinates(new Point(center.getX()-i,center.getY()));
				baseConfig.addModule(closestWestPlain);
			}
		}
		
		for (int x=0;x < (numPlainModules % 4);x++)
		{   // do something with leftover plain modules.  Add them to the right of the center.
			for (Module m : baseConfig.getModules())
			{
				if(m.getCoordinates().getX() > center.getX())
				{
					m.setCoordinates(new Point(m.getCoordinates().getX()+1,m.getCoordinates().getY()));
				}
			}
			Module leftOverPlain = Model.getUnusedUsableModuleClosestTo(center,ModuleType.PLAIN,baseConfig);
			if (leftOverPlain != null)
			{
				leftOverPlain.setInUse(true);
				leftOverPlain.setCoordinates(new Point(center.getX()+1,center.getY()));
				baseConfig.addModule(leftOverPlain);
			}
		}
		
		for(int i=0;i<5;i++) // generate 5 configurations of Plus-type
		{
			Configuration config = baseConfig.clone();
			config.randomlyFill();
			config.makeGood();
			config.makeInBounds();
			configs.add(config);
		}
		
		
		return configs;
	}
	
	/**
	 * Generates configurations in a L-shape
	 * @return List<Configuration> list of configurations with an L-shape
	 */
	public static final List<Configuration> generateLConfigurations(int numPlainModules)
	{
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		Configuration baseConfig = new Configuration();
		
		Module centerModule = Model.getUnusedUsableModuleClosestTo(Model.getCenterOfMass(),ModuleType.PLAIN,baseConfig);
		
		if(centerModule == null)
		{
			return null;
		}
		
		centerModule.setInUse(true);
		centerModule.setCoordinates(Model.getCenterOfMass());
		baseConfig.addModule(centerModule);
		
		Point center = centerModule.getCoordinates();
		
		for (int i=1;i<=(numPlainModules / 2);i++)
		{  // this for loop places most plain modules of the + Configuration
			Module closestNorthPlain = Model.getUnusedModuleClosestTo(new Point(center.getX(),center.getY()+i),ModuleType.PLAIN);
			if(closestNorthPlain != null)
			{
				closestNorthPlain.setInUse(true);
				closestNorthPlain.setCoordinates(new Point(center.getX(),center.getY()+i));
				baseConfig.addModule(closestNorthPlain);
			}
			Module closestEastPlain = Model.getUnusedUsableModuleClosestTo(new Point(center.getX()+i,center.getY()),ModuleType.PLAIN,baseConfig);
			if (closestEastPlain != null)
			{
				closestEastPlain.setInUse(true);
				closestEastPlain.setCoordinates(new Point(center.getX()+i,center.getY()));
				baseConfig.addModule(closestEastPlain);
			}
		}
		
		for (int x=0;x < (numPlainModules % 2);x++)
		{   // do something with leftover plain modules.  Add them to the right of the center.
			for (Module m : baseConfig.getModules())
			{
				if(m.getCoordinates().getX() > center.getX())
				{
					m.setCoordinates(new Point(m.getCoordinates().getX()+1,m.getCoordinates().getY()));
				}
			}
			Module leftOverPlain = Model.getUnusedUsableModuleClosestTo(center,ModuleType.PLAIN,baseConfig);
			if (leftOverPlain != null)
			{
				leftOverPlain.setInUse(true);
				leftOverPlain.setCoordinates(new Point(center.getX()+1,center.getY()));
				baseConfig.addModule(leftOverPlain);
			}
		}
		
		for(int i=0;i<5;i++) // generate 5 configurations of Plus-type
		{
			Configuration config = baseConfig.clone();
			config.randomlyFill();
			config.makeGood();
			config.makeInBounds();
			configs.add(config);
		}
		
		return configs;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * This method will return a minimum configuration.
	 *
	 * @return preset minimum configuration.
	 */
	public final static Configuration generateMinConfiguration1() {
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
		Configuration newConfiguration = new Configuration();

		Module centerPlain = Model.getUnusedUsableModuleClosestTo(centerOfMass,
				ModuleType.PLAIN,newConfiguration);
		centerPlain.setInUse(true);
		centerPlain.setCoordinates(centerOfMass);
		newConfiguration.addModule(centerPlain);
		
		
		Point rightPlainPos = new Point(centerOfMass.getX() + 1,
				centerOfMass.getY());
		Module rightPlain = Model.getUnusedUsableModuleClosestTo(rightPlainPos,
				ModuleType.PLAIN,newConfiguration);
		rightPlain.setInUse(true);
		rightPlain.setCoordinates(rightPlainPos);
		newConfiguration.addModule(rightPlain);
		
		
		Point leftPlainPos = new Point(centerOfMass.getX() - 1,
				centerOfMass.getY());
		Module leftPlain = Model.getUnusedUsableModuleClosestTo(leftPlainPos,
				ModuleType.PLAIN,newConfiguration);
		leftPlain.setInUse(true);
		leftPlain.setCoordinates(leftPlainPos);
		newConfiguration.addModule(leftPlain);

		Point airlockPos = new Point(leftPlainPos.getX() - 1,
				leftPlainPos.getY());
		Module airlock = Model
				.getUnusedUsableModuleClosestTo(airlockPos, ModuleType.AIRLOCK,newConfiguration);
		airlock.setInUse(true);
		airlock.setCoordinates(airlockPos);
		newConfiguration.addModule(airlock);

		Point foodWaterPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() + 1);
		Module foodWater = Model.getUnusedUsableModuleClosestTo(foodWaterPos,
				ModuleType.FOODWATERSTORAGE,newConfiguration);
		foodWater.setInUse(true);
		foodWater.setCoordinates(foodWaterPos);
		newConfiguration.addModule(foodWater);

		Point canteenPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() - 1);
		Module canteen = Model
				.getUnusedUsableModuleClosestTo(canteenPos, ModuleType.CANTEEN,newConfiguration);
		canteen.setInUse(true);
		canteen.setCoordinates(canteenPos);
		newConfiguration.addModule(canteen);

		Point dormPos = new Point(centerOfMass.getX(), centerOfMass.getY() + 1);
		Module dorm = Model.getUnusedUsableModuleClosestTo(dormPos, ModuleType.DORMITORY,newConfiguration);
		dorm.setInUse(true);
		dorm.setCoordinates(dormPos);
		newConfiguration.addModule(dorm);

		Point powerPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() + 1);
		Module power = Model.getUnusedUsableModuleClosestTo(powerPos, ModuleType.POWER,newConfiguration);
		power.setInUse(true);
		power.setCoordinates(powerPos);
		newConfiguration.addModule(power);

		Point controlPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() - 1);
		Module control = Model
				.getUnusedUsableModuleClosestTo(controlPos, ModuleType.CONTROL,newConfiguration);
		control.setInUse(true);
		control.setCoordinates(controlPos);
		newConfiguration.addModule(control);
		
		Point sanitationPos = new Point(rightPlainPos.getX() + 1,
				rightPlainPos.getY());
		Module sanitation = Model.getUnusedUsableModuleClosestTo(sanitationPos,
				ModuleType.SANITATION,newConfiguration);
		sanitation.setInUse(true);
		sanitation.setCoordinates(sanitationPos);
		newConfiguration.addModule(sanitation);

		
		return newConfiguration;
	}
	
	public static final Configuration generateMinConfiguration2() {
		if (!minConfigPossible()) {
			return null;
		}

		Point centerOfMass = Model.getCenterOfMass();

		/*
		 * pretty good minimum config hardcoded...
		 * 
		 * 			Food	Dorm	Control 
		 * Airlock Plain 	Plain 	Plain 	Sanitation
		 * 		   Canteen 			Power
		 */
		Configuration newConfiguration = new Configuration();

		Module centerPlain = Model.getUnusedUsableModuleClosestTo(centerOfMass,
				ModuleType.PLAIN,newConfiguration);
		centerPlain.setInUse(true);
		centerPlain.setCoordinates(centerOfMass);
		newConfiguration.addModule(centerPlain);
		
		
		Point rightPlainPos = new Point(centerOfMass.getX() + 1,
				centerOfMass.getY());
		Module rightPlain = Model.getUnusedUsableModuleClosestTo(rightPlainPos,
				ModuleType.PLAIN,newConfiguration);
		rightPlain.setInUse(true);
		rightPlain.setCoordinates(rightPlainPos);
		newConfiguration.addModule(rightPlain);
		
		
		Point leftPlainPos = new Point(centerOfMass.getX() - 1,
				centerOfMass.getY());
		Module leftPlain = Model.getUnusedUsableModuleClosestTo(leftPlainPos,
				ModuleType.PLAIN,newConfiguration);
		leftPlain.setInUse(true);
		leftPlain.setCoordinates(leftPlainPos);
		newConfiguration.addModule(leftPlain);

		Point airlockPos = new Point(leftPlainPos.getX() - 1,
				leftPlainPos.getY());
		Module airlock = Model
				.getUnusedUsableModuleClosestTo(airlockPos, ModuleType.AIRLOCK,newConfiguration);
		airlock.setInUse(true);
		airlock.setCoordinates(airlockPos);
		newConfiguration.addModule(airlock);

		Point foodWaterPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() + 1);
		Module foodWater = Model.getUnusedUsableModuleClosestTo(foodWaterPos,
				ModuleType.FOODWATERSTORAGE,newConfiguration);
		foodWater.setInUse(true);
		foodWater.setCoordinates(foodWaterPos);
		newConfiguration.addModule(foodWater);

		Point canteenPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() - 1);
		Module canteen = Model
				.getUnusedUsableModuleClosestTo(canteenPos, ModuleType.CANTEEN,newConfiguration);
		canteen.setInUse(true);
		canteen.setCoordinates(canteenPos);
		newConfiguration.addModule(canteen);

		Point dormPos = new Point(centerOfMass.getX(), centerOfMass.getY() + 1);
		Module dorm = Model.getUnusedUsableModuleClosestTo(dormPos, ModuleType.DORMITORY,newConfiguration);
		dorm.setInUse(true);
		dorm.setCoordinates(dormPos);
		newConfiguration.addModule(dorm);

		Point powerPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() - 1);
		Module power = Model.getUnusedUsableModuleClosestTo(powerPos, ModuleType.POWER,newConfiguration);
		power.setInUse(true);
		power.setCoordinates(powerPos);
		newConfiguration.addModule(power);

		Point controlPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() + 1);
		Module control = Model
				.getUnusedUsableModuleClosestTo(controlPos, ModuleType.CONTROL,newConfiguration);
		control.setInUse(true);
		control.setCoordinates(controlPos);
		newConfiguration.addModule(control);
		
		Point sanitationPos = new Point(rightPlainPos.getX() + 1,
				rightPlainPos.getY());
		Module sanitation = Model.getUnusedUsableModuleClosestTo(sanitationPos,
				ModuleType.SANITATION,newConfiguration);
		sanitation.setInUse(true);
		sanitation.setCoordinates(sanitationPos);
		newConfiguration.addModule(sanitation);

		
		return newConfiguration;
	}
}
