package mhcs.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.ListBox;

import mhcs.client.MHCS_Project;

public class Handlers {

	/**
	 * Default ctor
	 */
	public Handlers() {
	}

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
	 * Click handler for modules tab save button
	 * 
	 * @return save ClickHandler
	 */
	public static ClickHandler saveButton() {
		ClickHandler save = new ClickHandler() {
			public void onClick(ClickEvent event) {
				// need to implement getters and setters for each
//				 varModule.setId(getModuleID());
//				 varModule.setId(modulesEastOrientation.getSelectedIndex());
//				 varModule.setInUse(getModuleInUse());
//				 varModule.setType(getModuleType());
//				 varModule.setStatus(getModuleStatus());
//				 varModule.setOrientation(getModuleOrientation());
//				 varModule.setCoordinates(getModuleLandedCoordinates());

			} // onClick
		}; // ClickHandler

		return save;
	} // saveButton

	/**
	 * Getter for Module ID from Interface.
	 * 
	 * @return int
	 */
	public int getModuleId() {
		int moduleId = 0;
		// access moduleID
		if (moduleId != 0) {
			return moduleId;
		} // if

		return 900;
	} // getModuleID

	public int getType() {
		// get the type
		return 0;
	} // getType

	/**
	 * Returns condition of module.
	 * 
	 * @return int
	 */
	public int getCondition() {
		// get the condition
		String condition = "";
		if (condition.equals("USABLE")) {
			return 1;
		} else if (condition.equals("USABLEAFTERREPAIR")) {
			return 2;
		} else if (condition.equals("BEYONDREPAIR")) {
			return 3;
		} else {
			return 0;
		}
	} // getCondition

	/**
	 * Returns the orientation in int form.
	 * 
	 * @param lb
	 * @return int
	 */
	public int getOrientation(ListBox lb) {
		int orientation = lb.getSelectedIndex();
		return orientation;
	} // getOrientation

	/**
	 * Getter for Module InUse.
	 * 
	 * @return boolean
	 */
	public boolean getModuleInUse() {
		boolean inUse = false;
		// access inUse
		return inUse;
	} // getModuleInUse

} // Handlers
