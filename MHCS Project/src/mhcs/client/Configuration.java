package mhcs.client;


public class Configuration {

	private Module[] modules;
	
	public Configuration(Module[] m)
	{
		this.modules = m;
	}
	
	public Module[] getModules()
	{
		return modules;
	}
	
	public void setModules(Modules[] m)
	{
		modules = m;
	}
	
	/** this method returns the rover path as a Point[].
	 *  It has to take in an array of the original modules
	 *  so that it can compare unconfigured and configured module locations
	 *  to generate the most efficient path.
	 *
	 * @return Point[] path
	 */
	public Point[] getRoverPath(Module[] m)
	{
		
	}
}
