package mhcs.storage;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Module;
import mhcs.client.ModuleStatus;
import mhcs.client.ModuleType;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Load {

	public Load() {
		stockStore = Storage.getLocalStorageIfSupported();
		listOfKeys = loadKeys();
		loadModules();
		loadSettings();
	}

	private List<Module> loadModules() {
		Module newModule = null;
		List<Module> moduleList = new ArrayList<>();
		if (stockStore != null) {
			for (int i = 0; i < listOfKeys.size(); i++){
				String stringModule = stockStore.getItem(Integer.toString(listOfKeys.get(i)));
				newModule = new Module(stringModule);
				moduleList.add(newModule);
			} //for
		} //if
		return moduleList;
		} //if
		
	private List<Integer> loadKeys(){
		List<Integer> intKeys = new ArrayList<>();		
		String keys = stockStore.getItem("keyString");
		String[] keyList = keys.split(",");
		for (int i = 0; keyList[i] != ";"; i++){
			intKeys.add(Integer.parseInt(keyList[i]));
		} //for
		return intKeys;
	} // loadKeys
		
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

	
	
	
	
	
	public boolean getPasswordFlag() {
		return passwordFlag;
	}

	public String getPassword() {
		return password;
	}

	public Module[] getModules() {
		return moduleArray;
	}
	

	public List<Module> getModuleList(){
		return moduleList;
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



	
	
	
	
	
	private List<Integer> listOfKeys = new ArrayList<>();
	private boolean passwordFlag = true;
	private String password = "Naples";
	private List<Module> moduleList = new ArrayList<>();
	private Storage stockStore = null;
}