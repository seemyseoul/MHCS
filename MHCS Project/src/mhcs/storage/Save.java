package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.Module;
import mhcs.client.ModuleStatus;
import mhcs.client.ModuleType;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Save {

	public Save()
	{
		stockStore = Storage.getLocalStorageIfSupported();
		intModCount = Integer.parseInt(stockStore.getItem("intModCount"));
	}
	
	
	public void saveModules(List<Module> toSave){
		for (int i = 0; i < toSave.size(); i++){
			stockStore.setItem(Integer.toString(i), toSave.get(i).toString());
		} //for
		stockStore.setItem("numOfModules", Integer.toString(toSave.size()));
	} //saveModules
	
	
	public void saveSettings(final boolean flag, final String password) {
		if (stockStore != null) {
			stockStore.setItem("passwordflag", String.valueOf(flag));
			stockStore.setItem("password", password);
		} // if
	} // saveSettings	
	
	
	public void saveConfigurations(List<Configuration> toSave){
		for (int i = 0; i < toSave.size(); i++){
			stockStore.setItem("C" + Integer.toString(i), toSave.get(i).toString());
		} //for
		stockStore.setItem("numOfConfigs", Integer.toString(toSave.size()));
	} //saveModules	
	
	public void removeAllModules(){
		for (int i = 0; i < Integer.parseInt(stockStore.getItem("numOfModules")); i++){
			stockStore.removeItem("C" + Integer.toString(i));
		} //for
		stockStore.setItem("numOfModules", Integer.toString(0));			
	}
	
	public void removeAllConfigurations(){
		for (int i = 0; i < Integer.parseInt(stockStore.getItem("numOfConfigs")); i++){
			stockStore.removeItem("C" + Integer.toString(i));
		} //for
		stockStore.setItem("numOfConfigs", Integer.toString(0));		
	}
	
	
	

	
	
		
	/**
	 * Deletes the module (Module toRemove).
	 * @param toRemove module to remove from HTML5 storage.
	 */	
	public void removeModule(Module toRemove) {
		if (stockStore != null) {
			stockStore.removeItem("");
		} // if
	} // removeModule

	/**
	 * Deletes the configuration (Configuration toRemove).
	 * @param toRemove configuration to remove from HTML5 storage.
	 */	
	public void removeConfiguration(Module toRemove) {
		if (stockStore != null) {
			stockStore.removeItem("");
		} // if
	} // removeConfiguration	
	
	
	private Storage stockStore = null;
	private int intModCount = 0;

} // Save