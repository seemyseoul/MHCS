package mhcs.client;

/**
 * All of the different types of modules.
 *
 * @author Naples
 *
 */
public enum ModuleType {
	AIRLOCK, FOODWATERSTORAGE, POWER, CONTROL, CANTEEN, PLAIN, DORMITORY, SANITATION, GYMRELAXATION, MEDICAL;

	/**
	 * This method allows for a canonical translation from the html5 stored
	 * string to a ModuleType.
	 *
	 * @param str
	 * @return ModuleType object.
	 */
	public static ModuleType getTypeFromString(final String str) {
		if (str.equals("AIRLOCK")) {
			return AIRLOCK;
		} else if (str.equals("FOODWATERSTORAGE")) {
			return FOODWATERSTORAGE;
		} else if (str.equals("POWER")) {
			return POWER;
		} else if (str.equals("CONTROL")) {
			return CONTROL;
		} else if (str.equals("CANTEEN")) {
			return CANTEEN;
		} else if (str.equals("PLAIN")) {
			return PLAIN;
		} else if (str.equals("DORMITORY")) {
			return DORMITORY;
		} else if (str.equals("SANITATION")) {
			return SANITATION;
		} else if (str.equals("GYMRELAXATION")) {
			return GYMRELAXATION;
		} else if (str.equals("MEDICAL")) {
			return MEDICAL;
		} else {
			return null;
		}
	}
	
	/**
	 * Gets a ModuleType object from a user friendly string.
	 * @param str
	 * @return
	 */
	public static ModuleType getTypeFromUserString(final String str) {
		if (str.equals("Air Lock")) {
			return AIRLOCK;
		} else if (str.equals("Food & Water")) {
			return FOODWATERSTORAGE;
		} else if (str.equals("Power")) {
			return POWER;
		} else if (str.equals("Control")) {
			return CONTROL;
		} else if (str.equals("Canteen")) {
			return CANTEEN;
		} else if (str.equals("Plain")) {
			return PLAIN;
		} else if (str.equals("Dormitory")) {
			return DORMITORY;
		} else if (str.equals("Sanitation")) {
			return SANITATION;
		} else if (str.equals("Gym & Relaxation")) {
			return GYMRELAXATION;
		} else if (str.equals("Medical")) {
			return MEDICAL;
		} else {
			return null;
		}
	}
}
