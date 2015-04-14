package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.Module;
import mhcs.client.ModuleStatus;
import mhcs.client.ModuleType;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Load {

	public Load() {
		stockStore = Storage.getLocalStorageIfSupported();
		loadModules();
		loadSettings();
		loadConfigurations();
	}

	private void loadModules(){
		Module newModule = null;
		for (int i = 0; i <= Integer.parseInt(stockStore.getItem("numOfModules")); i++){
			newModule = new Module(stockStore.getItem(Integer.toString(i)));
			moduleList.add(newModule);
		}
	}
	
	private void loadSettings() {
		stockStore = Storage.getLocalStorageIfSupported();
		if (stockStore != null) {
			if ((stockStore.getItem("passwordflag")) == "true")
				passwordFlag = true;
			else
				passwordFlag = false;
			password = stockStore.getItem("password");
		}
	}

	
	private void loadConfigurations(){
		Configuration newConfig = null;
		for (int i = 0; i <= Integer.parseInt(stockStore.getItem("numOfModules")); i++){
			newConfig = new Configuration(stockStore.getItem("C" + Integer.toString(i)));
			configurationList.add(newConfig);
		}
	}
	
	
	
	public boolean getPasswordFlag() {
		return passwordFlag;
	}

	public String getPassword() {
		return password;
	}
	
	public List<Module> getModuleList(){
		return moduleList;
	}
	
	public List<Configuration> getConfigurationList(){
		return configurationList;
	}


	
	private boolean passwordFlag = true;
	private String password = "Naples";
	private List<Module> moduleList = new ArrayList<>();
	private List<Configuration> configurationList = new ArrayList<>();
	private Storage stockStore = null;
}