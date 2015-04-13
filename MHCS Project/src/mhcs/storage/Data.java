package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.Module;

public class Data {

	public Data(){
		toLoad = new Load();
		toSave = new Save();
		moduleList = toLoad.getModuleList();
		configList = toLoad.getConfigurationList();
		password = toLoad.getPassword();
		passwordFlag = toLoad.getPasswordFlag();
		
	}
	
	
	public void addModule(Module toAdd){
		moduleList.add(toAdd);
		toSave.saveModules(moduleList);
	}
	
	public void addConfiguraiton(Configuration toAdd){
		configList.add(toAdd);
		toSave.saveConfigurations(configList);
	}
	
	
	public void removeModule(Module toRemove){
		moduleList.remove(findListNumber(toRemove));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
	}
	
	public void removeConfiguration(Configuration toRemove){
		configList.remove(findListNumber(toRemove));
		toSave.removeAllConfigurations();
		toSave.saveConfigurations(configList);
	}
	
	
	public void editModule(Module toEdit){
		moduleList.remove(findListNumber(toEdit));
		toSave.removeAllModules();
		toSave.saveModules(moduleList);
		moduleList.add(toEdit);
		toSave.saveModules(moduleList);
	}
	
	public void editConfiguration(Configuration toEdit){
		configList.remove(findListNumber(toEdit));
		toSave.removeAllConfigurations();
		toSave.saveConfigurations(configList);
		configList.add(toEdit);
		toSave.saveConfigurations(configList);
	}
	
	
	
	
	
	
	public void updateFlag(boolean flag){
		passwordFlag = flag;
		toSave.saveSettings(flag, password);
	}
	
	public void updatePassword(String newPassword){
		password = newPassword;
		toSave.saveSettings(passwordFlag, newPassword);
	}
	
	public void addConfiguration(Configuration toAdd){
		configList.add(toAdd);
		toSave.saveConfigurations(configList);
	}

	
	
	private int findListNumber(Module module){
		for(int i = 0; i < moduleList.size(); i++){
			Module compare = moduleList.get(i);
			if(module.getId() == compare.getId())
				return i;
		}
		return -1;
	}
	
	private int findListNumber(Configuration config){
		for(int i = 0; i < configList.size(); i++){
			Configuration compare = configList.get(i);
			if(config.getId() == compare.getId())
				return i;
		}
		return -1;
	}	
	
	
	
	

	/**
	 * @return the moduleList
	 */
	public List<Module> getModuleList() {
		return moduleList;
	}
	/**
	 * @param moduleList the moduleList to set
	 */
	public void setModuleList(List<Module> moduleList) {
		this.moduleList = moduleList;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the passwordFlag
	 */
	public boolean isPasswordFlag() {
		return passwordFlag;
	}
	/**
	 * @param passwordFlag the passwordFlag to set
	 */
	public void setPasswordFlag(boolean passwordFlag) {
		this.passwordFlag = passwordFlag;
	}





	private Load toLoad;
	private Save toSave;
	private List<Module> moduleList = new ArrayList<>();
	private List<Configuration> configList = new ArrayList<>();
	private String password = "Naples";
	private boolean passwordFlag = true; 
}
