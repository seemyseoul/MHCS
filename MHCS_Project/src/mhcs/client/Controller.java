package mhcs.client;

import java.util.Arrays;
import java.util.Date;

import mhcs.storage.Model;
import mhcs.storage.TestCases;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.i18n.client.TimeZone;
import com.google.gwt.media.client.Audio;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.datepicker.client.DateBox;

public class Controller {
	/**
	 * Generic empty constructor for controller.
	 */
	public Controller() {}
	
	/**
	 * Function to fill in Type of module based on input ID
	 * from user.
	 * @param id
	 * @param type
	 */
	public static void setType(final TextBox id, final ListBox type) {
		String modId = id.getText();
		int intModId;
		if(!modId.equals(""))
		{
			intModId = Integer.parseInt(modId);
		}
		else
		{
			return;
		}
		if (0 < intModId && intModId < 41) {
			type.setItemSelected(0, true);
		} // if
		else if (60 < intModId && intModId < 81) {
			type.setItemSelected(1, true);
		} // if
		else if (90 < intModId && intModId < 101) {
			type.setItemSelected(2, true);
		} // if
		else if (110 < intModId && intModId < 121) {
			type.setItemSelected(3, true);
		} // if
		else if (130 < intModId && intModId < 135) {
			type.setItemSelected(4, true);
		} // if
		else if (140 < intModId && intModId < 145) {
			type.setItemSelected(5, true);
		} // if
		else if (150 < intModId && intModId < 155) {
			type.setItemSelected(6, true);
		} // if
		else if (160 < intModId && intModId < 165) {
			type.setItemSelected(7, true);
		} // if
		else if (170 < intModId && intModId < 175) {
			type.setItemSelected(8, true);
		} // if
		else if (180 < intModId && intModId < 185) {
			type.setItemSelected(9, true);
		} // if
		else {
			final DialogBox typeDialogBox = new DialogBox();
            typeDialogBox.setText("ID Error");

            // Create a table to layout the content
            VerticalPanel dialogContents = new VerticalPanel();
            dialogContents.setSpacing(4);
            typeDialogBox.setWidget(dialogContents);

            // Add some text to the top of the dialog
            HTML details = new HTML("You have entered an incorrect Module ID.");
            dialogContents.add(details);
            dialogContents.setCellHorizontalAlignment(
                details, HasHorizontalAlignment.ALIGN_CENTER);

            // Add an image to the dialog
            Image image = new Image("images/error");
            dialogContents.add(image);
            dialogContents.setCellHorizontalAlignment(
                image, HasHorizontalAlignment.ALIGN_CENTER);

            // Add a close button at the bottom of the dialog
            Button closeButton = new Button(
                "Close", new ClickHandler() {
                  public void onClick(ClickEvent event) {
                    typeDialogBox.hide();
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
            
            typeDialogBox.center();
            typeDialogBox.show();
		} //else
	} // setType
	
	/**
	 * Sets the requirements read only text area on Modules Page.
	 * @param m
	 */
	public static void setRequirements(final Module m) {
		
	} // setRequirements
	
	static Module varModule = new Module();
	
	/**
	 * Click handler for modules tab add button
	 * 
	 * @param module
	 *            of type Module
	 * @return add ClickHandler
	 */
	public static ClickHandler addButton() {
		return new ClickHandler() {
			public void onClick(ClickEvent event) {
				varModule = new Module();
			} // onClick
		}; // ClickHandler
	} // addButton
	
	/**
	 * Click handler for modules tab remove button
	 * 
	 * @param ListBox
	 * @return add ClickHandler
	 */ 
	public static ClickHandler removeButton(final ListBox modulesListBox) {
		return new ClickHandler() {
			public void onClick(ClickEvent event) { 
				String moduleString = modulesListBox.getItemText(modulesListBox.getSelectedIndex());
				moduleString = moduleString.substring(8);
				Model.removeModuleFromId(Integer.parseInt(moduleString));
				modulesListBox.removeItem(modulesListBox.getSelectedIndex());
			} // onClick
		}; // ClickHandler
	} // addButton
	
	/**
	 * Returns click handler for Save button on Modules Page.
	 * @param moduleType
	 * @param moduleID
	 * @param xTextBox
	 * @param yTextBox
	 * @param moduleCondition
	 * @param moduleOrientation
	 * @param str1
	 * @param str2
	 * @param successSound
	 * @param minConfigSound
	 * @param errorSound
	 * @param modulesListBox
	 * @return ClickHandler
	 */
	public static ClickHandler saveButton(final ListBox moduleType, final TextBox moduleID,
			final TextBox xTextBox, final TextBox yTextBox, final ListBox moduleCondition,
			final ListBox moduleOrientation, final String str1,
			final String str2, final Audio successSound, final Audio minConfigSound,
			final Audio errorSound, final ListBox modulesListBox) {
		return new ClickHandler(){
			@Override
			public void onClick(ClickEvent event) {
				ModuleType type;
				int id;
				Point coordinates;
				ModuleStatus status;
				int orientation;
				boolean inUse;
				
				type = ModuleType.getTypeFromUserString(moduleType.getItemText(moduleType.getSelectedIndex()));
				id = Integer.parseInt(moduleID.getText());
			    coordinates = new Point(Integer.parseInt(xTextBox.getText()),Integer.parseInt(yTextBox.getText()));
			    status = ModuleStatus.getStatusFromUserString(moduleCondition.getItemText(moduleCondition.getSelectedIndex()));
			    orientation = moduleOrientation.getSelectedIndex();
				inUse = false;
				
//				Window.alert("shitFuck!");
				if(Model.saveModule(new Module(type,id,coordinates,status,orientation,inUse))) {
					successSound.play();
					if(ConfigurationBuilder.minConfigPossible() && !Variables.minConfigReached()){
						// Create a dialog box and set the caption text
		                final DialogBox minConfigAlert = new DialogBox();
		                minConfigAlert.setText("Minimum Configuration Available");

		                // Create a table to layout the content
		                VerticalPanel dialogContents = new VerticalPanel();
		                dialogContents.setSpacing(4);
		                minConfigAlert.setWidget(dialogContents);

		                // Add some text to the top of the dialog
		                HTML details = new HTML("Go to Configurations tab to view the minimum configuration available.");
		                dialogContents.add(details);
		                dialogContents.setCellHorizontalAlignment(
		                    details, HasHorizontalAlignment.ALIGN_CENTER);

		                // Add an image to the dialog
		                Image image = new Image("images/yay");
		                image.setHeight(str1);
		                image.setWidth(str2);
		                dialogContents.add(image);
		                dialogContents.setCellHorizontalAlignment(
		                    image, HasHorizontalAlignment.ALIGN_CENTER);

		                // Add a close button at the bottom of the dialog
		                Button closeButton = new Button(
		                    "Close", new ClickHandler() {
		                      public void onClick(ClickEvent event) {
		                    	  minConfigAlert.hide();
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
		                
		                minConfigAlert.center();
		                minConfigAlert.show();
		                minConfigSound.play();
		            } // if minConfig
				} // if
				else {
					errorSound.play();
				} // else
				
				modulesListBox.clear();
				for (Module m : Model.getModuleList()) {
					modulesListBox.addItem("Module #" + m.getId());
				} // for
			} // onClick
	    };
	} // saveButton
	
	/**
	 * Returns change handler for the Modules List Box on Modules Page.
	 * @param modulesListBox
	 * @param modulesEastId
	 * @param modulesEastType
	 * @param modulesEastCondition
	 * @param modulesEastOrientation
	 * @param xTextBox
	 * @param yTextBox
	 * @return ChangeHandler
	 */
	public static ChangeHandler modulesListBoxHandler(final ListBox modulesListBox, final TextBox modulesEastId,
			final ListBox modulesEastType, final ListBox modulesEastCondition, final ListBox modulesEastOrientation,
			final TextBox xTextBox, final TextBox yTextBox) {
		return new ChangeHandler(){
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
				} // if
			} // onChange
			
		};
	} // changeHandler
	
	/**
	 * Returns click handler for the LogIn button on Log In Page.
	 * @param passwordEntry
	 * @param tabPanel
	 * @param height
	 * @param width
	 * @param errorSound
	 * @return ClickHandler
	 */
	public static ClickHandler loginHandler (final PasswordTextBox passwordEntry, final TabLayoutPanel tabPanel,
			final String height, final String width, final Audio errorSound) {
		return new ClickHandler(){
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
	                dialogBox.setText("Login Error");

	                // Create a table to layout the content
	                VerticalPanel dialogContents = new VerticalPanel();
	                dialogContents.setSpacing(4);
	                dialogBox.setWidget(dialogContents);

	                // Add some text to the top of the dialog
	                HTML details = new HTML("You have entered an incorrect username and/or password.");
	                dialogContents.add(details);
	                dialogContents.setCellHorizontalAlignment(
	                    details, HasHorizontalAlignment.ALIGN_CENTER);

	                // Add an image to the dialog
	                Image image = new Image("images/error");
	                image.setHeight(height);
	                image.setWidth(width);
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
	                errorSound.play();
	            }  // else
	        } // onCLick
	    };
	} // loginHandler
	
	public static ClickHandler logoutHandler(final DockPanel login) {
		return new ClickHandler(){
	        public void onClick(ClickEvent event) {
	        	Window.Location.reload();
	        } // onCLick
	    };
	} // submitHandler
	
	/**
	 * Populates the Condition ListBox on Modules Page.
	 * @param moduleCondition
	 */
	public static void populateCondidition(final ListBox moduleCondition) {
		moduleCondition.addItem("Usable");
	    moduleCondition.addItem("Usable After Repair");
	    moduleCondition.addItem("Beyond Repair");
	} // populateCondition
	
	/**
	 * Populates the Orientaion ListBox on Modules Page.
	 * @param moduleOrientation
	 */
	public static void populateOrientation(final ListBox moduleOrientation) {
		moduleOrientation.addItem("0 turns");
	    moduleOrientation.addItem("1 turns");
	    moduleOrientation.addItem("2 turns");
	} // populateOrientation
	
	/**
	 * Populates text box giving the current time for changing the thing on the rover.
	 * @param display
	 * @return ClickHandler
	 */
	public static ClickHandler dateTime(final TextBox display) {
		return new ClickHandler(){
	        public void onClick(ClickEvent event) {
	        	Date date = new Date();
	    		DateTimeFormat dtf = DateTimeFormat.getFormat("yyyyMMddHHmmss");
	    		/* example: changed = 20150428065223 */
	    		String changed = dtf.format(date, TimeZone.createTimeZone(0));
	    		String year = changed.substring(0, 4);
	    		String month = changed.substring(4, 6);
	    		String day = changed.substring(6, 8);
	    		String hour = changed.substring(8, 10);
	    		String minute = changed.substring(10, 12);
	    		String second = changed.substring(12, 14);
	    		display.setText(year + "/" + month + "/" + day + " "
	    				+ hour + ":" + minute + ":" + second);
	    		Variables.time1 = changed;
	        } // onCLick
	    };
	} // dateTime
	
	public static ClickHandler dateTimeSave(final TextBox timeNow, final TextBox timeSince) {
		return new ClickHandler() {
			public void onClick(ClickEvent event) {
	    		timeSince.setText(timeNow.getText());
	    		// Add Variables.time1 into local storage
			} // onClick
		};
	} // dateTimeSave
	
	/**
	 * Returns change handler for Test Cases
	 * @param lb
	 * @return ChangeHandler
	 */
	public static ChangeHandler testCases(final ListBox lb){
		return new ChangeHandler() {
			public void onChange(ChangeEvent event) {
				int testNum = lb.getSelectedIndex();
				if (testNum!= 0){
					TestCases.TestCaseChoice(testNum);
				} // if
			} //onChange
		};
	} // testCases
	
} // Controller
