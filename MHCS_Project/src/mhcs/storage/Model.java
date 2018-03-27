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
		moduleList.add(toAdd.clone());
		toSave.saveModules(moduleList);
	}

	
	public static void addConfiguraiton(Configuration toAdd) {
		configList.add(toAdd.clone());
		toSave.saveConfigurations(configList);
	}

	public static void removeModuleFromId(int id) //SUPER HACKY
	{
		Module m = new Module(ModuleType.PLAIN,id,new Point(0,0),ModuleStatus.BEYONDREPAIR,2,true);
		removeModule(m);
	}
	
	public static Module getModuleFromId(int id)
	{
		for (Module m : moduleList)
		{
			if(m.getId() == id)
			{
				return m.clone();
			}
		}
		return null;
	}
	
	public static void removeModule(Module toRemove) {
		moduleList.remove(findListNumber(toRemove));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
	}
	
	public static void removeAll(){
		moduleList.clear();
		configList.clear();
		toSave.removeAllModules();
		toSave.removeAllConfigurations();
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

	public static boolean saveModule(Module toSave)
	{
		for (Module m : getModuleList())
		{
			if(m.getId() == toSave.getId())
			{
				editModule(toSave);
				if(getModuleFromId(toSave.getId()) != null)
				{
					return true;
				}
				else{
					return false;
				}
			}
		}
		addModule(toSave);
		if(getModuleFromId(toSave.getId()) != null)
		{
			return true;
		}
		else{
			return false;
		}
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
		ArrayList<Module> moduleList1 = new ArrayList<Module>();
		for (Module m : moduleList)
		{
			moduleList1.add(m.clone());
		}
		return moduleList1;
	}
	
	public static List<Configuration> getConfigList()
	{
		ArrayList<Configuration> configList1 = new ArrayList<Configuration>();
		for (Configuration c : configList)
		{
			configList1.add(c.clone());
		}
		return configList1;
	}
	
	
	/**
	 * Returns the list of unused modules.
	 * 
	 * @return the moduleList. (It should return a copy as to not allow changes
	 *         to be made accidentally)
	 */
	@SuppressWarnings("unchecked")
	public static List<Module> getUnusedModuleList() {
		List<Module> moduleList1 = getModuleList();
		for (Module m : moduleList1)
		{
			if (m.isInUse()){
				moduleList1.remove(m);
			}
		}
		return moduleList1;
	}
	
	/**
	 * Returns the list of unused but usable modules.
	 * 
	 * @return the moduleList. (It should return a copy as to not allow changes
	 *         to be made accidentally)
	 */
	@SuppressWarnings("unchecked")
	public static List<Module> getUnusedUsableModuleList() {
		List<Module> moduleList1 = getModuleList();
		for (Module m : moduleList1)
		{
			if (m.isInUse() || m.getStatus().equals(ModuleStatus.BEYONDREPAIR)){
				moduleList1.remove(m);
			}
		}
		return moduleList1;
	}
	
	/**
	 * Returns the list of unused but usable modules.
	 * 
	 * @return the moduleList. (It should return a copy as to not allow changes
	 *         to be made accidentally)
	 */
	@SuppressWarnings("unchecked")
	public static List<Module> getUnusedUsableModuleList(Configuration c) {
		List<Module> moduleList1 = getModuleList();
		for (Module m : moduleList1)
		{
			if (m.isInUse() || m.getStatus().equals(ModuleStatus.BEYONDREPAIR) || c.getModules().contains(m)){
				moduleList1.remove(m);
			}
		}
		return moduleList1;
	}

	/**
	 * Returns the module list.
	 * 
	 * @param moduleList
	 *            the moduleList to set
	 */
	public static void setModuleList(List<Module> moduleListParam) {
		moduleList = moduleListParam;
		toSave.saveModules(moduleList);
	}

	public static void setConfigList(List<Configuration> configListParam)
	{
		configList = configListParam;
		toSave.saveConfigurations(configList);
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
	 * @param ptbPassword
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
		toSave.saveSettings(passwordFlag, password);
	}

	// THE NEXT FEW FUNCTIONS ARE
	// JACK'S STUFF FOR GENERATING CONFIGURATIONS.
	// feel free to use these functions, but please don't remove them...
	
	/**
	 * gets a List of modules of type "type".
	 * @param type
	 * @return List<Module> a list of modules of type "type"
	 */
	public static List<Module> getModulesOfType(ModuleType type) {
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : Model.getModuleList()) {
			if (m.getType().equals(type)) {
				list.add(m);
			}
		}
		return list;
	}
	
	/**
	 * gets a List of usable modules of type "type".
	 * @param type
	 * @return List<Module> a list of usable modules of type "type"
	 */
	public static List<Module> getUsableModulesOfType(ModuleType type) {
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : Model.getModuleList()) {
			if (m.getType().equals(type) && !m.getStatus().equals(ModuleStatus.BEYONDREPAIR)) {
				list.add(m);
			}
		}
		return list;
	}

	/**
	 * gets a List of unused modules of type "type".
	 * @param type
	 * @return List<Module> list of unused modules of type "type"
	 */
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
	 * gets a List of unused but usable modules of type "type".
	 * @param type
	 * @return List<Module> list of unused but usable modules of type "type"
	 */
	public static List<Module> getUnusedUsableModulesOfType(ModuleType type) {
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : Model.getModuleList()) {
			if (m.getType().equals(type) && !m.isInUse()) {
				list.add(m);
			}
		}
		return list;
	}
	
