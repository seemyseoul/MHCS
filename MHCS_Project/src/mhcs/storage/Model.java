package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.Module;
import mhcs.client.ModuleStatus;
import mhcs.client.ModuleType;
import mhcs.client.Point;

public class Model {

	public static void addModule(Module toAdd) {
		moduleList.add(toAdd);
		toSave.saveModules(moduleList);
	}

	public static void addConfiguraiton(Configuration toAdd) {
		configList.add(toAdd);
		toSave.saveConfigurations(configList);
	}

	public static void removeModuleFromId(int id) //SUPER HACKY
	{
		Module m = new Module(ModuleType.PLAIN,id,new Point(0,0),ModuleStatus.BEYONDREPAIR,2,true);
		removeModule(m);
	}
	
	public static void removeModule(Module toRemove) {
		moduleList.remove(findListNumber(toRemove));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
	}

	public static void removeConfiguration(Configuration toRemove) {
		configList.remove(findListNumber(toRemove));
		toSave.removeAllConfigurations();
		toSave.saveConfigurations(configList);
	}

	public static void editModule(Module toEdit) {
		moduleList.remove(findListNumber(toEdit));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
		moduleList.add(toEdit);
		toSave.saveModules(moduleList);
	}

	public static void saveModule(Module toSave)
	{
		for (Module m : getModuleList())
		{
			if(m.getId() == toSave.getId())
			{
				editModule(toSave);
				return;
			}
		}
		addModule(toSave);
	}
	
	public static void editConfiguration(Configuration toEdit) {
		configList.remove(findListNumber(toEdit));
		toSave.removeAllConfigurations();
		toSave.saveConfigurations(configList);
		configList.add(toEdit);
		toSave.saveConfigurations(configList);
	}

	public static void updateFlag(boolean flag) {
		passwordFlag = flag;
		toSave.saveSettings(flag, password);
	}

	public static void updatePassword(String newPassword) {
		password = newPassword;
		toSave.saveSettings(passwordFlag, newPassword);
	}

	public static void addConfiguration(Configuration toAdd) {
		configList.add(toAdd);
		toSave.saveConfigurations(configList);
	}

	private static int findListNumber(Module module) {
		for (int i = 0; i < moduleList.size(); i++) {
			Module compare = moduleList.get(i);
			if (module.getId() == compare.getId()) {
				return i;
			} // if
		} // for
		return -1;
	}

	private static int findListNumber(Configuration config) {
		for (int i = 0; i < configList.size(); i++) {
			Configuration compare = configList.get(i);
			if (config.getId() == compare.getId()) {
				return i;
			} // if
			return -1;
		} // for
		return -1;
	}

	/**
	 * Returns the module list.
	 * 
	 * @return the moduleList. (It should return a copy as to not allow changes
	 *         to be made accidentally)
	 */
	@SuppressWarnings("unchecked")
	public static List<Module> getModuleList() {
		ArrayList<Module> moduleList1 = new ArrayList<Module>(moduleList);
		return (List<Module>) moduleList1.clone();
	}

	/**
	 * Returns the module list.
	 * 
	 * @param moduleList
	 *            the moduleList to set
	 */
	public static void setModuleList(List<Module> moduleListParam) {
		moduleList = moduleListParam;
		// THIS METHOD SHOULD ALSO UPDATE THE HTML5 LOCALSTORAGE.
	}

	/**
	 * Returns the password.
	 * 
	 * @return the password
	 */
	public static String getPassword() {
		return password;
	}

	/**
	 * Changes the password.
	 * 
	 * @param password
	 *            the password to set
	 */
	public static void setPassword(String passwordPram) {
		password = passwordPram;
	}

	/**
	 * Returns the password flag.
	 * 
	 * @return the passwordFlag
	 */
	public static boolean isPasswordFlag() {
		return passwordFlag;
	}

	/**
	 * Sets the password flag.
	 * 
	 * @param passwordFlag
	 *            the passwordFlag to set
	 */
	public static void setPasswordFlag(boolean passwordFlagParam) {
		passwordFlag = passwordFlagParam;
	}

	// THE NEXT FEW FUNCTIONS ARE
	// JACK'S STUFF FOR GENERATING CONFIGURATIONS.
	// feel free to use these functions, but please don't remove them...
	
	public static List<Module> getModulesOfType(ModuleType type) {
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : Model.getModuleList()) {
			if (m.getType().equals(type)) {
				list.add(m);
			}
		}
		return list;
	}

	public static List<Module> getUnusedModulesOfType(ModuleType type) {
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : Model.getModuleList()) {
			if (m.getType().equals(type) && !m.isInUse()) {
				list.add(m);
			}
		}
		return list;
	}

	/**
	 * gets the center of mass of the modules.
	 * 
	 * @return the center of mass.
	 */
	public final static Point getCenterOfMass() {
		List<Module> modules = Model.getModuleList();
		if (modules.isEmpty()) {
			return null;
		}
		int sumX = 0;
		int sumY = 0;
		for (Module m : modules) {
			sumX += m.getCoordinates().getX();
			sumY += m.getCoordinates().getY();
		}
		return new Point(sumX / modules.size(), sumY / modules.size());
	}

	/**
	 * This method returns the closest UNUSED module of type "type" to module m.
	 *
	 * @param p
	 *            Point to get closest module to.
	 * @param type
	 *            Type of modules to search for.
	 * @return module closest to point p.
	 */
	public final static Module getModuleClosestTo(final Point p, ModuleType type) {
		List<Module> modules = getUnusedModulesOfType(type);
		Module closestModule = modules.get(0);

		for (Module m : modules) {
			if (m.getCoordinates().distanceTo(p) < closestModule
					.getCoordinates().distanceTo(p)) {
				closestModule = m;
			}
		}
		return closestModule;
	}

	private static Load toLoad = new Load();
	private static Save toSave = new Save();
	private static List<Module> moduleList = toLoad.getModuleList();
	private static List<Configuration> configList = toLoad
			.getConfigurationList();
	private static String password = toLoad.getPassword();
	private static boolean passwordFlag = toLoad.getPasswordFlag();
}
