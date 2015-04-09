package mhcs.storage;

import mhcs.client.Module;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Load {

	public Load() {
		loadModules();
		loadSettings();
	}

	// Returns null value if nothing saved
	// Returns 0 if nothing saved
	private Module[] loadModules() {
		stockStore = Storage.getLocalStorageIfSupported();
		Module newModule = new Module();
		if (stockStore != null) {
			moduleArray = new Module[stockStore.getLength()];
			for (int i = 0; i < stockStore.getLength(); i++) {
				newModule = new Module();
				String key = stockStore.key(i);
				newModule
						.setId(Integer.parseInt(stockStore.getItem("ID" + key)));
				newModule.setOrientation(Integer.parseInt(stockStore
						.getItem("ORI" + key)));
				newModule.setType(stockStore.getItem("TYP" + key));
				int lx = Integer.parseInt(stockStore.getItem("LX" + key));
				int ly = Integer.parseInt(stockStore.getItem("LY" + key));
				newModule.setLandedCoordinates(new Point(lx, ly));
				int cx = Integer.parseInt(stockStore.getItem("CX" + key));
				int cy = Integer.parseInt(stockStore.getItem("CY" + key));
				newModule.setLandedCoordinates(new Point(cx, cy));
				if ((stockStore.getItem("CON" + key)) == "ture")
					newModule.setCondition(true);
				else
					newModule.setCondition(false);
				moduleArray[i] = newModule;
			}
		}
		return moduleArray;
	}

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

	private boolean passwordFlag = true;
	private String password = "Naples";
	private Module moduleArray[] = null;
	private Storage stockStore = null;
}