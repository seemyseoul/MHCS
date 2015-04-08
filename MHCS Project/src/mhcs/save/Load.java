package mhcs.save;


import mhcs.client.Module;
import mhcs.client.Point;

import com.google.gwt.storage.client.Storage;

public class Load {
	
	public static Module[] loadAll(){		
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
				  if ((stockStore.getItem("CON"+key)) == "true")
					  newModule.setCondition(true);
				  else
					  newModule.setCondition(false);				  
				  moduleArray[moduleArray.length]= newModule; 
			  }
		  }
		  return moduleArray;
	}
	  
	private static Module[] moduleArray= null;
	private static Module newModule = null;
	private static Storage stockStore = null;
	
	
	
	
}
