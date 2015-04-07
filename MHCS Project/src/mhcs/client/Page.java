package mhcs.client;

import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.SimplePanel;

public class Page {
	private RootPanel rp;
	private Panel mainPanel;
	
	
	public Page(RootPanel rp)
	{
		this.rp = rp;
		mainPanel = new SimplePanel();
	}
	
	public Panel getMainPanel()
	{
		return mainPanel;
	}
	
	public void setMainPanel(Panel p)
	{
		mainPanel = p;
	}
	
	public void show()
	{
		rp.add(mainPanel);
	}
}
