package mhcs.storage;

import java.util.ArrayList;

import org.apache.commons.lang3.ArrayUtils;

import mhcs.client.Module;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Load {

	public Load() {
		stockStore = Storage.getLocalStorageIfSupported();
		loadModules();
		loadSettings();

	}

	// Returns null value if nothing saved
	// Returns 0 if nothing saved
	private Module[] loadModules() {
		Module newModule = new Module();
		if (stockStore != null) {
			moduleArray = new Module[stockStore.getLength()];
			for (int i = 0; i < stockStore.getLength(); i++) {
				newModule = new Module(stockStore.getItem(key));
				moduleArray[i] = newModule;
			}//if
		} //for
		return moduleArray;
	} //loadModules
		
	
	// Loads password and password flag
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
	
	public Module[] getModulesOfType(String type)
	{
		ArrayList<Module> list = new ArrayList<Module>();
		for(Module m : getModules())
		{
			if(m.getType().equals(type))
			{
				list.add(m);
			}
		}
		return (Module[]) list.toArray();
	}

	public Module[] getUnusedModulesOfType(String type)
	{
		ArrayList<Module> list = new ArrayList<Module>();
		for(Module m : getModules())
		{
			if(m.getType().equals(type) && !m.isInUse())
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
			sumX += m.getLandedCoordinates().getX();
			sumY += m.getLandedCoordinates().getY();
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
	public final Module getModuleClosestTo(final Point p, final String type)
	{
		Module[] modules = getUnusedModulesOfType(type);
		Module closestModule = modules[0];
		
		for (Module m : modules)
		{
			if (m.getLandedCoordinates().distanceTo(p) < closestModule.getLandedCoordinates().distanceTo(p))
			{
				closestModule = m;
			}
		}
		return closestModule;
	}
	
	private Storage stockStore = null;
	
	private boolean passwordFlag = true;
	private String password = "Naples";
	private Module moduleArray[] = null;
	private Storage stockStore = null;
}