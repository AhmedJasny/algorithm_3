ALGORITHM sort
VAR
    n,i,elt,j:INTEGER;
    tab : ARRAY_OF INTEGER[20];
BEGIN
read(tab);
    n:=tab.length -1;
    FOR i FROM 1 TO max n step  DO
       elt:=tab[i];
       j=j-1;
       WHILE (j>=0 and tab[j]>elt) DO
          tab[j+1]=tab[j]
          j=j-1;
       END_WHILE
       tab[j+1]:=elt;
    END_FOR
END