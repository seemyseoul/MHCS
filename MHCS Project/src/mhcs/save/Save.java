package mhcs.save;

import mhcs.client.Module;

import com.google.gwt.storage.client.Storage;

public class Save {

	public Save(){}
		
	
	public void saveOne(Module toSave){		
		stockStore = Storage.getLocalStorageIfSupported();		
		  if (stockStore != null){
			  int numStocks = stockStore.getLength();
			  stockStore.setItem("ID"+(numStocks / 6), Integer.toString(toSave.getId()));
			  stockStore.setItem("ORI"+(numStocks / 6), Integer.toString(toSave.getOrientation()));
			  stockStore.setItem("TYP"+(numStocks / 6), toSave.getType());
			  stockStore.setItem("X"+(numStocks / 6), Integer.toString(toSave.getCoordinates().getX()));
			  stockStore.setItem("Y"+(numStocks / 6), Integer.toString(toSave.getCoordinates().getY()));			  
			  stockStore.setItem("CON"+(numStocks / 6), String.valueOf(toSave.getCondition()));		  
		  }
	}
	  
	
	
	  private Storage stockStore = null;	
	  
	
}
