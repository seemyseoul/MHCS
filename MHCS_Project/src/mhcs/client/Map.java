package mhcs.client;

import com.google.gwt.user.client.ui.Grid;

public class Map {
	/**
	 * Constructor
	 */
	public Map() {
		Grid g = new Grid(50, 100);
	    for (int row = 0; row < 5; ++row) {
	      for (int col = 0; col < 5; ++col) {
	    	g.getCellFormatter().setWidth(row, col, Variables.px50);
	        g.setText(row, col, "" + row + ", " + col);
	        g.setWidget(row, col, Variables.blankImage());
	      } // for
	    } // for
	} // ctor

} // Map
