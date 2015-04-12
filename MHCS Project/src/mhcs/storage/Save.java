package mhcs.storage;

import mhcs.client.Module;

import com.google.gwt.storage.client.Storage;

public class Save {

	public Save()
	{
		stockStore = Storage.getLocalStorageIfSupported();
		intModCount = Integer.parseInt(stockStore.getItem("Module Count"));
	}
	
	/**
	 * Saves the module (Module toSave).
	 * @param toSave module to save into HTML5 storage.
	 */	
	public void saveModule(Module toSave) {
		if (stockStore != null) {
			stockStore.setItem(Integer.toString(intModCount),toSave.toString());
		} // if
	} // saveModule
			
	/**
	 * Saves the configuration (Configuration toSave).
	 * @param toSave configuration to save into HTML5 storage.
	 */
	public void saveConfiguration(Configuration toSave) {
		if (stockStore != null) {
			stockStore.setItem(Integer.toString(intModCount),toSave.toString());
		} // if
	} // saveConfiguration
	
	/**
	 * Saves the password settings (boolean enabled, String password).
	 * @param flag boolean value for whether or not the password is enabled.
	 * @param password the value to set the password as.
	 */
	public void saveSettings(final boolean flag, final String password) {
		if (stockStore != null) {
			stockStore.setItem("passwordflag", String.valueOf(flag));
			stockStore.setItem("password", password);
		} // if
	} // saveSettings
		
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