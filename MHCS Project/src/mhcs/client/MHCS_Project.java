package mhcs.client;

import java.util.ArrayList;
import java.util.List;

import mhcs.storage.Data;
import mhcs.storage.Load;
import mhcs.storage.Save;

import mhcs.client.Module;
import mhcs.client.Configuration;
import mhcs.client.ModuleStatus;
import mhcs.client.ModuleType;
import mhcs.client.Point;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.storage.client.Storage;


/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class MHCS_Project implements EntryPoint {
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
		
		Module example = new Module(ModuleType.PLAIN,3,new Point(3,5),ModuleStatus.USABLE,2,false);
		ArrayList<Module> exampleList = new ArrayList<Module>();
		exampleList.add(example);
		
		Data.addModule(example);
		
//		Save saver = new Save();
//		saver.saveModules(exampleList);
		
//		Storage stockStore = Storage.getLocalStorageIfSupported();
//		for (int i = 0; i < exampleList.size(); i++) {
//			stockStore.setItem(Integer.toString(i), exampleList.get(i).toString());
//		} // for
//		stockStore.setItem("numOfModules", Integer.toString(exampleList.size()));
		
		
		TabLayoutPanel tabPanel = new TabLayoutPanel(2.5, Unit.EM);
		tabPanel.setAnimationDuration(1000);
		tabPanel.getElement().getStyle().setMarginBottom(10.0, Unit.PX);

		final String strDockPanelHeight = "700px";
		final String strDockPanelWidth = "1500px";
		final String strDockPanelSouth = "Naples Spring 2015";
		final int intPanelBorder = 2;
		final int intPanelSpacing = 5;
		final int intVerPanelSpacing = 10;

		/*
		 * Modules
		 */
		final String strModulesListBoxHeight = "650px";
		final String strModulesListBoxWidth = "300px";
		final String strModulesButtonHeight = "50px";
		final String strModulesButtonWidth = "150px";
		final String strModulesEastPanelWidth = "300px";
		final String strModulesEastPanelWidthHalf = "140px";
		final String strModulesCenterHeight = "200px";
		final String strModulesCenterWidth = "800px";
		final String strModulesImageHeight = "200px";
		final String strModulesImageWidth = "250px";

		/* West */
		/* Inner Panels */
		final VerticalPanel modulesWestVerPanel = new VerticalPanel();
		final HorizontalPanel modulesWestHorPanel = new HorizontalPanel();

		// Add a list box with multiple selection enabled
		final ListBox modulesListBox = new ListBox();
		// Module.populateListBox(arrModules);
		modulesListBox.setVisibleItemCount(10);
		modulesListBox.setHeight(strModulesListBoxHeight);
		modulesListBox.setWidth(strModulesListBoxWidth);

		/* Fill Horizontal Panel */
		final Button modulesAddButton = new Button();
		final Button modulesRemoveButton = new Button();
		modulesAddButton.setHeight(strModulesButtonHeight);
		modulesAddButton.setWidth(strModulesButtonWidth);
		modulesRemoveButton.setHeight(strModulesButtonHeight);
		modulesRemoveButton.setWidth(strModulesButtonWidth);
		modulesAddButton.setText("ADD");
		modulesRemoveButton.setText("REMOVE");
		modulesWestHorPanel.add(modulesAddButton);
		modulesWestHorPanel.add(modulesRemoveButton);

		modulesAddButton.addClickHandler(Handlers.addButton());

		/* Fill Vertical Panel */
		modulesWestVerPanel.add(modulesListBox);
		modulesWestVerPanel.add(modulesWestHorPanel);

		/* North */
		// Image to be filled with function based on module
		final Image modulesImage = new Image("images/image");
		modulesImage.setHeight(strModulesImageHeight);
		modulesImage.setWidth(strModulesImageWidth);

		/* Center */
		final VerticalPanel modulesCenterVerPanel = new VerticalPanel();
		final HTML moduleDetailsLabel = new HTML("Module Details");
		final TextArea moduleDetails = new TextArea();
		moduleDetails.setHeight(strModulesCenterHeight);
		moduleDetails.setWidth(strModulesCenterWidth);
		modulesCenterVerPanel.add(moduleDetailsLabel);
		modulesCenterVerPanel.add(moduleDetails);

		/* South */
		final VerticalPanel modulesSouthVerPanel = new VerticalPanel();
		final HTML moduleRequirementsLabel = new HTML("Module Requirements");
		final TextArea moduleRequirements = new TextArea();
		moduleRequirements.setText("Blah blah bleh bleh blehblah");
		moduleRequirements.setReadOnly(true);
		moduleRequirements.setHeight(strModulesCenterHeight);
		moduleRequirements.setWidth(strModulesCenterWidth);
		modulesSouthVerPanel.add(moduleRequirementsLabel);
		modulesSouthVerPanel.add(moduleRequirements);

		/* East */
		final VerticalPanel modulesEastVerPanel = new VerticalPanel();

		final HTML modulesLblId = new HTML("ID Number");

		final TextBox modulesEastId = new TextBox();
		modulesEastId.setWidth(strModulesEastPanelWidth);

		final HTML modulesLblType = new HTML("Type");
		// Via loop based off module array
		final ListBox modulesEastType = new ListBox();
		for (int i = 0; i < Module.moduleStrings.length; i++) {
			modulesEastType.addItem(Module.moduleStrings[i]);
		} // for
		modulesEastType.setVisibleItemCount(10);
		modulesEastType.setWidth(strModulesEastPanelWidth);

		final HTML modulesLblCondition = new HTML("Condition");
		final ListBox modulesEastCondition = new ListBox();
		// entered via loop based off array
		modulesEastCondition.addItem("Usable");
		modulesEastCondition.addItem("Damaged");
		modulesEastCondition.addItem("Unusable");
		modulesEastCondition.setVisibleItemCount(3);
		modulesEastCondition.setWidth(strModulesEastPanelWidth);

		final HTML modulesLblOrientation = new HTML("Orientation");
		final ListBox modulesEastOrientation = new ListBox();
		// entered via loop based off array
		modulesEastOrientation.addItem("0 turns");
		modulesEastOrientation.addItem("1 turns");
		modulesEastOrientation.addItem("2 turns");
		modulesEastOrientation.setVisibleItemCount(3);
		modulesEastOrientation.setWidth(strModulesEastPanelWidth);

		final HorizontalPanel moduleCoordinates = new HorizontalPanel();
		final VerticalPanel xPanel = new VerticalPanel();
		final VerticalPanel yPanel = new VerticalPanel();
		final HTML xCoordinate = new HTML("X-Coordinate");
		final HTML yCoordinate = new HTML("Y-Coordinate");
		final TextBox xTextBox = new TextBox();
		final TextBox yTextBox = new TextBox();
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

		modulesSaveButton.addClickHandler(Handlers.saveButton());

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
		modulesEastVerPanel.setSpacing(intVerPanelSpacing + 5);

		/* Create a Dock Panel */
		final DockPanel modulesDock = new DockPanel();
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
		final String strConfigButtonHeight = "50px";
		final String strConfigButtonWidth = "300px";
		final String strConfigListBoxHeight = "700px";
		final String strConfigListBoxWidth = "300px";
		final String strConfigMapHeight = "600px";
		final String strConfigMapWidth = "1000px";
		final String strConfigVerPanelHeight = "700px";

		/* West */
		// Add a list box with multiple selection enabled
		final ListBox configListBox = new ListBox();
		// Configurations.populateListBox(configListBox);
		configListBox.setVisibleItemCount(10);
		configListBox.setHeight(strConfigListBoxHeight);
		configListBox.setWidth(strConfigListBoxWidth);

		/* Center */
		Image map = new Image("images/marsMap");
		map.setHeight(strConfigMapHeight);
		map.setWidth(strConfigMapWidth);

		/* East */
		final VerticalPanel configVerPanel = new VerticalPanel();

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
		final RadioButton radAll = new RadioButton("Select All");
		final RadioButton radNone = new RadioButton("Deselect All");
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
		final HorizontalPanel configHorPanel = new HorizontalPanel();
		final Button roverPathButton = new Button();
		final Button deleteConfigButton = new Button();
		final Button buildConfigButton = new Button();
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
		final DockPanel configDock = new DockPanel();
		configDock.setSpacing(intPanelSpacing);
		configDock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
		configDock.setBorderWidth(intPanelBorder);
		configDock.setSize(strDockPanelWidth, strDockPanelHeight);

		/* Add to dock */
		configDock.add(new HTML("Configurations"), DockPanel.NORTH);
		configDock.add(new HTML(strDockPanelSouth), DockPanel.SOUTH);
		configDock.add(configVerPanel, DockPanel.EAST);
		configDock.add(configListBox, DockPanel.WEST);
		configDock.add(new HTML("Map"), DockPanel.NORTH);
		configDock.add(configHorPanel, DockPanel.SOUTH);
		configDock.add(map, DockPanel.CENTER);

		/*
		 * Settings
		 */
		final String strSettingsButtonHeight = "35px";
		final String strSettingsButtonWidth = "130px";
		final String strSettingsPassEnableHeight = "20px";
		final String strSettingsChangePassHeight = "20px";
		final int intSettingsPanelSpacing = 10;
		final int intSettingsVerPanelSpaacing = 5;

		/* Vertical Panel (holds all) */
		final VerticalPanel settingsVertPanel = new VerticalPanel();

		/* Horizontal Panels */
		final HorizontalPanel settingsUserPanel = new HorizontalPanel();
		final ListBox users = new ListBox();
		// CLASS.populateUsers(users);

		final Button addUserButton = new Button();
		final Button removeUserButton = new Button();
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

		final HorizontalPanel settingsPassPanel = new HorizontalPanel();
		final CheckBox passwordEnable = new CheckBox();
		passwordEnable.setText("Password Enabled");
		passwordEnable.setHeight(strSettingsPassEnableHeight);
		final Button changePasswordButton = new Button();
		changePasswordButton.setText("Change Password");
		changePasswordButton.setHeight(strSettingsButtonHeight);
		changePasswordButton.setWidth(strSettingsButtonWidth);
		settingsPassPanel.add(passwordEnable);
		settingsPassPanel.add(changePasswordButton);
		settingsPassPanel.setSpacing(intSettingsPanelSpacing);

		/* Inner vertical panel */
		final VerticalPanel settingsPassVertPanel = new VerticalPanel();
		final HTML changePassword = new HTML("Change Password");
		changePassword.setHeight(strSettingsChangePassHeight);
		settingsPassVertPanel.setSpacing(intSettingsVerPanelSpaacing);

		/* Inner horizontal panels */
		final HorizontalPanel currentPassword = new HorizontalPanel();
		final PasswordTextBox cPassword = new PasswordTextBox();
		final HTML cPass = new HTML("Current Password");
		currentPassword.add(cPassword);
		currentPassword.add(cPass);
		currentPassword.setSpacing(intSettingsPanelSpacing);

		final HorizontalPanel newPassword = new HorizontalPanel();
		final PasswordTextBox nPassword = new PasswordTextBox();
		final HTML nPass = new HTML("New Password");
		newPassword.add(nPassword);
		newPassword.add(nPass);
		newPassword.setSpacing(intSettingsPanelSpacing);

		final HorizontalPanel confirmPassword = new HorizontalPanel();
		final PasswordTextBox coPassword = new PasswordTextBox();
		final HTML coPass = new HTML("Current Password");
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
		final SimplePanel weatherPanel = new SimplePanel();
		final HTML weatherText = new HTML("Place holder for the weather");
		weatherPanel.add(weatherText);

		// RootPanel.get().add(configDock);
		// RootPanel.get().add(modulesDock);
		// RootPanel.get().add(settingsVertPanel);

		/* Add tabs to layout */
		tabPanel.add(modulesDock, "Modules");
		tabPanel.add(configDock, "Configurations");
		tabPanel.add(settingsVertPanel, "Settings");
		tabPanel.add(weatherPanel, "Weather");
		tabPanel.add(new HTML("Logout"), "Logout");

		RootLayoutPanel.get().add(tabPanel);

	} // OnModuleLoad
} // MHCS