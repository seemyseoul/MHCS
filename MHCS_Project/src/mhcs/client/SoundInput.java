package mhcs.client;

import com.google.gwt.user.client.ui.TextBox;

public class SoundInput extends TextBox {
  public SoundInput() {
    super();
    getElement().setAttribute("x-webkit-speech", "x-webkit-speech");
  }
}
