package mhcs.storage;

import mhcs.client.Module;

import com.google.gwt.storage.client.Storage;

public class Save {

	public void saveOneModule(Module toSave) {
		stockStore = Storage.getLocalStorageIfSupported();
		if (stockStore != null) {
			int numStocks = stockStore.getLength();
			stockStore.setItem("ID" + (numStocks / 9),
					Integer.toString(toSave.getId()));
			stockStore.setItem("ORI" + (numStocks / 9),
					Integer.toString(toSave.getOrientation()));
			stockStore.setItem("TYP" + (numStocks / 9), toSave.getType());
			stockStore.setItem("LX" + (numStocks / 9),
					Integer.toString(toSave.getLandedCoordinates().getX()));
			stockStore.setItem("LY" + (numStocks / 9),
					Integer.toString(toSave.getLandedCoordinates().getY()));
			stockStore.setItem("CX" + (numStocks / 9),
					Integer.toString(toSave.getConfigCoordinates().getX()));
			stockStore.setItem("CY" + (numStocks / 9),
					Integer.toString(toSave.getConfigCoordinates().getY()));
			stockStore.setItem("CON" + (numStocks / 9),
					String.valueOf(toSave.getCondition()));
			stockStore.setItem("USE" + (numStocks / 9),
					String.valueOf(toSave.isInUse()));
		}
	}

	public void saveSettings(boolean flag, String password) {
		stockStore = Storage.getLocalStorageIfSupported();
		if (stockStore != null) {
			stockStore.setItem("passwordflag", String.valueOf(flag));
			stockStore.setItem("password", password);
		}

	}

	private Storage stockStore = null;

}