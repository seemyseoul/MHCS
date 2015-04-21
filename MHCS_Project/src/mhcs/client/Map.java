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

public class Map extends Grid{
	
	
	public static final int fifty = 50;
	public static final int one00 = 100;
	
	/**
	 * Number of rows in the grid
	 */
    private static int gRow = fifty;
	
    /**
	 * Number of columns in the grid
	 */
    private static int gCol = one00;
	
    
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
    	super(x,y);
    	this.setStyleName("background");
    	this.setCellSpacing(0);
    	this.setCellPadding(0);
    	
    	for (int row = 0; row < gRow; ++row) {
    		    for (int col = 0; col < gCol; ++col) {
    				this.getCellFormatter().addStyleName(row, col, "tableCell");
    				this.getCellFormatter().addStyleName(row, col, "td");
    		    }
    	 }
    }
    
    public void updateGrid(){
    	this.modList = Model.getModuleList();
    	for (int i = 0; i < this.modList.size(); ++i){
    		Point coordinate = this.modList.get(i).getCoordinates();
    		int x = coordinate.getX();
    		int y = coordinate.getY();
    		String URL = "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRw&url=http%3A%2F%2Fhd4desktop.com%2F28658-chimera-spaceship-hd-wallpaper%2F&ei=WXk2VfbtMMGMsAXq2IGICw&bvm=bv.91071109,d.b2w&psig=AFQjCNE9SMiGdcpBuTKDN0WUg7qW9TNHwQ&ust=1429719772846750";
//    		String URL = this.modList.get(i).getImageURL();
    		Image image = new Image(URL);
    		this.setWidget(gRow - y ,x - 1, image);
    	}
    }
}

