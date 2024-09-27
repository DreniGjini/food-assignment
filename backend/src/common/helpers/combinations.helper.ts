export function generateCombinations(
  cities: any[],
  diets: any[],
  dishTypes: any[],
  brands: any[],
  cleanNullValues: (entity: Record<string, any>) => any,
): any[] {
  const combinations = [];

  cities.forEach((city) => {
    if (diets.length > 0) {
      diets.forEach((diet) => {
        dishTypes.forEach((dishType) => {
          combinations.push(cleanNullValues({ city, diet, dishType }));
        });
        brands.forEach((brand) => {
          combinations.push(cleanNullValues({ city, diet, brand }));
        });

        if (dishTypes.length === 0 && brands.length === 0) {
          combinations.push(cleanNullValues({ city, diet }));
        }
      });
    } else {
      dishTypes.forEach((dishType) => {
        combinations.push(cleanNullValues({ city, dishType }));
      });
      brands.forEach((brand) => {
        combinations.push(cleanNullValues({ city, brand }));
      });

      if (dishTypes.length === 0 && brands.length === 0) {
        combinations.push(cleanNullValues({ city }));
      }
    }
  });

  if (cities.length === 0) {
    diets.forEach((diet) => {
      dishTypes.forEach((dishType) => {
        combinations.push(cleanNullValues({ diet, dishType }));
      });
      brands.forEach((brand) => {
        combinations.push(cleanNullValues({ diet, brand }));
      });

      if (dishTypes.length === 0 && brands.length === 0) {
        combinations.push(cleanNullValues({ diet }));
      }
    });
  }

  if (cities.length === 0 && diets.length === 0) {
    dishTypes.forEach((dishType) => {
      combinations.push(cleanNullValues({ dishType }));
    });
    brands.forEach((brand) => {
      combinations.push(cleanNullValues({ brand }));
    });
  }

  return combinations;
}
