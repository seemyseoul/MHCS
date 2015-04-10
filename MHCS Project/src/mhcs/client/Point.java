package mhcs.client;

public class Point {

	private int x, y;

	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public int getX() {
		return x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public void setX(int x) {
		this.x = x;
	}

	public boolean equals(Point p) {
		return (p.x == x && p.y == y);
	}
	
	public int distanceTo(Point p)
	{
		return (int) Math.sqrt( Math.pow(p.getX()-getX(),2) + Math.pow(p.getY()-getY(), 2) );
	}
	
}