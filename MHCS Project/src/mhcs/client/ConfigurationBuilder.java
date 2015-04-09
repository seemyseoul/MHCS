package mhcs.client;

import mhcs.storage.Load;


public class ConfigurationBuilder {

	private Module[] modules;
	
	public ConfigurationBuilder(Module[] m)
	{
		this.modules = m;
	}
	
	public Module[] getModules()
	{
		return modules;
	}
	
	public void setModules(Module[] m)
	{
		modules = m;
	}
	
	public boolean minConfigPossible()
	{
		Load loader = new Load();
		Module[] modules = loader.getModules();
		int numAirlock = 0; //1
		int numControl = 0; //1
		int numPower = 0;   //1
		int numFoodWater = 0;//1
		int numDormitory = 0;//1
		int numCanteen = 0;//1
		int numSanitation = 0;//1
		int numPlain = 0;//3
		
		for(Module m:modules)
		{
			if(m.getType().equals("airlock"))
				numAirlock++;
			if(m.getType().equals("control"))
				numControl++;
			if(m.getType().equals("power"))
				numPower++;
			if(m.getType().equals("foodWater"))
				numFoodWater++;
			if(m.getType().equals("dormitory"))
				numDormitory++;
			if(m.getType().equals("canteen"))
				numCanteen++;
			if(m.getType().equals("sanitation"))
				numSanitation++;
			if(m.getType().equals("plain"))
				numPlain++;
		}
		return (numAirlock >= 1 &&
				numControl >= 1 &&
				numPower >= 1 &&
				numFoodWater >= 1 &&
				numDormitory >= 1 &&
				numCanteen >= 1 &&
				numSanitation >= 1 &&
				numPlain >= 1);
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
		return null;
	}
}
