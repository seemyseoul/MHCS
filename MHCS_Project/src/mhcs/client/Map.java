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
		module.getImage().addMouseDownHandler(Controller.dragDrop(module.getImage()));
	} // placeModule

	public void placeConfiguration(Map map, Configuration config) {
		List<Module> modules = config.getModules();
		for (int i=0; i < modules.size(); i++) {
			Point coordinates = modules.get(i).getCoordinates();
			int x = translateX(coordinates.getX());
			int y = translateY(coordinates.getY());
			map.setWidget(y, x, modules.get(i).getImage());
		} // for
	} // placeConfiguration
	
//	public Image makeOpaque(Image modImage) { 
//		return modImage.getElement().setAttribute("style",
//				"filter: alpha(opacity=5);opacity: 0.95");
//	}
	
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
