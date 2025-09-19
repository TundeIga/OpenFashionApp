import { RouteProp } from "@react-navigation/native";

// Define the parameter list for all screens
export type RootParamList = {
  Home: { gender?: string } | undefined; // Optional
  About: undefined;
  Contact: undefined;
  Blog: undefined;
  StoreLocator: undefined;
  Cart: undefined;
  Collection: {collection: string}; // Add collection screen with params
  // Add subcategory screens as needed, e.g., Apparel, Bag, Shoes, etc.
  Apparel: undefined;
  // Add more screens as needed, e.g., Apparel, Category with params
  Category: { category: string; gender?: string };
};

// Type for route props if needed (optional)
export type RootRouteProps<RouteName extends keyof RootParamList> = RouteProp<
  RootParamList,
  RouteName
>;
