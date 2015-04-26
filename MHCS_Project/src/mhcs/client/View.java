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
//  /**
//  * The message displayed to the user when the server cannot be reached or
//  * returns an error.
//  */
//  private static final String SERVER_ERROR = "An error occurred while "
//      + "attempting to contact the server. Please check your network "
//      + "connection and try again.";

  /**
  * This is the entry point method.
  */
  public void onModuleLoad() {      
    final TabLayoutPanel tabPanel = Variables.tabPanel();
    final VerticalPanel loginPanel = Variables.loginPanel();    
    
    /* Modules */
    Variables.mListBox().clear();
    for (Module m : Model.getModuleList()) {
        Variables.mListBox().addItem("Module #" + m.getId()); 
    } // for
    
    Variables.mListBox().addChangeHandler(Controller.modulesListBoxHandler(Variables.mListBox(),
            Variables.mID, Variables.mType(), Variables.mCondition(),
            Variables.mOrientation(), Variables.mX(), Variables.mY()));
    
    for (int i = 0; i < Module.moduleStrings.length; i++) {
        Variables.mType().addItem(Module.moduleStrings[i]);
    } //for
    
    Controller.setType(Variables.mID, Variables.mType());
    
    Button modulesSaveButton = Variables.mSaveButton();
    modulesSaveButton.addClickHandler(Controller.saveButton(Variables.mType(),
            Variables.mID, Variables.mX(), Variables.mY(), Variables.mCondition(), Variables.mOrientation(),
            Variables.strWidth2, Variables.strButtonWidth, Variables.successSound(),
            Variables.minConfigSound(), Variables.errorSound(), Variables.mListBox()));
    
    final DockPanel modulesDock = Variables.modulesDock();
    
    /* Configurations */
    final DockPanel configDock = Variables.configDock();

    /* Settings */    
    final VerticalPanel settingsPanel = Variables.settingsVpanel();
    
    /* Weather Panel */
    //SimplePanel weatherPanel = Variables.weatherPanel();
    
    /* Add tabs to layout */
    tabPanel.add(modulesDock, "Modules");
    tabPanel.add(configDock, "Configurations");
    tabPanel.add(settingsPanel, "Settings");
    //tabPanel.add(weatherPanel, "Weather");
    tabPanel.add(null, "Logout");
    
    RootLayoutPanel.get().add(loginPanel);

  } // OnModuleLoad
} // View
