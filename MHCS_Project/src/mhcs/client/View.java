package mhcs.client;

import java.util.Arrays;

import mhcs.client.Map;
import mhcs.storage.Model;
import mhcs.storage.TestCases;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.AudioElement;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.media.client.Audio;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TextArea;
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
    
    /*
     *  Modules
     */
    
    /* East */
    final TextBox moduleID = Variables.tbModuleID();
	final ListBox moduleType = Variables.mType();
	final ListBox moduleCondition = Variables.mCondition();
	final ListBox moduleOrientation = Variables.mOrientation();
	final TextBox moduleX = Variables.tbX();
	final TextBox moduleY = Variables.tbY();
	
	
    /* West */
    /* Inner Panels */
    //Module.populateListBox(arrModules);
    ListBox modulesListBox = Variables.mListBox();

    modulesListBox.clear();
	for (Module m : Model.getModuleList()) {
		modulesListBox.addItem("Module #" + m.getId()); 
	} // for
    
	modulesListBox.addChangeHandler(Controller.modulesListBoxHandler(modulesListBox,
			moduleID, moduleType, moduleCondition,
			moduleOrientation, moduleX, moduleY));
    
    /* Fill Horizontal Panel */
    Button moduleAdd = Variables.mAddButton();
    Button moduleRemove = Variables.mRemoveButton();
    moduleRemove.addClickHandler(Controller.removeButton(modulesListBox));
    HorizontalPanel modulesWestHpanel = Variables.modulesWestHpanel();
    modulesWestHpanel.add(moduleAdd);
    modulesWestHpanel.add(moduleRemove);

    /* Fill Vertical Panel */
    VerticalPanel modulesWestVpanel = Variables.modulesWestVpanel();
    modulesWestVpanel.add(modulesListBox);
    modulesWestVpanel.add(modulesWestHpanel);

    /* North */
    // Image to be filled with function based on module
    Image moduleImage = Variables.moduleImage();

    /* Center */
    TextArea moduleDetails = Variables.taModuleDetails();
    VerticalPanel modulesCenterVpanel = Variables.modulesCenterVpanel();

    /* South */
    TextArea moduleRequirements = Variables.taModuleRequirements();
    VerticalPanel modulesSouthVpanel = Variables.modulesSouthVpanel();

    // Via loop based off module array
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
    
    /* 
     * Configurations 
     */
    /* Create ConfigurationDock Panel */
    DockPanel configDock = Variables.configDock();

    /* 
     * Settings
     */    
    VerticalPanel settingsPanel = Variables.settingsVpanel();
    
    /* Weather Panel */
    SimplePanel weatherPanel = Variables.weatherPanel();
    
    /* Add tabs to layout */
    tabPanel.add(modulesDock, "Modules");
    tabPanel.add(configDock, "Configurations");
    tabPanel.add(settingsPanel, "Settings");
    tabPanel.add(weatherPanel, "Weather");
    tabPanel.add(new HTML("Logout"), "Logout");
    
    RootLayoutPanel.get().add(loginPanel);

  } // OnModuleLoad
} // View
