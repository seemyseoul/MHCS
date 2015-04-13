package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Module;

public class Data {

	public Data(){
		toLoad = new Load();
		toSave = new Save();
		moduleList = toLoad.getModuleList();
		password = toLoad.getPassword();
		passwordFlag = toLoad.getPasswordFlag();
	}
	
	
	
	
	public void addModule(Module toAdd){
		moduleList.add(toAdd);
		toSave.saveModules(moduleList);
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
	private String password = "";
	private boolean passwordFlag = true; 
}
