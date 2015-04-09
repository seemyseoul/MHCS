package mhcs.storage;

import mhcs.client.Module;

import com.google.gwt.storage.client.Storage;

public class Save {

	public Save(){}
		
	
	public void saveModule(Module toSave){		
		stockStore = Storage.getLocalStorageIfSupported();		
		  if (stockStore != null){
			  int numStocks = stockStore.getLength();
			  stockStore.setItem("ID"+(numStocks / 6), Integer.toString(toSave.getId()));
			  stockStore.setItem("ORI"+(numStocks / 6), Integer.toString(toSave.getOrientation()));
			  stockStore.setItem("TYP"+(numStocks / 6), toSave.getType());
			  stockStore.setItem("LX"+(numStocks / 6), Integer.toString(toSave.getLandedCoordinates().getX()));
			  stockStore.setItem("LY"+(numStocks / 6), Integer.toString(toSave.getLandedCoordinates().getY()));
			  stockStore.setItem("CX"+(numStocks / 6), Integer.toString(toSave.getConfigCoordinates().getX()));
			  stockStore.setItem("CY"+(numStocks / 6), Integer.toString(toSave.getConfigCoordinates().getY()));			  
			  stockStore.setItem("CON"+(numStocks / 6), String.valueOf(toSave.getCondition()));	
			  stockStore.setItem("USE"+(numStocks / 6), String.valueOf(to	
		  }
	}
	  
	
	
	  private Storage stockStore = null;	
	  

}