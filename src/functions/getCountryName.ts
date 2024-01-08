import { countryNames } from "../data/countryList";

export const getCountryName = (abreviation: string) => {
    if (countryNames.hasOwnProperty(abreviation)) {
      const getCountryListName = countryNames[abreviation]
      return(getCountryListName);
    } else {
      return ("country not found");
    }
}