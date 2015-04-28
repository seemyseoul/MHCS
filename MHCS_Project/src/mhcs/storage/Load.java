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
		loadTime();
	}
	
	private void loadTime(){
		if (stockStore.getItem("time") != null){
			time = stockStore.getItem("time");	
	}
	}
	
	//gets the time;
	public String getTime(){
		return time;
	}

	private void loadModules() {
		Module newModule = null;
		if (stockStore.getItem("intModCount") != null){		
		for (int i = 0; i < Integer.parseInt(stockStore
				.getItem("intModCount")); i++) {
			newModule = new Module(stockStore.getItem(Integer.toString(i)));
			moduleList.add(newModule);
		}
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

	private void loadConfigurations() {
		Configuration newConfig = null;
		if (stockStore.getItem("intConfigCount") != null){			
		for (int i = 0; i <= Integer.parseInt(stockStore
				.getItem("intConfigCount")); i++) {
			newConfig = new Configuration(stockStore.getItem("C"
					+ Integer.toString(i)));
			configurationList.add(newConfig);
			}
		}
	}

	public boolean getPasswordFlag() {
		return passwordFlag;
	}

	public String getPassword() {
		return password;
	}

	public List<Module> getModuleList() {
		return moduleList;
	}

	public List<Configuration> getConfigurationList() {
		return configurationList;
	}

	private boolean passwordFlag = true;
	private String password = "Naples";
	private List<Module> moduleList = new ArrayList<>();
	private List<Configuration> configurationList = new ArrayList<>();
	private Storage stockStore = null;
	private String time;
}