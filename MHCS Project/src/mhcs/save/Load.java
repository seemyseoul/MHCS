package mhcs.save;


import mhcs.client.Module;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Load {
	
	public Module[] loadAll(){		
		stockStore = Storage.getLocalStorageIfSupported();		
		  if (stockStore != null){
			  for (int i = 0; i < stockStore.getLength(); i++){
				  newModule = new Module();
				  String key = stockStore.key(i);
				  newModule.setId(Integer.parseInt(stockStore.getItem("ID"+key)));
				  newModule.setOrientation(Integer.parseInt(stockStore.getItem("ORI"+key)));
				  newModule.setType(stockStore.getItem("TYP"+key));
				  int x = Integer.parseInt(stockStore.getItem("X"+key));
				  int y = Integer.parseInt(stockStore.getItem("Y"+key));				  
				  newModule.setCoordinates(new Point(x,y));
				  if ((stockStore.getItem("CON"+key)) == "ture")
					  newModule.setCondition(true);
				  else
					  newModule.setCondition(false);				  
				  moduleArray.
			  }
			  return newModule;
		  }
	}
	  
	private Module[] moduleArray= null;
	private Module newModule = null;
	  private Storage stockStore = null;
	
	
	
	
}
