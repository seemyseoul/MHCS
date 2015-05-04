package mhcs.client;

import java.util.List;

import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.TextBox;

public class Map {
	/**
	 * Constructor
	 * @return 
	 */
	public Map() {
		Grid g = new Grid(50, 100);
	    for (int row = 0; row < 5; ++row) {
	      for (int col = 0; col < 5; ++col) {
	    	g.getCellFormatter().setWidth(row, col, Variables.px50);
	        g.setWidget(row, col, Variables.blankImage());
	      } // for
	    } // for
	} // ctor
	
	public void placeModule(Module module) {
		Map map = new Map();
		Point coordinates = module.getCoordinates();
		int x = coordinates.getX();
		int y = coordinates.getY();
		map.setWidget(x, y, module.getImage());
	} // placeModule

	public void placeConfiguration(Map map, Configuration config) {
		List<Module> modules = config.getModules();
		for (int i=0; i < modules.size(); i++) {
			map.placeModule(modules.get(i));
		} // for
	} // placeConfiguration
	
} // Map
