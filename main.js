let a =prompt("enter the number");
    for(i=1;i<=a;i++){
        for(j=1;j<=a-i;j++){
            document.write("&nbsp &nbsp");
        }
        for(k=0;k<2*i-1;k++){
            document.write("*&nbsp");
        }
        document.write("<br>");
    }