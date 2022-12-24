#include <graphics.h>
#include <conio.h>

int main()
{
  int gdriver = DETECT, gmode;
  initgraph(&gdriver, &gmode, "");

  // line for x1, y1, x2, y2
  line(150, 150, 450, 150);

  // line for x1, y1, x2, y2
  line(150, 200, 450, 200);

  // line for x1, y1, x2, y2
  line(150, 250, 450, 250);

  // for (int i = 0; i <= 300; i = i + 5)
  // {
  //   putpixel(400, 422 + i, 15);
  //   putpixel(40 + i, 42, 4);
  //   delay(200);
  // }
  getch();
  closegraph();
}
