package mhcs.client;

import com.google.gwt.user.client.ui.TextBox;

public class Controller {
	/**
	 * Generic empty constructor for controller.
	 */
	public Controller() {}
	
	public void setType(TextBox id) {
		String modId = id.getText();
		int intModId = Integer.parseInt(modId);
		if (0 < intModId && intModId < 41) {
			id.setValue("Air Lock");
		} // if
		else if (60 < intModId && intModId < 81) {
			id.setValue("Dormitory");
		} // if
		else if (90 < intModId && intModId < 101) {
			id.setValue("Sanitation");
		} // if
		else if (110 < intModId && intModId < 121) {
			id.setValue("Dormitory");
		} // if
		
		
	} // setType
	
} // Controller
