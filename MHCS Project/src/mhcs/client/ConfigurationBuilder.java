package mhcs.client;

import java.util.ArrayList;
import java.util.Arrays;

import mhcs.storage.Load;
import mhcs.storage.Save;

/**
 * Class designed to build configurations.
 * @author Naples
 *
 */
public class ConfigurationBuilder {

	/**
	 * Check whether or not a minimum
	 * configuration is possible given the
	 * stored modules.
	 *
	 * @return boolean value representing
	 * whether or not a minimum configuration can be found.
	 */
	public boolean minConfigPossible() {
		Load loader = new Load();
		Module[] modules = loader.getModules();
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
				&& numFoodWater >= 1 && numDormitory >= 1
				&& numCanteen >= 1
				&& numSanitation >= 1 && numPlain >= 3);
	}

	/**
	 * This method will generate configurations
	 * and return an array of arrays of modules.
	 *
	 * @return An array of configurations.
	 * Each configuration is just an array of modules
	 */
	public final Module[][] generateConfigurations() {
		Load loader = new Load();
		Module[] moduleArray = loader.getModules();
		ArrayList<Module> origModules = new ArrayList<Module>();
		for (Module x : moduleArray) {
			origModules.add(x);
		}
		/**
		 * place plain modules.
		 * fill in possible places with other modules.
		 *
		 *
		 */
		return null;
	}

	/** This method will return a minimum configuration.
	 *
	 * @return an array of modules with
	 * configCoordinates set and InUse set to true.
	 */
	public final Module[] generateMinConfiguration()
	{
		if (!minConfigPossible())
		{
			return null;
		}
		Load loader = new Load();
		Save saver = new Save();
		Module[] modules = loader.getModules();
		Point centerOfMass = loader.getCenterOfMass();

		/*
		 * pretty good minimum config hardcoded...
		 *
		 *              Food    Dorm    Power
		 *    Airlock   Plain   Plain   Plain   Sanitation
		 *              Canteen         Control
		 */

		Module centerPlain = loader.getModuleClosestTo(centerOfMass, "plain");
		centerPlain.setInUse(true);
		centerPlain.setConfigCoordinates(centerOfMass);
		saver.saveEditedModule(centerPlain);
		
		Point rightPlainPos = new Point(centerOfMass.getX()+1,centerOfMass.getY());
		Module rightPlain = loader.getModuleClosestTo(rightPlainPos, "plain");
		rightPlain.setInUse(true);
		rightPlain.setConfigCoordinates(rightPlainPos);
		saver.saveEditedModule(rightPlain);

		Point leftPlainPos = new Point(centerOfMass.getX()-1,centerOfMass.getY());
		Module leftPlain = loader.getModuleClosestTo(leftPlainPos, "plain");
		leftPlain.setInUse(true);
		leftPlain.setConfigCoordinates(leftPlainPos);
		saver.saveEditedModule(leftPlain);
		
		Point airlockPos = new Point(leftPlainPos.getX()-1,leftPlainPos.getY());
		Module airlock = loader.getModuleClosestTo(airlockPos, "airlock");
		airlock.setInUse(true);
		airlock.setConfigCoordinates(airlockPos);
		saver.saveEditedModule(airlock);

		Point foodWaterPos = new Point(leftPlainPos.getX(),leftPlainPos.getY()+1);
		Module foodWater = loader.getModuleClosestTo(foodWaterPos, "foodWater");
		foodWater.setInUse(true);
		foodWater.setConfigCoordinates(foodWaterPos);
		saver.saveEditedModule(foodWater);

		Point canteenPos = new Point(leftPlainPos.getX(),leftPlainPos.getY()-1);
		Module canteen = loader.getModuleClosestTo(canteenPos, "canteen");
		canteen.setInUse(true);
		canteen.setConfigCoordinates(canteenPos);
		saver.saveEditedModule(canteen);

		Point dormPos = new Point(centerOfMass.getX(),centerOfMass.getY()+1);
		Module dorm = loader.getModuleClosestTo(dormPos, "dormitory");
		dorm.setInUse(true);
		dorm.setConfigCoordinates(dormPos);
		saver.saveEditedModule(dorm);

		Point powerPos = new Point(rightPlainPos.getX(),rightPlainPos.getY()+1);
		Module power = loader.getModuleClosestTo(powerPos, "power");
		power.setInUse(true);
		power.setConfigCoordinates(powerPos);
		saver.saveEditedModule(power);

		Point controlPos = new Point(rightPlainPos.getX(),rightPlainPos.getY()-1);
		Module control = loader.getModuleClosestTo(controlPos, "control");
		control.setInUse(true);
		control.setConfigCoordinates(controlPos);
		saver.saveEditedModule(control);

		Point sanitationPos = new Point(rightPlainPos.getX()+1,rightPlainPos.getY());
		Module sanitation = loader.getModuleClosestTo(sanitationPos, "sanitation");
		sanitation.setInUse(true);
		sanitation.setConfigCoordinates(sanitationPos);
		saver.saveEditedModule(sanitation);

		
		/* if we need to we can un-edit the modules by doing this:
		 *
		 * Module[] originalModules = loader.getModules();
		 *
		 *      *a bunch of stuff that saves edited modules*
		 *
		 * for(Module m : originalModules)
		 * {
		 * 		saver.saveEditedModule(m);
		 * }
		 *
		 */

		return new Module[]{foodWater, dorm, power
				, airlock, leftPlain, centerPlain, rightPlain
				, sanitation, canteen, control};
	}

	/**
	 * this method returns the rover path as a Point[].
	 *
	 * @param m the array of modules that need to be placed.
	 * @return Point[] path
	 */
	public final Point[] getRoverPath(final Module[] m) {
		return null;
	}
}
