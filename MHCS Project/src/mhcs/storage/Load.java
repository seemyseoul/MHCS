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

	
	
	
	
	
	public Module[] getModulesOfType(ModuleType type)
	{
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : getModules())
		{
			if (m.getType().equals(type))
			{
				list.add(m);
			}
		}
		return (Module[]) list.toArray();
	}

	public Module[] getUnusedModulesOfType(ModuleType type)
	{
		ArrayList<Module> list = new ArrayList<Module>();
		for (Module m : getModules())
		{
			if (m.getType().equals(type) && !m.isInUse())
			{
				list.add(m);
			}
		}
		return (Module[]) list.toArray();
	}
	
	/**
	 * gets the center of mass of the modules.
	 * @return the center of mass.
	 */
	public final Point getCenterOfMass()
	{
		Module[] modules = getModules();
		int sumX = 0;
		int sumY = 0;
		for (Module m : modules)
		{
			sumX += m.getCoordinates().getX();
			sumY += m.getCoordinates().getY();
		}
		return new Point(sumX / modules.length, sumY / modules.length);
	}

	/**
	 * This method returns the closest UNUSED module of type "type"
	 * to module m.
	 *
	 * @param p Point to get closest module to.
	 * @param type Type of modules to search for.
	 * @return module closest to point p.
	 */
	public final Module getModuleClosestTo(final Point p, ModuleType type)
	{
		Module[] modules = getUnusedModulesOfType(type);
		Module closestModule = modules[0];
		
		for (Module m : modules)
		{
			if (m.getCoordinates().distanceTo(p) < closestModule.getCoordinates().distanceTo(p))
			{
				closestModule = m;
			}
		}
		return closestModule;
	}



	
	private boolean passwordFlag = true;
	private String password = "Naples";
	private List<Module> moduleList = new ArrayList<>();
	private List<Configuration> configurationList = new ArrayList<>();
	private Storage stockStore = null;
}