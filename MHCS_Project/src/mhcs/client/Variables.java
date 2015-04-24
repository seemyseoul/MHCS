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
		TabLayoutPanel tabPanel = new TabLayoutPanel(2.5, Unit.EM);
		tabPanel.setAnimationDuration(1000);
	    tabPanel.getElement().getStyle().setMarginBottom(10.0, Unit.PX);
		return tabPanel;
	} // tabPanel
	
	public static VerticalPanel loginPanel() {
		final VerticalPanel loginPanel = new VerticalPanel();
		loginPanel.setHeight(strHeight2);
	    loginPanel.add(Variables.htmlUsername());
	    loginPanel.add(Variables.tbUsernameEntry());
	    loginPanel.add(Variables.htmlPassword());
	    loginPanel.add(Variables.ptbPasswordEntry());
	    loginPanel.add(Variables.submitButton());
    	return loginPanel;
	} // loginPanel
	
	public static DockPanel modulesDock() {
		DockPanel m = new DockPanel();
		m.setSpacing(intPanelSpacing0);
	    m.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
	    m.setBorderWidth(intPanelBorder);
	    m.setSize(strWidth1, strHeight);
	    
	    m.add(Variables.htmlModules(), DockPanel.NORTH);
	    m.add(Variables.htmlSouth(), DockPanel.SOUTH);
	    m.add(Variables.modulesEastVPanel(), DockPanel.EAST);
	    m.add(Variables.modulesWestVpanel(), DockPanel.WEST);
	    m.add(Variables.moduleImage(), DockPanel.NORTH);
	    m.add(Variables.modulesSouthVpanel(), DockPanel.SOUTH);
	    m.add(Variables.modulesCenterVpanel(), DockPanel.CENTER);
	    return m;
	} // modulesDock
	
	public static DockPanel configDock() {
    	DockPanel c = new DockPanel();
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
	
	public static HorizontalPanel modulesWestHpanel() {
		return new HorizontalPanel();
	} // modulesWest
	
	public static HorizontalPanel moduleCoordinates() {
		HorizontalPanel c = new HorizontalPanel();
		c.add(Variables.xPanel());
		c.add(Variables.yPanel());
		return c;
	} // moduleCoordinates
	
	public static HorizontalPanel configHpanel() {
    	HorizontalPanel c = new HorizontalPanel();
    	c.add(Variables.roverPathButton());
        c.add(Variables.removeConfigButton());
        c.add(Variables.buildConfigButton());
        return c;
	} // configHzPanel
	
	public static HorizontalPanel usersPanel() {
		HorizontalPanel u = new HorizontalPanel();
		u.add(Variables.usersListBox());
		u.add(Variables.addUserButton());
		u.add(Variables.removeUserButton());
		return u;
	} // settingsUserPanel
	
	public static HorizontalPanel changePass() {
    	HorizontalPanel s = new HorizontalPanel();
    	s.add(Variables.htmlPassEnable());
        s.add(Variables.changePassButton());
        s.setSpacing(intPanelSpacing1);
        return s;
	} // settingsPassPanel
	
	public static HorizontalPanel currentPassword() {
    	HorizontalPanel current = new HorizontalPanel();
    	current.add(Variables.htmlCurrPass());
        current.add(Variables.ptbPasswordEntry());
        current.setSpacing(intPanelSpacing1);
    	return current;
	} // currentPassword
	
	public static HorizontalPanel newPassword() {
    	HorizontalPanel newP = new HorizontalPanel();
    	newP.add(Variables.htmlNewPass());
        newP.add(Variables.ptbPasswordEntry());
        newP.setSpacing(intPanelSpacing1);
    	return newP;
	} // newPassword
	
	public static HorizontalPanel confirmPassword() {
    	HorizontalPanel confirm = new HorizontalPanel();
    	confirm.add(Variables.htmlConfirmPass());
        confirm.add(Variables.ptbPasswordEntry());
        confirm.setSpacing(intPanelSpacing1);
    	return confirm;
	} // confirmPassword
	
	public static SimplePanel weatherPanel() {
    	SimplePanel w = new SimplePanel();
    	w.add(Variables.htmlWeather());
        Weather weather = new Weather();
        weather.requestData(weather.strURL);
        w.add(new Label("Current temp: \t" + weather.strTemp + " Celsius"));
        w.add(new Label("Current visibility: \t" + weather.strVisibility + " km"));
        return w;
	} // weatherPanel
	
	public static VerticalPanel modulesWestVpanel() {
    	return new VerticalPanel();
	} // modulesWestVtPanel
	
	public static VerticalPanel modulesCenterVpanel() {
    	VerticalPanel center =  new VerticalPanel();
    	center.add(Variables.htmlModuleDetails());
        center.add(Variables.taModuleDetails());
        return center;
	} // modulesCenterVpanel
	
	public static VerticalPanel modulesSouthVpanel() {
    	VerticalPanel south =  new VerticalPanel();
    	south.add(Variables.htmlModuleRequirements());
        south.add(Variables.taModuleRequirements());
        return south;
	} // modulesSouthVpanel
	
	public static VerticalPanel modulesEastVPanel() {
    	VerticalPanel east = new VerticalPanel();
    	east.add(Variables.htmlModuleID());
        east.add(Variables.tbModuleID());
        east.add(Variables.htmlModuleType());
        east.add(Variables.mType());
        east.add(Variables.htmlModuleCondition());
        east.add(Variables.mCondition());
        east.add(Variables.htmlModuleOrientation());
        east.add(Variables.mOrientation());
        east.add(Variables.moduleCoordinates());
        east.add(Variables.mSaveButton());
        east.setSpacing(intPanelSpacing1 + 2);
        return east;
	} // modulesEastVPanel
	
	public static VerticalPanel xPanel() {
    	VerticalPanel x =  new VerticalPanel();
    	x.add(Variables.htmlX());
    	x.add(Variables.tbX());
    	return x;
	} // xPanel
	
	public static VerticalPanel yPanel() {
    	VerticalPanel y = new VerticalPanel();
    	y.add(Variables.htmlY());
        y.add(Variables.tbY());
        return y;
	} // yPanel
	
	public static VerticalPanel configVpanel() {
    	VerticalPanel configVpanel = new VerticalPanel();
    	configVpanel.add(Variables.cbAirLock());
        configVpanel.add(Variables.cbPlain());
        configVpanel.add(Variables.cbDorm());
        configVpanel.add(Variables.cbSanitation());
        configVpanel.add(Variables.cbFoodAndWater());
        configVpanel.add(Variables.cbGymAndRelax());
        configVpanel.add(Variables.cbCanteen());
        configVpanel.add(Variables.cbPower());
        configVpanel.add(Variables.cbControl());
        configVpanel.add(Variables.cbMedical());
        configVpanel.add(Variables.rbSelectAll());
        configVpanel.add(Variables.rbDeselectAll());
        configVpanel.setHeight(strHeight);
        return configVpanel;
	} // configVpanel
	
	public static VerticalPanel settingsPasswordVpanel() {
    	VerticalPanel s = new VerticalPanel();
    	s.add(Variables.htmlChangePass());
        s.add(Variables.currentPassword());
        s.add(Variables.newPassword());
        s.add(Variables.confirmPassword());
        s.setSpacing(intPanelSpacing0);
        s.setBorderWidth(intPanelBorder);
    	return s;
	} // settingsVpanel
	
	public static VerticalPanel settingsVpanel () {
    	VerticalPanel v = new VerticalPanel();
    	v.add(Variables.testCasesListBox());
    	v.add(Variables.usersListBox());
        v.add(Variables.addUserButton());
        v.add(Variables.removeUserButton());
    	v.setSpacing(intPanelSpacing1);
    	v.setBorderWidth(intPanelBorder);
    	return v;
	} // settingsPassVtPanel
    
	public static Button submitButton() {
		final Button submitButton = new Button("Log In");
		submitButton.addClickHandler(Controller.loginHandler(Variables.ptbPasswordEntry(),
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
	    save.setText("SAVE");
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
	
	public static CheckBox cbAirLock() {
		final CheckBox cbAirLock = new CheckBox("Air Lock");
		cbAirLock.setText("Air Lock");
		return cbAirLock;
	} // cbAirLock
	
	public static CheckBox cbPlain() {
		final CheckBox cbPlain = new CheckBox("Plain");
		cbPlain.setText("Plain");
		return cbPlain;
	} // cbPlain
	
	public static CheckBox cbDorm() {
		final CheckBox cbDorm = new CheckBox("Dormitory");
		cbDorm.setText("Dormitory");
		return cbDorm;
	} // cbDorm
	
	public static CheckBox cbSanitation() {
		final CheckBox cbSanitation = new CheckBox("Sanitation");
		cbSanitation.setText("Sanitation");
		return cbSanitation;
	} // cbSanitation
	
	public static CheckBox cbFoodAndWater() {
		final CheckBox cbFoodAndWater = new CheckBox("Food & Water");
		cbFoodAndWater.setText("Food & Water");
		return cbFoodAndWater;
	} // cbFoodandWater
	
	public static CheckBox cbGymAndRelax() {
		final CheckBox cbGymAndRelax = new CheckBox("Gym & Relaxation");
		cbGymAndRelax.setText("Gym & Relaxation");
		return cbGymAndRelax;
	} //cbGymAndRelax
	
	public static CheckBox cbCanteen() {
		final CheckBox cbCanteen = new CheckBox("Canteen");
		cbCanteen.setText("Canteen");
		return cbCanteen;
	} // cbCanteen
	
	public static CheckBox cbPower() {
		final CheckBox cbPower = new CheckBox("Power");
		cbPower.setText("Power");
		return cbPower;
	} // cbPower
	
	public static CheckBox cbControl() {
		final CheckBox cbControl = new CheckBox("Control");
		cbControl.setText("Control");
		return cbControl;
	} // cbControl
	
	public static CheckBox cbMedical() {
		final CheckBox cbMedical = new CheckBox("Medical");
		cbMedical.setText("Medical");
		return cbMedical;
	} // cbMedical
	
	public static CheckBox passEnable() {
		final CheckBox cbPassEnable = new CheckBox();
		cbPassEnable.setText("Password Enabled");
		cbPassEnable.setHeight(strHeight1);
		return cbPassEnable;
	} // cbPassEnable
	
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
	
	public static ListBox mListBox() {
		final ListBox mListBox = new ListBox();
		mListBox.setVisibleItemCount(10);
	    mListBox.setHeight(strHeight);
	    mListBox.setWidth(strWidth);
		return mListBox;
	} // mListBox
	
	public static ListBox mType() {
		final ListBox mType = new ListBox();
		mType.setVisibleItemCount(10);
	    mType.setEnabled(false);
	    mType.setWidth(strWidth);
		return mType;
	} // mType
	
	public static ListBox mCondition() {
		final ListBox mCondition = new ListBox();
		Controller.populateCondidition(mCondition);
	    mCondition.setVisibleItemCount(3);
	    mCondition.setWidth(strWidth);
		return mCondition;
	} // mCondition
	
	public static ListBox mOrientation() {
		final ListBox mOrientation = new ListBox();
		Controller.populateOrientation(mOrientation);
	    mOrientation.setVisibleItemCount(3);
	    mOrientation.setWidth(strWidth);
		return mOrientation;
	} // mOrientation
	
	public static ListBox cListBox() {
		final ListBox cListBox = new ListBox();
		cListBox.setVisibleItemCount(10);
	    cListBox.setHeight(strConfigListBoxHeight);
	    cListBox.setWidth(strWidth);
	    // Populate ListBox from Controller
		return cListBox;
	} // cListBox
	
	public static ListBox usersListBox() {
		final ListBox users = new ListBox();
		// populate
		return users;
	} // usersListBox
	
	public static ListBox testCasesListBox() {
		final ListBox testCases = new ListBox();
		return testCases;
	} // testCasesListBox
	
	public static PasswordTextBox cPassword() {
		final PasswordTextBox cPassword = new PasswordTextBox();
		return cPassword;
	} // cPassword
	
	public static PasswordTextBox nPassword() {
		final PasswordTextBox nPassword = new PasswordTextBox();
		return nPassword;
	} // nPassword
	
	public static PasswordTextBox coPassword() {
		final PasswordTextBox coPassword = new PasswordTextBox();
		return coPassword;
	} // coPassword
	
	public static RadioButton rbSelectAll() {
		RadioButton radAll = new RadioButton("Select All");
		radAll.setText("Select All");
		radAll.setName("MapModules");
		return radAll;
	} // selectAll
	
	public static RadioButton rbDeselectAll() {
		RadioButton radNone = new RadioButton("Deselect All");
		radNone.setText("Deselect All");
		radNone.setName("MapModules");
		return radNone;
	} // deselectAll
	
	public static TextArea taModuleDetails() {
		final TextArea moduleDetails = new TextArea();
		moduleDetails.setHeight(strModulesCenterHeight);
	    moduleDetails.setWidth(strModulesCenterWidth);
		return moduleDetails;
	} // taModuleDetails
	
	public static TextArea taModuleRequirements() {
		final TextArea moduleRequirements = new TextArea();
		moduleRequirements.setText("module requirements module requirements module requirements");
	    moduleRequirements.setReadOnly(true);
	    moduleRequirements.setHeight(strModulesCenterHeight);
	    moduleRequirements.setWidth(strModulesCenterWidth);
		return moduleRequirements;
	} // taModuleRequirements
	
	public static TextBox tbUsernameEntry() {
		final TextBox usernameEntry = new TextBox();
		return usernameEntry;
	} // tbUsernameEntry
	
	public static PasswordTextBox ptbPasswordEntry() {
		final PasswordTextBox passwordEntry = new PasswordTextBox();
		return passwordEntry;
	} // tbPasswordEntry
	
	public static TextBox tbModuleID() {
		final TextBox id = new TextBox();
		id.setWidth(strWidth);
		return id;
	} // tbModuleID
	
	public static TextBox tbX() {
		final TextBox x = new TextBox();
		x.setWidth(strWidth2);
		return x;
	} // tbX
	
	public static TextBox tbY() {
		final TextBox y = new TextBox();
		y.setWidth(strWidth2);
		return y;
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
	
    final static String strHeight = "600px";
    final static String strHeight1 = "20px";
    final static String strHeight2 = "200px";
    final static String strWidth = "300px";
    final static String strWidth1 = "1500px";
    final static String strWidth2 = "140px";
    final static String strDockPanelSouth = "Naples Spring 2015";
    final static int intPanelBorder = 2;
    final static int intPanelSpacing0 = 5;
    final static int intPanelSpacing1 = 10;
    final static String strButtonHeight = "50px";
    final static String strButtonWidth = "150px";
    final static String strModulesCenterHeight = "175px";
    final static String strModulesImageWidth = "250px";
    final static String strConfigMapHeight = "560px";
    final static String strConfigListBoxHeight = "650px";
    final static String strModulesCenterWidth = "800px";
    final static String strConfigMapWidth = "1000px";
}
