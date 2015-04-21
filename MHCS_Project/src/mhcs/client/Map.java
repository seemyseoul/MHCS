package mhcs.client;

import java.util.List;

import mhcs.storage.Model;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.LayoutPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.SplitLayoutPanel;
import com.google.gwt.user.client.ui.Widget;

public class Map{

	/**
	 * Number of rows in the grid
	 */
    private int gRow;
	
    /**
	 * Number of columns in the grid
	 */
    private int gCol;
	
    /**
     * underlying Grid object.
     */
    private Grid grid;
    
    
    public Grid getGrid() {
		return grid;
	}

	/**
     * The module array list to save the local storage data
     */
    private List<Module> modList;

	
    /**
     * Constructor
     * Sets up the grid
     * Configures the grid
     * Places Modules on the grid
     */
    public Map(int x, int y){
    	gRow = y;
    	gCol = x;
    	grid = new Grid(gRow,gCol);
    	grid.setStyleName("background");
    	grid.setCellSpacing(0);
    	grid.setCellPadding(0);
    	
    	for (int row = 0; row < gRow; ++row) {
    		    for (int col = 0; col < gCol; ++col) {
    				grid.getCellFormatter().addStyleName(row, col, "tableCell");
    				grid.getCellFormatter().addStyleName(row, col, "td");
    		    }
    	 }
    }
    
    public void updateGrid(){
    	this.modList = Model.getModuleList();
    	for (int i = 0; i < this.modList.size(); ++i){
    		Point coordinate = this.modList.get(i).getCoordinates();
    		int x = coordinate.getX();
    		int y = coordinate.getY();
    		String URL = "http://icons.iconarchive.com/icons/mazenl77/I-like-buttons-3a/512/Cute-Ball-Go-icon.png";
//    		String URL = this.modList.get(i).getImageURL();
    		Image image = new Image(URL);
    		grid.setWidget(gRow - y ,x - 1, image);
    	}
    }
}

