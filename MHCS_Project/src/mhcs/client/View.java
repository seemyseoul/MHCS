package mhcs.client;

import mhcs.storage.Model;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class View implements EntryPoint {
  /**
  * The message displayed to the user when the server cannot be reached or
  * returns an error.
  */
  private static final String SERVER_ERROR = "An error occurred while "
      + "attempting to contact the server. Please check your network "
      + "connection and try again.";

  /**
  * This is the entry point method.
  */
  public void onModuleLoad() {	    
    TabLayoutPanel tabPanel = Variables.tabPanel();
    VerticalPanel loginPanel = Variables.loginPanel();    
    
    /* Modules */
    final TextBox moduleID = Variables.tbModuleID();
	final ListBox moduleType = Variables.mType();
	final ListBox moduleCondition = Variables.mCondition();
	final ListBox moduleOrientation = Variables.mOrientation();
	final TextBox moduleX = Variables.tbX();
	final TextBox moduleY = Variables.tbY();
    final ListBox modulesListBox = Variables.mListBox();

    modulesListBox.clear();
	for (Module m : Model.getModuleList()) {
		modulesListBox.addItem("Module #" + m.getId()); 
	} // for
    
	modulesListBox.addChangeHandler(Controller.modulesListBoxHandler(modulesListBox,
			moduleID, moduleType, moduleCondition,
			moduleOrientation, moduleX, moduleY));
    
    for (int i = 0; i < Module.moduleStrings.length; i++) {
      moduleType.addItem(Module.moduleStrings[i]);
    } //for
    
    Controller.setType(moduleID, moduleType);
    
    Button modulesSaveButton = Variables.mSaveButton();
    modulesSaveButton.addClickHandler(Controller.saveButton(moduleType,
    		moduleID, moduleX, moduleY, moduleCondition, moduleOrientation,
    		Variables.strWidth2, Variables.strButtonWidth, Variables.successSound(),
    		Variables.minConfigSound(), Variables.errorSound(), modulesListBox));
    
    DockPanel modulesDock = Variables.modulesDock();
    
    /* Configurations */
    DockPanel configDock = Variables.configDock();

    /* Settings */    
    VerticalPanel settingsPanel = Variables.settingsVpanel();
    
    /* Weather Panel */
    //SimplePanel weatherPanel = Variables.weatherPanel();
    
    /* Add tabs to layout */
    tabPanel.add(modulesDock, "Modules");
    tabPanel.add(configDock, "Configurations");
    tabPanel.add(settingsPanel, "Settings");
    //tabPanel.add(weatherPanel, "Weather");
    tabPanel.add(new HTML("Logout"), "Logout");
    
    RootLayoutPanel.get().add(loginPanel);

  } // OnModuleLoad
} // View
