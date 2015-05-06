package mhcs.client;

import java.util.List;

import mhcs.storage.Model;

import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.Image;

public class Map {
	/**
	 * Constructor
	 * @return 
	 */
	public Map() {
	    for (int row = 0; row < 50; ++row) {
	      for (int col = 0; col < 100; ++col) {
	    	g.getCellFormatter().setWidth(row, col, Variables.px35);
	        g.setWidget(row, col, Variables.blankImage());
	        g.setBorderWidth(1);
	        g.setCellPadding(1);
	      } // for
	    } // for
	    
	    deadZone();
	} // ctor 
	
	public void deadZone() {
		for (int row = 0; row <=10; ++row) {
	    	for (int col = 39; col <= 49; ++col) {
	    		g.setWidget(row, col, Variables.deadImage());
	    	} // for
	    } // for
	} // deadZone
	
	public void clearMap() {
		for (int row = 0; row < 50; ++row) {
		      for (int col = 0; col < 100; ++col) {
		        g.setWidget(row, col, Variables.blankImage());
		      } // for
		    } // for
		    
		    deadZone();
	} // clearMap
	
	public void placeModules(Map map, Module module) {
		Point coordinates = module.getCoordinates();
		if (module.isInDeadZone()){
			module.setStatus(ModuleStatus.BEYONDREPAIR);
		} // if
		int x = translateX(coordinates.getX());
		int y = translateY(coordinates.getY());
		map.setWidget(y, x, module.getImage());				
	} // placeModule

	public void changePic(Configuration config, Map map){
		List<Module> configModules = config.getModules();
		List<Module> freeModules = Model.getModuleList();
		
		for (int i = 0; i < configModules.size(); i++){
			for (int j = 0; j < freeModules.size(); j++){
				Module configMod, freeMod;
				configMod = configModules.get(i);
				freeMod = freeModules.get(j);
				if (configMod.getId() == freeMod.getId()){
					Point coordinates = freeMod.getCoordinates();
					int x = translateX(coordinates.getX());
					int y = translateY(coordinates.getY());
					Variables.map.setWidget(y, x, makeOpaque(freeMod));					
				}//if
			}//for
		}//for
	}//changePic	
	
	
	public void placeConfiguration(Map map, Configuration config) {
		List<Module> modules = config.getModules();
		for (int i=0; i < modules.size(); i++) {
			map.placeModules(map, modules.get(i));
		} // for
	} // placeConfiguration
	
	public Image makeOpaque(Module modType) { 
		int intModId = modType.getId();
		Image modImage = new Image("images/used/plain.jpg");
		if (0 < intModId && intModId < 41) {
			modImage = new Image("images/used/plain.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (60 < intModId && intModId < 81) {
			modImage = new Image("images/used/dormitory.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (90 < intModId && intModId < 101) {
			modImage = new Image("images/used/sanitation.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (110 < intModId && intModId < 121) {
			modImage = new Image("images/used/foodWaterStorage.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (130 < intModId && intModId < 135) {
			modImage = new Image("images/used/gymRelaxation.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (140 < intModId && intModId < 145) {
			modImage = new Image("images/used/canteen.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (150 < intModId && intModId < 155) {
			modImage = new Image("images/used/power.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (160 < intModId && intModId < 165) {
			modImage = new Image("images/used/control.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (170 < intModId && intModId < 175) {
			modImage = new Image("images/used/airlock.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35);
		} // if
		else if (180 < intModId && intModId < 185) {
			modImage = new Image("images/used/medical.jpg");
			modImage.setHeight(Variables.px35);
			modImage.setWidth(Variables.px35); 
		} // if
		return modImage;
	}
	
	public int translateX(int x) {
		return x-1;
	} // translateX
	
	public int translateY(int y) {
		return 50-y;
	} // translateY
	
	private void setWidget(int x, int y, Image image) {
		g.setWidget(x,y,image);
	} // setWidget
	
	Grid g = new Grid(50, 100);
	
} // Map