//	/**
//	 * gets a List of unused but usable modules of type "type" NOT in configuration c
//	 * @param type
//	 * @param c
//	 * @return List<Module> list of unused but usable modules of type "type" NOT in configuration c.
//	 */
//	public static List<Module> getUnusedUsableModulesOfType(ModuleType type,Configuration c) {
//		ArrayList<Module> list = new ArrayList<Module>();
//		for (Module m : Model.getModuleList()) {
//			if (m.getType().equals(type) && !m.isInUse()) {
//				list.add(m);
//			}
//		}
//		return list;
//	}

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
//		return new Point(60,17);
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
	public final static Module getUnusedModuleClosestTo(final Point p, ModuleType type) {
		List<Module> modules = getUnusedModulesOfType(type);
		if(modules.size() == 0)
		{
			return null;
		}
		Module closestModule = modules.get(0);

		for (Module m : modules) {
			if (m.getCoordinates().distanceTo(p) < closestModule
					.getCoordinates().distanceTo(p)) {
				closestModule = m;
			}
		}
		return closestModule;
	}
	
	/**
	 * This method returns the closest UNUSED module of any type to module m.
	 *
	 * @param p
	 *            Point to get closest module to.
	 * @return module closest to point p.
	 */
	public final static Module getUnusedModuleClosestTo(final Point p) {
		List<Module> modules = getUnusedModuleList();
		if(modules.size() == 0)
		{
			return null;
		}
		Module closestModule = modules.get(0);

		for (Module m : modules) {
			if (m.getCoordinates().distanceTo(p) < closestModule
					.getCoordinates().distanceTo(p)) {
				closestModule = m;
			}
		}
		return closestModule;
	}
	
	
	
	/**
	 * This method returns the closest UNUSED but at least Reparable module of type "type" to module m.
	 * MUST NOT BE IN CONFIGURATION c
	 *
	 * @param p
	 *            Point to get closest module to.
	 * @param type
	 *            Type of modules to search for.
	 * @return module closest to point p.
	 */
	public final static Module getUnusedUsableModuleClosestTo(final Point p, ModuleType type, Configuration c) {
		List<Module> modules = getUnusedUsableModulesOfType(type);
		for (Module m : modules)
		{
			if(c.getModules().contains(m))
			{
				modules.remove(m);
			}
		}
		if(modules.size() == 0)
		{
			return null;
		}
		Module closestModule = modules.get(0);

		for (Module m : modules) {
			if (m.getCoordinates().distanceTo(p) < closestModule
					.getCoordinates().distanceTo(p)) {
				closestModule = m;
			}
		}
		return closestModule;
	}
	
	
	/**
	 * This method returns the closest UNUSED but at least Reparable module of type "type" to module m.
	 *
	 * @param p
	 *            Point to get closest module to.
	 * @param type
	 *            Type of modules to search for.
	 * @return module closest to point p.
	 */
	public final static Module getUnusedUsableModuleClosestTo(final Point p, ModuleType type) {
		List<Module> modules = getUnusedUsableModulesOfType(type);
		if(modules.size() == 0)
		{
			return null;
		}
		Module closestModule = modules.get(0);

		for (Module m : modules) {
			if (m.getCoordinates().distanceTo(p) < closestModule
					.getCoordinates().distanceTo(p)) {
				closestModule = m;
			}
		}
		return closestModule;
	}
	
	/**
	 * This method returns the closest UNUSED but at least Reparable module of any type to module m.
	 *
	 * @param p
	 *            Point to get closest module to.
	 * @return module closest to point p.
	 */
	public final static Module getUnusedUsableModuleClosestTo(final Point p) {
		List<Module> modules = getUnusedUsableModuleList();
		if(modules.size() == 0)
		{
			return null;
		}
		Module closestModule = modules.get(0);

		for (Module m : modules) {
			if (m.getCoordinates().distanceTo(p) < closestModule
					.getCoordinates().distanceTo(p)) {
				closestModule = m;
			}
		}
		return closestModule;
	}
	
	
	/**
	 * gives the module at location p.  If there is none, then it returns null;
	 * @param p - Point to find module at.
	 * @return Module found at point p.
	 */
	public static Module getModuleAtLocation(Point p)
	{
		for (Module m :getModuleList())
		{
			if (m.getCoordinates().equals(p))
			{
				return m;
			}
		}
		return null;
	}
	
	
	public static void saveTime(String time){
		storedTime = time;
		toSave.saveTime(storedTime);
	}
	
	//sets the time
	public static String getTime(){
		return storedTime;
	}
	
	
	

	private static Load toLoad = new Load();
	private static Save toSave = new Save();
	private static List<Module> moduleList = toLoad.getModuleList();
	private static List<Configuration> configList = toLoad
			.getConfigurationList();
	private static String password = toLoad.getPassword();
	private static boolean passwordFlag = toLoad.getPasswordFlag();
	private static String storedTime = toLoad.getTime();
}
