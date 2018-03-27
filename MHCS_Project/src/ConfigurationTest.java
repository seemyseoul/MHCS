import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import mhcs.client.Configuration;
import mhcs.client.ConfigurationBuilder;
import mhcs.client.Module;
import mhcs.storage.Model;

import org.junit.Assert;
import org.junit.Test;


public class ConfigurationTest {

	@Test
	public void testImprove() {
		List<Module> modules = new ArrayList<Module>();
		modules.add(new Module("PLAIN,1,21 31,USABLE,0,true"));
		modules.add(new Module("PLAIN,2,21 40,USABLE,true"));
		modules.add(new Module("PLAIN,3,23 33,USABLE,true"));
		modules.add(new Module("DORMITORY,61,23 38,USABLE,true"));
		modules.add(new Module("SANITATION,91,25 36,USABLE,true"));
		modules.add(new Module("FOODWATERSTORAGE,111,26 35,USABLE,true"));
		modules.add(new Module("CANTEEN,141,28 33,USABLE,true"));
		modules.add(new Module("POWER,151,28 38,USABLE,true"));
		modules.add(new Module("CONTROL,161,30 31,USABLE,true"));
		modules.add(new Module("AIRLOCK,171,30 40,USABLE,true"));
		
		Model.setModuleList(modules);
		
		List<Configuration> configList = ConfigurationBuilder.generateConfigurations();
		
		for (Configuration c : configList)
		{
			assertTrue(c.getFlawRating() < 50); //...same magic number from in configuration.java...
		}
	}

}
