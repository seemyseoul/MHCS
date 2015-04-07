package lab6.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.RootPanel;

public class MenuBarExample implements EntryPoint {

	  public void onModuleLoad() {
	    // Make a command that we will execute from all leaves.


		  Command cmd = new Command() {
		      public void execute() {
		        Window.alert("You selected a menu item!");
		      }
		    };		 
	    
	    
	    // Make some sub-menus that we will cascade from the top menu.
	    MenuBar fooMenu = new MenuBar(true);
	    fooMenu.addItem("the", cmd);
	    fooMenu.addItem("foo", cmd);
	    fooMenu.addItem("menu", cmd);

	    MenuBar barMenu = new MenuBar(true);
	    barMenu.addItem("the", cmd);
	    barMenu.addItem("bar", cmd);
	    barMenu.addItem("menu", cmd);

	    MenuBar bazMenu = new MenuBar(true);
	    bazMenu.addItem("the", cmd);
	    bazMenu.addItem("baz", cmd);
	    bazMenu.addItem("menu", cmd);

	    // Make a new menu bar, adding a few cascading menus to it.
	    MenuBar menu = new MenuBar();
	    menu.addItem("foo", fooMenu);
	    menu.addItem("bar", barMenu);
	    menu.addItem("baz", bazMenu);
	    
	    
	      final DockLayoutPanel dlp = new DockLayoutPanel(Unit.EM);
	      dlp.addNorth(menu, 2);	    

		    Command cmdDIFF = new Command() {
		    	public void execute() {
		    		dlp.addWest(new Label("HERE IS A HABITAT CONFIGURATION"),20);
		            }
		          };
		      fooMenu.addItem("tryme", cmdDIFF); //ASSOCIATE MENU ITEM WITH COMMAND	    

	    // Add it to the root panel.
	    RootPanel.get().add(menu);
	      RootLayoutPanel.get().add(dlp);	    
	  }
	}