package mhcs.client;

import java.util.List;

import mhcs.storage.Model;

import com.google.gwt.user.client.Window;
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
		int x = translateX(coordinates.getX());
		int y = translateY(coordinates.getY());
		map.setWidget(y, x, module.getImage());
//		map.g.getWidget(y, x).addAttachHandler(Controller.dragDropDown(Variables.map, module));
		if (Variables.boolMouseDown) {
			module.getImage().addMouseMoveHandler(Controller.dragDropMove(Variables.map, module));
			module.getImage().addMouseUpHandler(Controller.dragDropUp(map, module));
		} // if
		
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
					Window.alert("FOUND A MATCH!");
					Point coordinates = freeMod.getCoordinates();
					int x = translateX(coordinates.getX());
					int y = translateY(coordinates.getY());
					map.setWidget(y, x, makeOpaque(freeMod));					
				}//if
			}//for
		}//for
		
		
	//update to appease git	
		
		
	}//changePic	
	
	
	public void placeConfiguration(Map map, Configuration config) {
		List<Module> modules = config.getModules();
		for (int i=0; i < modules.size(); i++) {
			Point coordinates = modules.get(i).getCoordinates();
			int x = translateX(coordinates.getX());
			int y = translateY(coordinates.getY());
			map.setWidget(y, x, modules.get(i).getImage());
		} // for
	} // placeConfiguration
	
	public Image makeOpaque(Module modType) { 
		int intModId = modType.getId();
		Image modImage = new Image("images/blank");
		if (0 < intModId && intModId < 41) {
			modImage = new Image("images/modules/plain_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (60 < intModId && intModId < 81) {
			modImage = new Image("images/modules/dormitory_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (90 < intModId && intModId < 101) {
			modImage = new Image("images/modules/sanitation_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (110 < intModId && intModId < 121) {
			modImage = new Image("images/modules/foodWaterStorage_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (130 < intModId && intModId < 135) {
			modImage = new Image("images/modules/gymRelaxation_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (140 < intModId && intModId < 145) {
			modImage = new Image("images/modules/canteen_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (150 < intModId && intModId < 155) {
			modImage = new Image("images/modules/power_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (160 < intModId && intModId < 165) {
			modImage = new Image("images/modules/control_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (170 < intModId && intModId < 175) {
			modImage = new Image("images/modules/airlock_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (180 < intModId && intModId < 185) {
			modImage = new Image("images/modules/medical_used.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150); 
			Variables.m.add(modImage);
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
