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
	public boolean minConfigPossible() {
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
			if (m.getType().equals("airlock")) {
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
		List<Configuration> hConfigs = generateHConfigurations();
		List<Configuration> plusConfigs = generatePlusConfigurations();
		List<Configuration> lConfigs = generateLConfigurations();
		
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

	
	public final List<Configuration> generateHConfigurations()
	{
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		
		return configs;
	}
	
	public final List<Configuration> generatePlusConfigurations()
	{
		ArrayList<Configuration> configs = new ArrayList<Configuration>();
		
		return configs;
	}
	
	public final List<Configuration> generateLConfigurations()
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

		Module[] modules = (Module[]) Model.getModuleList().toArray();
		Point centerOfMass = Model.getCenterOfMass();

		/*
		 * pretty good minimum config hardcoded...
		 * 
		 * 			Food	Dorm	Power 
		 * Airlock Plain 	Plain 	Plain 	Sanitation
		 * 		   Canteen 			Control
		 */

		Module centerPlain = Model.getModuleClosestTo(centerOfMass,
				ModuleType.PLAIN);
		centerPlain.setInUse(true);
		centerPlain.setCoordinates(centerOfMass);

		Point rightPlainPos = new Point(centerOfMass.getX() + 1,
				centerOfMass.getY());
		Module rightPlain = Model.getModuleClosestTo(rightPlainPos,
				ModuleType.PLAIN);
		rightPlain.setInUse(true);
		rightPlain.setCoordinates(rightPlainPos);

		Point leftPlainPos = new Point(centerOfMass.getX() - 1,
				centerOfMass.getY());
		Module leftPlain = Model.getModuleClosestTo(leftPlainPos,
				ModuleType.PLAIN);
		leftPlain.setInUse(true);
		leftPlain.setCoordinates(leftPlainPos);

		Point airlockPos = new Point(leftPlainPos.getX() - 1,
				leftPlainPos.getY());
		Module airlock = Model
				.getModuleClosestTo(airlockPos, ModuleType.AIRLOCK);
		airlock.setInUse(true);
		airlock.setCoordinates(airlockPos);

		Point foodWaterPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() + 1);
		Module foodWater = Model.getModuleClosestTo(foodWaterPos,
				ModuleType.FOODWATERSTORAGE);
		foodWater.setInUse(true);
		foodWater.setCoordinates(foodWaterPos);

		Point canteenPos = new Point(leftPlainPos.getX(),
				leftPlainPos.getY() - 1);
		Module canteen = Model
				.getModuleClosestTo(canteenPos, ModuleType.CANTEEN);
		canteen.setInUse(true);
		canteen.setCoordinates(canteenPos);

		Point dormPos = new Point(centerOfMass.getX(), centerOfMass.getY() + 1);
		Module dorm = Model.getModuleClosestTo(dormPos, ModuleType.DORMITORY);
		dorm.setInUse(true);
		dorm.setCoordinates(dormPos);

		Point powerPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() + 1);
		Module power = Model.getModuleClosestTo(powerPos, ModuleType.POWER);
		power.setInUse(true);
		power.setCoordinates(powerPos);

		Point controlPos = new Point(rightPlainPos.getX(),
				rightPlainPos.getY() - 1);
		Module control = Model
				.getModuleClosestTo(controlPos, ModuleType.CONTROL);
		control.setInUse(true);
		control.setCoordinates(controlPos);

		Point sanitationPos = new Point(rightPlainPos.getX() + 1,
				rightPlainPos.getY());
		Module sanitation = Model.getModuleClosestTo(sanitationPos,
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
