package mhcs.client;

import java.util.ArrayList;

import mhcs.storage.Load;
import mhcs.storage.Save;

public class ConfigurationBuilder {

	/**
	 * Check whether or not a minimum configuration is possible given the stored
	 * modules.
	 *
	 * @return boolean value representing whether or not a minimum configuration
	 *         can be found.
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
				&& numFoodWater >= 1 && numDormitory >= 1 && numCanteen >= 1
				&& numSanitation >= 1 && numPlain >= 1);
	}

	/**
	 * This method will generate configurations and return an array of arrays of
	 * modules.
	 * 
	 * @return An array of configurations. Each configuration is just an array
	 *         of modules
	 */
	public Module[][] generateConfigurations() {
		Load loader = new Load();
		Module[] moduleArray = loader.getModules();
		ArrayList<Module> origModules = new ArrayList<Module>();
		for (Module x : moduleArray) {
			origModules.add(x);
		}
	}

	/**
	 * this method returns the rover path as a Point[].
	 * 
	 * @param m
	 *            is the array of modules that need to be placed.
	 * @return Point[] path
	 */
	public Point[] getRoverPath(Module[] m) {
		return null;
	}
}
