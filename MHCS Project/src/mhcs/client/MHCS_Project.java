package mhcs.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.client.Constants;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.SplitLayoutPanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

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
	 * Create a remote service proxy to talk to the server-side Greeting service.
	 */
	private final GreetingServiceAsync greetingService = GWT
			.create(GreetingService.class);
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		// Configurations
		{
			String buttonHeight = "50px";
			String buttonWidth = "300px";
			
			// West
			// Add a list box with multiple selection enabled
			final ListBox cListBox = new ListBox();
		    cListBox.addItem("Tree Config 1");
		    cListBox.addItem("Tree Config 2");
		    cListBox.addItem("Tree Config 3");
		    cListBox.addItem("Tree Config 4");
		    cListBox.addItem("Tree Config 5");
		    cListBox.addItem("Tree Config 6");
		    cListBox.addItem("Tree Config 7");
		    cListBox.setVisibleItemCount(10);
		    cListBox.setHeight("700px");
		    cListBox.setWidth("300px");
		    
		    // Center
		    Image map = new Image("images/marsMap");
		    map.setHeight("600px");
		    map.setWidth("1000px");
		    
		    // East
		    VerticalPanel verPanel = new VerticalPanel();
		    RadioButton radAirLock = new RadioButton("Air Lock");
		    RadioButton radPlain = new RadioButton("Plain");
		    RadioButton radDorm = new RadioButton("Dormitory");
		    RadioButton radSanitation = new RadioButton("Sanitation");
		    RadioButton radFoodAndWater = new RadioButton("Food & Water");
		    RadioButton radGymAndRelax= new RadioButton("Gym & Relaxation");
		    RadioButton radCanteen = new RadioButton("Canteen");
		    RadioButton radPower = new RadioButton("Power");
		    RadioButton radControl = new RadioButton("Control");
		    RadioButton radMedical = new RadioButton("Medical");
		    RadioButton radAll = new RadioButton("Select All");
		    RadioButton radNone = new RadioButton("Deselect All");
		    radAirLock.setName("MapModules");			radAirLock.setText("Air Lock");
		    radPlain.setName("MapModules");				radPlain.setText("Plain");
		    radDorm.setName("MapModules");				radDorm.setText("Dormitory");
		    radSanitation.setName("MapModules");		radSanitation.setText("Sanitation");
		    radFoodAndWater.setName("MapModules");		radFoodAndWater.setText("Food & Water");
		    radGymAndRelax.setName("MapModules");		radGymAndRelax.setText("Gym & Relaxation");
		    radCanteen.setName("MapModules");			radCanteen.setText("Canteen");
		    radPower.setName("MapModules");				radPower.setText("Power");
		    radControl.setName("MapModules");			radControl.setText("Control");
		    radMedical.setName("MapModules");			radMedical.setText("Medical");
		    radAll.setName("MapModules");				radAll.setText("Select All");
		    radNone.setName("MapModules");				radNone.setText("Deselect All");
		    verPanel.add(radAirLock);
		    verPanel.add(radPlain);
		    verPanel.add(radDorm);
		    verPanel.add(radSanitation);
		    verPanel.add(radFoodAndWater);
		    verPanel.add(radGymAndRelax);
		    verPanel.add(radCanteen);
		    verPanel.add(radPower);
		    verPanel.add(radControl);
		    verPanel.add(radMedical);
		    verPanel.add(radAll);
		    verPanel.add(radNone);
		    verPanel.setHeight("700px");
		    
		    // 2nd South
		    HorizontalPanel horPanel = new HorizontalPanel();
		    Button roverPathButton = new Button();
		    Button deleteConfigButton = new Button();
		    Button buildConfigButton = new Button();
		    roverPathButton.setHeight(buttonHeight);
		    roverPathButton.setWidth(buttonWidth);
		    deleteConfigButton.setHeight(buttonHeight);
		    deleteConfigButton.setWidth(buttonWidth);
		    buildConfigButton.setHeight(buttonHeight);
		    buildConfigButton.setWidth(buttonWidth);
		    roverPathButton.setText("Rover Path");
		    deleteConfigButton.setText("Delete Configuration");
		    buildConfigButton.setText("Build Configuration");
		    horPanel.add(roverPathButton);
		    horPanel.add(deleteConfigButton);
		    horPanel.add(buildConfigButton);
			
			// Create a Dock Panel
		    DockPanel dock = new DockPanel();
		    dock.setStyleName("DockPanel");
		    dock.setSpacing(2);
		    dock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
		    dock.setBorderWidth(5);
		    dock.setSize("1500px", "700px");
	
		    // Add text all around
		    dock.add(new HTML("Configurations"), DockPanel.NORTH);
		    dock.add(new HTML("Naples Spring 2015"), DockPanel.SOUTH);
		    dock.add(verPanel, DockPanel.EAST);
		    dock.add(cListBox, DockPanel.WEST);
		    dock.add(new HTML("Map"), DockPanel.NORTH);
		    dock.add(horPanel, DockPanel.SOUTH);
		    dock.add(map, DockPanel.CENTER);
	
		    RootPanel.get().add(dock);
		} // Configurations
		
		// Modules
		{
			String buttonHeight = "50px";
			String buttonWidth = "150px";
			String eastPanelWidth = "300px";
			String eastPanelWidthHalf = "140px";
			String centerHeight = "200px";
			String centerWidth = "800px";
			
			// West
			// Inner Panels
			VerticalPanel mWestVerPanel = new VerticalPanel();
			HorizontalPanel mWestHorPanel = new HorizontalPanel();
			
			// Add a list box with multiple selection enabled
			final ListBox mListBox = new ListBox();
			mListBox.addItem("Module 1");
			mListBox.addItem("Module 2");
			mListBox.addItem("Module 3");
			mListBox.addItem("Module 4");
			mListBox.addItem("Module 5");
			mListBox.addItem("Module 6");
			mListBox.addItem("Module 7");
			mListBox.setVisibleItemCount(10);
			mListBox.setHeight("650px");
			mListBox.setWidth("300px");
			
			// Fill Horizontal Panel
		    Button addButton = new Button();
		    Button removeButton = new Button();
		    addButton.setHeight(buttonHeight);
		    addButton.setWidth(buttonWidth);
		    removeButton.setHeight(buttonHeight);
		    removeButton.setWidth(buttonWidth);
		    addButton.setText("ADD");
		    removeButton.setText("REMOVE");
		    mWestHorPanel.add(addButton);
		    mWestHorPanel.add(removeButton);
			
		    // Fill Vertical Panel
		    mWestVerPanel.add(mListBox);
		    mWestVerPanel.add(mWestHorPanel);
		    
		    // North
		    Image image = new Image("images/image");
		    image.setHeight("200px");
		    image.setWidth("250px");
		    
		    // Center
		    VerticalPanel mCenterVerPanel = new VerticalPanel();
		    HTML textBoxLabel = new HTML("Module Details");
		    TextBox textBox = new TextBox();
		    textBox.setHeight(centerHeight);
		    textBox.setWidth(centerWidth);
		    mCenterVerPanel.add(textBoxLabel);
		    mCenterVerPanel.add(textBox);
		    
		    // South
		    VerticalPanel mSouthVerPanel = new VerticalPanel();
		    HTML readBoxLabel = new HTML("Module Requirements");
		    TextBox readBox = new TextBox();
		    readBox.setText("Blah blah bleh bleh blehblah");
		    readBox.setReadOnly(true);
		    readBox.setHeight(centerHeight);
		    readBox.setWidth(centerWidth);
		    mSouthVerPanel.add(readBoxLabel);
		    mSouthVerPanel.add(readBox);
		    
		    // East
		    VerticalPanel mEastVerPanel = new VerticalPanel();
		    
		    HTML lbl = new HTML("ID Number");
		    
		    TextBox mEastID = new TextBox();
		    mEastID.setWidth(eastPanelWidth);
		    
		    HTML lblType = new HTML("Type");
		    final ListBox mEastType = new ListBox();
		    mEastType.addItem("Air Lock");
		    mEastType.addItem("Plain");
		    mEastType.addItem("Dormitory");
		    mEastType.addItem("Sanitation");
		    mEastType.addItem("Food & Water");
		    mEastType.addItem("Gym & Relaxation");
		    mEastType.addItem("Canteen");
		    mEastType.addItem("Power");
		    mEastType.addItem("Control");
		    mEastType.addItem("Medical");
			mEastType.setVisibleItemCount(10);
			mEastType.setWidth(eastPanelWidth);
			
			HTML lblCondition = new HTML("Condition");
			final ListBox mEastCondition = new ListBox();
			mEastCondition.addItem("Usable");
			mEastCondition.addItem("Damaged");
			mEastCondition.addItem("Unusable");
			mEastCondition.setVisibleItemCount(3);
			mEastCondition.setWidth(eastPanelWidth);
		    
			HTML lblOrientation = new HTML("Orientation");
			final ListBox mEastOrientation = new ListBox();
			mEastOrientation.addItem("0 turns");
			mEastOrientation.addItem("1 turns");
			mEastOrientation.addItem("2 turns");
			mEastOrientation.setVisibleItemCount(3);
			mEastOrientation.setWidth(eastPanelWidth);
			
			HorizontalPanel coordinates = new HorizontalPanel();
			VerticalPanel xPanel = new VerticalPanel();
			VerticalPanel yPanel = new VerticalPanel();
			HTML xCoordinate = new HTML("X-Coordinate");
			HTML yCoordinate = new HTML("Y-Coordinate");
			TextBox xTextBox = new TextBox();
			TextBox yTextBox = new TextBox();
			xTextBox.setWidth(eastPanelWidthHalf);
			yTextBox.setWidth(eastPanelWidthHalf);
			xPanel.add(xCoordinate);
			xPanel.add(xTextBox);
			yPanel.add(yCoordinate);
			yPanel.add(yTextBox);
			coordinates.add(xPanel);
			coordinates.add(yPanel);
			
			Button saveButton = new Button();
			saveButton.setHeight(buttonHeight);
		    saveButton.setWidth(eastPanelWidth);
		    saveButton.setText("SAVE");
			
			mEastVerPanel.add(lbl);
			mEastVerPanel.add(mEastID);
			mEastVerPanel.add(lblType);
			mEastVerPanel.add(mEastType);
			mEastVerPanel.add(lblCondition);
			mEastVerPanel.add(mEastCondition);
			mEastVerPanel.add(lblOrientation);
			mEastVerPanel.add(mEastOrientation);
			mEastVerPanel.add(coordinates);
			mEastVerPanel.add(saveButton);
			mEastVerPanel.setSpacing(15);
			
			// Create a Dock Panel
		    DockPanel dock = new DockPanel();
		    dock.setStyleName("DockPanel");
		    dock.setSpacing(2);
		    dock.setHorizontalAlignment(DockPanel.ALIGN_CENTER);
		    dock.setBorderWidth(5);
		    dock.setSize("1500px", "700px");
	
		    // Add text all around
		    dock.add(new HTML("Modules"), DockPanel.NORTH);
		    dock.add(new HTML("Naples Spring 2015"), DockPanel.SOUTH);
		    dock.add(mEastVerPanel, DockPanel.EAST);
		    dock.add(mWestVerPanel, DockPanel.WEST);
		    dock.add(image, DockPanel.NORTH);
		    dock.add(mSouthVerPanel, DockPanel.SOUTH);
		    dock.add(mCenterVerPanel, DockPanel.CENTER);
	
		    RootPanel.get().add(dock);
		} // Modules
		
	} // OnModuleLoad
} // MHCS
