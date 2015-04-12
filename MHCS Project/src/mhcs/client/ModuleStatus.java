package mhcs.client;

/**
 * Enumerates the 3 statuses that a Module can have.
 * 
 * @author Naples
 *
 */
public enum ModuleStatus {
	USABLE, USABLEAFTERREPAIR, BEYONDREPAIR;

	/**
	 * This method allows for canonical translation from the html5 stored
	 * string to ModuleStatus.
	 * @param str
	 * @return ModuleStatus object.
	 */
	public static ModuleStatus getStatusFromString(String str) {
		if (str.equals("USABLE")) {
			return USABLE;
		} else if (str.equals("USABLEAFTERREPAIR")) {
			return USABLEAFTERREPAIR;
		} else if (str.equals("BEYONDREPAIR")) {
			return BEYONDREPAIR;
		} else {
			return null;
		}
	}

}
