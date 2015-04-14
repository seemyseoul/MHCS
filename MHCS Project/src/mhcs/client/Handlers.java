package mhcs.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;

public class Handlers {

  /**
   * Default ctor
   */
  public Handlers(){}
  
  static Module varModule = new Module();

  /**
   * Click handler for modules tab add button
   * @param module of type Module
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
   * @return save ClickHandler
   */
  public static ClickHandler saveButton() {
    ClickHandler save = new ClickHandler() {
      public void onClick(ClickEvent event) {
        // need to implement getters and setters for each
//        varModule.setId(getModuleID();
//        varModule.setInUse(getModuleInUse());
//        varModule.setType(getModuleType);
//        varModule.setStatus(getModuleStatus);
//        varModule.setOrientation(getModuleOrientation);
//        varModule.setCoordinates(getModuleLandedCoordinates);
        
      } // onClick
    }; // ClickHandler
    
    return save;
  } // saveButton
  
  /**
   * Getter for Module ID from Interface.
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
  
  /**
   * Getter for Module InUse
   * @return boolean 
   */
  public boolean getModuleInUse() {
	  boolean inUse = false;
	  // access inUse
	  return inUse;
  } //getModuleInUse
  
} // Handlers
