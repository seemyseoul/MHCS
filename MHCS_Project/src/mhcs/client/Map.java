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

public class Map extends LayoutPanel{
	
	/**
	 * The scroll panel that allows a user to see entire grid
	 */
	public static ScrollPanel scroll = new ScrollPanel();
	
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
     * The grid on which modules are placed
     */
	private static Grid grid = new Grid(gRow,gCol);
	
	/**
	 * The layout panel to be added to the Tab Panel
	 */
    private static SplitLayoutPanel layout = new SplitLayoutPanel();
    

	
	/**
	 * Update Map Botton
	 */
	public Button updateMap = new Button("Update");
   
    /**
     * The module array list to save the local storage data
     */
    private List<Module> modList;

	/**
	 * The number of unusable rows and columns on the landing area.
	 */
	
    /**
     * Constructor
     * Sets up the grid
     * Configures the grid
     * Places Modules on the grid
     */
    public void ModuleMap(){
    	
    	grid.setStyleName("background");
    	grid.setCellSpacing(0);
    	grid.setCellPadding(0);
    	
    	for (int row = 0; row < gRow; ++row) {
    		    for (int col = 0; col < gCol; ++col) {
    				grid.getCellFormatter().addStyleName(row, col, "tableCell");
    				grid.getCellFormatter().addStyleName(row, col, "td");
    		    }
    	 }
    	

    	
    	//SHOULD DO THIS HERE AND NOT IN METHOD
    	this.updateMap.addClickHandler(new ClickHandler(){
    		public void onClick(ClickEvent event){
    		updateGrid();
    		}    	
    });
    }


    /**
     * displays the grid and 
     * background image to the layout
     * @return layout
     */
    public SplitLayoutPanel getDisplayMap(){
        

    	//NEED TO CLEAR BEFORE RE-ADDING THINGS TO IT. I THINK THE PROBLEM WAS THE SCROLL PANEL
    	layout.clear();
    	scroll.clear();

    	layout.addNorth(this.updateMap, fifty);
    	scroll.add(grid);
    	layout.add(scroll);
    	return layout;
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
    		grid.setWidget(gRow - y ,x - 1, image);
    	}
    }
}

