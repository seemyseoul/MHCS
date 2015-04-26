package mhcs.client;

import mhcs.storage.TestCases;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.media.client.Audio;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class Variables {
	
	public static TabLayoutPanel tabPanel() {
		tabPanel.setAnimationDuration(1000);
	    tabPanel.getElement().getStyle().setMarginBottom(10.0, Unit.PX);
		return tabPanel;
	} // tabPanel
	
	public static VerticalPanel loginPanel() {
		loginPanel.setHeight(strHeight2);
	    loginPanel.add(username);
	    loginPanel.add(Variables.tb());
	    loginPanel.add(Variables.htmlPassword());
	    loginPanel.add(password);
	    loginPanel.add(Variables.submitButton());
    	return loginPanel;
	} // loginPanel
	
	public static DockPanel modulesDock() {
		m.setSpacing(intPanelSpacing0);
	    m.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
	    m.setBorderWidth(intPanelBorder);
	    m.setSize(strWidth1, strHeight);
	    
	    m.add(Variables.htmlModules(), DockPanel.NORTH);
	    m.add(Variables.htmlSouth(), DockPanel.SOUTH);
	    m.add(Variables.modulesEastVPanel(), DockPanel.EAST);
	    m.add(Variables.vertical(), DockPanel.WEST);
	    m.add(Variables.moduleImage(), DockPanel.NORTH);
	    m.add(Variables.modulesSouthVpanel(), DockPanel.SOUTH);
	    m.add(Variables.modulesCenterVpanel(), DockPanel.CENTER);
	    return m;
	} // modulesDock
	
	public static DockPanel configDock() {
    	c.setSpacing(intPanelSpacing0);
        c.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
        c.setBorderWidth(intPanelBorder);
        c.setSize(strWidth1, strHeight);
        
        c.add(Variables.htmlConfigs(), DockPanel.NORTH);
        c.add(Variables.htmlSouth(), DockPanel.SOUTH);
        c.add(Variables.configVpanel(), DockPanel.EAST);
        c.add(Variables.cListBox(), DockPanel.WEST);
        c.add(mapDisplay.getGrid(), DockPanel.CENTER);
        c.add(new HTML("Map"), DockPanel.NORTH);
        c.add(Variables.configHpanel(), DockPanel.SOUTH);
        mapDisplay.updateGrid();
        //    configDock.add(map, DockPanel.CENTER);
        return c;
	} // configDock
	
	public static DockPanel weatherPanel() {
    	w.add(Variables.htmlWeather());
        Weather weather = new Weather();
        weather.requestData(weather.strURL);
        w.add(new Label("Current temp: \t" + weather.strTemp + " Celsius"));
        w.add(new Label("Current visibility: \t" + weather.strVisibility + " km"));
        return w;
	} // weatherPanel
	
	public static HorizontalPanel horizontal() {
		return new HorizontalPanel();
	} // horizontal
	
	public static HorizontalPanel moduleCoordinates() {
		moduleCoordinates.add(Variables.xPanel());
		moduleCoordinates.add(Variables.yPanel());
		return moduleCoordinates;
	} // moduleCoordinates
	
	public static HorizontalPanel configHpanel() {
		configHpanel.add(Variables.roverPathButton());
		configHpanel.add(Variables.removeConfigButton());
		configHpanel.add(Variables.buildConfigButton());
        return configHpanel;
	} // configHzPanel
	
	public static HorizontalPanel usersPanel() {
		usersPanel.add(Variables.usersListBox());
		usersPanel.add(Variables.addUserButton());
		usersPanel.add(Variables.removeUserButton());
		return usersPanel;
	} // settingsUserPanel
	
	public static HorizontalPanel changePass() {
		changePass.add(Variables.htmlPassEnable());
		changePass.add(Variables.changePassButton());
		changePass.setSpacing(intPanelSpacing1);
        return changePass;
	} // settingsPassPanel
	
	public static HorizontalPanel currentPassword() {
    	currentPass.add(Variables.htmlCurrPass());
        currentPass.add(ptbCurrentPassword);
        currentPass.setSpacing(intPanelSpacing1);
    	return currentPass;
	} // currentPassword
	
	public static HorizontalPanel newPassword() {
		newPass.add(Variables.htmlNewPass());
		newPass.add(ptbNewPassword);
		newPass.setSpacing(intPanelSpacing1);
    	return newPass;
	} // newPassword
	
	public static HorizontalPanel confirmPassword() {
    	confirmPass.add(Variables.htmlConfirmPass());
        confirmPass.add(ptbConfirmPassword);
        confirmPass.setSpacing(intPanelSpacing1);
    	return confirmPass;
	} // confirmPassword
	
	public static VerticalPanel vertical() {
    	return new VerticalPanel();
	} // modulesWestVtPanel
	
	public static VerticalPanel modulesCenterVpanel() {
    	modulesCenter.add(Variables.htmlModuleDetails());
        modulesCenter.add(Variables.taModuleDetails());
        return modulesCenter;
	} // modulesCenterVpanel
	
	public static VerticalPanel modulesSouthVpanel() {
    	modulesSouth.add(Variables.htmlModuleRequirements());
        modulesSouth.add(Variables.taModuleRequirements());
        return modulesSouth;
	} // modulesSouthVpanel
	
	public static VerticalPanel modulesEastVPanel() {
    	modulesEast.add(Variables.htmlModuleID());
        modulesEast.add(Variables.mID);
        modulesEast.add(Variables.htmlModuleType());
        modulesEast.add(Variables.mType());
        modulesEast.add(Variables.htmlModuleCondition());
        modulesEast.add(Variables.mCondition());
        modulesEast.add(Variables.htmlModuleOrientation());
        modulesEast.add(Variables.mOrientation());
        modulesEast.add(Variables.moduleCoordinates());
        modulesEast.add(Variables.mSaveButton());
        modulesEast.setSpacing(intPanelSpacing1 + 2);
        return modulesEast;
	} // modulesEastVPanel
	
	public static VerticalPanel xPanel() {
    	modulesX.add(Variables.htmlX());
    	modulesX.add(Variables.mX());
    	return modulesX;
	} // xPanel
	
	public static VerticalPanel yPanel() {
    	modulesY.add(Variables.htmlY());
        modulesY.add(Variables.mY());
        return modulesY;
	} // yPanel
	
	public static VerticalPanel configVpanel() {
    	configVpanel.add(Variables.cbAirLock);
        configVpanel.add(Variables.cbPlain);
        configVpanel.add(Variables.cbDorm);
        configVpanel.add(Variables.cbSanitation);
        configVpanel.add(Variables.cbFoodAndWater);
        configVpanel.add(Variables.cbGymAndRelax);
        configVpanel.add(Variables.cbCanteen);
        configVpanel.add(Variables.cbPower);
        configVpanel.add(Variables.cbControl);
        configVpanel.add(Variables.cbMedical);
        configVpanel.add(Variables.rbSelectAll());
        configVpanel.add(Variables.rbDeselectAll());
        configVpanel.setHeight(strHeight);
        return configVpanel;
	} // configVpanel
	
	public static VerticalPanel settingsPasswordVpanel() {
    	settingsPassVpanel.add(Variables.htmlChangePass());
        settingsPassVpanel.add(Variables.currentPassword());
        settingsPassVpanel.add(Variables.newPassword());
        settingsPassVpanel.add(Variables.confirmPassword());
        settingsPassVpanel.setSpacing(intPanelSpacing0);
        settingsPassVpanel.setBorderWidth(intPanelBorder);
    	return settingsPassVpanel;
	} // settingsVpanel
	
	public static VerticalPanel settingsVpanel () {
    	settingsVpanel.add(Variables.testCasesListBox());
    	settingsVpanel.add(Variables.usersListBox());
        settingsVpanel.add(Variables.addUserButton());
        settingsVpanel.add(Variables.removeUserButton());
    	settingsVpanel.setSpacing(intPanelSpacing1);
    	settingsVpanel.setBorderWidth(intPanelBorder);
    	return settingsVpanel;
	} // settingsPassVtPanel
    
	public static Button submitButton() {
		final Button submitButton = new Button("Log In");
		submitButton.addClickHandler(Controller.loginHandler(password,
	    		Variables.tabPanel(), strWidth2, strButtonWidth, Variables.errorSound()));
    	return submitButton;
	} // submitButton
	
	public static Button mAddButton() {
		final Button mAddButton = new Button("ADD");
		mAddButton.setHeight(strButtonHeight);
	    mAddButton.setWidth(strButtonWidth);
		return mAddButton;
	} // mAddButton
	
	public static Button mRemoveButton() {
		final Button mRemoveButton = new Button("REMOVE");
		mRemoveButton.setHeight(strButtonHeight);
	    mRemoveButton.setWidth(strButtonWidth);
		return mRemoveButton;
	} // mRemoveButton
	
	public static Button mSaveButton() {
		final Button save = new Button("SAVE");
		save.setHeight(strButtonHeight);
	    save.setWidth(strWidth);
		return save;
	} // mSaveButton
	
	public static Button roverPathButton() {
		final Button roverPath = new Button("Rover Path");
		roverPath.setHeight(strButtonHeight);
	    roverPath.setWidth(strWidth);
		return roverPath;
	} // roverPathButton
	
	public static Button removeConfigButton() {
		final Button removeConfig = new Button("REMOVE");
		removeConfig.setHeight(strButtonHeight);
	    removeConfig.setWidth(strWidth);
		return removeConfig;
	} // removeConfigButton
	
	public static Button buildConfigButton() {
		final Button buildConfig = new Button("BUILD");
		buildConfig.setHeight(strButtonHeight);
	    buildConfig.setWidth(strWidth);
		return buildConfig;
	} // buildConfigButton
	
	public static Button addUserButton() {
		final Button addUser = new Button("Add User");
		addUser.setHeight(strHeight1);
		addUser.setWidth(strWidth2);
		return addUser;
	} // addUserButton
	
	public static Button removeUserButton() {
		final Button removeUser = new Button("Remove User");
		removeUser.setHeight(strHeight1);
	    removeUser.setWidth(strWidth2);
		return removeUser;
	} // removeUserButton
	
	public static Button changePassButton() {
		final Button changePassword = new Button();
		changePassword.setText("Change Password");
	    changePassword.setHeight(strHeight1);
	    changePassword.setWidth(strWidth2);
		return changePassword;
	} // changePassButton
	
	public static HTML htmlSouth() {
		return new HTML(strDockPanelSouth);
	} // htmlSouth
	
	public static HTML htmlUsername() {
		return new HTML("Username:");
	} // username
	
	public static HTML htmlPassword() {
		return new HTML("Password: ");
	} // password
	
	public static HTML htmlModules() {
		return new HTML("Modules");
	} // modules
	
	public static HTML htmlModuleDetails() {
		return new HTML("Module Details");
	} // moduleDetails
	
	public static HTML htmlModuleRequirements() {
		return new HTML("Module Requirements");
	} // moduleRequirements
	
	public static HTML htmlModuleID() {
		return new HTML("ID Number");
	} // moduleID
	
	public static HTML htmlModuleType() {
		return new HTML("Type");
	} // moduleType
	
	public static HTML htmlModuleCondition() {
		return new HTML("Condition");
	} // moduleCondition
	
	public static HTML htmlModuleOrientation() {
		return new HTML("Orientation");
	} // moduleOrientation
	
	public static HTML htmlX() {
		return new HTML("X-Coordinate");
	} // htmlX
	
	public static HTML htmlY() {
		return new HTML("Y-Coordinate");
	} // htmlY
	
	public static HTML htmlConfigs() {
		return new HTML("Configurations");
	} // htmlConfigs
	
	public static HTML htmlPassEnable() {
		return new HTML("Password Enabled");
	} // PassEnable
	
	public static HTML htmlChangePass() {
		return new HTML("Change Password");
	} // htmlChangePass
	
	public static HTML htmlCurrPass() {
		return new HTML("Current Password");
	} // htmlCurrPass
	
	public static HTML htmlNewPass() {
		return new HTML("New Password");
	} // htmlNewPass
	
	public static HTML htmlConfirmPass() {
		return new HTML("Confirm Password");
	} // confirmPass
	
	public static HTML htmlWeather() {
		return new HTML("Place holder for the weather");
	} // htmlWeather
	
	public static Image moduleImage() {
		// Implement getting specific module image based on ModuleID
		final Image moduleImage = new Image("images/image");
		moduleImage.setHeight(strHeight2);
	    moduleImage.setWidth(strModulesImageWidth);
		return moduleImage;
	} // moduleImage
	
	public static Image mapImage() {
		final Image map = new Image("images/marsMap");
		map.setHeight(strConfigMapHeight);
	    map.setWidth(strConfigMapWidth);
		return map;
	} // mapImage
	
	public static ListBox lb() {
		return new ListBox();
	} // lb
	
	public static ListBox mListBox() {
		mListBox.setVisibleItemCount(10);
	    mListBox.setHeight(strHeight);
	    mListBox.setWidth(strWidth);
		return mListBox;
	} // mListBox
	
	public static ListBox mType() {
		mType.setVisibleItemCount(10);
	    mType.setEnabled(false);
	    mType.setWidth(strWidth);
		return mType;
	} // mType
	
	public static ListBox mCondition() {
		Controller.populateCondidition(mCondition);
	    mCondition.setVisibleItemCount(3);
	    mCondition.setWidth(strWidth);
		return mCondition;
	} // mCondition
	
	public static ListBox mOrientation() {
		Controller.populateOrientation(mOrientation);
	    mOrientation.setVisibleItemCount(3);
	    mOrientation.setWidth(strWidth);
		return mOrientation;
	} // mOrientation
	
	public static ListBox cListBox() {
		cListBox.setVisibleItemCount(10);
	    cListBox.setHeight(strConfigListBoxHeight);
	    cListBox.setWidth(strWidth);
	    // Populate ListBox from Controller
		return cListBox;
	} // cListBox
	
	public static ListBox usersListBox() {
		// populate
		return users;
	} // usersListBox
	
	public static ListBox testCasesListBox() {
		return testCases;
	} // testCasesListBox
	
	public static PasswordTextBox ptb() {
		final PasswordTextBox p = new PasswordTextBox();
		return p;
	} // tbPasswordEntry
	
	public static RadioButton rbSelectAll() {
		radAll.setText("Select All");
		radAll.setName("MapModules");
		return radAll;
	} // selectAll
	
	public static RadioButton rbDeselectAll() {
		radNone.setText("Deselect All");
		radNone.setName("MapModules");
		return radNone;
	} // deselectAll
	
	public static TextArea ta() {
		return new TextArea();
	} // ta
	
	public static TextArea taModuleDetails() {
		moduleDetails.setHeight(strModulesCenterHeight);
	    moduleDetails.setWidth(strModulesCenterWidth);
		return moduleDetails;
	} // taModuleDetails
	
	public static TextArea taModuleRequirements() {
		moduleRequirements.setText("module requirements module requirements module requirements");
	    moduleRequirements.setReadOnly(true);
	    moduleRequirements.setHeight(strModulesCenterHeight);
	    moduleRequirements.setWidth(strModulesCenterWidth);
		return moduleRequirements;
	} // taModuleRequirements
	
	public static TextBox tb() {
		final TextBox tb = new TextBox();
		return tb;
	} // tb
	
	public static TextBox mX() {
		mX.setWidth(strWidth2);
		return mX;
	} // tbX
	
	public static TextBox mY() {
		mY.setWidth(strWidth2);
		return mY;
	} //
	
	public static Audio successSound() {
		final Audio success = Audio.createIfSupported();
		success.setSrc("sounds/success");
		return success;
	} // successSound
	
	public static Audio errorSound() {
		final Audio error = Audio.createIfSupported();
		error.setSrc("sounds/error");
		return error;
	} // errorSound
	
	public static Audio minConfigSound() {
		final Audio minConfig = Audio.createIfSupported();
		minConfig.setSrc("sounds/minConfig");
		return minConfig;
	} // minConfigSound
	
	public static Boolean minConfigReached() {
		return minConfigReached;
	} // minConfigReached
	
	public static void setMinConfigReached(Boolean r) {
		minConfigReached = r;
	} // setMinConfigReached
    
	final static Map mapDisplay = new Map(100,50);  
//	final TestCases test = new TestCases();  
//	testCases.addItem("No Test Case Selected");
//    testCases.addItem("Test Case 1");
//    testCases.addItem("Test Case 2");
//    testCases.addItem("Test Case 3");
//    testCases.addItem("Test Case 4");
//    testCases.addItem("Test Case 5");
//    testCases.addItem("Test Case 6");
//    testCases.addItem("Test Case 7");
//    testCases.addItem("Test Case 8");
//    testCases.addItem("Test Case 9");
//    testCases.addItem("Test Case 10");  
//    testCases.setVisibleItemCount(1);
//    testCases.setWidth(strWidth); 
//    testCases.addChangeHandler(Controller.testCases(testCases));
	
	final static TabLayoutPanel tabPanel = new TabLayoutPanel(2.5, Unit.EM);
	final static VerticalPanel loginPanel = new VerticalPanel();
	final static DockPanel m = new DockPanel();
	final static DockPanel c = new DockPanel();
	final static DockPanel w = new DockPanel();
	final static HorizontalPanel moduleCoordinates = Variables.horizontal();
	final static HorizontalPanel configHpanel = Variables.horizontal();
	final static HorizontalPanel usersPanel = Variables.horizontal();
	final static HorizontalPanel changePass = Variables.horizontal();
	final static HorizontalPanel currentPass = Variables.horizontal();
	final static HorizontalPanel newPass = Variables.horizontal();
	final static HorizontalPanel confirmPass = Variables.horizontal();
	final static VerticalPanel modulesCenter = Variables.vertical();
	final static VerticalPanel modulesSouth = Variables.vertical();
	final static VerticalPanel modulesEast = Variables.vertical();
	final static VerticalPanel modulesX = Variables.vertical();
	final static VerticalPanel modulesY = Variables.vertical();
	final static VerticalPanel configVpanel = Variables.vertical();
	final static VerticalPanel settingsPassVpanel = Variables.vertical();
	final static VerticalPanel settingsVpanel = Variables.vertical();
	
	final static Boolean minConfigReached = false;
	final static CheckBox cbAirLock = new CheckBox("Air Lock");
	final static CheckBox cbPlain = new CheckBox("Plain");
	final static CheckBox cbDorm = new CheckBox("Dormitory");
	final static CheckBox cbSanitation = new CheckBox("Sanitation");
	final static CheckBox cbFoodAndWater = new CheckBox("Food & Water");
	final static CheckBox cbGymAndRelax = new CheckBox("Gym & Relaxation");
	final static CheckBox cbCanteen = new CheckBox("Canteen");
	final static CheckBox cbPower = new CheckBox("Power");
	final static CheckBox cbControl = new CheckBox("Control");
	final static CheckBox cbMedical = new CheckBox("Medical");
	final static CheckBox cbPassEnable = new CheckBox();
	final static int intPanelBorder = 2;
    final static int intPanelSpacing0 = 5;
    final static int intPanelSpacing1 = 10;
    final static ListBox mType = Variables.lb();
	final static ListBox mCondition = Variables.lb();
	final static ListBox mOrientation = Variables.lb();
    final static ListBox mListBox = Variables.lb();
    final static ListBox cListBox = Variables.lb();
    final static ListBox users = Variables.lb();
    final static ListBox testCases = Variables.lb();
	final static PasswordTextBox password = Variables.ptb();
	final static PasswordTextBox ptbCurrentPassword = Variables.ptb();
	final static PasswordTextBox ptbNewPassword = Variables.ptb();
	final static PasswordTextBox ptbConfirmPassword = Variables.ptb();
	final static RadioButton radAll = new RadioButton("Select All");
	final static RadioButton radNone = new RadioButton("Deselect All");
    final static String strHeight = "600px";
    final static String strHeight1 = "20px";
    final static String strHeight2 = "200px";
    final static String strWidth = "300px";
    final static String strWidth1 = "1500px";
    final static String strWidth2 = "140px";
    final static String strDockPanelSouth = "Naples Spring 2015";
    final static String strButtonHeight = "50px";
    final static String strButtonWidth = "150px";
    final static String strModulesCenterHeight = "175px";
    final static String strModulesImageWidth = "250px";
    final static String strConfigMapHeight = "560px";
    final static String strConfigListBoxHeight = "650px";
    final static String strModulesCenterWidth = "800px";
    final static String strConfigMapWidth = "1000px";
    final static TextArea moduleDetails = Variables.ta();
    final static TextArea moduleRequirements = Variables.ta();
    final static TextBox mID = Variables.tb();
    final static TextBox mX = Variables.tb();
	final static TextBox mY = Variables.tb();
    final static TextBox username = Variables.tb();
} // Variables
