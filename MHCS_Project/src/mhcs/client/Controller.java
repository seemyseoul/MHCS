package mhcs.client;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import mhcs.storage.Model;
import mhcs.storage.TestCases;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.MouseDownEvent;
import com.google.gwt.event.dom.client.MouseDownHandler;
import com.google.gwt.event.dom.client.MouseMoveEvent;
import com.google.gwt.event.dom.client.MouseMoveHandler;
import com.google.gwt.event.dom.client.MouseUpEvent;
import com.google.gwt.event.dom.client.MouseUpHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
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
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

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
		if(!modId.equals("")) {
			intModId = Integer.parseInt(modId);
		} // if
		else {
			return;
		} // else
		if (0 < intModId && intModId < 41) {
			type.setItemSelected(1, true);
		} // if
		else if (60 < intModId && intModId < 81) {
			type.setItemSelected(2, true);
		} // if
		else if (90 < intModId && intModId < 101) {
			type.setItemSelected(3, true);
		} // if
		else if (110 < intModId && intModId < 121) {
			type.setItemSelected(4, true);
		} // if
		else if (130 < intModId && intModId < 135) {
			type.setItemSelected(5, true);
		} // if
		else if (140 < intModId && intModId < 145) {
			type.setItemSelected(6, true);
		} // if
		else if (150 < intModId && intModId < 155) {
			type.setItemSelected(7, true);
		} // if
		else if (160 < intModId && intModId < 165) {
			type.setItemSelected(8, true);
		} // if
		else if (170 < intModId && intModId < 175) {
			type.setItemSelected(0, true);
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
            image.setHeight(Variables.px140);
            image.setWidth(Variables.px200);
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
            Variables.errorSound().play();
		} //else
	} // setType
	
	
	/**
	 * Sets the requirements read only text area on Modules Page.
	 * @param m
	 */
	public static void setRequirements(final TextBox id, final TextArea requirements) {
		String modId = id.getText();
		int intModId;
		if(!modId.equals("")) {
			intModId = Integer.parseInt(modId);
		} // if
		else {
			return;
		} // else
		if (0 < intModId && intModId < 41) {
			requirements.setText("Plain Module:"
					+ "At least one part of the habitat viewable from another part of the habitat. \n"
					+ "Wings of the habitat should not be so close together that modules are hard up against"
					+ "one another denying any kind of view from a window");
		} // if
		else if (60 < intModId && intModId < 81) {
			requirements.setText("Dormitory modules should be located in recognisable dormitory wings of the Habitat. \n"
					+ "Dormitory wings should have Sanitation modules in the ratio of 1 Sanitation module for every 2 Dormitory modules.");
		} // if
		else if (90 < intModId && intModId < 101) {
			requirements.setText("Sanitation not next to Canteen. \n"
					+ "Sanitation not next to Food & water storage.");
		} // if
		else if (110 < intModId && intModId < 121) {
			requirements.setText("Food & Water storage modules should be located near Canteen modules.");
		} // if
		else if (130 < intModId && intModId < 135) {
			requirements.setText("A Gym & Relaxation module should be next to a Sanitation module.");
		} // if
		else if (140 < intModId && intModId < 145) {
			requirements.setText("Sanitation not next to Canteen. \n"
					+ "Food & Water storage modules should be located near Canteen modules.");
		} // if
		else if (150 < intModId && intModId < 155) {
			requirements.setText("No requirements specified.");
		} // if
		else if (160 < intModId && intModId < 165) {
			requirements.setText("No requirements specified.");
		} // if
		else if (170 < intModId && intModId < 175) {
			requirements.setText("Airlock not next to Dormitory.");
		} // if
		else if (180 < intModId && intModId < 185) {
			requirements.setText("One Medical module should be next to one Airlock module.");
		} // if
	} // setRequirements
	
	public static void setModuleImage(TextBox id) {
		String modId = id.getText();
		int intModId = 0;
		Image modImage = new Image("images/blank");
		if(!modId.equals("")) {
			intModId = Integer.parseInt(modId);
		} // if
		else {
			modImage = new Image("images/blank");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // else
		if (0 < intModId && intModId < 41) {
			modImage = new Image("images/modules/plain.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (60 < intModId && intModId < 81) {
			modImage = new Image("images/modules/dormitory.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (90 < intModId && intModId < 101) {
			modImage = new Image("images/modules/sanitation.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (110 < intModId && intModId < 121) {
			modImage = new Image("images/modules/foodWaterStorage.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (130 < intModId && intModId < 135) {
			modImage = new Image("images/modules/gymRelaxation.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (140 < intModId && intModId < 145) {
			modImage = new Image("images/modules/canteen.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (150 < intModId && intModId < 155) {
			modImage = new Image("images/modules/power.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (160 < intModId && intModId < 165) {
			modImage = new Image("images/modules/control.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (170 < intModId && intModId < 175) {
			modImage = new Image("images/modules/airlock.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150);
			Variables.m.add(modImage);
		} // if
		else if (180 < intModId && intModId < 185) {
			modImage = new Image("images/modules/medical.jpg");
			modImage.setHeight(Variables.px150);
			modImage.setWidth(Variables.px150); 
			Variables.m.add(modImage);
		} // if

	} // setModuleImage
	
	/**
	 * Click handler for modules tab add button
	 * 
	 * @param module
	 *            of type Module
	 * @return add ClickHandler
	 */
	public static ClickHandler addButton(final TextBox id,
			final ListBox type, final ListBox condition, final ListBox orientation,
			final TextBox x, final TextBox y, final Button save) {
		return new ClickHandler() {
			public void onClick(ClickEvent event) {
				id.setText("");
				id.setEnabled(true);
				type.setEnabled(true);
				condition.setEnabled(true);
				orientation.setEnabled(true);
				x.setEnabled(true);
				y.setEnabled(true);
				save.setEnabled(true);
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
				Variables.mID.setEnabled(false);
			    Variables.mType.setEnabled(false);
			    Variables.mCondition.setEnabled(false);
			    Variables.mOrientation.setEnabled(false);
			    Variables.mX.setEnabled(false);
			    Variables.mY.setEnabled(false);
			    Variables.mSaveButton.setEnabled(false);	
				Variables.moduleRemovedSound().play();
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
			final ListBox moduleOrientation, final ListBox modulesListBox, final Map map) {
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
				
				List<Module> modules = Model.getModuleList();
				for (int i = 0; i < modules.size(); i++) {
//					map.clearMap();
					map.placeModules(map, modules.get(i));
				} // for
				
				if(Model.saveModule(new Module(type,id,coordinates,status,orientation,inUse))) {
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
		                Image min1 = new Image("images/yay");
		                min1.setHeight(Variables.px130);
		                min1.setWidth(Variables.px150);
		                dialogContents.add(min1);
		                dialogContents.setCellHorizontalAlignment(
		                    min1, HasHorizontalAlignment.ALIGN_CENTER);

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
		                Variables.minConfigSound().play();
		            } // if minConfig
					else {
						Variables.moduleSavedSound().play();
					} // else
				} // if
				else {
					Variables.errorSound().play();
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
	 * @param id
	 * @param type
	 * @param condition
	 * @param orientation
	 * @param x
	 * @param y
	 * @return ChangeHandler
	 */
	public static ChangeHandler modulesListBoxHandler(final ListBox modulesListBox, final TextBox id,
			final ListBox type, final ListBox condition, final ListBox orientation,
			final TextBox x, final TextBox y, final Button save) {
		return new ChangeHandler(){
			public void onChange(ChangeEvent event) {
				String moduleString = modulesListBox.getItemText(modulesListBox.getSelectedIndex());
				moduleString = moduleString.substring(8);
				Module module = null;
				for (Module m : Model.getModuleList()) {
					if (m.getId() == Integer.parseInt(moduleString)) {
						module = m;
					} // if
				} // for
				if (module != null) {
					// Set id
					id.setValue(Integer.toString(module.getId()));
					// Set type
					type.setSelectedIndex(
						Arrays.asList(Module.moduleStrings)
						.indexOf(module.getType().toUserString())
					);
					// Set Condition
					String[] conditionStrings = { "Usable","Usable After Repair","Beyond Repair" };
					condition.setSelectedIndex(
						Arrays.asList(conditionStrings)
						.indexOf(module.getStatus().toUserString())
					);
					// Set orientation
					orientation.setSelectedIndex(module.getOrientation());
					// Set X-Coordinate
					x.setValue(Integer.toString(module.getCoordinates().getX()));
					// Set Y-Coordinate
					y.setValue(Integer.toString(module.getCoordinates().getY()));
				} // if
				
				id.setEnabled(true);
				condition.setEnabled(true);
				orientation.setEnabled(true);
				x.setEnabled(true);
				y.setEnabled(true);
				save.setEnabled(true);
			} // onChange
			
		};
	} // changeHandler
	
	public static ValueChangeHandler<String> mXhandler() {
		return new ValueChangeHandler<String>() {
	    	public void onValueChange(ValueChangeEvent<String> event) {
	    		int x = Integer.parseInt(Variables.mX().getText());
	    		if (x < 1 || x > 100) {
	    			final DialogBox typeDialogBox = new DialogBox();
	                typeDialogBox.setText("Coordinate Error");

	                // Create a table to layout the content
	                VerticalPanel dialogContents = new VerticalPanel();
	                dialogContents.setSpacing(4);
	                typeDialogBox.setWidget(dialogContents);

	                // Add some text to the top of the dialog
	                HTML details = new HTML("You have entered an incorrect Module Coordinate.");
	                dialogContents.add(details);
	                dialogContents.setCellHorizontalAlignment(
	                    details, HasHorizontalAlignment.ALIGN_CENTER);

	                // Add an image to the dialog
	                Image image = new Image("images/error");
	                image.setHeight(Variables.px140);
	                image.setWidth(Variables.px200);
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
	                Variables.errorSound().play();
	    		} // if
	    	} // onValueChange
	    };
	} // mXhandler
	
	public static ValueChangeHandler<String> mYhandler() {
		return new ValueChangeHandler<String>() {
	    	public void onValueChange(ValueChangeEvent<String> event) {
	    		int y = Integer.parseInt(Variables.mY().getText());
	    		if (y < 1 || y > 100) {
	    			final DialogBox typeDialogBox = new DialogBox();
	                typeDialogBox.setText("Coordinate Error");

	                // Create a table to layout the content
	                VerticalPanel dialogContents = new VerticalPanel();
	                dialogContents.setSpacing(4);
	                typeDialogBox.setWidget(dialogContents);

	                // Add some text to the top of the dialog
	                HTML details = new HTML("You have entered an incorrect Module Coordinate.");
	                dialogContents.add(details);
	                dialogContents.setCellHorizontalAlignment(
	                    details, HasHorizontalAlignment.ALIGN_CENTER);

	                // Add an image to the dialog
	                Image image = new Image("images/error");
	                image.setHeight(Variables.px140);
	                image.setWidth(Variables.px200);
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
	                Variables.errorSound().play();
	    		} // if
	    	} // onValueChange
	    };
	} // mXhandler
	
	public static ChangeHandler configsListBoxHandler()
	{
		return new ChangeHandler() {

			@Override
			public void onChange(ChangeEvent event) {
				Variables.map.clearMap();		
				Variables.map.changePic(Model.getConfigList().get(Variables.cListBox.getSelectedIndex()), Variables.map);				
				Variables.map.placeConfiguration(Variables.map,Model.getConfigList().get(Variables.cListBox.getSelectedIndex()));
			}
		};
	}

	
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
			final Audio errorSound) {
		return new ClickHandler(){
	        public void onClick(ClickEvent event) {
	            if(passwordEntry.getText().equals("guest"))
	            {
	                RootLayoutPanel.get().clear();
	                RootLayoutPanel.get().add(tabPanel);
	                Variables.welcomeSound().play();
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
	                image.setHeight(Variables.px130);
	                image.setWidth(Variables.px150);
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
	                Variables.errorSound().play();
	            }  // else
	        } // onCLick
	    };
	} // loginHandler
	
	public static ClickHandler logoutHandler(final DockPanel login) {
		return new ClickHandler(){
	        public void onClick(ClickEvent event) {
	        	Variables.goodbyeSound().play();
	        	Window.Location.reload();
	        } // onCLick
	    };
	} // submitHandler
	
	/**
	 * Populates the Condition ListBox on Modules Page.
	 * @param moduleCondition
	 */
	public static void populateCondidition(final ListBox moduleCondition) {
		moduleCondition.clear();
		moduleCondition.addItem("Usable");
	    moduleCondition.addItem("Usable After Repair");
	    moduleCondition.addItem("Beyond Repair");
	} // populateCondition
	
	public static void populateConfigListBox(final ListBox cListBox) {
		cListBox.clear();
		ConfigurationBuilder.generateConfigurations();
		for (Configuration c : Model.getConfigList()) {
			if (c != null) {
				String configString = "";
				for (Module m : c.getModules())
				{
					configString += m.getCoordinates().toString() + ",";
				}
				cListBox.addItem(configString);
			} // if
		} // for
	} // populateConfigListBox
	
	/**
	 * Populates the Orientaion ListBox on Modules Page.
	 * @param moduleOrientation
	 */
	public static void populateOrientation(final ListBox moduleOrientation) {
		moduleOrientation.clear();
		moduleOrientation.addItem("0 turns");
	    moduleOrientation.addItem("1 turns");
	    moduleOrientation.addItem("2 turns");
	} // populateOrientation
	
	public static ClickHandler passEnable(final Button change, final PasswordTextBox current,
			final PasswordTextBox newPass, final PasswordTextBox confirm, final Button save) {
		return new ClickHandler() {
				public void onClick(ClickEvent event) {
					if (Variables.cbPassEnable.getValue()) {
						change.setEnabled(true);
						current.setEnabled(true);
						newPass.setEnabled(true);
						confirm.setEnabled(true);
						save.setEnabled(true);
					} // if
					else if (!Variables.cbPassEnable.getValue()) {
						change.setEnabled(false);
						current.setEnabled(false);
						newPass.setEnabled(false);
						confirm.setEnabled(false);
						save.setEnabled(false);
					} // if
				} // onClick
		};
	} // passEnabled
	
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
	    		display.setText(year + "/" + month + "/" + day);
	    		Variables.time1 = changed;
	        } // onCLick
	    };
	} // dateTime
	 
	public static ClickHandler dateTimeSave(final TextBox timeNow, final TextBox timeSince) {
		return new ClickHandler() {
			public void onClick(ClickEvent event) {
	    		timeSince.setText(timeNow.getText());
	    		String dateString = Variables.tbTimeSince().getText();
	    		String convertedDate = "";
	    		for (int i = 0; i < dateString.length(); i++){
	    			if (dateString.charAt(i) != '/'){
	    			convertedDate += dateString.charAt(i);
	    			}
	    		}
	    		Model.saveTime(convertedDate);
	    		Variables.timeSavedSound().play();
			} // onClick
		};
	} // dateTimeSave
	
	/**
	 * Returns mouse down handler for drag and drop functionality.
	 * @return MouseDownHandler
	 */
	public static MouseDownHandler dragDropDown(final Map map, final Module module) {
		return new MouseDownHandler() {
			public void onMouseDown(MouseDownEvent event) {
				Variables.boolMouseDown = true;
			} // onMouseDown
		};
	} // dragDrop
	
	public static MouseMoveHandler dragDropMove(final Map map, final Module module) {
		return new MouseMoveHandler() {
			public void onMouseMove(MouseMoveEvent event) {
				Point current = new Point(0, 0);
				Module temp = module;
				current.setX(event.getClientX());
				current.setY(event.getClientY());
				temp.setCoordinates(current);
				map.placeModules(map, temp);
			} // onMouseMove
		};
	} // dragDropMove
	
	public static MouseUpHandler dragDropUp(final Map map, final Module module) {
		return new MouseUpHandler() {
			public void onMouseUp(MouseUpEvent event) {
				map.placeModules(map, module);
				Variables.boolMouseDown = false;
			} // onMouseUp
		};
	} // dragDropUp
	
	public static void tenDayCheck(){
		if (Model.getTime() != null){
        	Date date = new Date();
    		DateTimeFormat dtf = DateTimeFormat.getFormat("yyyyMMddHHmmss");
	   		/* example: changed = 20150428065223 */
	   		String changed = dtf.format(date, TimeZone.createTimeZone(0));
	   		String newYear = changed.substring(0, 4);
	   		String newMonth = changed.substring(4, 6);
	    	String newDay = changed.substring(6, 8);
	    	String newDate = (newYear + newMonth + newDay);
	   		String oldDate = Model.getTime();
	    	int startDate = Integer.parseInt(oldDate);
			int endDate = Integer.parseInt(newDate); 
		
			if ((endDate - startDate) >=  10){
				// Create a dialog box and set the caption text
                final DialogBox dialogBox = new DialogBox();
                dialogBox.setText("Ten Day Calibration");

                // Create a table to layout the content
                VerticalPanel dialogContents = new VerticalPanel();
                dialogContents.setSpacing(4);
                dialogBox.setWidget(dialogContents);

                // Add some text to the top of the dialog
                HTML details = new HTML("It has been ten days since the last "
                		+ "rover calibrarion.");
                dialogContents.add(details);
                dialogContents.setCellHorizontalAlignment(
                    details, HasHorizontalAlignment.ALIGN_CENTER);

                // Add an image to the dialog
                Image image = new Image("images/!");
                image.setHeight(Variables.px130);
                image.setWidth(Variables.px130);
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
                Variables.tenDaySound().play();
			} // if
		} // if
	} // tenDayCheck
	
	
	/**
	 * Returns change handler for Test Cases
	 * @param lb
	 * @return ChangeHandler
	 */
	public static ChangeHandler testCases(final ListBox lb, final Map map){
		return new ChangeHandler() {
			public void onChange(ChangeEvent event) {
				int testNum = lb.getSelectedIndex();
				if (testNum!= 0){
					TestCases.TestCaseChoice(testNum, map);
				} // if
				else {
					map.clearMap();
					Model.removeAll();
					Variables.mListBox().clear();
					Variables.cListBox().clear();
				} // else				
				
			} //onChange
		};
	} // testCases
	
} // Controller
