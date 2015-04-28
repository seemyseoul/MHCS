package mhcs.storage;


import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.Module;


import com.google.gwt.storage.client.Storage;

public class Save {

	public Save() {
		stockStore = Storage.getLocalStorageIfSupported();
		if (stockStore.getItem("intModCount") != null){
		intModCount = Integer.parseInt(stockStore.getItem("intModCount"));
		}
	}

	public void saveModules(List<Module> toSave) {
		for (int i = 0; i < toSave.size(); i++) {
			stockStore.setItem(Integer.toString(i), toSave.get(i).toString());
		} // for
		stockStore.setItem("intModCount", Integer.toString(toSave.size()));
	} // saveModules

	public void saveSettings(final boolean flag, final String password) {
		if (stockStore != null) {
			stockStore.setItem("passwordflag", String.valueOf(flag));
			stockStore.setItem("password", password);
		} // if
	} // saveSettings

	public void saveConfigurations(List<Configuration> toSave) {
		for (int i = 0; i < toSave.size(); i++) {
			stockStore.setItem("C" + Integer.toString(i), toSave.get(i)
					.toString());
		} // for
		stockStore.setItem("intConfigCount", Integer.toString(toSave.size()));
	} // saveModules

	public void removeAllModules() {
		//tested
		if (stockStore.getItem("intModCount") == null)
		{
			return;
		}
		for (int i = 0; i < Integer
				.parseInt(stockStore.getItem("intModCount")); i++) {
			stockStore.removeItem(Integer.toString(i));
		} // for
		stockStore.setItem("intModCount", Integer.toString(0));
	}

	public void removeAllConfigurations() {
		if (stockStore.getItem("intConfigCount") == null)
		{
			return;
		}
		for (int i = 0; i < Integer
				.parseInt(stockStore.getItem("intConfigCount")); i++) {
			stockStore.removeItem("C" + Integer.toString(i));
		} // for
		stockStore.setItem("intConfigCount", Integer.toString(0));
	}

	/**
	 * Deletes the module (Module toRemove).
	 * 
	 * @param toRemove
	 *            module to remove from HTML5 storage.
	 */
	public void removeModule(Module toRemove) {
		if (stockStore != null) {
			stockStore.removeItem("");
		} // if
	} // removeModule

	/**
	 * Deletes the configuration (Configuration toRemove).
	 * 
	 * @param toRemove
	 *            configuration to remove from HTML5 storage.
	 */
	public void removeConfiguration(Module toRemove) {
		if (stockStore != null) {
			stockStore.removeItem("");
		} // if
	} // removeConfiguration

	private Storage stockStore = null;
	private int intModCount = 0;
	private int intConfigCount = 0;

} // Save