package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.Module;

public class Data {
		
	public static void addModule(Module toAdd){
		moduleList.add(toAdd);
		toSave.saveModules(moduleList);
	}
	
	public static void addConfiguraiton(Configuration toAdd){
		configList.add(toAdd);
		toSave.saveConfigurations(configList);
	}
	
	
	public static void removeModule(Module toRemove){
		moduleList.remove(findListNumber(toRemove));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
	}
	
	public static void removeConfiguration(Configuration toRemove){
		configList.remove(findListNumber(toRemove));
		toSave.removeAllConfigurations();
		toSave.saveConfigurations(configList);
	}
	
	
	public static void editModule(Module toEdit){
		moduleList.remove(findListNumber(toEdit));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
		moduleList.add(toEdit);
		toSave.saveModules(moduleList);
	}
	
	public static void editConfiguration(Configuration toEdit){
		configList.remove(findListNumber(toEdit));
		toSave.removeAllConfigurations();
		toSave.saveConfigurations(configList);
		configList.add(toEdit);
		toSave.saveConfigurations(configList);
	}
	
	
	
	
	
	
	public static void updateFlag(boolean flag){
		passwordFlag = flag;
		toSave.saveSettings(flag, password);
	}
	
	public static void updatePassword(String newPassword){
		password = newPassword;
		toSave.saveSettings(passwordFlag, newPassword);
	}
	
	public static void addConfiguration(Configuration toAdd){
		configList.add(toAdd);
		toSave.saveConfigurations(configList);
	}

	
	
	private static int findListNumber(Module module){
		for(int i = 0; i < moduleList.size(); i++){
			Module compare = moduleList.get(i);
			if(module.getId() == compare.getId())
				return i;
		}
		return -1;
	}
	
	private static int findListNumber(Configuration config){
		for(int i = 0; i < configList.size(); i++){
			Configuration compare = configList.get(i);
			if(config.getId() == compare.getId())
				return i;
		}
		return -1;
	}	
	
	
	
	

	/**
	 * @return the moduleList.
	 * (It should return a copy as to not allow changes to be made accidentally)
	 */
	@SuppressWarnings("unchecked")
	public static List<Module> getModuleList() {
		ArrayList<Module> moduleList1 = new ArrayList<Module>(moduleList);
		return (List<Module>) moduleList1.clone();
	}
	/**
	 * @param moduleList the moduleList to set
	 */
	public static void setModuleList(List<Module> moduleListParam) {
		moduleList = moduleListParam;
		// THIS METHOD SHOULD ALSO UPDATE THE HTML5 LOCALSTORAGE.
	}
	/**
	 * @return the password
	 */
	public static String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public static void setPassword(String passwordPram) {
		password = passwordPram;
	}
	/**
	 * @return the passwordFlag
	 */
	public static boolean isPasswordFlag() {
		return passwordFlag;
	}
	/**
	 * @param passwordFlag the passwordFlag to set
	 */
	public static void setPasswordFlag(boolean passwordFlagParam) {
		passwordFlag = passwordFlagParam;
	}





	private static Load toLoad = new Load();
	private static Save toSave = new Save();
	private static List<Module> moduleList = toLoad.getModuleList();
	private static List<Configuration> configList = toLoad.getConfigurationList();
	private static String password = toLoad.getPassword();
	private static boolean passwordFlag = toLoad.getPasswordFlag();
}
