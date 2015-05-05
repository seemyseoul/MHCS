package mhcs.client;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.media.client.Audio;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.ScrollPanel;
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
    
    public static DockPanel loginDock() {
        l.setSpacing(intPanelSpacing0);
        l.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
        l.setVerticalAlignment(DockPanel.ALIGN_MIDDLE);
        l.setBorderWidth(intPanelBorder);
        l.setSize(px1500, px600);
        l.add(htmlSouth, DockPanel.SOUTH);
        l.add(loginVpanel(), DockPanel.CENTER);
        return l;
    } // loginPanel
    
    public static DockPanel modulesDock() {
        m.setSpacing(intPanelSpacing0);
        m.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
        m.setBorderWidth(intPanelBorder);
        m.setSize(px1500, px600);
        m.add(htmlModules, DockPanel.NORTH);
        m.add(htmlSouth, DockPanel.SOUTH);
        m.add(modulesEastVpanel(), DockPanel.EAST);
        m.add(modulesWestVpanel(), DockPanel.WEST);
        m.add(moduleImage, DockPanel.NORTH);
        m.add(modulesSouthVpanel(), DockPanel.SOUTH);
        m.add(modulesCenterVpanel(), DockPanel.CENTER);
        return m;
    } // modulesDock
    
    public static DockPanel configDock() {
        c.setSpacing(intPanelSpacing0);
        c.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
        c.setBorderWidth(intPanelBorder);
        c.setSize(px1500, px600);
        c.add(htmlConfigs, DockPanel.NORTH);
        c.add(htmlSouth, DockPanel.SOUTH);
        c.add(cListBox(), DockPanel.WEST);
        c.add(mapPanel(), DockPanel.CENTER);
        c.add(htmlMap, DockPanel.NORTH);
        c.add(configHpanel(), DockPanel.SOUTH);
        return c;
    } // configDock
    
    public static DockPanel settingsDock() {
        s.setSpacing(intPanelSpacing0);
        s.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
        s.setBorderWidth(intPanelBorder);
        s.setSize(px1500, px600);
        s.add(tenDayVpanel(), DockPanel.CENTER);
        s.add(htmlSettings, DockPanel.NORTH);
        s.add(settingsPasswordVpanel(), DockPanel.WEST);
        s.add(weatherPanel(), DockPanel.EAST);
        s.add(htmlSouth, DockPanel.SOUTH);
        return s;
    } // settingsDock

    public static FlowPanel weatherPanel() {
        w.add(htmlWeather);
        w.add(weatherImage());
        Weather weather = new Weather();
        weather.requestData(weather.getUrl(0), 0);
        weather.requestData(weather.getUrl(1), 1);
        
        return w;
    } // weatherPanel
    
    public static HorizontalPanel horizontal() {
        return new HorizontalPanel();
    } // horizontal
    
    public static HorizontalPanel modulesWestHpanel() {
        modulesWestH.add(mAddButton());
        modulesWestH.add(mRemoveButton());
        return modulesWestH;
    }
    
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
        usersPanel.add(usersListBox());
        usersPanel.add(addUserButton());
        usersPanel.add(removeUserButton());
        return usersPanel;
    } // settingsUserPanel
    
    public static HorizontalPanel passEnabled() {
        passEnabled.add(cbPassEnable());
        passEnabled.add(htmlPassEnable);
        return passEnabled;
    } // passEnabled
    
    public static HorizontalPanel changePass() {
        changePass.add(htmlPassEnable);
        changePass.add(changePassButton());
        changePass.setSpacing(intPanelSpacing1);
        return changePass;
    } // settingsPassPanel
    
    public static HorizontalPanel currentPassword() {
        htmlCurrPass.setHeight(px20);
        currentPass.add(ptbCurrentPassword);
        currentPass.add(htmlCurrPass);
        currentPass.setSpacing(intPanelSpacing1);
        return currentPass;
    } // currentPassword
    
    public static HorizontalPanel newPassword() {
        htmlNewPass.setHeight(px20);
        newPass.add(ptbNewPassword);
        newPass.add(htmlNewPass);
        newPass.setSpacing(intPanelSpacing1);
        return newPass;
    } // newPassword
    
    public static HorizontalPanel confirmPassword() {
        htmlConfirmPass.setHeight(px20);
        confirmPass.add(ptbConfirmPassword);
        confirmPass.add(htmlConfirmPass);
        confirmPass.setSpacing(intPanelSpacing1);
        return confirmPass;
    } // confirmPassword
    
    public static ScrollPanel mapPanel() {
        mapPanel.setHeight(px560);
        mapPanel.setWidth(px1000);
        mapPanel.add(mapImage());
        mapPanel.add(map.g);
        return mapPanel;
    } // mapPanel
    
    public static VerticalPanel vertical() {
        return new VerticalPanel();
    } // modulesWestVtPanel
    
    public static VerticalPanel loginVpanel() {
        loginVpanel.setSpacing(intPanelSpacing0);
        loginVpanel.setHorizontalAlignment(VerticalPanel.ALIGN_CENTER);
        loginVpanel.add(keepCalm());
        loginVpanel.add(htmlUsername);
        loginVpanel.add(tbUsername);
        loginVpanel.add(Variables.htmlPassword);
        loginVpanel.add(ptbPassword);
        loginVpanel.add(Variables.loginButton);
        return loginVpanel;
    } // loginVpanel
    
    public static VerticalPanel modulesWestVpanel() {
        modulesWest.add(mListBox());
        modulesWest.add(modulesWestHpanel());
        return modulesWest;
    } // modulesWestVpanel
    
    public static VerticalPanel modulesCenterVpanel() {
        modulesCenter.add(Variables.htmlModuleDetails);
        return modulesCenter;
    } // modulesCenterVpanel
    
    public static VerticalPanel modulesSouthVpanel() {
        modulesSouth.add(Variables.htmlModuleRequirements);
        modulesSouth.add(Variables.taModuleRequirements());
        return modulesSouth;
    } // modulesSouthVpanel
    
    public static VerticalPanel modulesEastVpanel() {
        modulesEast.add(Variables.htmlModuleID);
        modulesEast.add(Variables.mID);
        modulesEast.add(Variables.htmlModuleType);
        modulesEast.add(Variables.mType());
        modulesEast.add(Variables.htmlModuleCondition);
        modulesEast.add(Variables.mCondition());
        modulesEast.add(Variables.htmlModuleOrientation);
        modulesEast.add(Variables.mOrientation());
        modulesEast.add(Variables.moduleCoordinates());
        modulesEast.add(Variables.mSaveButton());
        modulesEast.setSpacing(intPanelSpacing1 + 2);
        return modulesEast;
    } // modulesEastVPanel
    
    public static VerticalPanel xPanel() {
        modulesX.add(Variables.htmlX);
        modulesX.add(Variables.mX());
        return modulesX;
    } // xPanel
    
    public static VerticalPanel yPanel() {
        modulesY.add(Variables.htmlY);
        modulesY.add(Variables.mY());
        return modulesY;
    } // yPanel
    
    public static VerticalPanel settingsPasswordVpanel() {
        settingsPassVpanel.add(passEnabled());
        settingsPassVpanel.add(changePassword);
        settingsPassVpanel.add(currentPassword());
        settingsPassVpanel.add(newPassword());
        settingsPassVpanel.add(confirmPassword());
        settingsPassVpanel.add(savePassButton());
        settingsPassVpanel.setSpacing(intPanelSpacing1);
        return settingsPassVpanel;
    } // settingsVpanel
    
    public static VerticalPanel tenDayVpanel() {
        tenDayVpanel.setSpacing(intPanelSpacing1);
        tenDayVpanel.add(htmlTenDay);
        tenDayVpanel.add(dateTimeButton());
        tenDayVpanel.add(tbTenDay());
        tenDayVpanel.add(dateTimeSaveButton());
        tenDayVpanel.add(htmlTimeSince);
        tenDayVpanel.add(tbTimeSince());
        tenDayVpanel.add(htmlFiller);
        tenDayVpanel.add(htmlFiller);
        tenDayVpanel.add(htmlTestCases);
        tenDayVpanel.add(testCases());
        tenDayVpanel.add(htmlFiller);
        tenDayVpanel.add(logoutButton());
        return tenDayVpanel;
    } // tenDayVpanel
    
    public static Button mAddButton() {
        mAddButton.setHeight(px50);
        mAddButton.setWidth(px150);
        mAddButton.addClickHandler(Controller.addButton(mID(), mType(),
                mCondition(), mOrientation(), mX(), mY(), mSaveButton()));
        return mAddButton;
    } // mAddButton
    
    public static Button mRemoveButton() {
        mRemoveButton.setHeight(px50);
        mRemoveButton.setWidth(px150);
        mRemoveButton.addClickHandler(Controller.removeButton(mListBox()));
        return mRemoveButton;
    } // mRemoveButton
    
    public static Button mSaveButton() {
        mSaveButton.setHeight(px50);
        mSaveButton.setWidth(px300);
        mSaveButton.addClickHandler(Controller.saveButton(Variables.mType(),
                Variables.mID, Variables.mX(), Variables.mY(), Variables.mCondition(), Variables.mOrientation(),
                Variables.mListBox(), map));
        return mSaveButton;
    } // mSaveButton
    
    public static Button roverPathButton() {
        roverPath.setHeight(px50);
        roverPath.setWidth(px340);
        return roverPath;
    } // roverPathButton
    
    public static Button removeConfigButton() {
        removeConfig.setHeight(px50);
        removeConfig.setWidth(px340);
        return removeConfig;
    } // removeConfigButton
    
    public static Button buildConfigButton() {
        buildConfig.setHeight(px50);
        buildConfig.setWidth(px340);
        return buildConfig;
    } // buildConfigButton
    
    public static Button addUserButton() {
        addUser.setHeight(px20);
        addUser.setWidth(px140);
        return addUser;
    } // addUserButton
    
    public static Button removeUserButton() {
        removeUser.setHeight(px20);
        removeUser.setWidth(px140);
        return removeUser;
    } // removeUserButton
    
    public static Button changePassButton() {
        changePassword.setHeight(px20);
        changePassword.setWidth(px140);
        return changePassword;
    } // changePassButton
    
    public static Button savePassButton() {
        savePassword.setHeight(px35);
        savePassword.setWidth(px140);
//      savePassword.addClickHandler(Controller.savePassword());
        return savePassword;
    }
    
    public static Button dateTimeButton() {
        dateTimeButton.setHeight(px35);
        dateTimeButton.setWidth(px100);
        dateTimeButton.addClickHandler(Controller.dateTime(tbTenDay()));
        return dateTimeButton;
    } // dateTime
    
    public static Button dateTimeSaveButton() {
        dateTimeSaveButton.setHeight(px35);
        dateTimeSaveButton.setWidth(px100);
        dateTimeSaveButton.addClickHandler(Controller.dateTimeSave(tbTenDay(), tbTimeSince()));
        return dateTimeSaveButton;
    } // dateTimeSaveButton

    public static Button logoutButton() {
        logoutButton.setHeight(px50);
        logoutButton.setWidth(px300);
        return logoutButton;
    } // logoutButton
    
    public static CheckBox cbPassEnable() {
//      cbPassEnable.addClickHandler(Controller.passEnable());
        return cbPassEnable;
    } // passEnable
    
    public static Image keepCalm() {
        final Image keepCalm = new Image("images/keepCalm");
        keepCalm.setHeight(px300);
        keepCalm.setWidth(px300);
        return keepCalm;
    } // keepCalm
    
    public static Image moduleImage() {
        moduleImage.setHeight(px500);
        moduleImage.setWidth(px500);
        return moduleImage;
    } // moduleImage
    
    public static Image mapImage() {
        final Image map = new Image("images/marsMap");
        map.setHeight(px1000);
        map.setWidth(px2000);
        return map;
    } // mapImage
    
    public static Image weatherImage() {
        final Image logo = new Image("images/weather/wlogo.png");
        logo.setHeight(px80);
        logo.setWidth(px130);
        return logo;
    } // weatherImage
     
    public static Image blankImage() {
        final Image blank = new Image("images/blank");
        blank.setHeight(px20);
        blank.setWidth(px20);
        return blank;
    } // blankImage
    
    public static Image deadImage() {
        final Image deadSpace = new Image("images/deadSpace");
        deadSpace.setHeight(px20);
        deadSpace.setWidth(px20);
        return deadSpace;
    } // blankImage
    
    public static ListBox lb() {
        return new ListBox();
    } // lb
    
    public static ListBox mListBox() {
        mListBox.setVisibleItemCount(10);
        mListBox.setHeight(px600);
        mListBox.setWidth(px300);
        return mListBox;
    } // mListBox
    
    public static ListBox mType() {
        mType.setVisibleItemCount(10);
        mType.setEnabled(false);
        mType.setWidth(px300);
        return mType;
    } // mType
    
    public static ListBox mCondition() {
        Controller.populateCondidition(mCondition);
        mCondition.setVisibleItemCount(3);
        mCondition.setWidth(px300);
        return mCondition;
    } // mCondition
    
    public static ListBox mOrientation() {
        Controller.populateOrientation(mOrientation);
        mOrientation.setVisibleItemCount(3);
        mOrientation.setWidth(px300);
        return mOrientation;
    } // mOrientation
    
    public static ListBox cListBox() {
        cListBox.setVisibleItemCount(10);
        cListBox.setHeight(px650);
        cListBox.setWidth(px300);
        Controller.populateConfigListBox(cListBox);
        return cListBox;
    } // cListBox
    
    public static ListBox usersListBox() {
        // Controller.PoplulateUsers(users);
        return users;
    } // usersListBox
    
    public static PasswordTextBox ptb() {
        final PasswordTextBox p = new PasswordTextBox();
        return p;
    } // tbPasswordEntry
    
    public static TextArea ta() {
        return new TextArea();
    } // ta
    
    public static TextArea taModuleRequirements() {
        moduleRequirements.setText("module requirements module requirements module requirements");
        moduleRequirements.setReadOnly(true);
        moduleRequirements.setHeight(px175);
        moduleRequirements.setWidth(px800);
        return moduleRequirements;
    } // taModuleRequirements
    
    public static TextBox tb() {
        final TextBox tb = new TextBox();
        return tb;
    } // tb
    
    public static TextBox mID() {
        return mID;
    } // tbMid
    
    public static TextBox mX() {
        mX.setWidth(px140);
        return mX;
    } // tbX
    
    public static TextBox mY() {
        mY.setWidth(px140);
        return mY;
    } //
    
    public static TextBox tbTenDay() {
        tenDay.setWidth(px140);
        return tenDay;
    } // tenDay
    
    public static TextBox tbTimeSince() {
        timeSince.setEnabled(false);
        return timeSince;
    } // timeSince
    
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
    
    public static Audio goodbyeSound() {
        final Audio goodbye = Audio.createIfSupported();
        goodbye.setSrc("sounds/goodbye");
        return goodbye;
    } // goodbyeSound
    
    public static Audio welcomeSound() {
        final Audio welcome = Audio.createIfSupported();
        welcome.setSrc("sounds/welcome");
        return welcome;
    } // welcomeSound
    
    public static Audio moduleSavedSound() {
        final Audio saved = Audio.createIfSupported();
        saved.setSrc("sounds/moduleSaved");
        return saved;
    } // moduleSaved
    
    public static Audio moduleRemovedSound() {
        final Audio removed = Audio.createIfSupported();
        removed.setSrc("sounds/moduleRemoved");
        return removed;
    } // moduleRemoved
    
    public static Audio timeSavedSound() {
        final Audio saved = Audio.createIfSupported();
        saved.setSrc("sounds/timeSaved");
        return saved;
    } // timeSavedSound
    
    public static Audio tenDaySound() {
        final Audio tenDay = Audio.createIfSupported();
        tenDay.setSrc("sounds/tenDay");
        return tenDay;
    } // tenDaySound
    
    public static Audio testCaseSound() {
        final Audio test = Audio.createIfSupported();
        test.setSrc("sounds/testCase");
        return test;
    } // testCaseSound
    
    public static Boolean minConfigReached() {
        return minConfigReached;
    } // minConfigReached
    
    public static void setMinConfigReached(Boolean r) {
        minConfigReached = r;
    } // setMinConfigReached
    
    static Map map = new Map();
    
    public static ListBox testCases() {
//  final TestCases test = new TestCases();  
        testCases.addItem("No Test Case Selected");
        testCases.addItem("Test Case 1");
        testCases.addItem("Test Case 2");
        testCases.addItem("Test Case 3");
        testCases.addItem("Test Case 4");
        testCases.addItem("Test Case 5");
        testCases.addItem("Test Case 6");
        testCases.addItem("Test Case 7");
        testCases.addItem("Test Case 8");
        testCases.addItem("Test Case 9");
        testCases.addItem("Test Case 10");  
        testCases.setVisibleItemCount(1);
        testCases.setWidth(px300); 
        testCases.addChangeHandler(Controller.testCases(testCases));
        return testCases;
    } // testCases
    
    final static int intPanelBorder = 2;
    final static int intPanelSpacing0 = 5;
    final static int intPanelSpacing1 = 10;
    public final static String px20 = "20px";
    public final static String px35 = "35px";
    public final static String px50 = "50px";
    public final static String px80 = "80px";
    public final static String px100 = "100px";
    public final static String px130 = "130px";
    public final static String px140 = "140px";
    public final static String px150 = "150px";
    public final static String px175 = "175px";
    public final static String px200 = "200px";
    public final static String px250 = "250px";
    public final static String px300 = "300px";
    public final static String px340 = "340px";
    public final static String px500 = "500px";
    public final static String px560 = "560px";
    public final static String px600 = "600px";
    public final static String px650 = "650px";
    public final static String px800 = "800px";
    public final static String px1000 = "1000px";
    public final static String px1500 = "1500px";
    public final static String px2000 = "2000px";
    
    final static TabLayoutPanel tabPanel = new TabLayoutPanel(2.5, Unit.EM);
    final static DockPanel l = new DockPanel();
    final static DockPanel m = new DockPanel();
    final static DockPanel c = new DockPanel();
    final static DockPanel s = new DockPanel();
    final static FlowPanel w = new FlowPanel();
    final static HorizontalPanel modulesWestH = Variables.horizontal();
    final static HorizontalPanel moduleCoordinates = Variables.horizontal();
    final static HorizontalPanel configHpanel = Variables.horizontal();
    final static HorizontalPanel usersPanel = Variables.horizontal();
    final static HorizontalPanel passEnabled = Variables.horizontal();
    final static HorizontalPanel changePass = Variables.horizontal();
    final static HorizontalPanel currentPass = Variables.horizontal();
    final static HorizontalPanel newPass = Variables.horizontal();
    final static HorizontalPanel confirmPass = Variables.horizontal();
    final static HorizontalPanel tenDayPanel = Variables.horizontal();
    final static ScrollPanel mapPanel = new ScrollPanel();
    final static VerticalPanel loginVpanel = Variables.vertical();
    final static VerticalPanel modulesWest = Variables.vertical();
    final static VerticalPanel modulesCenter = Variables.vertical();
    final static VerticalPanel modulesSouth = Variables.vertical();
    final static VerticalPanel modulesEast = Variables.vertical();
    final static VerticalPanel modulesX = Variables.vertical();
    final static VerticalPanel modulesY = Variables.vertical();
    final static VerticalPanel configVpanel = Variables.vertical();
    final static VerticalPanel settingsPassVpanel = Variables.vertical();
    final static VerticalPanel settingsVpanel = Variables.vertical();
    final static VerticalPanel tenDayVpanel = Variables.vertical();
    
    static Boolean minConfigReached = false;
    final static Button loginButton = new Button("Login");
    final static Button mAddButton = new Button("Add");
    final static Button mRemoveButton = new Button("Remove");
    final static Button mSaveButton = new Button("Save");
    final static Button roverPath = new Button("Rover Path");
    final static Button removeConfig = new Button("Remove");
    final static Button buildConfig = new Button("Build Configuration");
    final static Button addUser = new Button("Add User");
    final static Button removeUser = new Button("Remove User");
    final static Button changePassword = new Button("Change Password");
    final static Button savePassword = new Button("Save Password");
    final static Button dateTimeButton = new Button("Date-Time");
    final static Button dateTimeSaveButton = new Button("Save");
    final static Button logoutButton = new Button("Logout");
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
    static String time1 = new String("");
    final static CheckBox cbPassEnable = new CheckBox();
    final static HTML htmlSouth = new HTML("Naples Spring 2015");
    final static HTML htmlUsername = new HTML("Username:");
    final static HTML htmlPassword = new HTML("Password: ");
    final static HTML htmlModules = new HTML("Modules");
    final static HTML htmlModuleDetails = new HTML("Module Details");
    final static HTML htmlModuleRequirements = new HTML("Module Requirements");
    final static HTML htmlModuleID = new HTML("ID Number");
    final static HTML htmlModuleType = new HTML("Type");
    final static HTML htmlModuleCondition = new HTML("Condition");
    final static HTML htmlModuleOrientation = new HTML("Orientation");
    final static HTML htmlX = new HTML("X-Coordinate");
    final static HTML htmlY = new HTML("Y-Coordinate");
    final static HTML htmlConfigs = new HTML("Configurations");
    final static HTML htmlMap = new HTML("Map");
    final static HTML htmlSettings = new HTML("Settings");
    final static HTML htmlPassEnable = new HTML("Enable Password");
    final static HTML htmlChangePass = new HTML("Change Password");
    final static HTML htmlCurrPass = new HTML("Current Password");
    final static HTML htmlNewPass = new HTML("New Password");
    final static HTML htmlConfirmPass = new HTML("Confirm Password");
    final static HTML htmlTenDay = new HTML("Click the button to automatically enter "
            + "the date and time of the most recent rover calibration."
            + "<br>"
            + "Or enter the date and time manually (yyyy/MM/dd/ HH:mm:ss).");
    final static HTML htmlTimeSince = new HTML("Last changed: ");
    final static HTML htmlFiller = new HTML("<br><br><br>");
    final static HTML htmlTestCases = new HTML("<b><u>Test Cases.</u></b> <br> Select a test case to run.");
    final static HTML htmlWeather = new HTML("<b><u>Weather</b></u>");
    static Image moduleImage = new Image("images/blank");
    final static ListBox mType = Variables.lb();
    final static ListBox mCondition = Variables.lb();
    final static ListBox mOrientation = Variables.lb();
    final static ListBox mListBox = Variables.lb();
    final static ListBox cListBox = Variables.lb();
    final static ListBox users = Variables.lb();
    final static ListBox testCases = Variables.lb();
    final static PasswordTextBox ptbPassword = Variables.ptb();
    final static PasswordTextBox ptbCurrentPassword = Variables.ptb();
    final static PasswordTextBox ptbNewPassword = Variables.ptb();
    final static PasswordTextBox ptbConfirmPassword = Variables.ptb();
    final static RadioButton radAll = new RadioButton("Select All");
    final static RadioButton radNone = new RadioButton("Deselect All");
    final static TextArea moduleDetails = Variables.ta();
    final static TextArea moduleRequirements = Variables.ta();
    final static TextBox mID = Variables.tb();
    final static TextBox mX = Variables.tb();
    final static TextBox mY = Variables.tb();
    final static TextBox tbUsername = Variables.tb();
    final static TextBox tenDay = Variables.tb();
    final static TextBox timeSince = Variables.tb();
    
} // Variables
