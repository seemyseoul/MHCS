package mhcs.client;

import mhcs.storage.Model;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

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
    final DockPanel login = Variables.loginDock();
    login.setSize(Variables.px1500, Variables.px600);
    
    final Button loginButton = Variables.loginButton;
    loginButton.addClickHandler(Controller.loginHandler(Variables.ptbPassword,
            tabPanel, Variables.px140, Variables.px150, Variables.errorSound()));
    final Button logoutButton = Variables.logoutButton();
    logoutButton.addClickHandler(Controller.logoutHandler(login));
    
    Variables.mListBox().clear();
    for (Module m : Model.getModuleList()) {
        Variables.mListBox().addItem("Module #" + m.getId()); 
    } // for
    
    Variables.mListBox().addChangeHandler(Controller.modulesListBoxHandler(Variables.mListBox(),
            Variables.mID(), Variables.mType(), Variables.mCondition(),
            Variables.mOrientation(), Variables.mX(), Variables.mY(), Variables.mSaveButton()));

    for (int i = 0; i < Module.moduleStrings.length; i++) {
        Variables.mType().addItem(Module.moduleStrings[i]);
    } //for
    
    Variables.mID().addValueChangeHandler(new ValueChangeHandler<String>() {
        @Override
        public void onValueChange(ValueChangeEvent<String> event) {
            Controller.setType(Variables.mID(), Variables.mType());
        } // onValueChange
    });
    
//    Controller.setType(Variables.mID, Variables.mType());
    
    final DockPanel modulesDock = Variables.modulesDock();
    final DockPanel configDock = Variables.configDock();
    final DockPanel settingsDock = Variables.settingsDock();
    
    
    /* Add tabs to layout */
    tabPanel.add(modulesDock, "Modules");
    tabPanel.add(configDock, "Configurations");
    tabPanel.add(settingsDock, "Settings");
    
    RootLayoutPanel.get().add(login);
    Controller.tenDayCheck();

  } // OnModuleLoad
} // View
