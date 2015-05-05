package mhcs.client;

import java.util.List;

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
	    	g.getCellFormatter().setWidth(row, col, Variables.px20);
	        g.setWidget(row, col, Variables.blankImage());
	        g.setBorderWidth(1);
	        g.setCellPadding(1);
	      } // for
	    } // for
	    
	    deadZone();
	} // ctor
	
	public void deadZone() {
		for (int row = 0; row < 40; ++row) {
	    	for (int col = 39; col < 49; ++col) {
	    		g.setWidget(row, col, Variables.deadImage());
	    	} // for
	    } // for
	} // deadZone
	
	public void placeModules(Map map, Module module) {
		Point coordinates = module.getCoordinates();
		int x = coordinates.getX();
		int y = coordinates.getY();
		map.setWidget(x+1, y+49, module.getImage());
	} // placeModule

	private void setWidget(int x, int y, Image image) {
		g.setWidget(x,y,image);
	} // setWidget

	public void placeConfiguration(Map map, Configuration config) {
		List<Module> modules = config.getModules();
		for (int i=0; i < modules.size(); i++) {
			map.placeModules(map, modules.get(i));
		} // for
	} // placeConfiguration
	
	Grid g = new Grid(50, 100);
	
} // Map
