package mhcs.client;

import java.util.Arrays;

import mhcs.client.Map;
import mhcs.storage.Model;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
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
    final TabLayoutPanel tabPanel = new TabLayoutPanel(2.5, Unit.EM);
    final Panel loginPanel = new FlowPanel();
    final DockPanel modulesDock = new DockPanel();
    final DockPanel configDock = new DockPanel();
    final HorizontalPanel modulesWestHorPanel = new HorizontalPanel();
    final HorizontalPanel moduleCoordinates = new HorizontalPanel();
    final HorizontalPanel configHorPanel = new HorizontalPanel();
    final HorizontalPanel settingsUserPanel = new HorizontalPanel();
    final HorizontalPanel settingsPassPanel = new HorizontalPanel();
    final HorizontalPanel currentPassword = new HorizontalPanel();
    final HorizontalPanel newPassword = new HorizontalPanel();
    final HorizontalPanel confirmPassword = new HorizontalPanel();
    final SimplePanel weatherPanel = new SimplePanel();
    final VerticalPanel settingsPassVertPanel = new VerticalPanel();
    final VerticalPanel modulesWestVerPanel = new VerticalPanel();
    final VerticalPanel modulesCenterVerPanel = new VerticalPanel();
    final VerticalPanel modulesSouthVerPanel = new VerticalPanel();
    final VerticalPanel modulesEastVerPanel = new VerticalPanel();
    final VerticalPanel xPanel = new VerticalPanel();
    final VerticalPanel yPanel = new VerticalPanel();
    final VerticalPanel configVerPanel = new VerticalPanel();
    final VerticalPanel settingsVertPanel = new VerticalPanel();
    
    final Button submitButton = new Button("Log In");
    final Button modulesAddButton = new Button();
    final Button modulesRemoveButton = new Button();
    final Button roverPathButton = new Button();
    final Button deleteConfigButton = new Button();
    final Button buildConfigButton = new Button();
    final Button addUserButton = new Button();
    final Button removeUserButton = new Button();
    final Button changePasswordButton = new Button();
    final CheckBox radAirLock = new CheckBox("Air Lock");
    final CheckBox radPlain = new CheckBox("Plain");
    final CheckBox radDorm = new CheckBox("Dormitory");
    final CheckBox radSanitation = new CheckBox("Sanitation");
    final CheckBox radFoodAndWater = new CheckBox("Food & Water");
    final CheckBox radGymAndRelax = new CheckBox("Gym & Relaxation");
    final CheckBox radCanteen = new CheckBox("Canteen");
    final CheckBox radPower = new CheckBox("Power");
    final CheckBox radControl = new CheckBox("Control");
    final CheckBox radMedical = new CheckBox("Medical");
    final CheckBox passwordEnable = new CheckBox();
    final HTML moduleDetailsLabel = new HTML("Module Details");
    final HTML moduleRequirementsLabel = new HTML("Module Requirements");
    final HTML modulesLblId = new HTML("ID Number");
    final HTML modulesLblType = new HTML("Type");
    final HTML modulesLblCondition = new HTML("Condition");
    final HTML modulesLblOrientation = new HTML("Orientation");
    final HTML xCoordinate = new HTML("X-Coordinate");
    final HTML yCoordinate = new HTML("Y-Coordinate");
    final HTML changePassword = new HTML("Change Password");
    final HTML cPass = new HTML("Current Password");
    final HTML nPass = new HTML("New Password");
    final HTML coPass = new HTML("Current Password");
    final HTML weatherText = new HTML("Place holder for the weather");
    final Image modulesImage = new Image("images/image");
    final Image map = new Image("images/marsMap");
    final ListBox modulesListBox = new ListBox();
    final ListBox modulesEastType = new ListBox();
    final ListBox modulesEastCondition = new ListBox();
    final ListBox modulesEastOrientation = new ListBox();
    final ListBox configListBox = new ListBox();
    final ListBox users = new ListBox();
    final PasswordTextBox cPassword = new PasswordTextBox();
    final PasswordTextBox nPassword = new PasswordTextBox();
    final PasswordTextBox coPassword = new PasswordTextBox();
    final RadioButton radAll = new RadioButton("Select All");
    final RadioButton radNone = new RadioButton("Deselect All");
    final TextArea moduleDetails = new TextArea();
    final TextArea moduleRequirements = new TextArea();
    final TextBox userNameEntry = new TextBox();
    final TextBox passwordEntry = new PasswordTextBox();
    final TextBox modulesEastId = new TextBox();
    final TextBox xTextBox = new TextBox();
    final TextBox yTextBox = new TextBox();
    
    final String strDockPanelHeight = "600px";
    final String strDockPanelWidth = "1500px";
    final String strDockPanelSouth = "Naples Spring 2015";
    final int intPanelBorder = 2;
    final int intPanelSpacing = 5;
    final int intVerPanelSpacing = 10;
    final String strModulesListBoxHeight = "600px";
    final String strModulesListBoxWidth = "300px";
    final String strModulesButtonHeight = "50px";
    final String strModulesButtonWidth = "150px";
    final String strModulesEastPanelWidth = "300px";
    final String strModulesEastPanelWidthHalf = "140px";
    final String strModulesCenterHeight = "175px";
    final String strModulesCenterWidth = "800px";
    final String strModulesImageHeight = "200px";
    final String strModulesImageWidth = "250px";
    final String strConfigButtonHeight = "50px";
    final String strConfigButtonWidth = "300px";
    final String strConfigListBoxHeight = "650px";
    final String strConfigListBoxWidth = "300px";
    final String strConfigMapHeight = "560px";
    final String strConfigMapWidth = "1000px";
    final String strConfigVerPanelHeight = "600px";
    final String strSettingsButtonHeight = "35px";
    final String strSettingsButtonWidth = "130px";
    final String strSettingsPassEnableHeight = "20px";
    final String strSettingsChangePassHeight = "20px";
    final int intSettingsPanelSpacing = 10;
    final int intSettingsVerPanelSpaacing = 5;

    final Map mapDisplay = new Map();    
    
    tabPanel.setAnimationDuration(1000);
    tabPanel.getElement().getStyle().setMarginBottom(10.0, Unit.PX);

    loginPanel.setHeight("1500px");
    loginPanel.add(new Label("username:"));
    loginPanel.add(userNameEntry);
    loginPanel.add(new Label("password:"));
    loginPanel.add(passwordEntry);
    loginPanel.add(submitButton);
    submitButton.addClickHandler(new ClickHandler(){
        @Override
        public void onClick(ClickEvent event) {
            if(passwordEntry.getText().equals("guest"))
            {
                RootLayoutPanel.get().clear();
                RootLayoutPanel.get().add(tabPanel);
            } // if
            else
            {
            	// Create a dialog box and set the caption text
                final DialogBox dialogBox = new DialogBox();
                dialogBox.setText("Password Error");

                // Create a table to layout the content
                VerticalPanel dialogContents = new VerticalPanel();
                dialogContents.setSpacing(4);
                dialogBox.setWidget(dialogContents);

                // Add some text to the top of the dialog
                HTML details = new HTML("You have entered an incorrect password.");
                dialogContents.add(details);
                dialogContents.setCellHorizontalAlignment(
                    details, HasHorizontalAlignment.ALIGN_CENTER);

                // Add an image to the dialog
                Image image = new Image("images/passwordError");
                dialogContents.add(image);
                dialogContents.setCellHorizontalAlignment(
                    image, HasHorizontalAlignment.ALIGN_CENTER);

                // Add a close button at the bottom of the dialog
                Button closeButton = new Button(
                    "Close", new ClickHandler() {
                      public void onClick(ClickEvent event) {
                        dialogBox.hide();
                      }
                    });
                dialogContents.add(closeButton);
                if (LocaleInfo.getCurrentLocale().isRTL()) {
                  dialogContents.setCellHorizontalAlignment(
                      closeButton, HasHorizontalAlignment.ALIGN_LEFT);

                } // if 
                else {
                  dialogContents.setCellHorizontalAlignment(
                      closeButton, HasHorizontalAlignment.ALIGN_RIGHT);
                } // else
                
                dialogBox.center();
                dialogBox.show();
            }  // else
            
        } // onCLick

    });
    
    /*
     *  Modules
     */
    /* West */
    /* Inner Panels */
    // Add a list box with multiple selection enabled
    //Module.populateListBox(arrModules);
    modulesListBox.setVisibleItemCount(10);
    modulesListBox.setHeight(strModulesListBoxHeight);
    modulesListBox.setWidth(strModulesListBoxWidth);

    modulesListBox.clear();
	for (Module m : Model.getModuleList())
	{
		modulesListBox.addItem("Module #" + m.getId());
	}
    
	modulesListBox.addChangeHandler(new ChangeHandler(){

		@Override
		public void onChange(ChangeEvent event) {
			String moduleString = modulesListBox.getItemText(modulesListBox.getSelectedIndex());
			moduleString = moduleString.substring(8);
			Module module = null;
			for (Module m : Model.getModuleList())
			{
				if (m.getId() == Integer.parseInt(moduleString))
				{
					module = m;
				}
			}
			if (module != null)
			{
				// Set id
				modulesEastId.setValue(Integer.toString(module.getId()));
				// Set type
				modulesEastType.setSelectedIndex(
					Arrays.asList(Module.moduleStrings)
					.indexOf(module.getType().toUserString())
				);
				// Set Condition
				String[] conditionStrings = { "Usable","Damaged","Unusable" };
				modulesEastCondition.setSelectedIndex(
					Arrays.asList(conditionStrings)
					.indexOf(module.getStatus().toUserString())
				);
				// Set orientation
				modulesEastOrientation.setSelectedIndex(module.getOrientation());
				// Set X-Coordinate
				xTextBox.setValue(Integer.toString(module.getCoordinates().getX()));
				// Set Y-Coordinate
				yTextBox.setValue(Integer.toString(module.getCoordinates().getY()));
			}
		}
		
	});
    
    /* Fill Horizontal Panel */
    modulesAddButton.setHeight(strModulesButtonHeight);
    modulesAddButton.setWidth(strModulesButtonWidth);
    modulesRemoveButton.setHeight(strModulesButtonHeight);
    modulesRemoveButton.setWidth(strModulesButtonWidth);
    modulesAddButton.setText("ADD");
    modulesRemoveButton.setText("REMOVE");
    
    modulesRemoveButton.addClickHandler(new ClickHandler(){

		@Override
		public void onClick(ClickEvent event) {
			String moduleString = modulesListBox.getItemText(modulesListBox.getSelectedIndex());
			moduleString = moduleString.substring(8);
			Model.removeModuleFromId(Integer.parseInt(moduleString));
			modulesListBox.removeItem(modulesListBox.getSelectedIndex());
		}
    	
    });
    
    modulesWestHorPanel.add(modulesAddButton);
    modulesWestHorPanel.add(modulesRemoveButton);
    
    modulesAddButton.addClickHandler(Handlers.addButton());

    /* Fill Vertical Panel */
    modulesWestVerPanel.add(modulesListBox);
    modulesWestVerPanel.add(modulesWestHorPanel);

    /* North */
    // Image to be filled with function based on module
    modulesImage.setHeight(strModulesImageHeight);
    modulesImage.setWidth(strModulesImageWidth);

    /* Center */
    moduleDetails.setHeight(strModulesCenterHeight);
    moduleDetails.setWidth(strModulesCenterWidth);
    modulesCenterVerPanel.add(moduleDetailsLabel);
    modulesCenterVerPanel.add(moduleDetails);

    /* South */
    moduleRequirements.setText("module requirements module requirements module requirements");
    moduleRequirements.setReadOnly(true);
    moduleRequirements.setHeight(strModulesCenterHeight);
    moduleRequirements.setWidth(strModulesCenterWidth);
    modulesSouthVerPanel.add(moduleRequirementsLabel);
    modulesSouthVerPanel.add(moduleRequirements);

    /* East */
    modulesEastId.setWidth(strModulesEastPanelWidth);

    // Via loop based off module array
    for (int i = 0; i < Module.moduleStrings.length; i++) {
      modulesEastType.addItem(Module.moduleStrings[i]);
    } //for
    modulesEastType.setVisibleItemCount(10);
    modulesEastType.setEnabled(false);
    
    modulesEastType.setWidth(strModulesEastPanelWidth);

    // entered via loop based off array
    modulesEastCondition.addItem("Usable");
    modulesEastCondition.addItem("Damaged");
    modulesEastCondition.addItem("Unusable");
    modulesEastCondition.setVisibleItemCount(3);
    modulesEastCondition.setWidth(strModulesEastPanelWidth);

    // entered via loop based off array
    modulesEastOrientation.addItem("0 turns");
    modulesEastOrientation.addItem("1 turns");
    modulesEastOrientation.addItem("2 turns");
    modulesEastOrientation.setVisibleItemCount(3);
    modulesEastOrientation.setWidth(strModulesEastPanelWidth);

    xTextBox.setWidth(strModulesEastPanelWidthHalf);
    yTextBox.setWidth(strModulesEastPanelWidthHalf);
    xPanel.add(xCoordinate);
    xPanel.add(xTextBox);
    yPanel.add(yCoordinate);
    yPanel.add(yTextBox);
    moduleCoordinates.add(xPanel);
    moduleCoordinates.add(yPanel);

    Button modulesSaveButton = new Button();
    modulesSaveButton.setHeight(strModulesButtonHeight);
    modulesSaveButton.setWidth(strModulesEastPanelWidth);
    modulesSaveButton.setText("SAVE");
    
    //modulesSaveButton.addClickHandler(Handlers.saveButton());

    modulesSaveButton.addClickHandler(new ClickHandler(){
		@Override
		public void onClick(ClickEvent event) {
			ModuleType type;
			int id;
			Point coordinates;
			ModuleStatus status;
			int orientation;
			boolean inUse;
			
			type = ModuleType.getTypeFromUserString(modulesEastType.getItemText(modulesEastType.getSelectedIndex()));
			id = Integer.parseInt(modulesEastId.getText());
		    coordinates = new Point(Integer.parseInt(xTextBox.getText()),Integer.parseInt(yTextBox.getText()));
		    status = ModuleStatus.getStatusFromUserString(modulesEastCondition.getItemText(modulesEastCondition.getSelectedIndex()));
		    orientation = modulesEastOrientation.getSelectedIndex();
			inUse = false;
			
			Model.saveModule(new Module(type,id,coordinates,status,orientation,inUse));
			
			modulesListBox.clear();
			for (Module m : Model.getModuleList())
			{
				modulesListBox.addItem("Module #" + m.getId());
			}
		}
    });
    
    modulesEastVerPanel.add(modulesLblId);
    modulesEastVerPanel.add(modulesEastId);
    modulesEastVerPanel.add(modulesLblType);
    modulesEastVerPanel.add(modulesEastType);
    modulesEastVerPanel.add(modulesLblCondition);
    modulesEastVerPanel.add(modulesEastCondition);
    modulesEastVerPanel.add(modulesLblOrientation);
    modulesEastVerPanel.add(modulesEastOrientation);
    modulesEastVerPanel.add(moduleCoordinates);
    modulesEastVerPanel.add(modulesSaveButton);
    modulesEastVerPanel.setSpacing(intVerPanelSpacing + 2);

    /* Create a Dock Panel */
    modulesDock.setSpacing(intPanelSpacing);
    modulesDock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
    modulesDock.setBorderWidth(intPanelBorder);
    modulesDock.setSize(strDockPanelWidth, strDockPanelHeight);

    /* Add panels to Dock */
    modulesDock.add(new HTML("Modules"), DockPanel.NORTH);
    modulesDock.add(new HTML(strDockPanelSouth), DockPanel.SOUTH);
    modulesDock.add(modulesEastVerPanel, DockPanel.EAST);
    modulesDock.add(modulesWestVerPanel, DockPanel.WEST);
    modulesDock.add(modulesImage, DockPanel.NORTH);
    modulesDock.add(modulesSouthVerPanel, DockPanel.SOUTH);
    modulesDock.add(modulesCenterVerPanel, DockPanel.CENTER);

    /* 
     * Configurations 
     */
    /* West */
    // Add a list box with multiple selection enabled
    //Configurations.populateListBox(configListBox);
    configListBox.setVisibleItemCount(10);
    configListBox.setHeight(strConfigListBoxHeight);
    configListBox.setWidth(strConfigListBoxWidth);

    /* Center */
    map.setHeight(strConfigMapHeight);
    map.setWidth(strConfigMapWidth);
      
    /* East */
    radAirLock.setText("Air Lock");
    radPlain.setText("Plain");
    radDorm.setText("Dormitory");
    radSanitation.setText("Sanitation");
    radFoodAndWater.setText("Food & Water");
    radGymAndRelax.setText("Gym & Relaxation");
    radCanteen.setText("Canteen");
    radPower.setText("Power");
    radControl.setText("Control");
    radMedical.setText("Medical");
    radNone.setText("Deselect All");
    radAll.setText("Select All");
    radAll.setName("MapModules");
    radNone.setName("MapModules");
    configVerPanel.add(radAirLock);
    configVerPanel.add(radPlain);
    configVerPanel.add(radDorm);
    configVerPanel.add(radSanitation);
    configVerPanel.add(radFoodAndWater);
    configVerPanel.add(radGymAndRelax);
    configVerPanel.add(radCanteen);
    configVerPanel.add(radPower);
    configVerPanel.add(radControl);
    configVerPanel.add(radMedical);
    configVerPanel.add(radAll);
    configVerPanel.add(radNone);
    
    configVerPanel.setHeight(strConfigVerPanelHeight);
      
    /* 2nd South */
    roverPathButton.setHeight(strConfigButtonHeight);
    roverPathButton.setWidth(strConfigButtonWidth);
    deleteConfigButton.setHeight(strConfigButtonHeight);
    deleteConfigButton.setWidth(strConfigButtonWidth);
    buildConfigButton.setHeight(strConfigButtonHeight);
    buildConfigButton.setWidth(strConfigButtonWidth);
    roverPathButton.setText("Rover Path");
    deleteConfigButton.setText("Delete Configuration");
    buildConfigButton.setText("Build Configuration");
    configHorPanel.add(roverPathButton);
    configHorPanel.add(deleteConfigButton);
    configHorPanel.add(buildConfigButton);

    /* Create ConfigurationDock Panel */
    configDock.setSpacing(intPanelSpacing);
    configDock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
    configDock.setBorderWidth(intPanelBorder);
    configDock.setSize(strDockPanelWidth, strDockPanelHeight);

    /* Add to dock */
    configDock.add(new HTML("Configurations"), DockPanel.NORTH);
    configDock.add(new HTML(strDockPanelSouth), DockPanel.SOUTH);
    configDock.add(configVerPanel, DockPanel.EAST);
    configDock.add(configListBox, DockPanel.WEST);
    configDock.add(mapDisplay, DockPanel.CENTER);
    configDock.add(new HTML("Map"), DockPanel.NORTH);
    configDock.add(configHorPanel, DockPanel.SOUTH);
    mapDisplay.updateGrid();
    //    configDock.add(map, DockPanel.CENTER);

    /* 
     * Settings
     */    
    /* Vertical Panel (holds all) */
    /* Horizontal Panels */
    addUserButton.setText("Add User");
    removeUserButton.setText("Remove User");
    addUserButton.setHeight(strSettingsButtonHeight);
    addUserButton.setWidth(strSettingsButtonWidth);
    removeUserButton.setHeight(strSettingsButtonHeight);
    removeUserButton.setWidth(strSettingsButtonWidth);
    settingsUserPanel.add(users);
    settingsUserPanel.add(addUserButton);
    settingsUserPanel.add(removeUserButton);
    settingsUserPanel.setSpacing(intSettingsPanelSpacing);

    passwordEnable.setText("Password Enabled");
    passwordEnable.setHeight(strSettingsPassEnableHeight);
    changePasswordButton.setText("Change Password");
    changePasswordButton.setHeight(strSettingsButtonHeight);
    changePasswordButton.setWidth(strSettingsButtonWidth);
    settingsPassPanel.add(passwordEnable);
    settingsPassPanel.add(changePasswordButton);
    settingsPassPanel.setSpacing(intSettingsPanelSpacing);

    /* Inner vertical panel */
    changePassword.setHeight(strSettingsChangePassHeight);
    settingsPassVertPanel.setSpacing(intSettingsVerPanelSpaacing);

    /* Inner horizontal panels */
    currentPassword.add(cPassword);
    currentPassword.add(cPass);
    currentPassword.setSpacing(intSettingsPanelSpacing);

    newPassword.add(nPassword);
    newPassword.add(nPass);
    newPassword.setSpacing(intSettingsPanelSpacing);

    confirmPassword.add(coPassword);
    confirmPassword.add(coPass);
    confirmPassword.setSpacing(intSettingsPanelSpacing);

    settingsPassVertPanel.add(changePassword);
    settingsPassVertPanel.add(currentPassword);
    settingsPassVertPanel.add(newPassword);
    settingsPassVertPanel.add(confirmPassword);
    settingsPassVertPanel.setSpacing(intPanelSpacing);
    settingsPassVertPanel.setBorderWidth(intPanelBorder);

    settingsVertPanel.add(settingsUserPanel);
    settingsVertPanel.add(settingsPassPanel);
    settingsVertPanel.add(settingsPassVertPanel);
    settingsVertPanel.setSpacing(intSettingsPanelSpacing);
    settingsVertPanel.setBorderWidth(intPanelBorder);
    
    
    /* Weather Panel */
    weatherPanel.add(weatherText);
    
//    RootPanel.get().add(configDock);
//    RootPanel.get().add(modulesDock);
//    RootPanel.get().add(settingsVertPanel);
    
    /* Add tabs to layout */
    tabPanel.add(modulesDock, "Modules");
    tabPanel.add(configDock, "Configurations");
    tabPanel.add(settingsVertPanel, "Settings");
    tabPanel.add(weatherPanel, "Weather");
    tabPanel.add(new HTML("Logout"), "Logout");
    
//    RootLayoutPanel.get().add(tabPanel);
    RootLayoutPanel.get().add(loginPanel);

  } // OnModuleLoad
} // MHCS