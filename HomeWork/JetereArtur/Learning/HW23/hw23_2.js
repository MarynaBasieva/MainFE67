

let dayNamber = new Date().getDay();

  if (dayNamber === 0) {
    document.write("Сьогодні Неділя");
  } else if (dayNamber === 1) {
    document.write("Сьогодні Понедідок");
    } else if (dayNamber === 2) {
      document.write("Сьогодні Вівторок");
      } else if (dayNamber === 3) {
        document.write("Сьогодні Середа")
        } else if (dayNamber === 4) {
          document.write("Сьогодні Четверг");
          } else if (dayNamber === 5) {
            document.write("Сьогодні П'ятниця")
            } else if (dayNamber === 6) {
              document.write("Сьогодні Субота")
              } else {
                document.write("Немає такого дня")
              }

