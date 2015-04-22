package mhcs.client;

import mhcs.storage.Model;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.ListBox;
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
	public static void setType(TextBox id, ListBox type) {
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
	
	public static void setRequirements(Module m) {
		
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
		ClickHandler add = new ClickHandler() {
			public void onClick(ClickEvent event) {
				varModule = new Module();
			} // onClick
		}; // ClickHandler

		return add;
	} // addButtom
	
	/**
	 * Click handler for modules tab add button
	 * 
	 * @param module
	 *            of type Module
	 * @return add ClickHandler
	 */ 
	public static ClickHandler removeButton(final ListBox modulesListBox) {
		ClickHandler add = new ClickHandler() {
			public void onClick(ClickEvent event) { 
				String moduleString = modulesListBox.getItemText(modulesListBox.getSelectedIndex());
				moduleString = moduleString.substring(8);
				Model.removeModuleFromId(Integer.parseInt(moduleString));
				modulesListBox.removeItem(modulesListBox.getSelectedIndex());
			} // onClick
		}; // ClickHandler

		return add;
	} // addButtom
	
} // Controller
