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

	/** This method will return minimum configurations.
	 *
	 * @return an array of configurations.
	 * Each configuration is just an array of modules.
	 */
	public final Module[] generateMinConfiguration()
	{
		if (!minConfigPossible())
		{
			return null;
		}
		Load loader = new Load();
		Module[] modules = loader.getModules();
		Point centerOfMass = loader.getCenterOfMass();
		Module[] plainModules = loader.getModulesOfType("plain");

		//TODO

		return null;
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
