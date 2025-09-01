export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NewAccount: undefined;
  NewPassword: undefined;
  Details: {id: string};
};
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
