public class Check {
    final int a;
    public Check(int a)
    {
        this.a =a;
    }
    public void display()
    {
        final int a=5;
        System.out.println(a);
    }
    public static void main(String arg[])
    {
        Check c = new Check(10);
    }

    
}
