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

	/**
	 * We need a function to save modules after we've edited them.
	 * (added them to a configuration)
	 * @param toSave
	 */
	public final void saveEditedModule(final Module toSave)
	{
		stockStore = Storage.getLocalStorageIfSupported();
		if (stockStore != null) {
			int numStocks = stockStore.getLength();
			for (int i=0;i<numStocks;i++)
			{
				if (toSave.getId() == Integer.parseInt(stockStore.getItem("ID"+ (i/9))))
				{
					stockStore.setItem("ID" + (i / 9),
							Integer.toString(toSave.getId()));
					stockStore.setItem("ORI" + (i / 9),
							Integer.toString(toSave.getOrientation()));
					stockStore.setItem("TYP" + (i / 9), toSave.getType());
					stockStore.setItem("LX" + (i / 9),
							Integer.toString(toSave.getLandedCoordinates().getX()));
					stockStore.setItem("LY" + (i / 9),
							Integer.toString(toSave.getLandedCoordinates().getY()));
					stockStore.setItem("CX" + (i / 9),
							Integer.toString(toSave.getConfigCoordinates().getX()));
					stockStore.setItem("CY" + (i / 9),
							Integer.toString(toSave.getConfigCoordinates().getY()));
					stockStore.setItem("CON" + (i / 9),
							String.valueOf(toSave.getCondition()));
					stockStore.setItem("USE" + (i / 9),
							String.valueOf(toSave.isInUse()));
				}
			}
		}
	}

	/**
	 * Saves the password settings (boolean enabled, String password).
	 * @param flag boolean value for whether or not the password is enabled.
	 * @param password the value to set the password as.
	 */
	public void saveSettings(final boolean flag, final String password) {
		stockStore = Storage.getLocalStorageIfSupported();
		if (stockStore != null) {
			stockStore.setItem("passwordflag", String.valueOf(flag));
			stockStore.setItem("password", password);
		}

	}

	private Storage stockStore = null;

}