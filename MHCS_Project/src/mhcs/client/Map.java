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
	    for (int row = 0; row < 5; ++row) {
	      for (int col = 0; col < 5; ++col) {
	    	g.getCellFormatter().setWidth(row, col, Variables.px50);
	        g.setWidget(row, col, Variables.blankImage());
	      } // for
	    } // for
	} // ctor
	
	public void placeModules(Map map, Module module) {
		Point coordinates = module.getCoordinates();
		int x = coordinates.getX();
		int y = coordinates.getY();
		map.setWidget(x, y, module.getImage());
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
